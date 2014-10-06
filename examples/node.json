2014-09-30
==========

  * net: remove use of arguments in Server constructor
    The current implementation uses the arguments object in the Server()
    constructor. Since both arguments to Server() are optional, there was a
    high likelihood of accessing a non-existent element in arguments, which
    carries a performance overhead. This commit replaces the arguments
    object with named arguments.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>

2014-09-16
==========

  * Merge remote-tracking branch 'upstream/v0.12'

2014-09-15
==========

  * Merge remote-tracking branch 'upstream/v0.10' into v0.12
    Conflicts:
    ChangeLog
    deps/v8/src/hydrogen.cc
    lib/http.js
    lib/querystring.js
    src/node_crypto.cc
    src/node_version.h
    test/simple/test-querystring.js
  * Now working on 0.10.33
  * Merge branch 'v0.10.32-release' into v0.10
  * 2014.09.16, Version 0.10.32 (Stable)
    * npm: Update to 1.4.28
    * v8: fix a crash introduced by previous release (Fedor Indutny)
    * configure: add --openssl-no-asm flag (Fedor Indutny)
    * crypto: use domains for any callback-taking method (Chris Dickinson)
    * http: do not send `0rnrn` in TE HEAD responses (Fedor Indutny)
    * querystring: fix unescape override (Tristan Berger)
    * url: Add support for RFC 3490 separators (Mathias Bynens)
  * npm: Update to 1.4.28
  * http: do not send `0\r\n\r\n` in TE HEAD responses
    When replying to a HEAD request, do not attempt to send the trailers and
    EOF sequence (`0\r\n\r\n`). The HEAD request MUST not have body.
    Quote from RFC:
    The presence of a message body in a response depends on both the
    request method to which it is responding and the response status code
    (Section 3.1.2).  Responses to the HEAD request method (Section 4.3.2
    of [RFC7231]) never include a message body because the associated
    response header fields (e.g., Transfer-Encoding, Content-Length,
    etc.), if present, indicate only what their values would have been if
    the request method had been GET (Section 4.3.1 of [RFC7231]).
    fix [#8361](https://github.com/joyent/node/issues/8361)
    Reviewed-By: Timothy J Fontaine <tjfontaine@gmail.com>
  * crypto: use domains for any callback-taking method
    This adds domains coverage for pdbkdf2, pseudoRandomBytes, and randomBytes.
    All others should be covered by event emitters.
    Fixes [#5801](https://github.com/joyent/node/issues/5801).
    Reviewed-By: Timothy J Fontaine <tjfontaine@gmail.com>
  * lib, src: add vm.runInDebugContext()
    Compiles and executes source code in V8's debugger context.  Provides
    a programmatic way to get access to the debug object by executing:
    var Debug = vm.runInDebugContext('Debug');
    Fixes [#7886](https://github.com/joyent/node/issues/7886).
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * dns: include host name in error message if available
    This makes errors more readable and similar to FS errors, which also
    include file name.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-09-14
==========

  * doc: document `process.env` better
    Fixes [#6424](https://github.com/joyent/node/issues/6424).
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * tls: fix encoding in certificate-related functions
    Strings are treated as UTF8 instead of one-byte strings when
    names are processed and when OpenSSL's ..._print functions are used.
    This commit fixes simple/test-tls-peer-certificate-encoding test.
    fix [#8366](https://github.com/joyent/node/issues/8366)
  * doc: fix modules require.resolve documentation
    The behavior of the `node_modules` lookup algorithm was
    changed in [#1177](https://github.com/joyent/node/issues/1177), but the documentation was not updated completely
    to describe the new behavior.
    The pseudocode of the lookup algorithm did not metion that
    `index.json` is tried to be loaded if you require a folder.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-09-08
==========

  * deps: backport 60c316 from v8 trunk
    Original commit message:
    Extend the interceptor setter ASSERT to support the JSGlobalProxy case.
    BUG=v8:3463
    LOG=n
    R=dcarney@chromium.org
    Review URL: https://codereview.chromium.org/415973004
    git-svn-id: https://v8.googlecode.com/svn/branches/bleeding_edge@22589 ce2b1a6d-e550-0410-aec6-3dcde31c8c00
    Signed-off-by: Fedor Indutny <fedor@indutny.com>
    fix [#7969](https://github.com/joyent/node/issues/7969)
  * gyp: fix post-mortem in v0.11
    Expose missing constants and keep symbols on OSX.
  * deps: cherry-pick r21466 from v8 trunk
    Check for cached transition to ExternalArray elements kind.
    See [1] and [2] for details.
    [1] https://code.google.com/p/v8/issues/detail?id=3337
    [2] https://codereview.chromium.org/291193011
    Signed-off-by: Fedor Indutny <fedor@indutny.com>
  * deps: cherry-pick r21297 from v8 trunk
    Changes the return value of PropertyCallbackInfo<T>::This() from
    Local<Value> back to Local<Object>.  See [1] and [2] for background.
    [1] https://groups.google.com/forum/#!topic/v8-users/wP2UcQ4cBW4
    [2] https://codereview.chromium.org/285643008/
    Signed-off-by: Fedor Indutny <fedor@indutny.com>
  * deps: fix up v8 postmortem codegen
    Signed-off-by: Fedor Indutny <fedor@indutny.com>
  * v8: Upgrade 3.26.33 with 14 patches
    V8 3.26.31 has received 14 patches since the upgrade to 3.26.33. Since
    3.26.33 is technically a tag on the 3.27 branch, reverting back to
    3.26.31 would remove now default functionality like WeakMaps. Because of
    that the patches have simply been cherry-picked and squashed.
    Here is a summary of all patches:
    * Fix index register assignment in LoadFieldByIndex for arm, arm64, and
    mips.
    * Fix invalid attributes when generalizing because of incompatible map
    change.
    * Skip write barriers when updating the weak hash table.
    * MIPS: Avoid HeapObject check in HStoreNamedField.
    * Do GC if CodeRange fails to allocate a block.
    * Array.concat: properly go to dictionary mode when required.
    * Keep CodeRange::current_allocation_block_index_ in range.
    * Grow heap slower if GC freed many global handles.
    * Do not eliminate bounds checks for "<const> - x".
    * Add missing map check to optimized f.apply(...).
    * In GrowMode, force the value to the right representation to avoid
    deopts between storing the length and storing the value.
    * Reduce max executable size limit.
    * Fix invalid condition in check elimination effects.
    * Fix off-by-one error in Array.concat slow mode check.
    For more information see: https://github.com/v8/v8/commits/3.26
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * tls: `checkServerIdentity` option
    Allow overriding `checkServerIdentity` function, when connecting to a
    TLS server.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-09-04
==========

  * src: remove Environment::GetCurrentChecked()
    There is only one call site that uses it and that can do the checks
    itself.  Removes ~15 lines of code.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * lib: unexport http.parsers
    Unexport the http.parsers freelist.  It was originally exported by Ryan
    in commit 0003c701 but the commit log doesn't mention why and it's never
    been documented.  It's unclear if there are any users.
    The lifecycle of parser objects changed recently and it seems better to
    not let people shoot themselves in the foot so easily.
    If it turns out there are actually users, we can always re-export it
    again - probably under a slightly different name, to force people to
    update their code to the new way of things.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * lib: http: poison parser references after freeing
    Make it a little harder to slip in use-after-free bugs by nulling out
    references to the parser object after handing it off to freeParser().
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * src: update and expand comments in base-object.h
    It's safe to call BaseObject::object() from your destructor _unless_
    the handle is weak; then it's the weak callback that is calling your
    destructor and the object will have been released by the time the
    destructor runs.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * lib, src: don't make http parser handles weak
    Weak handles put strain on the garbage collector and the parser handle
    doesn't need to be weak in the first place.  This change should improve
    GC times on busy servers a little.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * src: add ClearWrap() to util.h
    Counterpart to Wrap(), clears the previously assigned internal field.
    Will be used in an upcoming commit.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * src: fix handle leak in Parser::Execute()
    Fix a resource leak where an intermediate Local<Context> handle in
    Environment::GetCurrent() got leaked into whatever HandleScope was
    further up the stack.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * lib: improved forEach object performance
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>

2014-09-03
==========

  * test: listen on exclusive port in cluster workers
    Test that listening on exclusive ports with the cluster module works
    correctly.
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>

2014-09-02
==========

  * net,dgram: workers can listen on exclusive ports
    Allow cluster workers to listen on exclusive ports for TCP and UDP,
    instead of forcing all calls to go through the cluster master.
    Fixes: [#3856](https://github.com/joyent/node/issues/3856)
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
    Reviewed-by: Fedor Indutny <fedor@indutny.com>
  * src: be more intelligent about use of "arguments"
    Use 'use strict' when there are named arguments and the arguments object
    is passed to apply(). Also pass named arguments to call() when the named
    argument is modified by the function.
    Suggested in
    https://github.com/joyent/node/pull/8302#issuecomment-54331801
    Confirmed in
    https://github.com/joyent/node/pull/8302#issuecomment-54364818
    Signed-off-by: Trevor Norris <trev.norris@gmail.com>
  * tls: support multiple keys/certs
    Required to serve website with both ECDSA/RSA certificates.
  * tls_wrap: fix use after free
    Do not free TLSCallbacks from StreamWrap. TLSCallbacks is bound to a V8
    object and should be collected by V8's GC.
  * crypto: use less memory for storing keys
    Use `BIO_new_mem_buf` where possible to reduce memory usage and
    initialization costs.
  * configure: add --openssl-no-asm flag
    see [#8062](https://github.com/joyent/node/issues/8062)
    Reviewed-By: Trevor Norris <trev.norris@gmail.com>
  * net: Improve Socket.prototype.write()
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * stream_wrap: Add support to write binary strings
    node::StringBytes::Write() has appropriate support to write strings with
    'binary' encoding. So expose that API through StreamWrap and allow
    inheriting classes to use it.
    Signed-off-by: Trevor Norris <trev.norris@gmail.com>

2014-09-01
==========

  * node,async-wrap: verify domain enter/exit are set
    The REPL global object lazy loads modules by placing getters for each.
    This causes MakeDomainCallback() to be run if a native module is loaded
    from the REPL, but if the domain module hasn't been loaded then there
    are no enter/exit callbacks to be called. Causing an assert() to fail.
    Fix the issue by conditionally running the callback instead of asserting
    it is available. Also add "addon" test to verify the fix.
    Fixes: [#8231](https://github.com/joyent/node/issues/8231)
    Signed-off-by: Trevor Norris <trev.norris@gmail.com>
  * tests: add test for non-integer delay timers.
    PR [#8034](https://github.com/joyent/node/issues/8034) came with a test to make sure that timers expiry is based on
    monotonic time and not on wall-clock time. However, a bug in the
    implementation broke timers with non-integer delays. A fix for this
    issue was provided with PR [#8073](https://github.com/joyent/node/issues/8073), but it didn't come with a test.
    Because [#8073](https://github.com/joyent/node/issues/8073) fixed a subtle issue that could reappear in the future,
    and because the impact of such an issue would be significant, I suggest
    adding this test.
    The test would timeout after 1 minute if the issue was reproduced.
    Otherwise it will run very quickly.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * configure: generate a fully statically linked exec
    Allow to create an executable with no external dynamic libraries, also the
    ones from the system. This is somewhat dependent of the used C lib, for
    example glibc has some internal dynamic libraries loaded by itself, but for
    other ones like eglibc or dietlib, this would produce a true static linked
    executable. This can be of interest for embebers or resource constraints
    platforms, but the main reason for this is to allow to use a Javascript
    file as Linux kernel 'init' on NodeOS.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * cluster: centralize removal from workers list.
    Currently, cluster workers can be removed from the workers list in three
    different places:
    - In the exit event handler for the worker process.
    - In the disconnect event handler of the worker process.
    - In the disconnect event handler of the cluster master.
    However, handles for a given worker are cleaned up only in one of these
    places: in the cluster master's disconnect event handler.
    Because these events happen asynchronously, it is possible that the
    workers list is empty before we even clean up one handle. This makes
    the assert that makes sure that no handle is left when the workers
    list is empty fail.
    This commit removes the worker from the cluster.workers list only when
    the worker is dead _and_ disconnected, at which point we're sure that
    its associated handles are cleaned up.
    Fixes [#8191](https://github.com/joyent/node/issues/8191) and [#8192](https://github.com/joyent/node/issues/8192).
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * crypto: unsigned value can't be negative
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * crypto: avoid memory leak
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * src: reading/owner/onread/onconnection for tcp
    Initialize fields to avoid Hidden Class creation in runtime.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-08-31
==========

  * crypto: wrap ECDH constants in HAVE_OPENSSL
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-08-27
==========

  * tls: add DHE-RSA-AES128-SHA256 to the def ciphers
    `!EDH` is also removed from the list in the discussion of [#8272](https://github.com/joyent/node/issues/8272)
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * tls, crypto: add DHE support
    In case of an invalid DH parameter file, it is sliently discarded. To
    use auto DH parameter in a server and DHE key length check in a
    client, we need to wait for the next release of OpenSSL-1.0.2.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * crypto: introduce ECDH

2014-08-26
==========

  * url: Add support for RFC 3490 separators
    There is no need to split the host by hand in `url.js` – Punycode.js
    takes care of it anyway. This not only simplifies the code, but also
    adds support for RFC 3490 separators (i.e. not just U+002E, but U+3002,
    U+FF0E, and U+FF61 as well).
    Closes [#6055](https://github.com/joyent/node/issues/6055).
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * src: Add function name for .byteLength/.compare
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * querystring: fix unescape override
    Documentation states that `querystring.unescape` may be overridden to
    replace unescaper during parsing. However, the function was only
    being used as a fallback for when the native decoder throws (on a
    malformed URL). This patch moves the call to the native function and
    the try/catch around it into querystring.unescape then has the parser
    always invoke it, so that an override will always be used.
    Fixes [#4055](https://github.com/joyent/node/issues/4055)
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-08-25
==========

  * crypto: allow padding in RSA methods
    Reviewed-By: Trevor Norris <trevnorris@gmail.com>
  * gyp: use --export-dynamic on FreeBSD
    Should help addons use OpenSSL functions.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * deps: enable ARM assembly for OpenSSL
    fix [#8062](https://github.com/joyent/node/issues/8062)

2014-08-22
==========

  * crypto: fix memory leak in Connection::New
    Do not create `SSL` instance twice, `SSL_new` is called from `SSLBase`
    constructor anyway.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-08-21
==========

  * deps: fix up v8 after fd80a3
    fd80a31e0697d6317ce8c2d289575399f4e06d21 has introduced a segfault
    during redundant boundary check elimination ([#8208](https://github.com/joyent/node/issues/8208)).
    The problem consists of two parts:
    1. Abscense of instruction iterator in
    `EliminateRedundantBoundsChecks`. It was present in recent v8, but
    wasn't considered important at the time of backport. However, since
    the function is changing instructions order in block, it is
    important to not rely at `i->next()` at the end of the loop.
    2. Too strict ASSERT in `MoveIndexIfNecessary`. It is essentially a
    backport of a45c96ab from v8's upstream. See
    https://github.com/v8/v8/commit/a45c96ab for details.
    fix [#8208](https://github.com/joyent/node/issues/8208)

2014-08-20
==========

  * http: avoid create difference hidden class
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>

2014-08-19
==========

  * net,stream: add isPaused, don't read() when paused
    net Sockets were calling read(0) to start reading, without
    checking to see if they were paused first. This would result
    in paused Socket objects keeping the event loop alive.
    Fixes [#8200](https://github.com/joyent/node/issues/8200)
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * dns: throw if hostname is not string or falsey
    Fix assertion failure from poor argument parsing logic introduced in
    6ea5d16. Add tests to make sure arguments are properly parsed.
    Fixes: 6ea5d16 "dns: always set variable family in lookup()"
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>

2014-08-18
==========

  * Now working on 0.10.32
  * Merge branch 'v0.10.31-release' into v0.10
  * node: add missing Isolate::Scope at startup
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * src: add missing Isolate arguments
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * 2014.08.19, Version 0.10.31 (Stable)
    * v8: backport CVE-2013-6668
    * openssl: Update to v1.0.1i
    * npm: Update to v1.4.23
    * cluster: disconnect should not be synchronous (Sam Roberts)
    * fs: fix fs.readFileSync fd leak when get RangeError (Jackson Tian)
    * stream: fix Readable.wrap objectMode falsy values (James Halliday)
    * timers: fix timers with non-integer delay hanging. (Julien Gilli)
  * npm: Update to v1.4.23

2014-08-17
==========

  * http: fix bailout for writeHead
    Reported-by: Jackson Tian <shyvo1987@gmail.com>
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * gyp: preserve v8dbg syms on freebsd too
  * Revert "gyp: preserve v8dbg syms on freebsd too"
    This reverts commit 181b8a5d3af2e14c50dd32e1f16bf553fd3c7050.

2014-08-16
==========

  * gyp: preserve v8dbg syms on freebsd too

2014-08-13
==========

  * deps: backport 5f836c from v8 upstream
    Original commit message:
    Fix Hydrogen bounds check elimination
    When combining bounds checks, they must all be moved before the first load/store
    that they are guarding.
    BUG=chromium:344186
    LOG=y
    R=svenpanne@chromium.org
    Review URL: https://codereview.chromium.org/172093002
    git-svn-id: https://v8.googlecode.com/svn/branches/bleeding_edge@19475 ce2b1a6d-e550-0410-aec6-3dcde31c8c00
    fix [#8070](https://github.com/joyent/node/issues/8070)

2014-08-12
==========

  * test: fix dns test
    Fix a few issues in test/internet/test-dns.js:
    - 'hint' should be 'hints'
    - reverse name lookup is not guaranteed to return 'localhost'
    - V4MAPPED hint requires IPV6 address family
    Signed-off-by: Timothy J Fontaine <tjfontaine@gmail.com>
  * tests: don't assume IPv4 only in remote addr tests
    Tests in test-net-remote-address-port.js assume that client and server
    sockets always use IPv4. However, depending on the OS and the network
    interfaces setup, this is not true. This change makes the test consider
    that both IPv4 or IPv6 sockets are valid
    Fixes [#8096](https://github.com/joyent/node/issues/8096).
    Signed-off-by: Timothy J Fontaine <tjfontaine@gmail.com>
  * test: check ipv6 support before testing it
    fix [#7983](https://github.com/joyent/node/issues/7983)
    fix [#8049](https://github.com/joyent/node/issues/8049)
    Signed-off-by: Timothy J Fontaine <tjfontaine@gmail.com>
  * tests: do not hardcode service name in test-dns.
    Instead of hard-coding http service name in test-dns, retrieve it from
    /etc/services. This is not ideal, but it's still better than hard-coding
    it.
    Fixes [#8047](https://github.com/joyent/node/issues/8047).
    Signed-off-by: Timothy J Fontaine <tjfontaine@gmail.com>
  * tests: fix invalid hints flags dns test.
    1 is actually a valid flag on SmartOS. More generally, hints flags'
    values are defined by the underlying native flags, and these can have
    different values on different systems.
    Using (ADDRCONFIG | V4MAPPED) + 1 ensure that the flag will be invalid,
    since it will always be different from ADDRCONFIG, V4MAPPED, ADDRCONFIG
    | V4MAPPED,  0 and any other combination of even flags.
    Signed-off-by: Timothy J Fontaine <tjfontaine@gmail.com>
  * openssl: fix keypress requirement in apps on win32
    Original source:
    http://openssl.6102.n7.nabble.com/PATCH-s-client-Fix-keypress-requirement-with-redirected-input-on-Windows-td46787.html
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * deps: update openssl to v1.0.1i
  * src: change kIsolateSlot to 3
    The slot 0 and 1 had already been taken by "gin" and "blink" in Chrome,
    and the size of isolate's slots is 4 by default, so using 3 should hopefully
    make node work independently when embedded into other application.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * src: require EventEmitter via NativeModule
    Fixes a recent change causing test-process-kill-pid.js to fail.
    Fixes: 931cbc1 "lib: don't use emitter.listeners(type).length"
    Signed-off-by: Trevor Norris <trev.norris@gmail.com>
  * dgram: remove new keyword from errnoException
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * doc: typo fixes on stream, tls and http
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>

2014-08-11
==========

  * querystring: remove prepended ? from query field
    Fixes an issue that caused the first querystring to be parsed prepending
    a "?" in the first variable name on relative urls with no #fragment
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * lib: don't use emitter.listeners(type).length
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>

2014-08-10
==========

  * node: set names for prototype methods
    Fix issue where output of a native prototype method would simply print
    [Function]. It will now print [Function: name].
    Signed-off-by: Trevor Norris <trev.norris@gmail.com>
  * crypto: add RSA encryption
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * windows: fix memory leak in WinapiErrnoException
    Fix https://github.com/joyent/node/issues/2341
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-08-07
==========

  * dns: always set variable family in lookup()
    Regression occurred that prevented the variable "family" from being set
    properly when the lookup() function's "options" parameter was passed a
    number instead of an object.
    Also included a sanity check by setting the default value of "family" to
    a value that will not pass verification.
    Fixes: e643fe4 "dns: fix GetAddrInfo assert"
    Reviewed-by: Alexis Campailla <alexis@janeasystems.com>
    Reviewed-by: Trevor Norris <trev.norris@gmail.com>
  * openssl: fix keypress requirement in apps on win32
    Original source:
    http://openssl.6102.n7.nabble.com/PATCH-s-client-Fix-keypress-requirement-with-redirected-input-on-Windows-td46787.html
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
  * build: linking CoreFoundation framework for OSX
    Linking CoreFoundation for OSX is needed for OSX debugging features to
    function properly.
    For instance Instruments cannot record Heap Allocations if the
    CoreFoundation is not linked.
    Reviewed-By: Fedor Indutny <fedor@indutny.com>

2014-08-06
==========

  * test: fix test-process-kill-pid on Windows
    Disabling the part of the test that relies on dispatching SIGHUP,
    because sending SIGHUP is not supported on Windows.
    Signed-off-by: Timothy J Fontaine <tjfontaine@gmail.com>
  * doc: document max `new Buffer(size)`
    Signed-off-by: Timothy J Fontaine <tjfontaine@gmail.com>
  * Merge remote-tracking branch 'upstream/v0.12'
  * Merge remote-tracking branch 'upstream/v0.10' into v0.12
    Conflicts:
    ChangeLog
    Makefile
    deps/uv/ChangeLog
    deps/uv/build.mk
    deps/uv/src/unix/darwin.c
    deps/uv/src/unix/getaddrinfo.c
    deps/uv/src/version.c
    deps/v8/src/checks.h
    deps/v8/src/isolate.h
    lib/cluster.js
    lib/module.js
    lib/timers.js
    lib/tls.js
    src/node_version.h
  * tests: fix child-process-fork-dgram on SmartOS.
    Send messages until both the parent and the child process have received
    at least one message. If at least one of them doesn't receive any
    message, the test runner will make the test timeout.
    Fixes [#8046](https://github.com/joyent/node/issues/8046).
  * node: Now working on v0.13.0
  * doc: document arguments for 'error' event on a stream
    Fixes [#6361](https://github.com/joyent/node/issues/6361).
  * fs: fix fs.readFileSync fd leak when get RangeError
  * src: handle UV_EAGAIN in TryWrite
    Reviewed-By: Fedor Indutny <fedor@indutny.com>
