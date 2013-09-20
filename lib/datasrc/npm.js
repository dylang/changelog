"use strict";

var request = require('request');
var semver = require('semver');
var log = require('../log');
var Q = require('q');

function sortVersions (a, b) {
    if (semver.gt(a, b)) { return -1; }
    if (semver.lt(a, b)) { return 1; }
    return 0;
}

function findRepoUrl(data) {
var repo = '';
    ['repository', 'repositories', 'bugs', 'licenses'].forEach(function(branch){
        if (!repo) {
            var repoTree = data[branch];
            if (repoTree) {
                repo = repoTree.url;
                if (!repo) {
                    repoTree = repoTree[0];
                    repo = repoTree.url;
                }
            }
        }
    });
    return repo;
}

function packageHistory(moduleName, releaseRequested) {
    var deferred = Q.defer();
    var v = [];
    var url = 'http://registry.npmjs.org/' + moduleName;
    log.debug('requesting: ' + url);

    request({ uri: url }, function (err, res, raw) {
        log.debug('complete: ' + url);

        if (err) {
            return deferred.reject(new Error(err));
        }

        var data = JSON.parse(raw);

        if (data.error === 'not_found') {
            return deferred.reject('Npm module ' + moduleName + ' was not found.');
        }

        var repo = findRepoUrl(data);

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
                    version: version,
                    date: new Date(time[version])
                });
            });
        }

        if (!repo) {
            var author;
            if (data && data.author) {
                author = data.author.name || 'Creator of Module';

                if (data.author.email || data.author.url) {
                    author = author + ' (' + (data.author.email || data.author.url) + ')';
                }
            }

            return deferred.reject((author ? author : 'Owner of module ') + ' did not specify the repository url in the package.json for ' + moduleName + '. You should let the author know.');
        }

        if ((!err && !repo) || (data && !v.length)) {
            return deferred.reject(new Error('Unknown package: ' + moduleName));
        }

        deferred.resolve({
            repo: repo,
            versions: v,
            releaseRequested: releaseRequested
        });
    });

    return deferred.promise;
}

module.exports = {
    packageHistory: packageHistory
};