2011-08-06
==========

  * build: don't try to `ls -lh` executables that don't exist
    Avoids `ls: cannot access build/debug/node_g: No such file or directory`.
    Not an actual error but it confuses people.
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
  * Upgrade libuv to 2e9a743
  * windows: set stdio streams to binary mode
  * Partial fix for test-child-process.cwd on windows
  * win: fix test-child-process-exec-cwd
  * win2k3: fix test-child-process-env
  * Upgrade libuv to c35548a
  * test: add targets `test-http2` and `test-all-http2`
    Passes `--use-http2` to node. Fixes [#1430](https://github.com/joyent/node/issues/1430).
  * Upgrade libuv to 404d697
  * child_process_uv: don't attempt to pass test-child-process-deprecated-api
  * Add test-tls-securepair-server to test-uv
  * child_process_uv: fix test-child-process-stdin and -ipc
  * cmake: Update for libuv.
  * Upgrade libuv to 5af7423f
  * fix test-child-process-env on windows
  * Add a few more asserts to test/simple/test-child-process-stdin.js
  * Upgrade libuv to b700896
  * windows: Fix test-module-load-list
  * Remove debug code
  * child_process_uv: Handle spawn errors
  * Upgrade libuv to 023f99a

2011-07-31
==========

  * link to rpcrt4 and ole32 on win32
  * Upgrade libuv to e9bee51
  * child_process_uv: fix test/simple/test-child-process-env
  * child_process_uv: fix simple/test-child-process-cwd
  * child_process_uv: add exec, fix simple/test-child-process-exec-cwd
  * Forgot to add child_process_uv.js
  * initial pass at lib/child_process_uv.js

2011-07-30
==========

  * Add %% escape to util.format()
    Fixes [#1273](https://github.com/joyent/node/issues/1273).

2011-07-29
==========

  * Add stdlib include for free(), fixing build on linux after f01b241
  * add wrapper for uv_spawn
    process.binding('process_wrap')
  * util: add sprintf-like format() function
    Fixes [#1407](https://github.com/joyent/node/issues/1407).
  * Add support for TLS SNI
    Fixes [#1411](https://github.com/joyent/node/issues/1411)
  * Upgrade libuv to 7108ca88
  * jslint cleanup: path.js, readline.js, repl.js, tls.js, tty_win32.js, url.js
  * Revert "AMD compatibility for node"
    This reverts commit 9967c369c9272335bb0343558673b689725c6d7c.
    Conflicts:
    test/simple/test-module-loading.js
  * Doc improvements
    related to [#1391](https://github.com/joyent/node/issues/1391),
    [#1415](https://github.com/joyent/node/issues/1415).
  * Fix http.ClientRequest crashes if end() was called twice
    Fixes [#1417](https://github.com/joyent/node/issues/1417).
    Fixes [#1223](https://github.com/joyent/node/issues/1223).

2011-07-28
==========

  * crypto: dispose persistent properties on class destruction

2011-07-27
==========

  * Fix test-module-load-list for use-uv
  * Lazy load a few modules
  * Add process.moduleLoadList for better startup transparency
  * Don't always enable debug on startup
    Improves startup time. Problem introduced in
    4ab5476e89266194d82215214a1a870c9b79e295
  * Speed up startup time
    Reverts 2a05fe784d.
  * Remove pkg-conf file
  * Fix memleak in libeio.
  * uv: upgrade to fc7bc2b
  * Add missing parentheses in buffer docs.
    Fixes [#1405](https://github.com/joyent/node/issues/1405).

2011-07-26
==========

  * wrap: upgrade pipe_wrap and tcp_wrap to new libuv API
  * stdio binding + javascript to enable process.stdin.listen()
  * uv: upgrade to a1adfe3
  * Fix crypto encryption/decryption with Base64.
    Fixes [#738](https://github.com/joyent/node/issues/738).
    Fixes [#1205](https://github.com/joyent/node/issues/1205).
  * Include "platform.h", not <platform.h> - conflicts with system headers
    Fixes [#1003](https://github.com/joyent/node/issues/1003).
  * Fix test-net-stream.js
    I broke this in 09ee293.
  * http: add --use-http2 switch
  * http: make http and http2 co-exist
    http2 is currently disabled pending addition of a --use-http2 switch
  * doc: http2 documentation
  * http: http2 implementation
  * Emit 'close' after all connections have closed
    Fixes [#1383](https://github.com/joyent/node/issues/1383)

2011-07-25
==========

  * cli: don't print result of --eval
    Fixes [#572](https://github.com/joyent/node/issues/572).
  * Doc improvements and change argument name.
    Fixes [#1318](https://github.com/joyent/node/issues/1318).
  * eio: remove trailing comma from enumerations
    Fixes compile-time error in strict mode. Fixes [#567](https://github.com/joyent/node/issues/567).
  * Docs for Socket::bytesRead, Socket::bytesWritten
  * Add Socket::bytesRead, Socket::bytesWritten

2011-07-24
==========

  * Finish removing require.paths
    Fix require() completion bug in repl, and correct man output
