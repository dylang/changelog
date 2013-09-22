"use strict";

var URL     = require('url');
var request = require('request');
var log     = require('../log');
var Q  = require('q');
var moment = require('moment');

function commitMessages(options) {
    var deferred = Q.defer();

    // TODO: better argument check and url fix, or just use npm project name
    var repoURL = URL.parse(options.repo.replace(/\.git$/, ''));
    var project = repoURL.pathname;

    if (!project) {
        deferred.reject(new Error('that\'s no github url i know of'));
    }

    // remove leading /'s
    project = project.replace(/^\//g, '');

    var url = 'https://api.github.com/repos/' + project + '/commits?per_page=100';
    log.debug('requesting: ' + url);
    request({uri: url, json: true}, function (err, res, data) {
        log.debug('complete: ' + url);

        if (err) {
            return deferred.reject(err);
        }

        if (!data.map) {
            return deferred.reject('Unknown Github Repo: ' + options.repo + '. ' + (data.message || JSON.stringify(data)));
        }

        var changes = data.map(function(change){
            var date = new Date(change.commit.committer.date);
            var message = change.commit.message;
            return {
                date:       date,
                message:    message
            };
        });

        deferred.resolve({
            project: {
                github:     project,
                repository: 'https://github.com/' + project
            },
            changes: changes,
            versions: options.versions
        });
    });
    return deferred.promise;
}

function changelog(repo, releaseRequested) {

    return commitMessages({repo: repo})
        .then(function(data) {

            var versionsArray = [];
            var versionsCache = {};

            if (data && data.changes) {
                data.changes.forEach(function(change){
                    if (change) {
                        var date = change.date;
                        var simpleDate = moment(date).format("YYYY-MM-DD");
                        versionsCache[simpleDate] = versionsCache[simpleDate] || { date: new Date(simpleDate), changes: [] };
                        versionsCache[simpleDate].changes.push(change);
                    }
                });
            }

            Object.keys(versionsCache).forEach(function(simpleDate) {
                versionsArray.push(versionsCache[simpleDate]);
            });

            // THIS SHOULD GO AWAY
            if (releaseRequested) {
                var tmpVersions = [];
                var i;

                // All == all versions
                if (releaseRequested.toString().toLowerCase() === 'all') {
                    tmpVersions = versionsArray;
                }
                // Latest == Latest single version
                else if (releaseRequested.toString().toLowerCase() === 'latest') {
                    tmpVersions.push(versionsArray[0]);
                // Integer == that many versions.  1 = one version.
                } else if (parseInt(releaseRequested, 10) === releaseRequested) {
                      for (i = 0; i < Math.min(releaseRequested, versionsArray.length - 1); i++) {
                            tmpVersions.push(versionsArray[i]);
                        }
                // Require valid version
                } else {
                    throw new Error('Github\'s API does not yet support release versions. See https://github.com/github/developer.github.com/issues/17 for more info.');
                }
                versionsArray = tmpVersions;
            }

            return{
                project:    data.project,
                versions:   versionsArray
            };
        });
}

module.exports = {
    commitMessages: commitMessages,
    changelog: changelog
};