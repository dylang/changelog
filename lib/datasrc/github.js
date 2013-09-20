"use strict";

var URL     = require('url');
var Request = require('request');
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
    Request({uri: url}, function (error, response, body) {
        log.debug('complete: ' + url);

//            deferred.reject(Error('Unknown Github Repo: ' + options.repo));

        if (error) {
            return deferred.reject(error);
        }

        if (!response.statusCode === 200) {
            return deferred.reject(body);
        }

        var data = JSON.parse(body);

        if (data.message === 'Not Found') {
            return deferred.reject('Repo ' + project + ' not found.');
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
            versions: options.versions,
            releaseRequested: options.releaseRequested
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