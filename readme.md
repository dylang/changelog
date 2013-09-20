Changelog [![Build Status](https://secure.travis-ci.org/dylang/changelog.png)](http://travis-ci.org/dylang/changelog)
=========

[![NPM](https://nodei.co/npm/changelog.png?downloads=true)](https://nodei.co/npm/changelog/)

Changelog is a command line utility (and module) that generates a changelog in markdown, json, or color output for Node modules in npm and any public github.com repo.

Command-line Usage
==================

Node Modules in NPM
-------------------

Modules do not need to be installed to generate changelog but they must define their `repository url` in their package.json.

![Example using Express](https://github.com/dylang/changelog/raw/master/examples/express.png)

    $ changelog {npm module name} [release] [options]

`npm module`: The module name, such as `express`.

Any Public Github.com Repository
--------------------------------

Changelog also works on any public Github repo.

    $ changelog {Github.com repo url} [options]

`Github.com repo url`: Urls can be any format, such as `https://github.com/dylang/changelog` or `git@github.com:dylang/changelog.git` or even just `github.com/dylang/changelog`.

Help
----

    Usage:
      changelog <npm module name> [release] [options]
      changelog <github repo url> [release] [options]

    Module name:
       $ changelog npm

    Github repo:
       $ changelog github.com/isaacs/npm
       $ changelog isaacs/npm

    Release:
       latest   Default: Show only the latest versions. ex: $ changelog npm latest
       all      Show all versions.                      ex: $ changelog npm all
       number   Show that many recent versions.         ex: $ changelog npm 3
       n.n.n    Show changes for a specific version.    ex: $ changelog npm 1.3.11

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

More Examples
=============

 * [More Examples](https://github.com/dylang/changelog/tree/master/examples)

Changelog API
=============

Changelog can be easily integrated into other tools.

````js
var changelog = require('changelog');

changelog.generate('express')
    .then(changelog.markdown);

 changelog.generate('grunt')
    .then(showChanges);

function showChanges(data) {

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
````


How it works
============

 * Changelog uses the [Github V3 API](http://developer.github.com/) and [npmjs.org API](http://search.npmjs.org/).

Tests
=================

`Mocha` tests are included. There aren't very many and don't mock Github or npm's registry so they could be improved.

```js
$ npm test
```

About
=====

[Dylan Greene](http://github.com/dylang) built this because he was always curious what was changed when doing `npm update`.
This module's name is inspired by listening to [TheChangelog Podcast](http://thechangelog.com/) on the way to [work](http://opower.com).