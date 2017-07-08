"use strict";

var URL     = require('url');
var request = require('request');
var userAgent = require('../util/userAgent');
var log     = require('../log');
var moment = require('moment');
var q = require('q');
var parse = require('github-url-from-git');

function commitMessages(options) {
    var deferred = q.defer();

    var massagedRepo = options.repo;
    if (massagedRepo.indexOf('github.com') === -1) {
        massagedRepo = 'https://github.com/' + massagedRepo;
    }
    massagedRepo = parse(massagedRepo);
    var repoURL = URL.parse(massagedRepo);
    var project = repoURL.pathname;

    if (!project) {
        deferred.reject(new Error('that\'s no github url i know of'));
    }

    // remove leading /'s
    project = project.replace(/^\//g, '');

    var url = 'https://api.github.com/repos/' + project + '/commits?per_page=250';
    log.debug('requesting: ' + url);

    var headers = { 'User-Agent': userAgent };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = 'token ' + process.env.GITHUB_TOKEN;
    }

    request({uri: url, json: true, headers: headers}, function (err, res, data) {
        log.debug('complete: ' + url);

        if (err) {
            return deferred.reject(err);
        }

        if (!data.map) {
            return deferred.reject('Unknown Github Repo: ' + options.repo + '. ' + (data.message || JSON.stringify(data)));
        }

        var changes = data.map(function(change){
            var sha = change.sha;
            var date = new Date(change.commit.committer.date);
            var message = change.commit.message;
            return {
                sha:        sha,
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
