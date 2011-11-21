2.5.1 / 2011-11-18
==================

  * updated mocha
  * consider 20ms slow
  * update mocha
  * Added app.listen() as a shortcut for http.createServer(app).listen()
  * Removed toArray() util
  * Added utils.escape(html) test
  * Added utils.flatten(arr) tests
  * utils.isAbsolute() tests
  * Added router next(err) test
  * Added more route matching tests
  * fixed test due to HEAD change
  * Added optional app.head() support
  * Added app.head() override test
  * Added app.head() test
  * Added app.del() test
  * misc
  * Added app.options() test
  * Fixed default OPTIONS behavior
  * Changed express.methods to include only those supported by node
  * upper-case the name
  * fixed head
  * Added meta-generated tests for all HTTP methods supported
  * more tests
  * literal . test
  * escaped regexp test
  * naming capture groups
  * tests for *
  * param single-segment test
  * Added route regexp tests
  * Renamed "case sensitive routes" to "case sensitive routing"
    to match "strict routing"
  * Added "strict routing" setting tests
  * Added "case sensitive routes" tests
  * more routing tests
  * optional trailing slash
  * tests for optional capture groups
  * started routing tests
  * Added req.param() default value test
  * Added req.param() tests. Closes [#885](https://github.com/visionmedia/express/issues/885)
  * fixed auto use(app.router)
  * refactoring
  * docs
  * Added res.cache() method
  * Added res.cache(str)
  * Aded app.locals.use() precedence tests
  * jade 0.17.x
  * Merge branch 'view-signature'
  * Changed template engine signature to engine.__express(path, options, fn). Closes [#878](https://github.com/visionmedia/express/issues/878)
  * Fixed express(1) LF -> CRLF for windows. Closes [#875](https://github.com/visionmedia/express/issues/875)
  * test for invalid cookie signature
  * Added req.signedCookies tests
  * Added res.signedCookie() and tests. Closes [#880](https://github.com/visionmedia/express/issues/880)
  * Added JSON cookie support & tests. Closes [#879](https://github.com/visionmedia/express/issues/879)
  * make sure req/res protos are app-specific
  * Added res proto mutation test
  * Added app.request test
  * Added app.{request,response}
  * no longer manipulate the req/res protos directly
  * Added app.locals.settings test
  * Added app.locals.use() arity < 3 test
  * Added res.render() absolute path tests
  * Fixed app.render() absolute path support
  * Added app.locals.use() test
  * Removed "status" and "charset" options
  * more res.locals tests
  * using connects error code util
  * Added failing res.sendfile() test for 403 + callback
  * Added res.sendfile() ENOENT test
  * Added first res.sendfile() callback test
