var CLI     = require('cli');
var Util    = require('./util');

CLI.parse();

/*
    Usage:
    changelog request
    changelog http://github.com/mikeal/request

    With plugins?
    changelog gem httparty
    changelog brew redis
 */

CLI.main(function (args, options) {
    var project = args[0];

    if (!project) {
        console.log('Usage: changelog { npm package name or github.com repo url }');
    } else {
        if (project.match(/github.com/)) {
            var repo = project.match(/github\.com\/([^\/]*\/[^\/]*)/);
            if (repo && repo[1]) {
                repo = repo[1].replace(/\.git$/, '');
                require('./github').changelog(repo, output);
            } else {
                console.error('bad repo descriptor');
            }
        } else {
            require('./npm').changelog(project, output);
        }
    }

});

function output(err, changelog) {
    if (err || !changelog) {
        console.error(err && err.message || 'no errors');
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

