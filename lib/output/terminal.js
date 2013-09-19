"use strict";

var Util    = require('./util');
var chalk = require('chalk');

function terminal(data, cb) {

    var output = [];
    var err = !data || !data.versions || !data.versions.length ? new Error ('No Changes') : null;

    data.versions.map(function(version, i){
        if (version.changes) {
            var date = version.date;
            var versionString = (version.version ? version.version + ' / ' : '')
                    + date.getFullYear() + '-' +  Util.padZero(date.getMonth() + 1) + '-' + Util.padZero(date.getDate());

            // add a blank line between sections
            if (i > 0) {
                output.push('');
            }

            output.push(chalk.blue(versionString));

            var uniqueChanges = {};
            version.changes.forEach(function(change){
                if (!uniqueChanges[change.message]) {
                    var message = change.message
                        .replace(/([^`]*)`([^`]*)`([^`]*)/g, '$1' + chalk.green('$2') + '$3')
                        .replace(/#([0-9]+)/g, chalk.cyan('https://github.com/' + data.project.github + '/issues/$1'))
                        .replace(/^(\[[^\]]*\])/, chalk.grey('$1'));
                    output.push(Util.bullet(message));
                }
                uniqueChanges[change.message] = true;
            });
        }
    });

    cb(err, output.join('\n'));
}

module.exports = terminal;