1.4.1-8 / 2017-10-31
====================

  * add CLI `-a` / `--append` option to write/append to a CHANGELOG.md file:
    - new generated data is appended to the top of an existing file.
    - the tool searches the local directory for any file matching the 'changelog*' glob search crriterion and picks the first one it finds. When no file is found, 'CHANGELOG.md' is assumed as a default destination. This behaviour ensures that various incantations of the name do not cause any trouble in `-a`-updating, while any newly created CHANGELOG will have a github-friendly name: "CHANGELOG.md"
  * SPDX-style license key in package.json: MIT.

1.4.1-7 / 2017-10-31
====================

  * github should not just deliver commits but also **tags**: often those are in sync with npm releases, at least when they have a 'semver' format, so we collect those alongside the ones produced by the npm registry.
    This is particularly handy to obtain a complete releases set (CLI: 'all') when a project is worked on via fork + subsequent "scoping" of that package, but that's just one(1) use case; this functionality is also useful for packages which do have releases via git tags, but have not been registered with npm, for example!
  * kill obnoxious chai behaviour: `expects().to.be.an.object` fails, while `assert.isObject()` does what it's supposed to do.
  * updated CHANGELOG.md using the correct repo URL (fork) now in package.json

1.4.1-6 / 2017-10-31
====================

  * turns out today, npm registry requests for scoped packages has apparently reverted to old behaviour. See also commit SHA-1: 368495e38ac989f444b82867c753a7402de51b59 :: fix: npm.org now has a different way to request info about scoped packages: via the `Npm-Scope` header. See also https://docs.npmjs.com/misc/registry
  * whoops, forgot npm dependency in there...
  * enhancement: when you collect the changelog info for the local package, i.e. load the project name from the local package.json file, also pick up the repository URL from that file as well and apply that as the actual github URL rather than going to the NPM registry and collecting the github repo URL from the data produced by *that* one: the reason we do this is that we MAY VERY PROBABLY have adjusted the package.json file to be a scoped package or otherwise, but have not yet changed the repository URL to point to our fork/clone/derivative: it's one of those fields you only correct when you find out they matter... and now it turns out they matter for the CHANGELOG tool but then, of course, you otherwise would have to push a new NPM release just to correct this, which is ludicrous, so we have the local package.json take priority when we obtain data from it anyway. (Ergo: specifying the npm repo identifier on the command line WILL NOT take the package.json repository URL as explicit specification of the npm registry entry on the command line results in CHANGELOG not accessing any local package.json *at all*!)
  * fix releaseRequested value: should never be NaN, just keep it 'undefined' then. Better validation in the code.
  * allow variable number of args to log.debug & log.error: behave exactly like console.log and console.error so we can log more complex (debug) messages easily.
  * message typo fix

