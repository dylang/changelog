"use strict";

var chalk = require('chalk');
var moment = require('moment');
var bullet = require('../util/bullet');

function terminal(data) {

    var output = [];

    data.versions.map(function(version, i){


        var date = version.date;
        var versionString = (version.version ? version.version + ' / ' : '') +
                moment(date).format("YYYY-MM-DD");

        // add a blank line between sections
        if (i > 0) {
            output.push('');
        }

        output.push(chalk.yellow(versionString));


        if (!version.changes) {
            return output.push(bullet('Changelog not found.'));
        }


        var uniqueChanges = {};
        version.changes.forEach(function(change){
            if (!uniqueChanges[change.message]) {
                var message = change.message
                    .replace(/([^`]*)`([^`]*)`([^`]*)/g, '$1' + chalk.green('$2') + '$3')
                    .replace(/#([0-9]+)/g, chalk.blue.underline('https://github.com/' + data.project.github + '/issues/$1'))
                    .replace(/^(\[[^\]]*\])/, chalk.cyan('$1'));
                output.push(bullet(message));
            }
            uniqueChanges[change.message] = true;
        });
    });

    return output.join('\n');
}

module.exports = terminal;
