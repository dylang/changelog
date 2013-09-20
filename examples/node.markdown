2013-09-18
==========

  * net: add a port validation to `connect`
Fix "Assertion failed" when trying to connect to non-int ports:
    Assertion failed: (args[2]->Uint32Value()), function Connect,
    file ../src/tcp_wrap.cc, line 379.
    Abort trap: 6

2013-09-17
==========

  * deps: update v8 to 3.20.17.7

2013-09-13
==========

  * contextify: fix ContextifyContext leak
Apparently, context->Global() won't be destroyed if the context itself
isn't marked as weak and independent.
Also, the weakness flag should be cleared once the weak callback is
executed, otherwise we'll get crashes in Debug builds.
fix [#6115](https://github.com/joyent/node/issues/6115) and [#6201](https://github.com/joyent/node/issues/6201)
  * http: don't pass the request options to Agent
The `options` that were being passed in before here are specific to a
single request, which kinda defeats the purpose of using an Agent in the
first place.
On a worse note, these `options` have not yet been "processed" by the
`http.ClientRequest` class, so if `port: null` is set (like it is as the
result of a `url.parse()` call), then they take preference over the
processed values since the agent's "options" get mixed in last in the
`createSocket()` function.
Fixes [#6197](https://github.com/joyent/node/issues/6197).
Fixes [#6199](https://github.com/joyent/node/issues/6199).
Closes [#6231](https://github.com/joyent/node/issues/6231).

2013-09-11
==========

  * contextify: dealloc only after global and sandbox
Functions created using: `vm.runInNewContext('(function() { })')` will
reference only `proxy_global_` object and not `sandbox_`. Thus in case,
where there're no references to sandbox (such as in example above),
`ContextifyContext` will be destroyed and use-after-free might happen.

2013-09-08
==========

  * buffer: optimize common encoding cases
String#toLowerCase() is incredibly slow and was costing a 15-30%
performance hit for Buffers less than 1KB. Now instead it'll attempt to
find the correct encoding directly from the passed encoding, only then
afterwards it'll lowercase.
The optimization for not passing any encoding at all is still at the top
of the method.
At most this may add 10% performance hit for passing a mixed case
encoding.
  * test: move slow tests to test/pummel/
Slowness being somewhat subjective but determined by running the
test suite a few times and picking off everything that consistently
clocks in at 2 seconds or more.
Honorable mention for simple/test-tls-server-large-request, it often
runs for 10 (!) seconds or more.

2013-09-06
==========

  * Merge remote-tracking branch 'ry/v0.10'
  * npm: upgrade to 1.3.11

2013-09-05
==========

  * process: use exit 1 for uncaughtException
Since it is Unix tradition to use exit code 1 for general-purpose script
bail-out, and the way of doing that in Node is to throw an exception and
not catch it, it makes the most sense to exit with 1 when an exception
goes uncaught.
Move the `Invalid Argument` exit to 9, so that it's something specific,
and clear that it's a node internal error.
Also, document the exit codes that we use.
  * process: Fix regression from a5dba82
Respect numeric string args to process.exit(code)
  * process: Use exit code 8 consistently
This should always be used in the case of an uncaughtException
  * process: Add exitCode property
This allows one to set a specific status code, while still letting the
process exit gracefully once all async operations are completed.
  * src: fix multi-base class ObjectWrap::Unwrap<T>()
Fix pointer unwrapping when T is a class with more than one base class.
Before this commit, the wrapped void* pointer was cast directly to T*
without going through ObjectWrap* first, possibly leading to a class
instance pointer that points to the wrong vtable.
This change required some cleanup in various files; some classes
used private rather than public inheritance, others didn't derive
from ObjectWrap at all...
Fixes [#6188](https://github.com/joyent/node/issues/6188).

2013-09-04
==========

  * src: add multi-context support
This commit makes it possible to use multiple V8 execution contexts
within a single event loop.  Put another way, handle and request wrap
objects now "remember" the context they belong to and switch back to
that context when the time comes to call into JS land.
This could have been done in a quick and hacky way by calling
v8::Object::GetCreationContext() on the wrap object right before
making a callback but that leaves a fairly wide margin for bugs.
Instead, we make the context explicit through a new Environment class
that encapsulates everything (or almost everything) that belongs to
the context.  Variables that used to be a static or a global are now
members of the aforementioned class.  An additional benefit is that
this approach should make it relatively straightforward to add full
isolate support in due course.
There is no JavaScript API yet but that will be added in the near
future.
This work was graciously sponsored by GitHub, Inc.
  * test: don't call process.exit() in debugger tests
process.exit() tends to hide bugs, both in tests and node.js.
Rewrite the tests so that the event loop exits naturally.
  * Merge remote-tracking branch 'ry/v0.10'
Conflicts:
	deps/uv/ChangeLog
	deps/uv/src/version.c
	deps/uv/src/win/fs.c
	lib/_stream_transform.js
  * npm: upgrade to v1.3.10
  * handle_wrap: properly don't abort on unwrap
From commit 756ae2c all the WRAP/UNWRAP were moved to a single location
for ease of use. In a single location NO_ABORT should have been used but
wasn't. This caused HandleWrap::Close to abort. Below is the applicable
code change as demonstration there was no abort specified when
unwrapping the object.
 void HandleWrap::Close(const FunctionCallbackInfo<Value>& args) {
    HandleScope scope(node_isolate);
     -  HandleWrap *wrap = static_cast<HandleWrap*>(
     -      args.This()->GetAlignedPointerFromInternalField(0));
     +  HandleWrap* wrap;
     +  UNWRAP(args.This(), HandleWrap, wrap);
Also included a test that will reproduce the abort.
  * stream: objectMode transforms allow falsey values
Closes [#6183](https://github.com/joyent/node/issues/6183)
  * src: fix solaris 10 build error
Stop gcc from getting confused, explicitly cast the return value from
getuid() and getgid() to uint32_t.  Fixes the following build error:
    ../src/node.cc: In function 'void node::GetUid(const
    v8::FunctionCallbackInfo<v8::Value>&)':
    ../src/node.cc:1552:37: error: call of overloaded 'Set(uid_t)' is
    ambiguous
    ../src/node.cc:1552:37: note: candidates are:
    ../deps/v8/include/v8.h:5939:6: note: void
    v8::ReturnValue<T>::Set(bool) [with T = v8::Value]
    ../deps/v8/include/v8.h:5909:6: note: void
    v8::ReturnValue<T>::Set(double) [with T = v8::Value]
    ../deps/v8/include/v8.h:5915:6: note: void
    v8::ReturnValue<T>::Set(int32_t) [with T = v8::Value, int32_t = int]
    ../deps/v8/include/v8.h:5926:6: note: void
    v8::ReturnValue<T>::Set(uint32_t) [with T = v8::Value, uint32_t =
    unsigned int]
Fixes [#6182](https://github.com/joyent/node/issues/6182).
  * test: move slow test from simple/ to pummel/
Move simple/test-http-many-keep-alive-connections to the pummel/
directory, it takes about 2.5 seconds to complete.
  * uv: upgrade to v0.10.16
  * tls: socket.renegotiate(options, callback)
This utility function allows renegotiaion of secure connection after
establishing it.
fix [#2496](https://github.com/joyent/node/issues/2496)

2013-09-03
==========

  * Merge remote-tracking branch 'upstream/v0.10'
Conflicts:
	ChangeLog
	src/node_version.h
  * blog: Post for v0.11.7
  * Now working on 0.11.8
  * Merge branch 'v0.11.7-release'
  * 2013.08.21, Version 0.11.7 (Unstable)
* uv: upgrade to v0.11.13
* v8: upgrade to 3.20.17
* buffer: adhere to INSPECT_MAX_BYTES (Timothy J Fontaine)
* buffer: fix regression for large buffer creation (Trevor Norris)
* buffer: don't throw if slice length too long (Trevor Norris)
* buffer: Buffer(buf) constructor copies into the proper buffer (Ben Noordhuis)
* cli: remove --max-stack-size (Ben Noordhuis)
* cli: unknown command line options are errors (Ben Noordhuis)
* child_process: exec accept buffer as an encoding (Seth Fitzsimmons)
* crypto: make randomBytes/pbkdf2 callbacks domain aware (Ben Noordhuis)
* domain: deprecate domain.dispose(). (Forrest L Norvell)
* fs: Expose birthtime on stat objects (isaacs)
* http: Only send connection:keep-alive if necessary (isaacs)
* repl: Catch syntax errors better (isaacs, Nathan Rajlich)
* stream: change default highWaterMark for objectMode to 16 (Mathias Buus)
* stream: make setEncoding/pause/resume chainable (Julian Gruber, isaacs)
* util: pass opts to custom inspect functions (Timothy J Fontaine)
* vm: rewritten to behave like Contextify (Domenic Denicola)
  * blog: Post for v0.10.18
  * Now working on 0.10.19
  * Merge branch 'v0.10.18-release' into v0.10
  * http: Only send connection:keep-alive if necessary
In cases where the Agent has maxSockets=Infinity, and
keepAlive=false, there's no case where we won't immediately close the
connection after the response is completed.
Since we're going to close it anyway, send a `connection:close` header
rather than a `connection:keep-alive` header.  Still send the
`connection:keep-alive` if the agent will actually reuse the socket,
however.
Closes [#5838](https://github.com/joyent/node/issues/5838)
  * stream: return this from pause()/resume()
  * stream: make setEncoding chainable
  * repl: Simplify paren wrap, continuation-detection
This simplifies the logic that was in isSyntaxError, as well as the
choice to wrap command input in parens to coerce to an expression
statement.
1. Rather than a growing blacklist of allowed-to-throw syntax errors,
just sniff for the one we really care about ("Unexpected end of input")
and let all the others pass through.
2. Wrapping {a:1} in parens makes sense, because blocks and line labels
are silly and confusing and should not be in JavaScript at all.
However, wrapping functions and other types of programs in parens is
weird and required yet *more* hacking to work around.  By only wrapping
statements that start with { and end with }, we can handle the confusing
use-case, without having to then do extra work for functions and other
cases.
This also fixes the repl wart where `console.log)(` works in the repl,
but only by virtue of the fact that it's wrapped in parens first, as
well as potential side effects of double-running the commands, such as:
    > x = 1
    1
    > eval('x++; throw new SyntaxError("e")')
    ... ^C
    > x
    3
  * repl: treat "Assignment to const" as syntax error
Adding a new `repl-harmony` test file here because adding the
`--use_strict --harmony` flags on the main repl test file was causing
lots of unrelated failures, due to global variable assignments and
things like that. This new test file is based off of the original
repl.js test file, but has a lot of the tests stripped out. A test case
for this commit is included though.
Fixes [#6132](https://github.com/joyent/node/issues/6132).
  * repl: Catch syntax errors better
Replace the growing list of 'isSyntaxError' whackamole conditions with a
smarter approach.  This creates a vm Script object *first*, which will
parse the code and raise a SyntaxError right away.
We still do need the test function, but only because strict mode syntax
errors are not recoverable, and should be raised right away.  Really, we
should probably *only* continue on "unexpected end of input" SyntaxErrors.
Also fixes a very difficult-to-test nit where the '...' indentation is
not properly cleared when you ^C out of a syntax error.
Closes [#6093](https://github.com/joyent/node/issues/6093)
  * 2013.09.04, Version 0.10.18 (Stable)
* uv: Upgrade to v0.10.15
* stream: Don't crash on unset _events property (isaacs)
* stream: Pass 'buffer' encoding with decoded writable chunks (isaacs)
  * uv: upgrade to v0.11.13
This commit changes src/tcp_wrap.cc and src/udp_wrap.cc just enough to
get by (i.e. to compile and function correctly.)
The new libuv API allows for more cleanup and deduplication but I'm
saving that for another day.
  * doc: fix writable.write link
  * build: remove unused Carbon dependency
Libuv as of joyent/libuv@d48168a no longer has link-time dependencies
on the Carbon framework or any other frameworks.

2013-09-02
==========

  * string_bytes: use extern for length and write utf8
If the string is external then the length can be quickly retrieved. This
is especially faster for large strings that are being treated as UTF8.
Also, if the string is external then there's no need for a full
String::WriteUtf8 operation. A simple memcpy will do.

2013-09-01
==========

  * process: Add internal _rawDebug() method
This is useful when we need to push some debugging messages out to
stderr, without going through the Writable class, or triggering any kind
of nextTick or callback behavior.
  * src: Remove outdated comment re assert()
It's a normal function now, not a macro.
  * uv: upgrade to v0.11.12
* upgrade deps/uv/ to v0.11.12.
* update files in src/ after a libuv API change.
  * src: clean up CLI argument parser
* Exit with an error message when the option is not a node or V8 option.
* Remove the option_end_index global.  Needs to happen anyway for
  the multi-context work, might as well land it in master now.
* Add a smidgen of const-correctness.
* Pay off a few years of accrued technical debt.
  * test: don't use --max-stack-size=0
--max-stack-size was removed in 3a87b31, use --stack-size instead.
What's more, a zero length stack will likely crash the process.

2013-08-31
==========

  * test: speed up simple/test-fs-watch
Don't wait a full second before starting the watcher, 10 ms ought to be
more than enough time.  Reduces running time from 1250 ms to 250 ms on
my system.

2013-08-30
==========

  * Merge remote-tracking branch 'ry/v0.10'
  * benchmark: Fix execArgv handling
Bug in 01f3b46 causes the same benchmark to be run repeatedly.
Not so useful for the compare scripts.
  * benchmark: Support passing v8 flags to benchmarks
The better to test --use-strict effects on performance.
(Spoiler: it has no measurable effect on performance.)

2013-08-29
==========

  * Revert "src: call uv_loop_delete() on exit in debug mode"
Don't call uv_loop_delete() until we've figured out a way to gracefully
close open handles.  See also commit 4915884 and its subsequent revert
in commit 980cbd5.
This reverts commit 556b890ad91780c52c77dccaddcf69beb8184e27.
  * Revert "src: close libuv handles on exit"
This change is not entirely ready for prime time: it's making ~50 tests
fail on Windows, mostly due to timeouts.  It's up for debate who is
at fault here: node.js or libuv.
It does however expose a libuv bug on OS X, where the event loop
sometimes gets stuck in uv__io_poll() when there is a single
UV_SHUTDOWN request left in the queue.  Needs further investigation.
This reverts commit 4915884da69814bd4daab22393919a628c9ecf23.
  * test: move smalloc segfault tests to pummel
These tests take a while to complete, and the issue only potentially
appears under heavy load.
  * src: close libuv handles on exit
Commit 556b890 added a call to uv_loop_delete() with the intent of
catching handle lifecycle bugs.  It worked because it exposed one:
    process.on('exit', function() {
      console.log('bye');  // Asserts.
    });
When run, it asserts with the following message:
    Assertion failed: (!uv__has_active_reqs(loop)), function
    uv__loop_delete, file ../deps/uv/src/unix/loop.c, line 150.
That's because libuv as of joyent/libuv@3f2d4d5 checks that there are
no in-flight requests when the event loop is destroyed.  In the test
case above, the write request for the string hasn't completed yet by
the time node.js exits: the string itself has most likely been written
but libuv hasn't had the opportunity to return the write request to
node.js.
That's why this commit adds a cleanup step right before exit where it
explicitly closes all open handles, then waits until the event loop
exits naturally.
Named pipes (UNIX domain sockets) are shut down first in order to flush
pending write requests.  Should go some way towards fixing the Windows
issue where output on stdout/stderr sometimes gets truncated.
Fixes joyent/libuv[#911](https://github.com/joyent/node/issues/911).

2013-08-28
==========

  * uv: upgrade to v0.11.11
  * src: remove unused Persistent<FunctionTemplate>
  * crypto: remove NodeBIO::GetMethod()
Remove NodeBIO::GetMethod() and replace calls to BIO_new() with calls
to the new NodeBIO::New() function.
This commit basically reshuffles some code in order to make it explicit
that the NodeBIO BIO_METHOD is const.
  * crypto: make root_cert_store variable extern
Before this commit it was declared static (in a header file!), meaning
it got duplicated in every file that includes it.
A few duplicated pointers is not the end of the world but it introduces
a lot of potential for confusion because root_cert_store in file A is
not the root_cert_store in file B.
Moral of the story: don't declare static variables in header files.
  * crypto: remove misleading comment
  * crypto: make error buffer non-static
Doesn't matter now but it will if/when we have support for multiple
threads.
  * vm: document vm2's changes.
- The caveats no longer apply.
- Document options arguments, including `displayErrors` and the
  different things it means in each place.
- Re-did examples to be more on point, e.g. `runInContext` example
  runs multiple scripts in the same context.
- Documented how `vm.createContext`s meaning has substantially changed,
  and is now more of a "contextifier" than a "creator."
- Reordered vm functions to be readable in order; the concept of
  contextifying needs to come before `runInContext` and
  `runInNewContext`.
- Documented new `vm.isContext`.
- Documented the `vm.Script` constructor, instead of `createScript`,
  since factory methods are silly and we wanted to document the class's
  methods anyway.
- Documented `script.runInContext`.
- Change stability to stable, if I may be so bold.
  * vm: update API to use options argument
Passing a filename is still supported in place of certain options
arguments, for backward-compatibility, but timeout and display-errors
are not translated since those were undocumented.
Also managed to eliminate an extra stack trace line by not calling
through the `createScript` export.
Added a few message tests to show how `displayErrors` works.

2013-08-27
==========

  * pipe_wrap: squelch integer type conversion warning
  * timer_wrap: Timer.now always update loop time
In `Timer.now` always update the loop time by calling uv_update_time.
Previously we were trying to cache the loop time to prevent extra
syscalls. While a noble goal, it can cause timers to fire early in
certain circumstances. Especially seen in cpu bound work loads or work
loads with synchronous file operations.
  * Merge remote-tracking branch 'ry/v0.10'
Conflicts:
	AUTHORS
	ChangeLog
	deps/uv/ChangeLog
	deps/uv/include/uv-darwin.h
	deps/uv/src/unix/darwin.c
	deps/uv/src/unix/fsevents.c
	deps/uv/src/version.c
	lib/_stream_writable.js
	src/node_version.h
  * stream: check _events before _events.error
This fixes the regression introduced by 5458079, which breaks the
net/net-pipe benchmark script.
Closes [#6145](https://github.com/joyent/node/issues/6145)
  * crypto: make randomBytes/pbkdf2 cbs domain aware
Make the crypto.randomBytes() and crypto.pbkdf2() callback functions
run inside the current domain (if any.)
Fixes [#3965](https://github.com/joyent/node/issues/3965).
  * vm: add isContext; prevent double-contextifying
Previously, calling `vm.createContext(o)` repeatedly on the same `o`
would cause new C++ `ContextifyContext`s to be created and stored on
`o`, while the previous resident went off into leaked-memory limbo.
Now, repeatedly trying to contextify a sandbox will do nothing after
the first time.
To detect this, an independently-useful `vm.isContext(sandbox)` export
was added.
  * vm: use MakeWeak to fix leaking contexts
This is always something you should do when using `SetHiddenValue`,
apparently. Fixes [#6115](https://github.com/joyent/node/issues/6115). Thanks @tjfontaine for the tips.
  * vm: rip out ObjectWrap from ContextifyContext
This was a remnant of the original Contextify code, wherein
ContextifyContext was a user-exposed object. In vm, it is not, so all
of the ObjectWrap and function-template stuff for the ContextifyContext
constructor is now unnecessary.

2013-08-26
==========

  * doc: Adjust util stability index to 'API Frozen'
Closes [#6087](https://github.com/joyent/node/issues/6087)
  * doc: mark repl as stable
Closes [#6090](https://github.com/joyent/node/issues/6090)
  * stream: change default hwm for objectMode to 16
  * child_process: Avoid extra copy for string stdio
There's no need to create a new Buffer instance if we're just going to
immediately call toString() at the end anyway.  Better to create a
string up front, and setEncoding() on the streams, and do a string
concatenation instead.
  * child_process: Callback with Buffers from exec
Only return strings when encoding is not null.
  * v8: upgrade to 3.20.17
  * stream: Pass 'buffer' encoding to decoded writables
Since the encoding is no longer relevant once it is decoded to a Buffer,
it is confusing and incorrect to pass the encoding as 'utf8' or whatever
in those cases.
Closes [#6119](https://github.com/joyent/node/issues/6119)
  * domains: deprecate domain.dispose().
Follows @isaacs's recommendations in joyent/node[#5018](https://github.com/joyent/node/issues/5018). Includes some
updates to documentation but not examples.
Conflicts:
	lib/domain.js
  * fs: Expose birthtime on stat objects
Just do the best we can with whatever libuv gives us.
Also, document the semantics of `ctime` and the compatibility with
Windows.
  * doc: Small update of readme for Windows users
  * lib: Add missing copyright notices
  * src: remove two pointless globals from node.cc
De-globalize use_npn and use_sni, they're only used in GetFeatures().
  * src: call uv_loop_delete() on exit in debug mode
Should make tracing with valgrind a little easier on the eye and
possibly help expose libuv handle lifecycle issues.
  * src: remove --max-stack-size option
Ad-hoc duplicate of V8's --stack-size option.  Superfluous in other
words.  Remove it.
  * cares_wrap: drop UV_HANDLE_FIELDS from ares_task_t
UV_HANDLE_FIELDS is a libuv implementation detail.  The ares_task_t
struct only uses the uv_loop_t* field so be explicit about that.

2013-08-25
==========

  * src: fix up unused/unordered imports
  * buffer: fix assert fail from JS API
Length arguments passed to SlowBuffer were coerced to Int32, not Uint32,
so passing a negative number would throw the following:
node: ../src/smalloc.cc:244: void node::smalloc::Alloc(): Assertion `length <= kMaxLength' failed.
Aborted (core dumped)
That has been fixed by coercing to Uint32 and comparing the value
against kMaxLength.
  * buffer: add NativeBuffer API
Due to a lot of the util.is* checks there was much unnecessary overhead
for the most common use case of Buffer. Which is creating a new Buffer
instance for data from incoming I/O. NativeBuffer is a simple way to
bypass all the unneeded checks and simply hand back a Buffer instance
while setting the length.
  * src: remove pointless node_os.h header file
src/node_os.cc doesn't export anything that's used elsewhere. Remove it.

2013-08-24
==========

  * process_wrap: don't coerce process exit code to int32_t
On windows process exit codes can be greater than INT32_MAX. This used
to be not much of a problem - greater values would just come out
negative. However since ca9eb71 a negative result value indicates that
uv_spawn() has failed, so this is no longer acceptable.

2013-08-23
==========

  * uv: upgrade to v0.11.10

2013-08-22
==========

  * domain: move error handling directly into instance
Instead of doing all the domain handling in core, allow the domain to
set an error handler that'll take care of it all. This way the domain
error handling can be abstracted enough for any user to use it.
  * process_wrap: update after libuv api change
The `exit_code` argument for the `ProcessWrap::OnExit` callback changed
from int to int64_t.
  * uv: upgrade to v0.11.9
  * uv: update to v0.10.15

2013-08-21
==========

  * vm: fix Persistent<Context> leak
