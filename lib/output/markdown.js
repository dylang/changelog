"use strict";

var Util    = require('./util');

function markdown(data, cb) {
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
                    output.push(Util.bullet(message, '*'));
                }
                uniqueChanges[change.message] = true;
            });
        }
    });

    cb(err, output.join('\n'));
}


module.exports = markdown;