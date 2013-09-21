"use strict";

var moment = require('moment');
var bullet = require('../util/bullet');

function markdown(data) {
    var output = [];

    data.versions.map(function(version, i){
        if (version.changes) {
            var date = version.date;
            var versionString = (version.version ? version.version + ' / ' : '') +
                    moment(date).format("YYYY-MM-DD");

            // add a blank line between sections
            if (i > 0) {
                output.push('');
            }

            output.push(versionString);
            output.push(new Array(versionString.length + 1).join('='));
            output.push('');

            var uniqueChanges = {};
            version.changes.forEach(function(change){
                if (!uniqueChanges[change.message]) {
                    var message = change.message;
                    if (data.project && data.project.github) {
                        message = message.replace(/#([0-9]+)/g, '[#$1](https://github.com/' + data.project.github + '/issues/$1' + ')');
                    }
                    output.push(bullet(message, '*', true));
                }
                uniqueChanges[change.message] = true;
            });
        }
    });

    return output.join('\n');
}

module.exports = markdown;