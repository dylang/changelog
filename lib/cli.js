var CLI     = require('cli');
var Output  = require('./output');
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

    var output = options.json ? Output.json : Output.markdown;

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



