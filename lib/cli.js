var CLI     = require('cli');
var Output  = require('./output');
var Step    = require('step');
var Github  = require('./github');
var Npm     = require('./npm');
var log     = require('./log');

CLI.setUsage('changelog <npm module name or github repo url> [OPTIONS]').parse({
    color:      ['c', 'Output as Color (default)'],
    markdown:   ['m', 'Output as Github-flavored Markdown'],
    json:       ['j', 'Output as JSON'],
    debug:      ['d', 'Enable debugging']
});

CLI.main(function (args, options) {
    var project = args[0];

    var output = options.json ? Output.json : options.markdown ? Output.markdown : Output.color;

    log.debugEnabled(options.debug);

    Step(
        function() {
            if (!project) {
                throw new Error('Usage: changelog { npm package name or github.com repo url }');
            } else {
                if (project.match(/github.com/)) {
                    var repo = project.match(/github\.com\/([^\/]*\/[^\/]*)/);
                    if (repo && repo[1]) {
                        repo = repo[1].replace(/\.git$/, '');
                        Github.changelog(repo, this);
                    } else {
                        throw new Error('Bad repo url: ' + project);
                    }
                } else {
                     Npm.changelog(project, this);
                }
            }
        },
        function(err, data) {
            if (err) { throw err; }
            output(data, this);
        },
        function(err, data) {
            if (err) {
                log.error(err.message);
            }
            else {
                console.info(data);
            }
        }
    );
});



