"use strict";

var npm = require('./datasrc/npm');
var github = require('./datasrc/github');
var semver = require('semver');
var log = require('./log');
var Q = require('q');

function processNpmAndGithubData(data) {

    var i;
    var project;
    var upcoming;
    var Versions = data.versions;
    var releaseRequested = data.releaseRequested;

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
        if (releaseRequested.toString().toLowerCase() === 'all') {
            tmpVersions = Versions;
        }
        // Latest == Latest single version
        else if (releaseRequested.toString().toLowerCase() === 'latest') {
            tmpVersions.push(Versions[0]);
        }
        // Upcoming == Show what's in the pipeline for the next release
        else if (releaseRequested.toString().toLowerCase() === 'upcoming') {
            if (upcoming) {
                tmpVersions.push(upcoming);
            }

        // Integer == that many versions.  1 = one version.
        } else if (parseInt(releaseRequested, 10) == releaseRequested) {
              for (i = 0; i < Math.min(releaseRequested, Versions.length - 1); i++) {
                    tmpVersions.push(Versions[i]);
                }

        // Require valid version
        } else if (!semver.valid(releaseRequested)) {
            throw new Error('Invalid version syntax. Versions can be latest, an integer, or n.n.n where n are integers.');

        // x.x.x then look for that specific version
        } else {
            Versions.forEach(function(Version) {
                if (semver.satisfies(Version.version, releaseRequested)) {
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
}

function generate(project, releaseRequested) {

    if (!project) {
        return new Error('Need help? --help or more help at https://github.com/dylang/changelog');
    }

    if (project.match(/github.com/)) {
        var repo = project.match(/github\.com\/([^\/]*\/[^\/]*)/);
        if (repo && repo[1]) {
            repo = repo[1].replace(/\.git$/, '');
            return github.changelog(repo, releaseRequested);
        }

        return new Error('Bad repo url: ' + project);
    }

    return npm.packageHistory(project, releaseRequested)
        .then(github.commitMessages)
        .then(processNpmAndGithubData);
    }

module.exports = {
    generate: generate,
    markdown: require('./output/markdown'),
    terminal: require('./output/terminal')
};