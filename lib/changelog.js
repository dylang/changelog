"use strict";

var npm = require('./datasrc/npm');
var github = require('./datasrc/github');
var versionFilter = require('./util/versionFilter');
var q = require('q');
var log = require('./log');

function processNpmAndGithubData(data, versionRequested) {

    var project;
    var versions = data.filteredVersions || data.versions;

    if (data) {
        project = data.project;
    }

    if (data && data.changes) {

        if (data.changes[0].date > versions[0].date) {
            versions.unshift({ version: 'Upcoming', date: data.changes[0].date, upcoming: true });
        }

        data.changes.forEach(function(change){

            var i;
            // DYLAN SOMEWHERE HERE?
            if (change) {


                for (i = versions.length - 1; i > 0; i--) {
                    if (change.date < versions[i].date) {
                        break;
                    }
                }

                versions[i].changes = versions[i].changes || [];
                versions[i].changes.push(change);
            }
        });
    }

    var filteredVersions = versionFilter(versions, versionRequested);

    return {
        project:  project,
        versions: filteredVersions
    };
}

function generate(project, repoUrlOverride, versionRequested) {

    if (!project) {
        return q.fcall(function () {
            throw new Error('No project specified. Need help? --help or more help at https://github.com/dylang/changelog');
        });
    }

    if (project.match(/github.com/)) {
        var repo = project.match(/github\.com\/([^\/]*\/[^\/]*)/);
        if (repo && repo[1]) {
            repo = repo[1].replace(/\.git$/, '');
            log.debug('using github repo ' + repo);
            return github.changelog(repo, versionRequested);
        }

        return q.fcall(function () {
            throw new Error('Bad repo url: ' + project);
        });
    }

    // Scoped npm packages start with an '@' and include a forward slash
    if (project[0] !== '@' && project.split('/').length === 2) {
        log.debug('using github repo ' + project);
        return github.changelog(project, versionRequested);
    }

    log.debug('using npm module ' + project);
    return npm.packageHistory(project, repoUrlOverride)
        .then(github.commitMessages)
        .then(function(data) {
            return processNpmAndGithubData(data, versionRequested);
        });
    }

module.exports = {
    generate: generate,
    markdown: require('./output/markdown'),
    terminal: require('./output/terminal')
};
