var Util    = require('./util');


function markdown(changelog, cb) {
    var output = [];
    var err = !changelog || !changelog.length ? new Error ('No Changes') : null;

    changelog.map(function(version, i){
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
                    output.push(Util.bullet(change.message));
                }
                uniqueChanges[change.message] = true;
            });
        }
    });

    cb(err, output.join('\n'));
}

function json(changelog, cb) {
    var err = !changelog || !changelog.length ? new Error ('No Changes') : null;
    cb(err, JSON.stringify(changelog));
}


module.exports = {
    markdown:   markdown,
    json:       json
};