Upcoming / 2011-08-09
=====================

  * Added support for custom ETag in `connect.static.send()`
  * Revert "Added in option, etag, for control of ETag header if desired"
    This reverts commit a11399928547074d16fdebba049d268e000cf94c.
  * Merge pull request [#338](https://github.com/senchalabs/connect/issues/338) from coolaj86/master
    Fixed `vhost()` case sensitivity [coolaj86]
  * host should be case-insensitive
  * Merge pull request [#337](https://github.com/senchalabs/connect/issues/337) from tomjnsn/master
    Added `ETag` option for `connect.static.send()` [tomjnsn]
  * Added in option, etag, for control of ETag header if desired
    pass in option, etag, along with maxAge and hidden to have a specific
    ETag header returned back otherwise it will use the util.etag() method
    on the stat of the file to generate the ETag
  * Changed: 301 redirect in `static()` to postfix "/" on directory. Closes [#289](https://github.com/senchalabs/connect/issues/289)
  * Allow retval `== null` from logger callback
  * Release 1.6.1

1.6.1 / 2011-08-03
==================

  * Added `getOnly` option to `connect.static.send()`
  * Allow status codes >= 400 in errorHandler
  * Merge branch 'master' of github.com:senchalabs/connect
  * Revert "Fix parsing of basic auth credentials if the password includes ':'."
    This reverts commit 6390459f59794542853e3a2295496fd8f83e702c.
  * Merge pull request [#327](https://github.com/senchalabs/connect/issues/327) from papandreou/master
    errorHandler middleware: Don't hardcode a status code of 500, use err.statusCode if set.
  * Fix parsing of basic auth credentials if the password includes ':'.
    Signed-off-by: Tj Holowaychuk <tj@vision-media.ca>
  * Fixed a test
  * Added response "header" event allowing augmentation
    this will be used in the session middleware, and could
    be used elsewhere. Ideally Node would provide a hook for us...
  * errorHandler middleware: Use err.statusCode as the HTTP status code if set, 500 otherwise.
  * fixed last test
  * fixed another test
  * uncommenting
  * updated more tests
  * updated some more tests
  * updated query tests
  * updated vhost tests
  * updated static tests
  * updated session tests
  * updated router tests
  * updated responseTime tests
  * updated methodOverride tests
  * updated logger tests
  * updated errorHandler tests
  * docs
  * updated directory tests
  * updated cookieParser tests
  * Removed `compiler()` middleware
    note that this is for 2.x only. This middleware proved to
    be more of a PITA than anything else. While it is useful
    for very simple and opinionated compilation, that is about it
    and is not really well suited for a core middleware. Feel free
    to use this code.
  * updated bodyParser tests
  * common.js
  * started fixing tests
  * qs >= 0.3.0
  * typo
  * refactored auto-loading
  * refactored patch.js
  * Replaced HTTPServer and HTTPSServer with a function / proto
  * Added X-CSRF-Token check
  * Changed: persist csrf token. Closes [#322](https://github.com/senchalabs/connect/issues/322)
    not necessarily ideal for the cases I mentioned,
    especially since many apps that I have seen at least
    built with node are reasonably vulnerable to xss
  * Merge branch 'request-handler'
  * Merge pull request [#320](https://github.com/senchalabs/connect/issues/320) from craigbarnes/typo
    Typo
  * Fix typo
  * Merge pull request [#319](https://github.com/senchalabs/connect/issues/319) from danieldickison/master
    Sort files alphabetically in directory middleware.
  * Merge branch 'master' of https://github.com/senchalabs/connect
    Conflicts:
    lib/middleware/directory.js

1.6.0 / 2011-07-010
===================

  * Release 1.6.0
  * Added response-time to "dev" logger format
  * Fixed res._headers logger regression. Closes [#318](https://github.com/senchalabs/connect/issues/318)
  * Added simple csrf middleware. Closes [#315](https://github.com/senchalabs/connect/issues/315)
    we can hack on it more as needed
  * Removed support for multiple middleware being passed to .use()
    if you really need this you can iterate
    and use() etc. this does not look great
    and ive never actually seen anyone use
    this feature. if you do let me know
    and i will consider adding it back
  * docs
  * logger docs

1.5.2 / 2011-07-06
==================

  * Release 1.5.2
  * fLogic -> filter
  * Update comments for directory().
  * Get rid of private filtering function. Take care of the filtering right at the public function.
  * Allow a filtering capability in directory middleware.
  * Added ability to define `logger()` tokens and formats. Closes [#309](https://github.com/senchalabs/connect/issues/309)
    includes the following additional changes:
    - formats are pre-compiled to a function, much like a little template language
    - added 3 pre-defined formats for various needs "dev" is nice colored output when in development :)
    overall mostly cosmetic, though there is a small performance increase
    by compiling these at boot
  * Fixed quotes in docs. Closes [#312](https://github.com/senchalabs/connect/issues/312)
  * misc refactor
  * refactored previous merge
  * added cli link
  * removed migration guide from readme
  * link directories in page headings in directory middleware
  * Merge branch 'master' of github.com:senchalabs/connect
  * added errorHandler to the docs list
  * Sort files alphabetically in directory middleware.
    readdir returns files in the order stored in the file system, which is not necessarily alphabetic.
  * Merge pull request [#310](https://github.com/senchalabs/connect/issues/310) from danieldickison/master
    Fixied `directory()` middleware urls when mounted [danieldickison]
  * Use req.originalDir for directory links so that they work when the middleware is mounted at a sub-URL.
  * misc refactor of parseCookie()
  * clean up previous commit
  * Updated cookie parser not to throw exceptions
  * tweak previous commit a little
  * Remove chromeframe token from UA String in default fingerprint function.
    Signed-off-by: Tj Holowaychuk <tj@vision-media.ca>
  * Fixed connect-redis example
  * updated git summary
  * Default logger :req[] / :res[] to "-". Closes [#303](https://github.com/senchalabs/connect/issues/303)
  * Changed; `static.send()` ".." in path without root considered malicious

1.5.1 / 2011-06-21
==================

  * Release 1.5.1
  * fixed static tests
  * query docs
  * Added malicious path check to `directory()` middleware
  * Added `utils.forbidden(res)`
  * docs
