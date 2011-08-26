var URL     = require('url');
var Request = require('request');
var Step    = require('step');
var Util    = require('./util');
var log     = require('./log');

function changes(options, cb) {
    // TODO: better argument check and url fix, or just use npm project name

    var repoURL = URL.parse(options.repo.replace(/\.git$/, ''));
    var project = repoURL.pathname;

    if (!project) {
        throw new Error('that\'s no github url i know of');
    }

    // remove leading /'s
    project = project.replace(/^\//g, '');

    var url = 'https://api.github.com/repos/' + project + '/commits?per_page=100';
    log.debug('requesting: ' + url);
    Request({uri: url}, function (error, response, body) {
        log.debug('complete: ' + url);

        // TODO: better check for return data

        var changes = [];
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            data.forEach(function(change){
                var date = new Date(change.commit.committer.date);
                var message = change.commit.message;
                changes.push({
                    date:       date,
                    message:    message
                });
            });
        } else {
            error = Error('Unknown Github Repo: ' + options.repo);
        }
        cb(error, {
            project: {
                github:     project,
                repository: 'https://github.com/' + project
            },
            changes: changes
        });
    });
}

function changelog(repo, releaseRequested, cb) {
    var Versions = [];
    var VersionsHash = {};

    Step(function() {
            changes({repo: repo}, this);
        },
        function(err, data) {
            if (data && data.changes) {
                data.changes.forEach(function(change){
                    if (change) {
                        var date = change.date;
                        var simpleDate = date.getFullYear() + '-' +  Util.padZero(date.getMonth() + 1) + '-' + Util.padZero(date.getDate());
                        VersionsHash[simpleDate] = VersionsHash[simpleDate] || { date: new Date(simpleDate), changes: [] };
                        VersionsHash[simpleDate].changes.push(change);
                    }
                });
            }

            Object.keys(VersionsHash).forEach(function(simpleDate) {
                Versions.push(VersionsHash[simpleDate]);
            });

            if (releaseRequested) {
                var tmpVersions = [];
                var i;

                // All == all versions
                if (releaseRequested.toString().toLowerCase() == 'all') {
                    tmpVersions = Versions;
                }
                // Latest == Latest single version
                else if (releaseRequested.toString().toLowerCase() == 'latest') {
                    tmpVersions.push(Versions[0]);
                // Integer == that many versions.  1 = one version.
                } else if (parseInt(releaseRequested, 10) == releaseRequested) {
                      for (i = 0; i < Math.min(releaseRequested, Versions.length - 1); i++) {
                            tmpVersions.push(Versions[i]);
                        }
                // Require valid version
                } else {
                    log.error('Github\'s API does not yet support release versions. See https://github.com/github/developer.github.com/issues/17 for more info.')
                }
                Versions = tmpVersions;
            }

            cb(err, {
                project:    data.project,
                versions:   Versions
            });
        });
}

module.exports = {
    changes:    changes,
    changelog:  changelog
};


    /*
    Request({uri: 'https://github.com/api/v2/json/commits/show/dylang/node-xml/eb9faadc1a99157a123bf6fe0748e3e0d52caaf6'}, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body).commit.modified;
            data.forEach(function(change){
                log(change.filename, change.diff);
            });
        }

    });
    */
