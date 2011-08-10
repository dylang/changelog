2011-08-09
==========

  * Remove lame comment.
  * rake assets:precompile defaults to production env
  * adding missing require to fist railties tests
  * Okay, the new incompatible arel is now called 2.2 and the sun shines upon thee once more
  * Merge pull request [#2465](https://github.com/rails/rails/issues/2465) from pivotal-casebook/patch-3
    Further monkey-patching to avoid deprecation warnings
  * deprecating process_view_paths
  * avoid object creation via useless duping and freezing
  * just use map and case / when rather than modifying the iterating array
  * only typecast what we need to typecast
  * Favor composition over inheritance.
  * Array[#](https://github.com/rails/rails/issues/)+ automatically dups, no double duping
  * Just remove the sort_locals method
  * the freeze trick does nothing on arrays used as hash keys.
  * use functional style to build a list of template objects
  * refactor the optimized build_query a bit
  * reduce file stats by improving our dir glob pattern
  * hash on the template directory in order to improve cache hits
  * use meaningful names with our variables

2011-08-08
==========

  * use binread to read the files
  * backporting IO[#](https://github.com/rails/rails/issues/)binread for 1.8 users
  * be explicit about arguments passed around
  * Remove TODO comment I didn't mean to commit
  * Bump arel version
  * Fully marshal AR::Base objects. Fixes [#2431](https://github.com/rails/rails/issues/2431).
  * Make it the responsibility of the connection to hold onto an ARel visitor for generating SQL. This improves the code architecture generally, and solves some problems with marshalling. Adapter
    authors please take note: you now need to define an Adapter.visitor_for method, but it degrades gracefully with a deprecation warning for now.
  * Merge pull request [#2426](https://github.com/rails/rails/issues/2426) from pivotal-casebook/fix-build
    Make rails gem build directory consistent with actionpack, etc.
  * Merge pull request [#2466](https://github.com/rails/rails/issues/2466) from rsim/fix_test_disable_referential_integrity
    Fixed test_disable_referential_integrity on Oracle
  * Fixed test_disable_referential_integrity on Oracle
    On Oracle disable_referential_integrity before execution of block will disable foreign key constraints and after block will enable them but when constraints are enabled then they are validated.
    Therefore created record with invalid foreign key should be deleted before enabling foreign key constraints.
  * Further monkey-patching to avoid deprecation warnings
  * Initialize config.assets.version the same way it's done in Sprockets
  * Merge pull request [#2448](https://github.com/rails/rails/issues/2448) from igrigorik/master
    Asset pipeline fixes: clear out tmp cache and use environment in digest generation

2011-08-07
==========

  * Merge pull request [#2451](https://github.com/rails/rails/issues/2451) from gdelfino/master
    sqlite transactions in log files
  * guides generation: apparently this workaround for RedCloth is not needed anymore
  * Merge pull request [#2457](https://github.com/rails/rails/issues/2457) from Gregg/zombie_singular_fix
    Added irregular zombie inflection, so zombies != zomby
  * Added irregular zombie inflection, so zombies no longer gets singularized into zomby
  * Merge pull request [#2455](https://github.com/rails/rails/issues/2455) from vijaydev/patch-7
    Edit changelog to mention about x_sendfile_header default change
  * edit changelog to mention about x_sendfile_header default change
  * x_sendfile_header now defaults to nil and production.rb env file doesn't
    set a particular value for it. This allows servers to set it through
    X-Sendfile-Type, read
    https://github.com/rack/rack/blob/master/lib/rack/sendfile.rb for more
    info. Anyways you can force this value in your production.rb
  * Test against 1.9.3 as well.

2011-08-06
==========

  * sqlite transactions now logged
    motivation: http://stackoverflow.com/questions/6892630/sqlite-transactions-not-showing-in-test-log
  * Merge pull request [#2450](https://github.com/rails/rails/issues/2450) from guilleiguaran/activesupport-gzip-1.8
    Fix ActiveSupport::Gzip under Ruby 1.8.7. Closes [#2416](https://github.com/rails/rails/issues/2416)
  * Fix ActiveSupport::Gzip under Ruby 1.8.7. Closes [#2416](https://github.com/rails/rails/issues/2416)
  * Merge pull request [#2444](https://github.com/rails/rails/issues/2444) from elight/master
    Minor refactor to delegate
  * Use rake >= 0.9.3.beta.1 in Ruby 1.9.3
  * use assets.version in asset checksum to allow user to easily override

2011-08-05
==========

  * Refactored to more closely resemble idiom applied for on_nil
  * Avoid generating app/views/layouts/application.html.erb on mountable engines, just generate the namespaced one
  * Revert "Test against Rubinius"
    This reverts commit 3cfbb3824436b2f8a37544b8ffe2f3a4605bc7c8.
  * Merge pull request [#2442](https://github.com/rails/rails/issues/2442) from sferik/test_on_rubinius
    Test against Rubinius
  * Test against Rubinius
    Happy Rubinius Day!
  * Revert "to_key on a destroyed model should return nil". Closes [#2440](https://github.com/rails/rails/issues/2440)
    This reverts commit c5448721b5054b8a467958d60427fdee15eac604.
  * Fix test for Rubinius
  * Merge pull request [#2439](https://github.com/rails/rails/issues/2439) from guilleiguaran/fix-error-on-ar-tests-rbxday
    Fix AR test suite error under Rubinius 2.0 [#](https://github.com/rails/rails/issues/)rbxday
  * Fix AR test suite error under Rubinius 2.0
  * pg does not allow aliases in the having clause, but functions are fine

2011-08-04
==========

  * Merge branch 'asset_hash_should_depend_on_env'
  * Clear out tmp/cache when assets:clean is invoked.
    Otherwise, if bad data is cached in tmp/clear then the next invocation
    of assets:precompile (or a regular incoming request) will pickup files from
    tmp without regenerating them from source.
  * generate environment dependent asset digests
    If two different environments are configured to use the pipeline, but
    one has an extra step (such as compression) then without taking the
    environment into account you may end up serving wrong assets
  * Merge branch 'master' of github.com:rails/rails
  * Revert "Explicitly included hashes in sentence regarding SQL-injection-safe forms"
    Reason: The hash form is secure, and preferred over the array form if possible.
    This reverts commit 6dc749596c328c44c80f898d5fa860fff6cab783.
  * Revert "grammatical changes"
    Reason: As discussed in GitHub, it is debatable, and present tense
    is fine (and simple, and preferred).
    This reverts commit 54ccda9f0a5e4a5e72a4c159dc8787faaf65e8a2.
  * The trailing '/' isn't being picked up by Github anyway, and the link works as is.
  * grammatical changes
  * typo fix
  * minor changes in migrations guide
  * fixed incorrect tags
  * Fix typo 'console' -> 'constant'
  * Active Resource - guide for destroy
  * Active Resource - guide for update/save
  * Active Resource - guide for create
  * Active Resource - guide for reading and writing data
  * typo in "wont"
  * 3.1 release notes Active Record changes, Architectural changes and
    organizing sections.
  * Adding more info as rake about is fixed
  * Rack::Sendfile is no more default middleware.
  * "blog" is more common than "weblog" these days.
  * 3.1 release notes - added AP and Railties sections
  * 3.1 release notes draft
  * prefer to use if..end unless the condition is simple/compact
  * remove some parts of the section on shortcut helpers, document custom validators
  * make the warning clear about the effect of using validates_associated on both sides on an association.
  * usages of active resouce
  * configuration for active resource
  * Introduction for active resource
  * Active Resouce guide initial load
  * '/' was outside of anchor tag.
  * Superfluous "the".
  * extra '/' removed from url, which was not linked
  * Extra "l" removed before h2.
  * document meta method
  * Removed trailing slash of 'Download and installation' Github URL as per convention
  * Explicitly included hashes in sentence regarding SQL-injection-safe forms
  * Association and Callbacks guide: Added section on shortcut syntax 'validates'.
  * Fix two spaces between sententes on README.rdoc.
  * move the note after the scaffold files listing
  * sync the getting started guide with master
  * we should not ignore all gems in here
  * Add git push and git push --tags to RELEASING_RAILS.rdoc
