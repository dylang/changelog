2011-11-20
==========

  * test: `stdin` isn't closed after `resume()` and `pause()`
    This works on `node v0.4.12`, but doesn't work on `node v0.6.2`

2011-11-17
==========

  * Add missing rm
  * crypto: use the libuv rwlock API
  * uv: upgrade to e4680cc

2011-11-16
==========

  * Force makefile generation in gyp
  * build: fix gyp xcode project generator
    Only attempt to generate FrameworkPhase output for code targets.
  * build: remove v8-node.gyp
  * crypto: make verify() return true or false, not 1 or 0
    It's what the documentation says it should return.
  * Merge remote branch 'origin/v0.6'
  * Fixes [#2140](https://github.com/joyent/node/issues/2140). Fix illumos build.
  * util: remove the line requiring events
  * v8: add platform-solaris.cc to gyp build
    Re-applies 77e4abbc3e66505af89c57cd7bff555890a33f3f, lost in a V8 upgrade.
  * v8: compile with __C99FEATURES__=1 on sunos
    Exposes INFINITY, isinf(), isfinite(), etc.
    Re-applies d104e5b91cfa3ef3ef846d5a0ab07c0336263a92, lost in a V8 upgrade.
  * test: add 'response body with no headers' http test
    HTTP/0.9 - fails with a parse error
    HTTP/1.0 - works
    HTTP/1.1 - fails with an empty response body
    See [#1711](https://github.com/joyent/node/issues/1711).
  * test: add 'no response headers' http parser test
  * docs: clarify addon docs

2011-11-15
==========

  * Windows: make Buffer and ObjectWrap available to compiled extensions
    Closes GH-2036
  * Fix strange vcbuild "label not found" error
  * tls: make cipher list configurable
    options.ciphers existed but didn't work, the cipher list was effectively
    hard-coded to RC4-SHA:AES128-SHA:AES256-SHA.
    Fixes [#2066](https://github.com/joyent/node/issues/2066).
  * Working on v0.7.0
  * Merge remote branch 'origin/v0.6'
  * Upgrade libuv to 2007eb8
  * buffer: fix minimum values for writeInt*() functions

2011-11-14
==========

  * crypto: fix 'var may be used uninitialized' compiler warnings
  * build: auto-run tools/gyp_node after ./configure

2011-11-13
==========

  * Remove SCONS deprecate WAF
    We keep around WAF for node-waf only.
    We need great diligence by people over the next couple weeks to work out all
    the kinks in the GYP build system. We realize that it is currently several
    times slower than the WAF build. Please lend a hand.
    Fixes [#1504](https://github.com/joyent/node/issues/1504)
    Fixes [#1500](https://github.com/joyent/node/issues/1500)
  * Upgrade V8 to 3.6.6.8
  * Remove str.format to support python2.5.
    Fixes [#2077](https://github.com/joyent/node/issues/2077)
    Fixes [#2108](https://github.com/joyent/node/issues/2108)
    Thanks to David Keegan for debugging and the patch.
  * "Trailer" header should mention "Content-MD5" trailer name in this example.
    Fixes [#2107](https://github.com/joyent/node/issues/2107)

2011-11-12
==========

  * test for REPL .save and .load and documentation updates
  * punycode: Update to v0.1.1.

2011-11-11
==========

  * .load, .save and local scope tab completion
    Fixes [#2063](https://github.com/joyent/node/issues/2063).
    REPLServer.prototype.resetContext:
    Reset the line cache
    REPLServer.prototype.memory (don't know if I like that name, called from finish)
    pushes what cmd's have been executed against it into this.lines
    pushes the "tab depth" for bufferedCommands, in this.lines.level
    REPLServer.prototype.displayPrompt:
    Uses "tab depth" from this.lines.level to adjust the prompt to visually
    denote this depth e.g.
    > asdf = function () {
    … var inner = {
    ….. one:1
    REPLServer.prototype.complete:
    Now notices if there is a bufferedCommand and attempts determine locally
    scoped variables by removing any functions from this.lines and evaling these
    lines in a nested REPL e.g.
    > asdf = function () {
    … var inner = { one: 1};
    … inn\t
    will complete to 'inner' and inner.o\t will complete to 'inner.one'
    If the nested REPL still has a bufferedCommand it will falls back to the
    default.
    ArrayStream is a helper class for the nested REPL to get commands pushed to it.
    new REPLServer('', new ArrayStream());
    Finally added two new REPL commands .save and .load, each takes 1 parameter,
    a file and attempts to save or load the file to or from the REPL
    respectively.
  * Tab Compete test for node REPL
    Currently the REPL only tab completes for globally scoped variables
  * timers: remember extra setTimeout() arguments when timeout==0
    Fixes [#2079](https://github.com/joyent/node/issues/2079).

2011-11-010
===========

  * Now working on v0.6.2
  * Bump version to v0.6.1
  * Add 'make dist-upload'
  * Be consistent with v before version in packages
  * msi changes
    - remove license from MSI
    - adjust path on install
    - add message to the end
  * Add upload command to vcbuild.bat
  * Simplify and move getnodeversion.py
  * debugger: correctly handle source with multi-byte characters
  * Fixes [#2073](https://github.com/joyent/node/issues/2073). Cluster should be silent.
  * test: add more punycode tests
  * punycode: replace with Mathias Bynens's implementation
    The currently bundled library doesn't pass all the test cases from RFC 3492.
    Mathias's library does.
    Home: https://github.com/bestiejs/punycode.js
  * docs: dgram client should be closed in the callback
  * dont use blue for numbers in util.inspect

2011-11-010
===========

  * Improve OSX installer
  * fix msi builder
  * throw from stdout.end and stderr.end
  * Add node.rc with a version resource
    Fixes [#2059](https://github.com/joyent/node/issues/2059)
  * bench: optimize io.c benchmark
    Use static buffers. Most clock ticks were spent in malloc() and free() instead
    of read() and write().
    Fix measurements. Really fast runs would result in bogus results like:
    Wrote 1048576000 bytes in -0.731630s using 8192 byte buffers: -1366.811093mB/s
  * uv: upgrade to 224584c
  * uv: upgrade to 26806e2
  * fs: don't close uninitialized fs.watch handle
    Makes uv_close() assert because the uv_fs_event_t struct contains garbage.

2011-11-08
==========

  * make stdout stream non-destroyable
  * make stderr stream non-destroyable
  * bench: start (NUM_CPUS-1) workers
    The master is a worker too so fork off one less worker.
  * Remove stray NODE_MODULE() semi-colons.

2011-11-07
==========

  * Remove 'report this bug' message from cluster master
  * Fixes [#2047](https://github.com/joyent/node/issues/2047). Fill workers array immediately after fork
  * Upgrade libuv to 196e145
  * process.kill doesn't create error obj correctly
  * Upgrade libuv to 2b7774a
  * Fixes [#2052](https://github.com/joyent/node/issues/2052). Readline get win cols correctly
  * crypto: use the right mutex
  * Upgrade libuv to f1859eb
    Fixes [#2040](https://github.com/joyent/node/issues/2040)
    Fixes https://github.com/joyent/node/commit/0e8a55d2a22b88dc3b9b0165f344602b0fa8c977#commitcomment-69710
  * crypto: make module thread-safe
  * Upgrade V8 to 3.6.6.7
  * Cluster documentation added.
  * test: fs.realpath() should not call its callback twice
    Test case for [#2045](https://github.com/joyent/node/issues/2045).
  * fs: fix fs.realpath on windows to return on error
  * fs: make mkdir() call callback if mode is omitted
    Fixes [#2043](https://github.com/joyent/node/issues/2043).
  * cluster: fix call to undefined function

2011-11-06
==========

  * docs: minor grammar fix in cluster page
  * build: fix race in parallel build
    Run `make clean` first, *then* `make all`
  * Update multi-core text on index.html
  * Remove v0.4 links from index.html
  * build: fix man page install path on the BSDs
    Fixes [#2026](https://github.com/joyent/node/issues/2026).

2011-11-04
==========

  * bench: update static_http_server benchmark to new API
    Fixes [#2016](https://github.com/joyent/node/issues/2016).
  * test: debugger-repl should wait for 'drain' event
  * docs: use markdown for link, not html
  * docs: fix copy/paste error, 0.6.0 is a stable release
  * docs: minor typo fix in child process docs
  * Now working on v0.6.1
  * Bump version to v0.6.0

2011-11-03
==========

  * docs: fix typo
  * uv: upgrade to c468e2a
  * fix test-module-loading on windows
  * update fs_event_wrap.cc to work with new uv_fs_event_init api
  * make updates to work with latest libuv api changes
  * Upgrade libuv to 1997e10b50
  * docs: make std*Stream spawn opts explicitly internal
    Fixes [#1884](https://github.com/joyent/node/issues/1884).
  * docs: fix some minor typos in the fs documentation
    * fchmodSync: replace 'path' with 'fd'
    * lchmod: replace 'fd' with 'path'
    * utimes, futimes, fsync: mark 'callback' as optional
  * bench: add http_simple cluster edition benchmark
  * cluster: add example for message passing
  * upgrade libuv to 82cf0b38c0
    fixes [#2004](https://github.com/joyent/node/issues/2004)
  * cluster: Remove eachWorker, workerCount
    unnecessary
  * new cluster api
