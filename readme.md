Changelog
=========

Changelog is a command line utility (and module) that generates a changelog in markdown, json, or color output for Node modules in npm and any public github.com repo.

Command-line Usage
==================

npm
---

![Example using Express](https://github.com/dylang/changelog/raw/master/examples/express.png)

    $ changelog {npm module name} [options]

`npm module`: The module name, such as `express`.  Works on any npm module with a github.com repo specified in the module's package.json.

github repo url
---------------

![Example using Bootstrap from Github](https://github.com/dylang/changelog/raw/master/examples/twitter-bootstrap.png)

    $ changelog {Github.com repo url} [options]

`Github.com repo url`: Urls can be any format, such as `https://github.com/dylang/changelog` or `git@github.com:dylang/changelog.git` or even just `github.com/dylang/changelog`.

Options
-------

 * `-c`, `--color`            Output as Color (default)
 * `-m`, `--markdown`         Output as Github-flavored Markdown
 * `-j`, `--json`             Output as JSON
 * `-d`, `--debug`            Enable debugging
 * `-h`, `--help`             Display help and usage details

Install
=======

Using [npm](http://npmjs.org) just do:

    $ npm-g install changelog

The `-g` installs changelog globally so you can use `changelog` anywhere.

Update
======

To make sure you have the latest version:

    $ npm-g update

Examples
========

Node Package
------------

    $ changelog request --markdown

    Upcoming / 2011-08-02
    =====================

      * Merge pull request #53 from benatkin/parse-json
        Parse json: Issue #51
      * support JSON APIs that don't set the write content type
      * allow empty string
      * implement parsing json response when json is truthy
      * add failing test for issue #51
      * Clearer spacing. Slightly more consistent.
      * Style fixes. Bye Bye semi-colons. Mostly lined up with npm style.
      * Return destination stream from pipe().

    2.0.1 / 2011-07-21
    ==================

      * Drastically improved header handling.
      * valid semver.

    2.0.0 / 2011-07-21
    ==================

      * w00t! request 2.0
      * If the error is handled and not throw we would still process redirects.
        Fixes #34.
      * Add body property to resp when we have it as a shorthand. fixes #28
      * Adding reference to Request instance on response to make it easier on
        inline callbacks. fixes #43.

    ---cut for space---

Github Repo
-----------

    $ changelog https://github.com/joyent/node --markdown

    2011-08-01
    ==========

      * windows: Fix test-module-load-list
      * Remove debug code
      * child_process_uv: Handle spawn errors
      * Upgrade libuv to 023f99a

    2011-07-31
    ==========

      * link to rpcrt4 and ole32 on win32
      * Upgrade libuv to e9bee51
      * child_process_uv: fix test/simple/test-child-process-env
      * child_process_uv: fix simple/test-child-process-cwd
      * child_process_uv: add exec, fix simple/test-child-process-exec-cwd
      * Forgot to add child_process_uv.js
      * initial pass at lib/child_process_uv.js

      ---cut for space---

Changelog API
=============

Changelog can be easily integrated into other tools.

    var Changelog = require('changelog');

    Changelog.npm('request', callback);
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

Future
======

 * Warn when there are more than 100 commits available.
 * Support paging Github's API to aquire more than 100 commits.
 * Additional output options: --rss --atom --html
 * Option to show code diff.
 * Ability to set the start and end version.
 * Use Git tags to detect versions
 * Add header and/or footer to the markdown output
 * If the package.json does not have a propper repo link then show the author's name and email and suggest contacting the author.

Want to help?
=============

 * Work with more package managers such as `brew` and `gem`?  These are beyond my expertise but I would be happy to merge in pull requests.
 * Integrate into `npm update`?
 * Integrate into `git pull`?

About
=====

[Dylan Greene](http://github.com/dylang) built this because he was always curious what was changed when doing `npm update`.
This module is inspired by but not related to [TheChangelog](http://thechangelog.com/).