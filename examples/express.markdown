Upcoming / 2011-08-15
=====================

  * Fixed `res.redirect()` on windows due to `join()` usage. Closes [#808](https://github.com/visionmedia/express/issues/808)
  * russian docs
  * link to russian docs booyah!
  * Added support for multiple callbacks for `app.param()`. Closes [#801](https://github.com/visionmedia/express/issues/801)
    you can also make several calls to `app.param()` for the same
    param name, which is equivalent to passing multiple in
    a single call
  * added another test
  * Added test for `app.param(fn)`
  * expose list of http methods supported
  * Added `res.get(field)` as an alternative to `res.header(field)`
  * Added `res.set(field, val)` as an alternative to `res.header()`
  * another sidebar
  * sidebar example
  * better layout control example
  * fixed app.locals precedence
  * Removed default local "app"
  * make `req.notify()` arity based
  * prepping blog example for new express
  * use "dev" logger in blog example

2.4.4 / 2011-08-05
==================

  * Changed `res.{send,json}()` status code to the first arg at all times
  * docs
  * Refactored `res.header()`
  * added header.jade to jade example
  * semi
  * Refactored `req.accepts()`
  * more tests
  * Merge branch 'integration'
  * specialcase .:format routing to not include a dot in the capture group
  * Fixed 204 / 304 responses
  * Changed `res.send(null)` responds with empty string
    previously you would just get "null",
    which is fine for res.json() but probably
    not the best result for res.send()
  * fixed a response test
  * fixed a jade test
  * more tests for routing
  * renamed a test
  * Merge branch 'master' of github.com:visionmedia/express
  * Fix the behavior for setting up routes with * in them.
  * Merge pull request [#777](https://github.com/visionmedia/express/issues/777) from purohit/master
    Simple misspelling fix.
  * Fixing the misspelling of "manor" with "manner" in the 4 places it occurs.
  * added express-resource to readme
  * tweak generated stylus
  * Fixed [23]04 support
  * Added `route-loading` example for another route loading technique
    using the vm module you can expose the route files at the root
    level which IMO is nicer than module.exports = function(app){ etc
  * node >= 0.4.9 < 0.7.0 for now
  * 3.0.0alpha1 soon
    mainly so windows users can start playing
    around with express, i will have a ton
    of these alphas
  * update jade dev dep
  * qs >= 0.3.0
  * Removed `req.flash()` references
    it will be req.notify(), req.session.notifications etc
  * refactored `res.redirect()` slightly
  * Changed `res.{cookie,clearCookie}()` return res
  * another `req.is()` example
  * Added `req.notify()` alias of `req.flash()`
  * refactored `req.flash()`
  * refactored `req.param()`
  * examples
  * Renamed `app.flashFormatters` to `app.formatters`
  * Added `NaN` flash formatter
  * Merge branch 'remove-header-fields'
  * fixed tests
  * chainable `res.header()`
  * fixed some tests
  * Removed header field support
  * removed old dynamic helper logic from the view system
  * precedence test
  * view system utilizing `app.locals`
  * Changed `app.locals` to match `res.locals`
  * Removed `app.dynamicLocals()`. Closes [#756](https://github.com/visionmedia/express/issues/756)
  * utilize connects new `query()` middleware
  * Replaced `res.local[s]()` with `res.locals` function. Closes [#757](https://github.com/visionmedia/express/issues/757)
  * misc
  * Removed "view options" setting. Closes [#748](https://github.com/visionmedia/express/issues/748)
  * docs for previous commit
  * Added "charset" option
  * misc refactoring
  * Added `app.dynamicLocal(name, fn)`
  * `app.local()` and `res.local()` return for chaining
  * Added `app.local(name, val)`
  * `app.helpers` -> `app.locals`
  * `app.dynamicHelpers` -> `app.dynamicLocals`
  * Removed `res.send()` with no args support for 204
    just use:
    res.send(204)
  * Removed `res.helpers()` alias of `res.locals()`
  * removed old `app.error()` docs
  * removed old error handling docs
  * removed use of `app.error()` in examples
  * Removed `app.error()`. Closes [#733](https://github.com/visionmedia/express/issues/733)
    use trailing middleware with arity of 4 as
    shown in this issue. They are functionally
    equivalent
  * expresso 0.8.1
  * its is possessive, it's is shorthand for: it is

2.4.3 / 2011-07-14
==================

  * Release 2.4.3
  * Fixed options.filename, exposing to template engines
    this is useful for performing relative
    lookups within the template engine itself,
    without manually specifyin the path
  * misc
  * Removed "view options" setting. Closes [#748](https://github.com/visionmedia/express/issues/748)
  * docs for previous commit
  * Added "charset" option
  * misc refactoring
  * Added `app.dynamicLocal(name, fn)`
  * `app.local()` and `res.local()` return for chaining
  * Added `app.local(name, val)`
  * `app.helpers` -> `app.locals`
