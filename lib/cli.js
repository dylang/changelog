"use strict";

var CLI = require('cli');
var Q = require('q');
var FS = require('fs');
var hasColor = require('has-color');

var log = require('./log');
var npm = require('./datasrc/npm');
var github = require('./datasrc/github');
var output = require('./output/output');

CLI.setUsage('changelog <npm module name> [release] [options]\n' +
    '  changelog <github repo url> [release] [options]\n' +
    '\n' +
    'Release:\n' +
    '   latest   Show only the latest release.        ie: changelog express latest\n' +
    '   number   Show that many recent releases.      ie: changelog express 3 \n' +
    '   n.n.n    Show changes for a specific release. ie: changelog express 2.4.4'

).parse({
    color:      ['c', 'Output as Color (terminal default)'],
    markdown:   ['m', 'Output as Github-flavored Markdown (file default)'],
    json:       ['j', 'Output as JSON'],
    debug:      ['d', 'Enable debugging']
});

CLI.main(function (args, options) {
    log.debugEnabled(options.debug);

    var project = args[0];

    var releaseRequested = args[1];

    if (!project) {
        try {
            log.debug('Project not specified. Looking for a package.json in ' + process.cwd() + ' instead.');
            project = JSON.parse(FS.readFileSync(process.cwd() + '/package.json').toString()).name;
        } catch (e) {
            log.debug('Package.json not found');
        }
    }

    function generateOutput(data) {
        var fn = options.json ? output.json : options.markdown ? output.markdown : hasColor ? output.color : output.markdown;
        return Q.nfcall(fn, data);
    }

    function changes() {
        var deferred = Q.defer();

        if (!project) {
            return deferred.reject(new Error('Need help? --help or more help at https://github.com/dylang/changelog'));
        }

        if (project.match(/github.com/)) {
            var repo = project.match(/github\.com\/([^\/]*\/[^\/]*)/);
            if (repo && repo[1]) {
                repo = repo[1].replace(/\.git$/, '');
                return deferred.resolve(github.changelog(repo, releaseRequested));
            }

            return deferred.reject(new Error('Bad repo url: ' + project));
        }

        return npm.changelog(project, releaseRequested);
    }

    changes()
        .then(generateOutput)
        .then(console.info.bind(console))
        .catch(function(err) {
            if (typeof err === 'string') {
                log.error(err);
            } else {
                throw err;
            }
        }).done();
});