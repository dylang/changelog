var Util    = require('./util');
var Color   = require('./color');

function color(data, cb) {
    var output = [];
    var err = !data || !data.versions || !data.versions.length ? new Error ('No Changes') : null;

    // start with a blank line if output to terminal
    if (process.stdout.isTTY) {
        output.push('');
    }

    data.versions.map(function(version, i){
        if (version.changes) {
            var date = version.date;
            var versionString = (version.version ? version.version + ' / ' : '')
                    + date.getFullYear() + '-' +  Util.padZero(date.getMonth() + 1) + '-' + Util.padZero(date.getDate() );

            // add a blank line between sections
            if (i > 0) {
                output.push('');
            }

            output.push(Color.MAGENTA + versionString + Color.RESET);

            var uniqueChanges = {};
            version.changes.forEach(function(change){
                if (!uniqueChanges[change.message]) {
                    var message = change.message
                        .replace(/([^`]*)`([^`]*)`([^`]*)/g, '$1' + Color.GREEN + '$2' + Color.RESET + '$3')
                        .replace(/#([0-9]+)/g, Color.CYAN + 'https://github.com/' + data.project.github + '/issues/$1' + Color.RESET)
                        .replace(/^(\[[^\]]*\])/, Color.GREY + '$1' + Color.RESET);
                    output.push(Color.RESET + Util.bullet(message) + Color.RESET);
                }
                uniqueChanges[change.message] = true;
            });
        }
    });

    cb(err, output.join('\n'));
}

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

function json(data, cb) {
    var err = !data || !data.versions || !data.versions.length ? new Error ('No Changes') : null;
    cb(err, JSON.stringify(data));
}

module.exports = {
    color:      color,
    markdown:   markdown,
    json:       json
};