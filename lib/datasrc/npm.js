"use strict";

var request = require('request');
var semver = require('semver');
var log = require('../log');
var Q = require('q');
var versionFilter = require('../util/versionFilter');


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

function packageHistory(moduleName) {
    var deferred = Q.defer();
    var url = 'http://registry.npmjs.org/' + moduleName;
    log.debug('requesting: ' + url);

    request({ uri: url, json: true }, function (err, res, data) {
        log.debug('complete: ' + url);

        if (err) {
            return deferred.reject(new Error(err));
        }

        if (!data) {
            return deferred.reject('No data for ' + url);
        }

        if (data.error === 'not_found') {
            return deferred.reject('Npm module ' + moduleName + ' was not found.');
        }

        var repo = findRepoUrl(data);

        if (!repo && data.versions) {
            Object.keys(data.versions).forEach(function(version) {
                if (!repo) {
                    repo = findRepoUrl(data.versions[version]);
                }
            });
        }

        if (!repo) {
            var author;
            if (data.author) {
                author = data.author.name || 'Creator of Module';

                if (data.author.email || data.author.url) {
                    author = author + ' (' + (data.author.email || data.author.url) + ')';
                }
            }

            return deferred.reject((author ? author : 'Owner of module ') + ' did not specify the repository url in the package.json for ' + moduleName + '. You should let the author know.');
        }

        if (!data.time) {
            return deferred.reject('No published versions for ' + moduleName);
        }

        var time = data.time;
        delete time.created;
        delete time.modified;

        var versions = Object.keys(time)
            .sort(sortVersions)
            .map(function(version){
                return {
                    version: version,
                    date: new Date(time[version])
                };
            });

        deferred.resolve({
            repo: repo,
            versions: versions
        });
    });

    return deferred.promise;
}

module.exports = {
    packageHistory: packageHistory
};