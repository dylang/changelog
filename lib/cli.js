"use strict";

var CLI = require('cli');
var FS = require('fs');
var hasColor = require('has-color');
var changelog = require('./changelog');
var log = require('./log');

CLI.setUsage('changelog <npm module name> [release] [options]\n' +
    '  changelog <github repo url> [release] [options]\n' +
    '\n' +
    'Module name:\n' +
    '   $ changelog npm\n' +
    '\n' +
    'Github repo:\n' +
    '   $ changelog github.com/isaacs/npm\n' +
    '   $ changelog isaacs/npm\n' +
    '\n' +
    'Versions:\n' +
    '   latest   Default: Show only the latest versions. ex: $ changelog npm latest\n' +
    '   all      Show all versions.                      ex: $ changelog npm all\n' +
    '   number   Show that many recent versions.         ex: $ changelog npm 3\n' +
    '   n.n.n    Show changes for a specific version.    ex: $ changelog npm 1.3.11'

).parse({
    color:      ['c', 'Output as Color (terminal default)'],
    markdown:   ['m', 'Output as Github-flavored Markdown (file default)'],
    json:       ['j', 'Output as JSON'],
    debug:      ['d', 'Enable debugging']
});

CLI.main(function (args, options) {
    log.enableDebug(options.debug);

    var project = args[0];

    var releaseRequested = args[1] || 'latest';

    if (project === 'all') {
        releaseRequested = 'all';
        project = null;
    }

    if (project === 'latest') {
        releaseRequested = 'latest';
        project = null;
    }

    if (!isNaN(project)) {
        releaseRequested = parseInt(project, 10);
        project = null;
        log.debug('project: this one');
        log.debug('releaseRequested: ' + releaseRequested);
    }

    if (!isNaN(releaseRequested, 10)) {
        releaseRequested = parseInt(releaseRequested, 10);
        log.debug('releaseRequested: ' + releaseRequested);
    }

    if (!project) {
        try {
            log.debug('Project not specified. Looking for a package.json in ' + process.cwd() + ' instead.');
            project = JSON.parse(FS.readFileSync(process.cwd() + '/package.json').toString()).name;
        } catch (e) {
            log.debug('Package.json not found');
        }
    }

    function generateOutput(data) {
        var fn = options.json ? JSON.stringify
            : options.markdown ? require('./output/markdown')
            : hasColor ? require('./output/terminal')
            : require('./output/markdown');
        return fn(data);
    }

    changelog.generate(project, releaseRequested)
        .then(generateOutput)
        .then(console.info.bind(console))
        .catch(function(err) {
            if (typeof err === 'string') {
                log.error(err);
            } else {
                throw err;
            }
        })
        .done();
});
