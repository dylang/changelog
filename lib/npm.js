var Request = require('request');
var Step    = require('step');
var Github  = require('./github');
var Semver  = require('semver');
var log     = require('./log');


function sortVersions (a, b) {
    if (Semver.gt(a, b)) { return -1; }
    if (Semver.lt(a, b)) { return 1; }
    return 0;
}

function findRepoUrl(data) {
var repo;
    ['repository', 'repositories', 'bugs', 'licenses'].forEach(function(branch){
        if (!repo) {
            var repoTree = data[branch];
            if (repoTree) {
                repo = repoTree.url || repoTree.web;
                if (!repo) {
                    repoTree = repoTree[0];
                    repo = repoTree.url || repoTree.web;
                }
            }
        }
    });
    return repo;
}

function versions(moduleName, cb) {
    var v = [];
    var url = 'http://search.npmjs.org/api/' + moduleName;
    log.debug('requesting: ' + url);
    Request({ uri: url }, function(err, response, body) {
        log.debug('complete: ' + url);

        var data, repo;
        if (!err && body) {
            try {
                data = JSON.parse(body);
            }
            catch (e) {
                err = new Error('Trouble with npm.  A non-json response was returned: \n' + body);
            }
            if (!err) {
                repo = findRepoUrl(data);

                if (!repo && data && data.versions) {
                    Object.keys(data.versions).forEach(function(version) {
                        if (!repo) {
                            repo = findRepoUrl(data.versions[version]);
                        }
                    });
                }

                if (data && data.time) {
                    var time = data.time;
                    delete time.created;
                    delete time.modified;
                    var keys = Object.keys(time).sort(sortVersions);
                    keys.forEach(function(version){
                        v.push({
                            version:    version,
                            date:       new Date(time[version])
                        });
                    });
                }
                if (!repo) {
                    err = new Error('Author of module ' + moduleName + ' did not specify the code repository url.');
                }
                if ((!err && !repo) || (data && !v.length)) {
                    err = new Error('Unknown package: ' + moduleName);
                }
            }
        }

        cb(err, {
            repo:       repo,
            versions:   v
        });
    });
}

function changelog(packageName, cb) {
    var Versions;

    Step(function() {
            versions(packageName, this);
        },
        function(err, data) {
            if (err) { throw err; }
            Versions = data.versions;
            Github.changes(data, this);
        },
        function(err, data) {
            var i;
            var project;
            if (data) {
                project = data.project;
            }

            if (data && data.changes) {
                if (data.changes[0].date > Versions[0].date) {
                    Versions.unshift({ version: 'Upcoming', date: data.changes[0].date});
                }

                data.changes.forEach(function(change){
                    //log('change', change);
                    if (change) {
                        for (i = Versions.length - 1; i > 0; i--) {
                            if (change.date < Versions[i].date) {
                                break;
                            }
                        }
                        Versions[i].changes = Versions[i].changes || [];
                        Versions[i].changes.push(change);
                    }
                });
            }
            cb(err, {
                project:  project,
                versions: Versions
            } );
        }
    );
}

module.exports = {
    versions:   versions,
    changelog:  changelog
};