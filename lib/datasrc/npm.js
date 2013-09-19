"use strict";

var Request = require('request');
var Github  = require('./github');
var SemVer  = require('semver');
var log     = require('../log');
var Q = require('q');

function sortVersions (a, b) {
    if (SemVer.gt(a, b)) { return -1; }
    if (SemVer.lt(a, b)) { return 1; }
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

function versions(moduleName) {
    var deferred = Q.defer();
    var v = [];
    var url = 'http://registry.npmjs.org/' + moduleName;
    log.debug('requesting: ' + url);


    Request({ uri: url }, function(err, res, raw) {
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
            repo:       repo,
            versions:   v
        });
    });

    return deferred.promise;
}

function changelog(packageName, releaseRequested) {
    var Versions;

    return versions(packageName)
        .then(function(data) {
            Versions = data.versions;
            return data;
        })
        .then(Github.changes)
        .then(function(data) {
            var i;
            var project;
            var upcoming;

            if (data) {
                project = data.project;
            }

            if (data && data.changes) {
                if (data.changes[0].date > Versions[0].date) {
                    Versions.unshift({ version: 'Upcoming', date: data.changes[0].date, upcoming: true });
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

            // Removing Upcoming.
            if (Versions[0].upcoming) {
                upcoming = Versions.shift();
            }

            if (releaseRequested) {
                var tmpVersions = [];

                // All == all versions
                if (releaseRequested.toString().toLowerCase() == 'all') {
                    tmpVersions = Versions;
                }
                // Latest == Latest single version
                else if (releaseRequested.toString().toLowerCase() == 'latest') {
                    tmpVersions.push(Versions[0]);
                }
                // Upcoming == Show what's in the pipeline for the next release
                else if (releaseRequested.toString().toLowerCase() == 'upcoming') {
                    if (upcoming) {
                        tmpVersions.push(upcoming);
                    }

                // Integer == that many versions.  1 = one version.
                } else if (parseInt(releaseRequested, 10) == releaseRequested) {
                      for (i = 0; i < Math.min(releaseRequested, Versions.length - 1); i++) {
                            tmpVersions.push(Versions[i]);
                        }

                // Require valid version
                } else if (!SemVer.valid(releaseRequested)) {
                    throw new Error('Invalid version syntax. Versions can be latest, an integer, or n.n.n where n are integers.');

                // x.x.x then look for that specific version
                } else {
                    Versions.forEach(function(Version) {
                        if (SemVer.satisfies(Version.version, releaseRequested)) {
                            tmpVersions.push(Version);
                        }
                    });
                }
                Versions = tmpVersions;
            }

            return {
                project:  project,
                versions: Versions
            };
        });
}

module.exports = {
    versions:   versions,
    changelog:  changelog
};