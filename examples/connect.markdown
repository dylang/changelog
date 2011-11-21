
1.8.0 / 2011-11-17
==================

  * specify only one weak cache field

1.7.3 / 2011-11-11
==================

  * require utils in proto.js
  * typo
  * Merge branch 'master' of github.com:senchalabs/connect
  * Added utils.error(code)
  * Removed a single next(err) special-case in static()
  * qs >= 0.3.2
  * Merge pull request [#403](https://github.com/senchalabs/connect/issues/403) from chowey/patch-1
    Correctly insert "index.html" for url paths ending in "/" on Windows
  * Correctly insert "index.html" for url paths ending in "/" on Windows
    Since 'normalize' changes all the forward slashes to backward slashes on Windows, we need to check in the path ends in "/" BEFORE we call 'normalize'.
  * Fixed HEAD support for 404s and 500s

1.7.2 / 2011-010-24
===================

  * port redirect option from 1.x
  * Merge pull request [#395](https://github.com/senchalabs/connect/issues/395) from zzen/master
    Prevent multiple vhost responses
  * Prevent vhost bubbling if request response is served
  * Changed `header()` middleware to output the request header as well
  * Fixed `staticCache()` Age header field
  * Remove Content-Length when compressing
  * Fixed `compress()` for res.end(val)
  * docs
  * refactored compress()
  * return from res.write/end
  * Added first pass at `compress()`, gzip/deflate for 2.x. Closes [#374](https://github.com/senchalabs/connect/issues/374)
  * expose the prototype
  * Release 2.0.0alpha1
  * update changelog
  * "node": ">= 0.5.0 < 0.7.0"
  * Changed: no longer lowercase cookie names
  * fixed two tests due to removing badRequest()
  * removed badRequest() util
  * removed forbidden() util
  * misc refactoring
  * Merge branch 'master' of github.com:senchalabs/connect
  * Merge pull request [#386](https://github.com/senchalabs/connect/issues/386) from ryanrolds/cleanup-static
    headers, conditional range requests, tests
  * clean up a test
  * Merge pull request [#387](https://github.com/senchalabs/connect/issues/387) from ryanrolds/clean-staticcache
    staticCache no longer tries to handle range requests, typos, cache uses date
  * OCD
  * Changed `static()`: using next(status)`
  * Changed `limit()`: use next(status)
  * Change `directory()`: using next(status)
  * Changed `csrf()`: next(403) to allow error handling
  * Added back `next(status)` support
  * Removed `connect.session.ignore` array support
    lame hack for something middleware wrapping can provide,
    and this often trips people up because they will get
    an error if they define something like GET /:slug
    but do not have an early end-point for GET /favicon.ico
  * fixed signed json cookie support
  * no need to base64 signed cookies
  * prevent unsign() from breaking on json cookie
  * Changed: `errorHandler()` is now a development only middleware
    most people do/should roll their own for production because:
    a) you might want a different JSON structure
    b) you most likely want a nice page that looks like your app
    c) passing the options to errorHandler() is annoying
  * Changed `errorHandler()` to respect `err.status`
  * todo
  * Changed `limit()`: next(err) with .status of 413
  * Added `err.status` support
    internals will use this to delegate error handling
  * Changed `limit()`: respond with 413 when content-length exceeds the limit
    we could do this with chunked as well
    although you would be stuck waiting for a
    potentially _massive_ body
  * Doh, missed some changes
  * misc refactor
  * more util tests
  * commented out "broken" session tests
  * fixed a session test
  * statiCache no longer tries to handle range requests, typos, hit uses date header for freshness
  * headers, conditional range requests, tests
  * use signed cookie api for session()
    now you pass the secret to cookieParser() instead of session().
    few things I want to revist / extend:
    - currently the value is always base64 so not ideal for some cases
    - the sid is now the uid, not the signed value
  * docs for cookieParser() secret
  * Merge branch 'feature/signed-cookies'
  * added test for signed cookie without secret
  * changed json cookie prefix to "j:"
  * Added signed cookie support
  * Added json cookie support
    bit of a lame hack, but im open to suggestions :)
  * removed a console.log in tests
  * Fixed several test require()s
  * Fixed bug in test/common.js
  * Merge branch 'integration'
  * ws
  * misc
  * refactored pull-request
  * typo
  * Removed old dev-deps
  * Fixed issue with missing Date header
  * Added cache-control obedience, conditional requests to staticCache
  * Merge pull request [#370](https://github.com/senchalabs/connect/issues/370) from ryanrolds/misc-requested-changes
    Improved handling of ENAMETOOLONG per [#369](https://github.com/senchalabs/connect/issues/369)
  * Improved handling of ENAMETOOLONG per [#369](https://github.com/senchalabs/connect/issues/369)
  * Merge pull request [#368](https://github.com/senchalabs/connect/issues/368) from ryanrolds/misc-requested-changes
    Change talked about in [#354](https://github.com/senchalabs/connect/issues/354)
  * Default req.body to {} per [#354](https://github.com/senchalabs/connect/issues/354)
  * Merge branch 'master' of git://github.com/senchalabs/connect
  * revert next(status)
  * Revert "Added Content-Length to `next(statusCode)` responses"
    This reverts commit fe364889c19b71cae853ba98a2f6cfc14cfd032d.
  * Revert "replaced `utils.forbidden()` use with `next(403)`"
    This reverts commit 7d96c75960c9a6502d44bc367c97ab8101d660e6.
  * Revert "replace utils.badRequest() with `next(400)`"
    This reverts commit c3136cbb657615fd7245b69dd248baf3bf90fda2.
  * Merge pull request [#365](https://github.com/senchalabs/connect/issues/365) from msiebuhr/fix-executable-images
    Mark images as non-executable.
  * Mark images as non-executable.
  * Fixed race condition causing errors reported in [#329](https://github.com/senchalabs/connect/issues/329).
  * res.socket -> req.socket

1.7.1 / 2011-09-12
==================

  * Fixed race condition causing errors reported in [#329](https://github.com/senchalabs/connect/issues/329).
  * Added: make `Store` inherit from `EventEmitter`
  * fixed test from cherry-pick
  * Added session `Store#load(sess, fn)` to fetch a `Session` instance
  * Added backpressure support to `staticCache()`
  * docs

1.7.0 / 2011-08-31
==================

  * Revert "Added double-next reporting"
    This reverts commit bb802470b1df8d93adb37e3bd3b8d6c93d8c6d8f.
