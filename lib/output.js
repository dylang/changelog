var Util    = require('./util');


function markdown(err, changelog) {
    if (err || !changelog) {
        console.error(err && err.message || 'No Changelog');
    } else {
        changelog.forEach(function(version, i){
            if (version.changes) {
                var date = version.date;
                var versionString = (version.version ? version.version + ' / ' : '')
                        + date.getFullYear() + '-' +  Util.padZero(date.getMonth() + 1) + '-' + Util.padZero(date.getDate());
                if (i > 0) { console.log(''); }
                console.log(versionString);
                console.log(new Array(versionString.length + 1).join('='));
                console.log('');
                var uniqueChanges = {};
                version.changes.forEach(function(change){
                    if (!uniqueChanges[change.message]) {
                        console.log(Util.bullet(change.message));
                    }
                    uniqueChanges[change.message] = true;
                });
            }
        });
    }
}

function json(err, changelog) {
    if (err || !changelog) {
        console.error(err && err.message || 'No Changelog');
    } else {
        console.log(JSON.stringify(changelog));
    }
}


module.exports = {
    markdown:   markdown,
    json:       json
};