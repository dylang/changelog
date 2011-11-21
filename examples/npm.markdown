
0.2.19 / 2011-11-20
===================

  * npm cmd files, for easier node msi building
  * v1.0.106
  * Correct pack/unpack queue for win32
  * update semver
  * Fix [#1694](https://github.com/isaacs/npm/issues/1694) Test for directory-ness rather than -e
    shell scripting is hard.
  * v1.0.105
  * Pass a real mode to mkdir to avoid null-related exceptions.
  * Workaround for node 0.6.0 on windows with large dir lists
  * update graceful-fs
  * Better error message on engine mismatch
  * init: Make the engines.node default a bit looser
  * Experimental: no node version checking on --force
  * Fix --node-version=null regression
  * v1.0.104
  * Report the requested user when removal fails.
  * Fix incorrect path returned by npm-bin
    npm-bin returned a path using the prefix instead of the root, i.e.
    "./.bin" instead of "./node_modules/.bin".
  * Use npm_config_tar in install script
  * explain config locations more clearly
  * don't try to toString undefined
  * Publish readme properly, and don't show in view by default
  * Update request
  * Print tar --version even if explicitly set
  * Using request, don't need this now
  * publish the readme contents in the root package doc
  * Close [#1622](https://github.com/isaacs/npm/issues/1622) Fix incorrect check for -o tar arg
  * Close [#1605](https://github.com/isaacs/npm/issues/1605) Don't process bad data from search result
  * Fix [#1602](https://github.com/isaacs/npm/issues/1602) Fix [#1603](https://github.com/isaacs/npm/issues/1603) APIs must be either always sync, or always async
  * v1.0.103
  * update request
  * Close [#1598](https://github.com/isaacs/npm/issues/1598) Don't set global path until after figuring out node location
  * v1.0.102
  * Update install instructions
  * Merge branch 'windows-paths'
  * fix link regression, regarding new path getters
  * Document changed windows paths.
  * Close [#1581](https://github.com/isaacs/npm/issues/1581) windows cmd: Look in local folder for interpreter
  * Close [#1582](https://github.com/isaacs/npm/issues/1582) Make prefixes better on windows
    1. Make prefixes and paths more windows-like on windows.
    2. Abstract out all path-munging behavior to lib/npm.js where it belongs.
  * Handle seds that don't support -e
  * v1.0.101
  * mkdir: A few more places where the noChmod wasn't set
  * Close [#1509](https://github.com/isaacs/npm/issues/1509) Don't chmod the npm.prefix folder, just ensure it's there.
  * v1.0.100
  * Don't treat /-/xyz registry urls as packages for 404 errors
  * Close [#1571](https://github.com/isaacs/npm/issues/1571) Also check status code on 'error' results
  * Fix [#1564](https://github.com/isaacs/npm/issues/1564) Pre-load install.js and build.js in update command
  * Fail faster in cases like [#1566](https://github.com/isaacs/npm/issues/1566)
  * Add Stephen to AUTHORS
  * Add auto-increment support to version command
    Pass "major", "minor", or "patch" to increment the existing version
    by that amount.
  * v1.0.99
  * Fix [#1555](https://github.com/isaacs/npm/issues/1555) Queue tar operations for windows
    *Really* need to get a js tar implementation in there asap.
  * v1.0.98
  * Avoid accidentally opening npm.js with WSH
  * Show reasonable error message when invoked with WSH
  * v1.0.97
  * Default user and group to 0 on win32, and always make String the last type
  * Fix [#1552](https://github.com/isaacs/npm/issues/1552) Make it impossible to chown with a non-int uid/gid
  * typo
  * Correct 'message' doc
  * v1.0.96
  * Don't write log file for simple usage stuff
  * Close [#1549](https://github.com/isaacs/npm/issues/1549) Missed a mode reference
  * Close [#1502](https://github.com/isaacs/npm/issues/1502) Better usage message for 'version'
  * v1.0.95
  * Use the logprefix if colors enabled on windows
  * Use my request fork instead of mikeal's
  * add mmaleki
  * Add --message option and -m shorthand
    Specify commit message when creating a tag
    Use --message/-m option when commiting changes in `npm version`.
    Mention message option in `npm version` docs
    Mention message option in doc/cli/config.md
  * Better command line handling for windows
  * Get window size properly
  * Adjust npm's own 'bugs' field to conform.
  * Standardize the 'bugs' field in package.json.
  * Close [#1518](https://github.com/isaacs/npm/issues/1518) don't allow npm view .
  * Add verbose log for chown in lib/cache.js
  * Set umask before calling mkdir
  * Apply umask correctly, completely, and remove all literal mode values
  * Close [#1509](https://github.com/isaacs/npm/issues/1509) Add 'umask' config option
  * Don't always assume that save() is saving 3 files. Might be only 1
  * close [#1542](https://github.com/isaacs/npm/issues/1542) don't chown if uid/gid aren't numbers
  * Explicitly inject builtinconfig into any npm install
  * Some seds are simpletons
  * typo in search.js
  * s/stdio/tty/g
  * Close [#1493](https://github.com/isaacs/npm/issues/1493) Return values from npm.commands.view saner
  * Close [#1201](https://github.com/isaacs/npm/issues/1201) Specify ./node_modules in current package
  * update rimraf
  * Push -o, not [-o]
  * Fix [#1521](https://github.com/isaacs/npm/issues/1521) Remove unnecessary shebangs
  * Fix [#1525](https://github.com/isaacs/npm/issues/1525) Cast password to a string
  * Be more careful about when the npm builtin config gets saved
  * make clean removes npmrc
  * Merge branch 'builtin-conf'
  * Document builtin config file
  * Output builtin config values with 'npm config ls'
  * When installing npm, keep the builtin config
  * Put builtinconfig file between defaults and global
  * Write builtin config with ./configure script
  * Ignore ./npmrc file
  * alias show->view for @guille
  * No need to shorten tar.name, since file list isn't there
