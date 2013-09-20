"use strict";

var CLI = require('cli');
var Q = require('q');
var FS = require('fs');
var hasColor = require('has-color');
var changelog = require('./changelog');
var log = require('./log');

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
    log.enableDebug(options.debug);

    var project = args[0];

    var releaseRequested = args[1] || 'latest';

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