Changelog
=========

Changelog is a command line utility (and module) that generates a changelog in markdown, json, or color output for Node modules in npm and any public github.com repo.

Command-line Usage
==================

Node Modules in NPM
-------------------

Modules do not need to be installed locally to get a changelog but they must define their repository url in their package.json.

![Example using Express](https://github.com/dylang/changelog/raw/master/examples/express.png)

    $ changelog {npm module name} [release] [options]

`npm module`: The module name, such as `express`.

Any Public Github.com Repository
--------------------------------

Changelog also works on any public Github repo.

![Example using Bootstrap from Github](https://github.com/dylang/changelog/raw/master/examples/twitter-bootstrap.png)

    $ changelog {Github.com repo url} [options]

`Github.com repo url`: Urls can be any format, such as `https://github.com/dylang/changelog` or `git@github.com:dylang/changelog.git` or even just `github.com/dylang/changelog`.

Help
----

    Usage:
      changelog <npm module name> [release] [options]
      changelog <github repo url> [release] [options]

    Release:
       latest   Show only the latest release.        ie: changelog express latest
       number   Show that many recent releases.      ie: changelog express 3
       n.n.n    Show changes for a specific release. ie: changelog express 2.4.4

    Options:
      -c, --color            Output as Color (terminal default)
      -m, --markdown         Output as Github-flavored Markdown (file default)
      -j, --json             Output as JSON
      -d, --debug            Enable debugging
      -h, --help             Display help and usage details

Install
=======

Using [npm](http://npmjs.org) just do:

    $ npm-g install changelog

Using `npm-g` installs changelog globally so you can use `changelog` anywhere.  You can also just use `npm install changelog` if you are using it as a module for another project.

Update
======

To make sure you have the latest version:

    $ npm-g update

This will update all of your global modules.

More Examples
=============

 * [More Examples](https://github.com/dylang/changelog/tree/master/examples)

Changelog API
=============

Changelog can be easily integrated into other tools.

    var Changelog = require('changelog');

    Changelog.npm('express', callback);
    Changelog.github('joyent/node', callback);

    function callback(err, data) {

        //Check err for errors or just throw
        if (err) throw err;

        //With npm each "version" corresponds to all changes for that build pushed on npm
        //With github each "version" is one GMT day of changes
        data.versions.forEach(function(version) {
            console.log(version.version); //currently npm projects only
            console.log(version.date);    //JS Date

            //version.changes is an array of commit messages for that version
            version.changes.forEach(function(change) {
                console.log(' * ' + change);
            });
        });

        //Information about the project
        console.log(data.project);
    }


How it works
============

 * Changelog uses the [Github V3 API](http://developer.github.com/) and [npmjs.org API](http://search.npmjs.org/).

Upcoming Features
=================

 * Add header and/or footer to the output with module name, contributors, etc.
 * Support private Github repos and Github Fi.
 * Better color choices for those with default terminal colors.
 * Support versions/releases for Github repositories (waiting for Github to address [Github API Issue #17](https://github.com/github/developer.github.com/issues/17)).
 * Support paging Github's API to aquire more than 100 commit messages.

Want to help?
=============

Here are some ideas I have no idea how to do.

 * Support for `brew` and `gem`?
 * Integrate into `npm update`?
 * Create a `git pull` shortcut?

About
=====

[Dylan Greene](http://github.com/dylang) built this because he was always curious what was changed when doing `npm update`.
This module's name is inspired by listening to [TheChangelog Podcast](http://thechangelog.com/) on the way to [work](http://opower.com).