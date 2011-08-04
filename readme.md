Changelog
=========

Command line util and api that returns a changelog for modules in npm and repos on github.com.

Command-line Usage
==================

    Usage: changelog {npm package name or github repo url}

 * Github urls can be any format, such as `https://github.com/dylang/changelog` or `git@github.com:dylang/changelog.git` or even just `github.com/dylang/changelog`.
 * Node projects without the `repository url` defined in the `package.json` will not work.
 * The default output format is Markdown.  Use `--json` to get JSON output. 

Examples
========

Node Package
------------

    $ changelog request

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

    $ changelog https://github.com/joyent/node

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

    function callback(err, changelog) {
        //changelog is an array of "versions"
        //With npm each "version" corresponds to all changes for that build pushed on npm
        //With github each "version" is one GMT day of changes
        changelog.forEach(function(version) {
            console.log(version.version); //npm only
            console.log(version.date);    //JS Date
            //version.changes is an array of commit messages for that version
            version.changes.forEach(function(change) {
                console.log(' * ' + change);
            });
        });
    }


How it works
============

 * Changelog works with Node packages by looking at the `repository` url. Packages without this set will not work.
 * Changes are collected using a single `Github V3 API call` that returns 100 changes. This means it will currently not show more than 100 changes.
 * Changelog attempts to guestimate the approprate version number for each Github commit message based on the timestamp of the change and packages are published.
 * It will not work with packages in other repos such as `BitBucket`.
 * Changelog cannot access history for private repos.

Future
======

 * Work with more package managers such as `brew` and `gem`?  These are beyond my expertise but I would be happy to merge in pull requests.
 * Integrate into `npm update`?
 * Integrate into `git pull`?
 * Warn when there are more than 100 commits available.
 * Support paging Github's API to aquire more than 100 commits.
 * Additional output options: --text --rss --atom --html
 * Option to show code diff.
 * Ability to set the start and end version.
 * Use Git tags to detect versions
 * Add examples
 * Add header and/or footer to the markdown output
 * If the package.json does not have a propper repoistory link then show the author's name and email and suggest contacting the author.

Install
=======

Using [npm](http://npmjs.org) just do:

    npm-g install changelog

The `-g` installs changelog globally so you can use the changelog command anywhere.

To make sure you have the latest version:

    npm-g update

About
=====

[Dylan Greene](http://github.com/dylang) built this because he was always curious what was changed when doing `npm update`.
The name has nothing to do with [TheChangelog](http://thechangelog.com/), a podcast Dylan was listening to while creating this tool.