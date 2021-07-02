"use strict";

var request = require('request');
var semver = require('semver');
var log = require('../log');
var q = require('q');
var _  = require('lodash');

function sortDate (a, b) {
    if (a.date < b.date) { return 1; }
    if (a.date > b.date) { return -1; }
    return 0;
}

function findRepoUrl(data) {
    var repo = '';
    ['repository', 'repositories', 'bugs', 'licenses'].forEach(function(branch){
        if (!repo) {
            var repoTree = data[branch];
            if (repoTree) {
                repo = repoTree.url;
                if (!repo && repoTree.length) {
                    repoTree = repoTree[0];
                    if (repoTree) {
                        repo = repoTree.url;
                    }
                }
            }
        }
    });
    return repo;
}

function packageHistory(moduleName, repoUrlOverride) {
    var deferred = q.defer();
    // Escape / in moduleName to support scoped repositories
    var url = 'http://registry.npmjs.org/' + moduleName.replace(/\//g, '%2F');
    log.debug('requesting: ' + url);

    var query = { 
        uri: url, 
        json: true 
    };
    var packageScope = moduleName.replace(/^@([^/]+)\/[^/]+$/, '$1');
    log.debug('scoped package? scope = ' + (packageScope ? packageScope : '(none)'));
    if (packageScope) {
        query.headers = {
            "Npm-Scope": packageScope
        };
    }
    request(query, function (err, res, data) {
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

        var repo = repoUrlOverride || findRepoUrl(data);
        if (repoUrlOverride) {
            log.debug('github repo URL override: ' + repoUrlOverride);
        } else {
            log.debug('attempted to locate github repo URL from npm registry info: ' + (repo ? repo : "(???)"));
        }

        if (!repo && data.versions) {
            Object.keys(data.versions).forEach(function(version) {
                if (!repo) {
                    repo = findRepoUrl(data.versions[version]);
                    if (repo) {
                        log.debug('found github repo URL in npm registry info for version: ' + version + ' ==> ' + repo);
                    }
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

            return deferred.reject((author ? author : 'The module\'s owner') + ' did not specify the repository url in the package.json for ' + moduleName + '. You should let the author know.');
        }

        if (!data.time) {
            return deferred.reject('No published versions for ' + moduleName);
        }

        var time = data.time;
        delete time.created;
        delete time.modified;

        var versions = Object.keys(time)
            .map(function(version){
                if (semver.valid(version)) {
                    return {
                        version: version,
                        date: new Date(time[version])
                    };
                }
            });

        versions = _.compact(versions)
            .sort(sortDate);


        deferred.resolve({
            repo: repo,
            versions: versions
        });
    });

    return deferred.promise;
}

module.exports = {
    packageHistory: packageHistory,
    findRepoUrl: findRepoUrl
};
