1.0.23 / 2011-08-07
===================

  * update which (trivial)
  * debuggery
  * v1.0.23
  * Remove base64 module. Just use the Buffer directly
  * .js extensions on require() calls in npm.js
  * Abstract out 'which'
  * make doc
  * Remove minimatch.js, using dep now
  * Handle git+ urls in the name@url case
  * Close [#1225](https://github.com/isaacs/npm/issues/1225) Add git url support. Experimental
  * unbreak ini stuff. no longer using '-' key
  * Use standalone ini parser
  * Add proto-list as dep and submodule
  * update rimraf
  * Allow private per-package confs
    Just prefix them with a _.  Transparent to the receiving module.
  * Use rimraf instead of local thing
  * fixup rimraf
  * Add rimraf submodule
  * minor faq fixes
  * Put .js on filenames
  * Question about Capitalization
  * Close [#1235](https://github.com/isaacs/npm/issues/1235) Swap out unicode tree chars
  * Better error handling for adduser
  * undefined log message error
  * Setting the host there is the wrong thing to do
  * Set host header explicitly
  * Clean up and refactor the oversized npm.load function
  * Close [#1214](https://github.com/isaacs/npm/issues/1214) Don't create an invalid engine range
  * newloctimeout should not be a global.
  * Revert "Check hostkey fingerprints when registry is https"
    This reverts commit ca52fe6045d6acf37597c66d30b5c2d490b07f79.
  * Check hostkey fingerprints when registry is https
  * Add a --yes config flag (with -y and -n shorthands)
  * Fix invalid array length when no search hits found
  * Confusion about args vs conf
  * Report 404 errors properly with non-vhosted registries
  * Closes [#1199](https://github.com/isaacs/npm/issues/1199) Support 'npm unpublish .'
  * Close [#1068](https://github.com/isaacs/npm/issues/1068) Add header to search output
  * Re [#1196](https://github.com/isaacs/npm/issues/1196) Warn on non-array 'files' in json
  * slide@1.1.3
  * Support npm_debug env in install script
  * Default prefix to PREFIX environ if set
  * No need to clean cache as often, makes search slow
  * Clearer messaging of cleanup prefix
  * Prefer https:// to git:// for github urls
  * Close [#1187](https://github.com/isaacs/npm/issues/1187) Use https:// for submodules instead of git://
  * Remove mkdir walk log, add cache.add install log

1.0.22 / 2011-07-24
===================

  * v1.0.22
  * Exit with the proper code on failure

1.0.21 / 2011-07-24
===================

  * v1.0.21
  * docs got messed up somehow
  * v1.0.20
  * doa bug, annoying.

1.0.19 / 2011-07-23
===================

  * v1.0.19
  * Close [#1175](https://github.com/isaacs/npm/issues/1175) Add --production flag
  * Better checks for proper gid/uid in mkdir
  * Add a bunch of logging and commentary for [#1153](https://github.com/isaacs/npm/issues/1153)
  * Update semver to 1.0.9
  * s/sys/util/g finally
  * remove async-map file
  * Use asyncMap from slide module
  * Use chain function from slide module
  * Add slide as dep
  * Abstract out graceful-fs
  * Add Felix Geisendörfer
  * Add tildes for >=0.1.0, not 1.0.0
  * Only use tilde range descriptor when package >=1.0
    Problem: When using `install --save`, npm prefixed the installed
    package version with the tilde range descriptor. This makes sense
    for packages that follow semver and have reached 1.0.0. But for
    packages < 1.0.0 semver allows APIs to change freely, so those
    should be packaged with the exact version that was installed,
    as implemented by this patch.
  * --save to devDependencies when --dev is set
  * Clear caches on DELETE better.
  * Don't scrub the cache on publish. Unnecessary
  * filter out the _etag, and use couch 1.1 'update_after'
  * It is time.  Allow https for node >= 0.4.9
  * Add Trent Mick
  * Fix [#1163](https://github.com/isaacs/npm/issues/1163): clean-old.sh breakage on ancient /bin/sh

1.0.18 / 2011-07-19
===================

  * v1.0.18
  * Print a warning when the search index builds for the first time
  * Make search ridiculously fast.
    Mad props to @JasonSmith, @janl, @mikeal, and @maxogden for chipping in
    with various CouchDB skillz and insights.
    This is really awesome.
  * Make searches a little faster
    1. Even if the data is stale, use it, and then fetch the update.
    2. Tell couch to do the same.
  * require.paths is gone
  * ./configure needs submodules

1.0.17 / 2011-07-16
===================

  * v1.0.17
    Bump version because 1.0.16 was a DOA release. Whoops.
  * fix make latest
  * Update minimatch

1.0.16 / 2011-07-16
===================

  * v1.0.16
  * docs for pack
  * Update minimatch
    git submodules make me insane with their repetitive repetition
  * Update submodules recursively in make
  * Fix bug found in submodule
  * Move minimatch into a dependency
  * Submodule to minimatch
  * docs: Open in npm search page if no repo/homepage listed
  * Close [#1152](https://github.com/isaacs/npm/issues/1152) Document prefix default better
  * Close [#1062](https://github.com/isaacs/npm/issues/1062) Add 'pack' command to create a tarball
  * make doc
  * Make the global/local more clear, and add example of dep sharing
  * Don't install deps that would be satisfied by family
    This makes it possible to 'fix' the dependencies of dependencies,
    by specifying a precise version that the dependency can depend
    upon.
  * Setting to undefined is almost always a problem
  * Add node -v and npm -v to error output
  * Add more 'don't do this' around setting global config
  * Better default usage output
