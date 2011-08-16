2011-08-16
==========

  * vm: fix incorrect dispatch of vm.runInContext for argument "filename"
    Adds test case and documentation for vm.runInContext and vm.createContext.
    Fixes [#1140](https://github.com/joyent/node/issues/1140).

2011-08-15
==========

  * Complete GYP support for Python 2.5.2
  * GYP Support python 2.5.2
  * gyp: Support Linux
  * Remove http.cat. fixes [#1447](https://github.com/joyent/node/issues/1447)
  * Upgrade GYP to r999
    To fix osx/make build http://codereview.chromium.org/7618052
  * Upgrade GYP to r995
  * Fix GYP build on OSX
    Broken due to DOS line endings.
    ./configure-gyp
    make -f Makefile-gyp
  * util: isRegExp() should not call toString() on its argument
    An overloaded toString() method may have side effects
    so don't call it for a simple type check.

2011-08-14
==========

  * node_crypto: interface with libuv, not libev

2011-08-13
==========

  * Rename gyp files to produce useful solution names.
    Hoist common settings into common.gypi.
    Restrict v8's common.gypi to v8 projects.
    Ensure v8 doesn't use /MP in debug builds.
    Add basic settings for other platforms.
    Make uv import common.gypi properly.
    Remove LTCG warning.
  * path.js: correct three harmless .length typos
    lib/path.js routines normalizeArray() and resolve() have for loops that
    count down from end of an array.  The loop indexes are initialized using
    "array.length" rather than "array.length-1".  The initial array element
    accessed is always beyond the end of array and the value is 'undefined'.
    Strangely, code exists that acts to ignore undefined values so that the
    typos are unnoticeable.
    Existing tests emit no errors either before or after changing to "length-1".
    Tests _do_ start failing at "length-2". (Actually it is node that starts
    to fail at "length-2" - that's a valid enough test...)
  * uv: upgrade to 5899192
  * module: fix pointer reference to out-of-scope variable
    Reported by Tom Hughes.
  * test: add typed arrays to known globals list
  * small NPN doc fix
    Fixes [#1522](https://github.com/joyent/node/issues/1522).

2011-08-12
==========

  * platform: fix GetFreeMemory() on 64 bits freebsd
    v_free_count is defined as u_int v_free_count (struct vmmeter sys/vmmeter.h:87)
    but variable info defined as unsigned long, this cause error on 64-bits systems
    because higher 32 bits remain uninitialized
  * build: add src/v8_typed_array.cc to gyp sources list
  * typed arrays: fix signed/unsigned compiler warnings
  * typed arrays: preliminary benchmarks
  * typed arrays: add Float64Array
  * typed arrays: alias method subarray() to slice()
  * typed arrays: integrate plask's typed array implementation
  * crypto: PBKDF2 function from OpenSSL
  * uv: upgrade to 7f82995
  * Incorporate endianness into buffer.read* function names instead of passing in a boolean flag
  * test: enable simple/test-http-dns-error for `make test-uv`
  * test: add test for [#1202](https://github.com/joyent/node/issues/1202), uncatchable exception on bad host name
  * net: defer DNS lookup error events to next tick
    net.createConnection() creates a net.Socket object
    and immediately calls net.Socket.connect() on it.
    There are no event listeners registered yet so
    defer the error event to the next tick.
    Fixes [#1202](https://github.com/joyent/node/issues/1202).
  * Now working on v0.5.5
  * Bump version to v0.5.4
  * Upgrade libuv to 65f71a2
  * Upgrade V8 to v3.5.4

2011-08-11
==========

  * Upgrade libuv to d358738
  * Add some debug output to test-child-process-double-pipe
  * net_uv: resume on closed net.Socket shouldn't crash
  * build: .gitignore build/ directory
  * Fix [#1497](https://github.com/joyent/node/issues/1497) querystring: Replace 'in' test with 'hasOwnProperty'
  * http: destroy socket on error
    Needs further investigation, the test passed without `--use-uv`.
    Fixes failing test:
    test/simple/test-http-dns-fail.js
  * net_uv: pipes don't have getsockname
  * net: properly export remoteAddress to user land
    Fixes failing test:
    test/simple/test-net-remote-address-port.js
  * test: fix logic error in test-net-remote-address-port.js
    The test intended to register an 'at exit' listener
    but called `process.exit()` instead.

2011-08-010
===========

  * Fix MSVS building.
  * Upgrade libuv to ca633920f564167158d0bb82989d842a47c27d56
  * node: propagate --use-uv to child processes
  * uv: upgrade to e8497ae
  * win: fix test-process-env
    Remove support for setting process.env.TZ as it doesn't seem we can do it
    x-platform without fixing V8.
  * uv: upgrade to b328e4c
  * uv: upgrade to b6b97f3
  * tcp: propagate libuv tcp accept() errors to net_uv.js
  * Upgrade libuv to db190c7
  * net_uv: Handle failed shutdown req
  * Add test-pipe-file-to-http to test-uv
  * net_uv: fix test/simple/test-pipe-file-to-http.js
  * test: Allow common.ddCommand to be run in presence of existing file
  * x-platform func for spawning pwd in tests
    Fixes test-child-process-buffering
  * Explicitly disable cr/lf conversion for test fixtures
    Otherwise git's autocrlf feature makes test fail on windows.
  * Revert "Make test-sync-fileread pass even when git cr/lf conversion is enabled"
    We'll solve this problem with a .gitattributes file.
    This reverts commit 27ef0b0903e348cc10d0c5d2ee2ef25aa1676440.
  * Add NPN and SNI documentation.
    Fixes [#1420](https://github.com/joyent/node/issues/1420).
    Fixes [#1426](https://github.com/joyent/node/issues/1426).

2011-08-09
==========

  * Make test-sync-fileread pass even when git cr/lf conversion is enabled
  * Open files in binary mode, on msvc too
  * Remove unnecessary line
  * Fix test-net-server-on-fd-0 for windows by removing assert
    Rename to regression test for GH-746 as the fd 0 behavior was not what the
    bug report was about.
  * Add fixed tests to test-uv
  * Fix dd command tests for Windows
  * Fix test/simple/test-repl
  * Improve win compat of test-repl
  * crypto: fix incorrect ssl shutdown check
  * net: fix incorrect sizeof()
  * Improve assert error messages
    1. actual and expected should be displayed in the same order they were given
    2. long values should be truncated.
  * eio: define HAVE_UTIMES 1 on cygwin, fixes build
    Fixes [#1483](https://github.com/joyent/node/issues/1483).
  * windows: fix test-umask
  * Upgrade libuv to e5f513c
  * Readd the static libpthread-win32 libraries
  * Revert "Unify configure scripts"
    This reverts commit 71435ede815ee2c73b09f7071ee1b6d10945d409.

2011-08-08
==========

  * Make buffer.INSPECT_MAX_BYTES public for mscdex
  * Truncate Buffer.inspect at 50 bytes
  * Fix test-executable-path
  * Fix test-http-upgrade-server and test-http-parser
    Problem was introduced in last http-parser upgrade which fixed a long
    standing bug with the upgrade event and removed several callbacks.
  * Endian argument should be a boolean. Signed integers shouldn't run through checks for unsigned integers. Clean up jslint. Provide unchecked uint entry points.
  * Tests should point at the build directory until GYP is default
  * Merge branch 'gyp'
  * Fix test-child-process-exec-cwd.
  * Unify configure scripts
  * Revert "Remove scons"
    This reverts commit bd270b48a790ba00dd5a0dc9624aabbdedacaea8.
  * Upgrade libuv to 75c10905
  * Bring back old Makefile and configure script
    GYP and WAF need to live in parallel for some time.
  * Fix MSVS build
  * Move GYP file to the project root
  * generate-project.bat: Point at the right path
  * sketch out configure support
  * http2: reword confusing comment
  * Improve util.format() compatibility with browser.
    Fixes [#1434](https://github.com/joyent/node/issues/1434).

2011-08-07
==========

  * Fixes https host header default port handling.
  * Test for default host headers on default ports in https and http
  * docs: rename readline.md to readline.markdown
  * symlink in ./node and ./node_g for make users
  * Add generate-projects.bat
  * docs: fix typo in tls API docs
  * Disable optimization in debug builds.
    Enable full optimization in release builds.
