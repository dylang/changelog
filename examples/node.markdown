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
  * Silence VC++ warnings about use of badly-designed parts of the C library.
  * Fix missing prototype warnings.
  * Fix bad platform name.
  * Add 'make test' and friends
  * Make MSVS build.
    MSVS settings don't actually need to be guarded by conditions. gyp will do
    the right thing.

2011-08-06
==========

  * V8 GYP should attempt to not use cygwin.
  * Modify GYP scripts for VC build
  * Upgrade libuv - it now depends on pthreads
  * build: don't try to `ls -lh` executables that don't exist
    Avoids `ls: cannot access build/debug/node_g: No such file or directory`.
    Not an actual error but it confuses people.
  * Complete eio upgrade
  * clean merge scabs
  * Upgrade libuv to 48877ed
  * Basic VC++ compatibility work.
  * Remove scons
  * Bring gyp into the tools directory; handwritten makefile
  * gyp: fix makefile build
  * gyp fix build again
  * gyp: Fix build
  * add build/gyp_node build script
  * Upgrade libuv for gyp reasons
  * gyp: fix test runner
  * Improve gyp build - now works kind of
  * add deps/v8/build ???
  * More progress with gyp
  * WIP
  * Upgrade libuv for gyp support
  * Upgrade http_parser to 965f91bc76b2d1601e23
  * [doc] add link to npm search in Readme.md
    Fixes [#1459](https://github.com/joyent/node/issues/1459).
  * add the document of the new api routine: path.relative

2011-08-05
==========

  * Make test-child-process-exec-env work on windows
  * Child processes: support windowsVerbatimArguments option
  * uv: fix build on systems that don't have pipe2()
    This is libuv commit 2fbcbe9, cherry-picked for node.
  * Doc improvements
    Documents util.format().
    Thanks @bnoordhuis and @shigeki.
    Fixes [#1424](https://github.com/joyent/node/issues/1424).
  * Upgrade libuv to c834d5de9e4747e5138bed9140320b44622ab6de

2011-08-04
==========

  * Revert commits 12c8b27 and 88f416a, fixed properly in 2fe4558.
  * uv: cherry-pick libuv commit 041d60e into node
    Fixes execve-after-fork race in uv_spawn().
  * child process: don't send signal if process is already terminated
    Fixes failing test test/simple/test-exec-max-buffer.js
  * Upgrade V8 to 3.5.3
  * net_uv: add listenFD shim that throws when called
  * child process: bind to libuv's kill process API
    Fixes failing test test/simple/test-child-process-kill.js
  * module: strip byte order marker when loading *.js and *.json files
    BOMs make V8 raise a 'SyntaxError: Unexpected token ILLEGAL' exception.
    Fixes [#1440](https://github.com/joyent/node/issues/1440).
  * test: fix bad test in test-cli-eval.js
    The test checked that stdout was empty. Forgetting to escape brackets
    in the argument to --eval made that true on UNIX systems: the error
    was written to stderr.
    Props to Peter Bright for reporting the issue.

2011-08-03
==========

  * ev: fix infinite loop in ev_walk()
  * docs: add race warning to `child_process.kill()`
  * test: fix exec-after-fork race in test/simple/test-child-process-kill.js

2011-08-02
==========

  * Upgrade libuv to ec143961d135adb3f49f5a2322774ef43e2520b9
  * Upgrade libuv to dbaddc4423d61fa16cca299650f8378cffba9cce
  * http: make http2 the default, legacy backend is available with --use-http1
    Fixes [#1441](https://github.com/joyent/node/issues/1441).
  * Update tests for http2.
  * V8: Don't use mprotect on Cygwin as virtual memory is managed directly via WinAPI calls.
    Upstream fix: http://codereview.chromium.org/7549009
  * Remove platform_win32_winsock
  * Now working on v0.5.4
  * Bump version to v0.5.3
  * Upgrade libuv to b2ed24d
  * Complete removal of node_child_process_win32.cc
  * Remove node_child_process_win32.cc
  * Merge branch 'v0.4'
    Conflicts:
    doc/api/crypto.markdown
    doc/api/modules.markdown
    src/platform_win32.cc

2011-08-01
==========

  * windows: remove dependency on rpcrt4 and ole32
