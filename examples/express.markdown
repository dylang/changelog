2.4.6 / 2011-08-22
==================

  * Fixed multiple param callback regression. Closes
    [#824](https://github.com/visionmedia/express/issues/824) [reported by TroyGoode]
  * Merge branch 'master' of github.com:visionmedia/express
  * fixed some tests
  * Merge pull request [#821](https://github.com/visionmedia/express/issues/821) from
    pikeas/patch-1
    Fixing typo: interacte -> interact
  * Fixing typo: interacte -> interact
  * local -> localhost
    most people wont have things set up the same as me
    so this is probably not a good idea :D
  * mime 1.2.2 dep
  * connect 1.6.2 dep
  * Added `logger()` to generated express(1) app
  * Added `make benchmark` for experimental continuous-benchmarking tool
  * Release 2.4.5

2.4.5 / 2011-08-19
==================

  * removed dynamicHelpers
  * removed app.helpers() use app.locals()
  * haha...
  * changed -css, --template to --stylus, --ejs
    we can add more as we go
  * rewrote express(1) to use commander.js
  * fixed `res.sendfile()` 404 support
  * build `res.download()` on top of `res.sendfile()`
    like it should have always been
  * make `res.sendfile()` more like `res.download()`. Closes
    [#774](https://github.com/visionmedia/express/issues/774)
  * refactored `res.sendfile()`
  * OCD
  * Refactored Route to use a single array of callbacks
  * fixed route error handlers when errors are thrown
  * Added support for routes to handle errors. Closes
    [#809](https://github.com/visionmedia/express/issues/809)
    currently only the route end-point callbacks
    support this, however this will change in the near future
    to support route middleware etc
  * Added  shorthand for the parsed request's pathname
  * Merged basepath setting. Closes [#813](https://github.com/visionmedia/express/issues/813)
  * qs >= 0.3.1
  * use nextRoute() internally
  * Changed: removed .call(self) for route callbacks
    not sure why we had this, ive never even used it
    and the tests dont cover it, and its slower
  * Added `app.routes.all()`. Closes [#803](https://github.com/visionmedia/express/issues/803)
    not a huge fan of this API-wise, but at least it is something for now
  * Fixed `res.redirect()` on windows due to `join()` usage. Closes
    [#808](https://github.com/visionmedia/express/issues/808)
  * russian docs
  * link to russian docs booyah!
  * Added support for multiple callbacks for `app.param()`. Closes
    [#801](https://github.com/visionmedia/express/issues/801)
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
  * Merge pull request [#777](https://github.com/visionmedia/express/issues/777) from
    purohit/master
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
  * Removed `app.dynamicLocals()`. Closes
    [#756](https://github.com/visionmedia/express/issues/756)
  * utilize connects new `query()` middleware
  * Replaced `res.local[s]()` with `res.locals` function. Closes
    [#757](https://github.com/visionmedia/express/issues/757)
