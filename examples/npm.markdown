1.3.11 / 2013-09-07
===================

  * v1.3.11
  * request@2.27.0
  * lru-cache@2.3.1
  * node-gyp@0.10.10
  * sha@1.2.3
  * npmconf@0.1.3
  * lockfile@0.4.2
  * inherits-fixup
  * inherits@2.0.1
  * read-installed@0.2.4
  * slide@1.1.5
  * graceful-fs@2.0.1

1.3.10 / 2013-09-05
===================

  * v1.3.10
  * update/outdated: don't access missing package info
    avoid null dereferences checking the status of a currently installed
    package
    Fixes [#3820](https://github.com/isaacs/npm/issues/3820), a regression caused by [#3798](https://github.com/isaacs/npm/issues/3798) and [#3578](https://github.com/isaacs/npm/issues/3578)
  * add failing test, depends on npm-registry-mock 0.3.0
    test for [#3823](https://github.com/isaacs/npm/issues/3823)
  * read-package-json@1.1.3
    Brings along normalize-package-data@0.2.2, which closes [#3783](https://github.com/isaacs/npm/issues/3783).
  * prune: --production option to unbuild devDependencies
    Closes [#2854](https://github.com/isaacs/npm/issues/2854).
  * prune: check package.json before running
    Fixes [#3755](https://github.com/isaacs/npm/issues/3755).

1.3.9 / 2013-08-23
==================

  * v1.3.9
  * outdated: only test 'from' for urls
    If the 'from' value is not a url, then the fact that it changes is not
    relevant.  For example 'foo@*' and 'foo@1' and 'foo@' might all point to
    the same package.  However, a changed url IS relevant, because it
    indicates that it is now a different thing.
    Fixes [#3798](https://github.com/isaacs/npm/issues/3798), a regression caused by [#3578](https://github.com/isaacs/npm/issues/3578).
  * remove mention of MIT license in README
  * Document `user/repo` style GitHub URLs
  * add missing aliases to cli doc pages
  * npm view doc
  * v as alias for view command

1.3.8 / 2013-08-16
==================

  * v1.3.8
  * add "repo" command
  * doc: Clarify versions and mention prepublish
  * use npm-registry-mock, fixes [#3633](https://github.com/isaacs/npm/issues/3633)
  * Guard against falsey versions value.
  * doc: Fix typo
  * use getCacheStat before lock, fixes joyent/node[#3821](https://github.com/isaacs/npm/issues/3821)
    Previous code did not handle the cache dir's permissions consistently.
    If the first lock was done as sudo, the cache directory was not user
    writable.
    Removed the now unnecessary guard and collapsed the then function.
  * Treat dep. as outdated if its _from changes
    This is per Isaacs comment in [#1727](https://github.com/isaacs/npm/issues/1727)
  * doc: Remove whitespace
  * doc: Correct links to semver(7)
  * styling in LICENSE file

1.3.7 / 2013-08-05
==================

  * v1.3.7
  * Bump all deps
  * init-package-json@0.0.11
  * Avoid assert in Node v0.11 by touching internal API
  * doc: Correct links in README
  * doc: fix typo
  * doc: Remove registry redirect stuff
    This hasn't worked for a loooonnng time.  It's a hazard to have
    in the docs and on th website.

1.3.6 / 2013-07-27
==================

  * v1.3.6
  * cache: Never be strict (for now)
  * Authors: add gflarity's email address
  * License: Artistic-2.0
    The 'MIT +no-false-attribs' license was a hacked jury-rigged thing
    that half-does what the Artistic-2.0 does much better.
  * Remove urls from AUTHORS file
    Email address is enough.
  * Add many authors
    Whoops, haven't been keeping up with this.
    Lots of new names!  Hooray!
  * include sha's readable-stream optional dep
    Fix [#3698](https://github.com/isaacs/npm/issues/3698)
  * add ECONNRESET to 'network issues' category
  * show better error message for proxy users
    This will hopefully enable the npm users behind a proxy to help
    themselves in case of a proxy/network issue.

1.3.5 / 2013-07-24
==================

  * v1.3.5
  * install: Replace warnings, reduce strictness
    We need a more carefully considered approach here.  For now
    go back to what we had prior to 1.3
  * bump all deps to use inherits@2
  * fstream-npm@0.1.5
  * read@1.0.5
  * semver@2.0.11
  * nopt@2.1.2

1.1.70 / 2013-07-23
===================

  * Bump many deps for graceful-fs@2 upgrade
  * doc: Remove duplicate version range line in npm-install.
  * doc: Point at npm-ls, not npm-list
    Re isaacs/npm-www[#359](https://github.com/isaacs/npm/issues/359)
  * doc: folders is section 5, not 7
  * fix global leak
  * v1.3.4
  * build: Enforce uniqueness of man pages being installed
  * Avoid doc collisions on npm version upgrade

1.1.25 / 2013-07-12
===================

  * v1.3.3
  * Merge branch 'manliness'
  * delete old docs on publish
  * doc: More config doc crosslinking
  * doc: Correct links to misc section docs
  * doc: Build index as 'npm-index.md'
    Otherwise, we end up creating 'man 7 index' which is weird.
  * doc: s/npm-folders(1)/npm-folders(7)/g
  * doc: s/npm-json(1)/package.json(5)/g
  * doc: Update links in doc/files/
  * doc: Correct links in doc/misc/
  * doc: Fix links on legacy html docs
  * makefile: spacing
  * doc: Build index and readme html properly
  * doc: update index builder for new format
  * doc: move semver to misc
  * doc: update build scripts for new structure
  * help: Limit line length wrapping to 60
  * help: Take an optional initial numeric section arg
  * doc: reformat npm-scripts
  * doc: Split config up into 3 docs
  * doc: move npm-scripts to misc
  * doc: Don't copy to legacy url if already something there
  * build: Don't prepend package name onto manpages
  * help-search: update for new doc structure
  * help fixup
