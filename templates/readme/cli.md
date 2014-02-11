## Command-line Usage


### Node Modules in NPM


Modules do not need to be installed to generate changelog but they must define their `repository url` in their package.json.

![Example using Express](https://github.com/dylang/changelog/raw/master/examples/express.png)

```sh
$ changelog {npm module name} [release] [options]
```

`npm module`: The module name, such as `express`, `npm`, `grunt`, etc.


### Any Public Github.com Repository

Changelog also works on any public Github repo.


```sh
$ changelog {Github.com repo} [options]
```

`Github.com repo url`: Urls can be any format, such as `https://github.com/dylang/changelog` or `git@github.com:dylang/changelog.git` or even just `dylang/changelog`.


### Help


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

### More Examples


 * [More Examples](https://github.com/dylang/changelog/tree/master/examples)