"use strict";

var npm = require('./datasrc/npm');
var github = require('./datasrc/github');
var versionFilter = require('./util/versionFilter');
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

function generate(project, versionRequested) {

    if (!project) {
        return new Error('Need help? --help or more help at https://github.com/dylang/changelog');
    }

    if (project.match(/github.com/)) {
        var repo = project.match(/github\.com\/([^\/]*\/[^\/]*)/);
        if (repo && repo[1]) {
            repo = repo[1].replace(/\.git$/, '');
            log.debug('using github repo ' + repo);
            return github.changelog(repo, versionRequested);
        }

        return new Error('Bad repo url: ' + project);
    }

    if (project.split('/').length === 2) {
        log.debug('using github repo ' + project);
        return github.changelog(project, versionRequested);
    }

    log.debug('using npm module ' + project);
    return npm.packageHistory(project)
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