1.4.1-5 / 2017-10-30
====================

  * updated NPM packages, including move from deprecated has-color (not updated since 2013) to chalk-supports module (which is linked from rmp website's has-color entry). Added note to README for Windows users who run into issues around console TTY detection failing on several msys/mingw systems: `-c` vs. `--color`.
  * updated package-lock.json: complete re-install of npm packages via `rm -rf node_modules; rm -f package-lock.json; npm i`

1.4.1-4 / 2017-10-04
====================

  * chai github and npm tests ([#43](https://github.com/GerHobbelt/changelog/issues/43)) don't fail with obscure error report anymore: `expect.an.object` is not the correct use: http://chaijs.com/api/bdd/ --> `expect.an('object')`
  * Now all unit tests pass (`npm test` failed for build -2 and before, after having updated to chai 4)
  * updated package-lock.json: complete re-install of npm packages via `rm -rf node_modules; rm -f package-lock.json; npm i`
  * chai github and npm tests ([#43](https://github.com/GerHobbelt/changelog/issues/43)) don't fail with obscure error report anymore: `expect.an.object` is not the correct use: http://chaijs.com/api/bdd/ --> `expect.an('object')`

1.4.1-3 / 2017-10-04
====================

  * Now all unit tests pass (`npm test` failed for build -2 and before, after having updated to chai 4)
  * chai github and npm tests ([#43](https://github.com/GerHobbelt/changelog/issues/43)) don't fail with obscure error report anymore: `expect.an.object` is not the correct use: http://chaijs.com/api/bdd/ --> `expect.an('object')`
  * updated mocha + chai NPM packages; this causes [#43](https://github.com/GerHobbelt/changelog/issues/43)
  * update TravisCI config to test all major supported Node versions: 4/5/6/7/8
  * dependency `supports-color` doesn't support antique NodeJS (0.12 and older) due to `const` usage in the code. Discarding antiquated NodeJS support in `changelog` itself now: NodeJS versions 4 and later are supported and CI tested (adjusted TravisCI config accordingly)

1.4.1-2 / 2017-10-04
====================

  * add "pub" publish task in npm scripts: `npm run pub'
  * updated CHANGELOG using `changelog` (and hand-tweaked the output) ([#41](https://github.com/GerHobbelt/changelog/issues/41))
  * added package-lock.json ([#40](https://github.com/GerHobbelt/changelog/issues/40))
  * use strict ([#39](https://github.com/GerHobbelt/changelog/issues/39))
  * Add note about the otherwise obscure solution to get terminal/console output with `-c` on platforms/terminals which are not recognized as color-supporting. (e.g. Windows+msys bash)
  * sync output/markdown and output/terminal: same conditional logic around augmenting github issues with an URL.
  * fix: has-color package is now chalk/supports-color
  * nuke deprecated (and crashing!) grunt-readme from the task set (and consequently from the dev deps)
  * fix: npm.org now has a different way to request info about scoped packages: via the `Npm-Scope` header. See also https://docs.npmjs.com/misc/registry
  * bumped build revision + making this a scoped package for fast publication of updates.
  * updated CHANGELOG using `changelog` (and hand-tweaked the output)
  * added package-lock.json for precise dependency management straight out of the NPM box
  * package states we support node as old as 0.10.0, so have TravisCI check 'em all.
  * TravisCI: test all major Node versions from 4.0 onwards
  * shut up eslint

1.4.0 / 2017-07-08
==================

  * Use github-url-from-git for repo parsing ([#37](https://github.com/dylang/changelog/issues/37))

1.3.1 / 2017-07-07
==================

  * fix: GitHub URL parsing ([#36](https://github.com/dylang/changelog/issues/36))

    This enhances GitHub URL parsing to support:
    - git://
    - git+https://
    - monorepo (e.g. https://github.com/babel/babel/tree/master/packages/babel-runtime)

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

  * Upgrade and pin dependencies ([#27](https://github.com/dylang/changelog/issues/27)) 
    & devDependencies ([#26](https://github.com/dylang/changelog/issues/26))
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

1.0.4 / 2014-01-24
==================

  * update dependencies
  * Uppercase changelog
  * add json example
  * adding grunt-readme
  * Merge pull request [#7](https://github.com/dylang/changelog/issues/7) from rimunroe/master
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

1.0.1 / 2013-09-20
==================

  * fix some bugs in the command line script
  * update readme
  * update help
  * update examples
  * show error message when github api rate limiting is enabled

1.0.0 / 2013-09-20
==================

  * more refactoring, update tests
  * added .travis.yml.
  * fixed TTL problem that made it not work in modern versions of Node. Fixes [#3](https://github.com/dylang/changelog/issues/3).
  * updated npm registry api url.
  * added tests.
  * updated readme.
  * changed from using `step` to `q`.
  * let the author know

0.1.3 / 2011-11-21
==================

  * ignore TTY.getWindowSize if it's not working.
  * fix bug when author doesn't include repo. make work in node 0.6.*

0.1.2 / 2011-08-26
==================

  * added support for showing specific releases via `latest`, `n`, and `n.n.n` based on Tjholowaychuk's request.  Closes [#2](https://github.com/dylang/changelog/issues/2)

0.1.1 / 2011-08-24
==================

  * updated examples
  * fixed regex for replacing github ticket numbers with url to the ticket so it wouldn't blindly match #.

0.1.0 / 2011-08-23
==================

  * update changelog
  * show the author's name if the repo url is not in the module's package.json.
  * fix exception that happens when a module isn't found
  * clean up readme
  * fix screenshot urls
  * updated examples and added screenshots

0.0.9 / 2011-08-23
==================

  * update examples
  * show full url to to github issue on command line output

0.0.8 / 2011-08-16
==================

  * updated examples
  * don't include ansi color codes when outputting to a file or pipe

0.0.7 / 2011-08-10
==================

  * added changelog for changelog
  * run changelog in the root of a node project with a package.json and it will use it to create the changelog.

0.0.6 / 2011-08-07
==================

  * added lots of examples
  * added --color output (new default)
  * get debug output via --debug

0.0.5 / 2011-08-05
==================

  * handle better npm's api not being available
  * wrap text using the screen width via tty
  * remove node_modules from git project

0.0.4 / 2011-08-04
==================

  * using issac's semver to compare module version numbers
  * update readme

0.0.3 / 2011-08-04
==================

  * update readme
  * support upcoming features that are in github but not yet in npm.
  * --json support
  * update description

0.0.2 / 2011-08-04
==================

  * use standard out and standard error for output.
  * don't bubble exceptions or repeat error messages.

0.0.1 / 2011-08-01
==================

  * First commit
