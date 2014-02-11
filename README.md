<!---

This file was automatically generated.

Use `grunt readme` to regenerate.

--->
## changelog [![NPM version](https://badge.fury.io/js/changelog.png)](http://badge.fury.io/js/changelog)  [![Build Status](https://travis-ci.org/dylang/changelog.png)](https://travis-ci.org/dylang/changelog) 

> Command line tool (and Node module) that generates a changelog in color output, markdown, or json for modules in npmjs.org's registry as well as any public github.com repo.

[![changelog](https://nodei.co/npm/changelog.png?downloads=true "changelog")](https://nodei.co/npm/changelog)








### Command-line Usage


#### Node Modules in NPM


Modules do not need to be installed to generate changelog but they must define their `repository url` in their package.json.

![Example using Express](https://github.com/dylang/changelog/raw/master/examples/express.png)

```sh
$ changelog {npm module name} [release] [options]
```

`npm module`: The module name, such as `express`, `npm`, `grunt`, etc.


#### Any Public Github.com Repository

Changelog also works on any public Github repo.


```sh
$ changelog {Github.com repo} [options]
```

`Github.com repo url`: Urls can be any format, such as `https://github.com/dylang/changelog` or `git@github.com:dylang/changelog.git` or even just `dylang/changelog`.


#### Help


`changelog --help`


```
Usage:
  changelog <npm module name> [versions] [options]
  changelog <github repo url> [versions] [options]

Module name:
   $ changelog npm

Github repo:
   $ changelog github.com/isaacs/npm
   $ changelog isaacs/npm

Versions:
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
```

#### More Examples


 * [More Examples](https://github.com/dylang/changelog/tree/master/examples)



### Changelog API

Changelog can be easily integrated into other tools.

#### `changelog.generate(name, versions)

* `name` string, _required_ NPM module name from registry.
* `versions` integer or semver, _optional_ Number of versions, or the semver version to show.


````js
var changelog = require('changelog');

changelog.generate(NpmPackageName, countOrVersions)
    .then(changelog.markdown);

````

````js
var changelog = require('changelog');

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


### How it works

 * Changelog uses [npmjs.org API](http://search.npmjs.org/) to get the list of versions and the publish dates.
 * It cross-references the versions in `npm` with the commit history from the [Github's API](http://developer.github.com/).


### Inspiration


[Dylan Greene](http://github.com/dylang) built this because he was always curious what was changed when doing `npm update`.
This module's name is inspired by listening to [TheChangelog Podcast](http://thechangelog.com/) on the way to [work](http://opower.com).






### About the Author

Hello fellow developer! My name is [Dylan Greene](https://github.com/dylang). When
not overwhelmed with my two kids I enjoy contributing to the open source community.
I'm a tech lead at [Opower](http://opower.com). I lead a team using Grunt and Angular to build software that
successfully helps people like us use less power.
Not too long ago I co-created [Doodle or Die](http://doodleordie.com), a hilarious web game with millions of
doodles that won us Node Knockout for the "most fun" category.
I'm [dylang](https://twitter.com/dylang) on Twitter and other places.

Some of my other Node projects:

| Name | Description | Github Stars | Npm Installs |
|---|---|--:|--:|
| [`grunt-notify`](https://github.com/dylang/grunt-notify) | Automatic desktop notifications for Grunt errors and warnings using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send. | 619 | 52,208 |
| [`grunt-prompt`](https://github.com/dylang/grunt-prompt) | Interactive prompt for your Grunt config using console checkboxes, text input with filtering, password fields. | 144 | 6,885 |
| [`rss`](https://github.com/dylang/node-rss) | RSS feed generator. A really simple API to add RSS feeds to any project. | 177 | 98,802 |
| [`shortid`](https://github.com/dylang/shortid) | Amazingly short non-sequential url-friendly unique id generator. | 129 | 22,984 |
| [`xml`](https://github.com/dylang/node-xml) | Fast and simple xml generator. Supports attributes, CDATA, etc. Includes tests and examples. | 35 | 180,625 |
| [`anthology`](https://github.com/dylang/anthology) | Module information and stats for any @npmjs user | _New!_ | _TBD_ |
| [`grunt-attention`](https://github.com/dylang/grunt-attention) | Display attention-grabbing messages in the terminal | _New!_ | 336 |
| [`observatory`](https://github.com/dylang/observatory) | Beautiful UI for showing tasks running on the command line. | _New!_ | 81 |
| [`logging`](https://github.com/dylang/logging) | Super sexy color console logging with cluster support. | 21 | 8,793 |
| [`grunt-cat`](https://github.com/dylang/grunt-cat) | Echo a file to the terminal. Works with text, figlets, ascii art, and full-color ansi. | _New!_ | 396 |

_This list was generated using [anthology](https://github.com/dylang/anthology)._


### License
Copyright (c) 2014 undefined, contributors.

Released under the [MIT license](https://tldrlegal.com/license/mit-license).

Screenshots are [CC BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) (Attribution-ShareAlike).

***
_Generated using [grunt-readme](https://github.com/assemble/grunt-readme) with [grunt-templates-dylang](https://github.com/dylang/grunt-templates-dylang) on Monday, February 10, 2014._ [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/dylang/changelog/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Google Analytics](https://ga-beacon.appspot.com/UA-4820261-3/dylang/changelog)](https://github.com/igrigorik/ga-beacon)


<!---

This file was automatically generated.

Use `grunt readme` to regenerate.

--->