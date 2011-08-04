var Request = require('request');
var Step    = require('step');
var Github  = require('./github');
var Semver  = require('semver');

function sortVersions (a, b) {
    if (Semver.gt(a, b)) { return -1; }
    if (Semver.lt(a, b)) { return 1; }
    return 0;
}

function versions(packageName, cb) {
    var v = [];
    Request({ uri: 'http://search.npmjs.org/api/' + packageName }, function(err, response, body) {
        var data = JSON.parse(body);
        var repo;
        if (data && data.repository && data.repository.url) {
            repo = data.repository.url;
        } else {
            err = new Error('Package author did not specify the code repo location.');
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
        if (!err && !repo || !v.length) {
            err = new Error('Unknown package: ' + packageName);
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
            cb(err, Versions);
        }
    );
}

module.exports = {
    versions:   versions,
    changelog:  changelog
};