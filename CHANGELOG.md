1.4.0 / 2017-07-08
==================

  * Use github-url-from-git for repo parsing ([#37](https://github.com/dylang/changelog/issues/37))

1.3.1 / 2017-07-07
==================

  * fix: GitHub URL parsing ([#36](https://github.com/dylang/changelog/issues/36))

    This enhances GitHub URL parsing to support:
    - git://
    - git+https://
    - monropo (e.g. https://github.com/babel/babel/tree/master/packages/babel-runtime)

1.3.0 / 2017-06-12
==================

  * Add np
  * Return sha with commits

1.2.1 / 2017-06-12
==================

  * Fix filename for example markdown ([#30](https://github.com/dylang/changelog/issues/30))
  * Revert q to 1.x ([#28](https://github.com/dylang/changelog/issues/28))
    
    Although q has released 2.0.0 - 2.0.3, the author writes on the GitHub repo:
    
    > The version 2 release train introduces significant and backward-incompatible changes and is experimental at this time.
    
    Hence, reverting to 1.4.1.

1.2.0 / unpublished?
====================

  * Upgrade and pin dependencies ([#27](https://github.com/dylang/changelog/issues/27)) & devDependencies ([#26](https://github.com/dylang/changelog/issues/26))
  * Closes [#20](https://github.com/dylang/changelog/issues/20)
  * Closes [#16](https://github.com/dylang/changelog/issues/16)
  * Closes [#13](https://github.com/dylang/changelog/issues/13)

1.1.0 / unpublished?
====================

  * Use GITHUB_TOKEN if present ([#24](https://github.com/dylang/changelog/issues/24))
  * TravisCI: use versions 4 and 6 ([#25](https://github.com/dylang/changelog/issues/25))
  * Add .editorconfig ([#23](https://github.com/dylang/changelog/issues/23))

1.0.8 / unpublished?
====================

  * Support scoped npm dependencies ([#21](https://github.com/dylang/changelog/issues/21))
  * Fixes [#18](https://github.com/dylang/changelog/issues/18)

1.0.7 / 2014-10-06
==================

  * Oops, took out q. It's back now.

1.0.6 / 2014-10-06
==================

  * Fixes for supporting invalid semver versions and out of order publishes. Fixes [#9](https://github.com/dylang/changelog/issues/9).

1.0.5 / 2014-04-07
==================

  * updated examples
  * update dependencies
  * fix main, update readme
  * update changelog

1.0.4 / 2014-01-24
==================

  * update dependencies
  * Uppercase changelog
  * add json example
  * bump version
  * adding grunt-readme
  * Merge pull request [#7](https://github.com/dylang/changelog/issues/7) from rimunroe/master
    added User-Agent header to github API request
  * added User-Agent header to GitHub API request

1.0.3 / 2013-09-22
==================

  * more modularization and testing
  * add grunt task

1.0.2 / 2013-09-20
==================

  * renaming readme
  * update help
  * update readme
  * * updated readme

1.0.1 / 2013-09-20
==================

  * * fix some bugs in the command line script
    * update readme
    * update help
    * update examples
  * show error message when github api rate limiting is enabled

1.0.0 / 2013-09-20
==================

  * more refactoring, update tests
  * added .travis.yml.
    fixed TTL problem that made it not work in modern versions of Node. Fixes [#3](https://github.com/dylang/changelog/issues/3).
    updated npm registry api url.
    added tests.
    updated readme.
    changed from using `step` to `q`.
  * let the author know

0.1.3 / 2011-11-21
==================

  * bump version, ignore TTY.getWindowSize if it's not working.
  * fix bug when author doesn't include repo. make work in node 0.6.*

0.1.2 / 2011-08-26
==================

  * version bump to 0.1.2
  * added support for showing specific releases via `latest`, `n`, and `n.n.n` based on Tjholowaychuk's request.  Closes [#2](https://github.com/dylang/changelog/issues/2)

0.1.1 / 2011-08-24
==================

  * updated examples and version
  * fixed regex for replacing github ticket numbers with url to the ticket so it wouldn't blindly match #.

0.1.0 / 2011-08-23
==================

  * update changelog
  * update version
  * show the author's name if the repo url is not in the module's package.json.
  * fix exception that happens when a module isn't found
  * clean up readme
  * fix screenshot urls
  * updated examples and added screenshots

0.0.9 / 2011-08-23
==================

  * update version
  * update examples
  * show full url to to github issue on command line output

0.0.8 / 2011-08-16
==================

  * updated version
  * updated examples
  * don't include ansi color codes when outputting to a file or pipe

0.0.7 / 2011-08-10
==================

  * upped version
  * added changelog for changelog
  * run changelog in the root of a node project with a package.json and it will use it to create the changelog.

0.0.6 / 2011-08-07
==================

  * bumped version to 0.0.6
  * added lots of examples
  * added --color output (new default)
  * get debug output via --debug

0.0.5 / 2011-08-05
==================

  * up version
  * handle better npm's api not being available
    wrap text using the screen width via tty
  * remove node_modules from git project

0.0.4 / 2011-08-04
==================

  * update version to 0.0.4
  * using issac's semver to compare module version numbers
  * update readme

0.0.3 / 2011-08-04
==================

  * update readme
  * support upcoming features that are in github but not yet in npm.
  * up to 0.0.3
  * --json support
  * update description

0.0.2 / 2011-08-04
==================

  * version 0.0.2
  * use standard out and standard error for output.
    don't bubble exceptions or repeat error messages.

0.0.1 / 2011-08-01
==================

  * First commit
