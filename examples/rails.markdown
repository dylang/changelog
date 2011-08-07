2011-08-06
==========

  * Merge pull request [#2450](https://github.com/rails/rails/issues/2450) from guilleiguaran/activesupport-gzip-1.8
    Fix ActiveSupport::Gzip under Ruby 1.8.7. Closes [#2416](https://github.com/rails/rails/issues/2416)
  * Fix ActiveSupport::Gzip under Ruby 1.8.7. Closes [#2416](https://github.com/rails/rails/issues/2416)
  * Merge pull request [#2444](https://github.com/rails/rails/issues/2444) from elight/master
    Minor refactor to delegate
  * Use rake >= 0.9.3.beta.1 in Ruby 1.9.3

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
  * Revert "to_key on a destroyed model should return nil". Closes
    [#2440](https://github.com/rails/rails/issues/2440)
    This reverts commit c5448721b5054b8a467958d60427fdee15eac604.
  * Fix test for Rubinius
  * Merge pull request [#2439](https://github.com/rails/rails/issues/2439) from
    guilleiguaran/fix-error-on-ar-tests-rbxday
    Fix AR test suite error under Rubinius 2.0 [#](https://github.com/rails/rails/issues/)rbxday
  * Fix AR test suite error under Rubinius 2.0
  * pg does not allow aliases in the having clause, but functions are fine

2011-08-04
==========

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
  * moving CI and Sam Ruby to the top of the list.  I :heart: CI and Sam
  * add section about notifying implementors
  * fixing assert_difference issues on ruby 1.8
  * fixing wrong words.  thanks @jbrown
  * Merge pull request [#2421](https://github.com/rails/rails/issues/2421) from pivotal-casebook/master
    Simple_format should not edit it in place. (Fixes https://github.com/rails/rails/issues/1980)
  * adding my brain dump of the release process
  * ActionView::Helpers::TextHelper[#](https://github.com/rails/rails/issues/)simple_format should not change the
    text in place. Now it duplicates it.
  * Merge pull request [#2356](https://github.com/rails/rails/issues/2356) from waynn/fix_symbol
    fix stringify_keys destructive behavior for most FormTagHelper functions

2011-08-03
==========

  * fix stringify_keys destructive behavior for most FormTagHelper functions
    add four new tests to verify that the other three methods that called stringify_keys! are fixed. verified that
    the tests break in master without the code patch. Closes [#2355](https://github.com/rails/rails/issues/2355)
  * Quote these dates to prevent intermittent test failure. Suppose local time is 00:50 GMT+1. Without the quoting,
    the YAML parser would parse this as 00:50 UTC, into the local time of 01:50 GMT+1. Then, it would get written
    into the database in local time as 01:50. When it came back out the UTC date from the database and the UTC date
    of two weeks ago would be compared. The former would be 23:50, and the latter would be 00:50, so the two dates
    would differ, causing the assertion to fail. Quoting it prevents the YAML parser from getting involved.
  * Fix a bit precompile and lazy compile comments
  * make assert_difference error message not suck
  * Merge pull request [#2413](https://github.com/rails/rails/issues/2413) from artemk/master
    accept hash of options to recreate database for postgres adapter
  * Don't require assets group in production by default, you can change this default in the application.rb anyways
  * accept option for recreate db for postgres (same as mysql now)
  * This dep is already defined in activerecord.gemspec
  * initializing @open_transactions in the initialize method

2011-08-02
==========

  * add a migrate class method and delegate to the new instance
  * Ensure that .up and .down work as well.
  * Support backwards compatible interface for migration down/up with rails 3.0.x.

2011-08-01
==========

  * use File.directory? as Dir.exists? is only 1.9.2+
  * Merge pull request [#2324](https://github.com/rails/rails/issues/2324) from zenapsis/3-1-stable
    Rails 3.1 throws a Errno::ENOTDIR if files are put in assets directories
  * Merge pull request [#2393](https://github.com/rails/rails/issues/2393) from bdurand/fix_cache_read_multi
    Fix ArgumentError in ActiveSupport::Cache::CacheStore.read_multi
  * Pass options in ActiveSupport::Cache::CacheStore[#](https://github.com/rails/rails/issues/)read_multi through to
    the delete_entry call.
  * Merge pull request [#2389](https://github.com/rails/rails/issues/2389) from
    dmitriy-kiriyenko/remove_unnecessary_require_in_delegation
    Remove unnecessary require (happened after fcbde454f6)
  * Remove unnecessary require (happened after fcbde454f6)
  * Merge pull request [#2385](https://github.com/rails/rails/issues/2385) from bogdan/test_default_sanitizer2
    MassAssignmentProtection: consider 'id' insensetive in StrictSanitizer
  * Fix the issue where default_url_options is being cached on test cases. Closes
    [#1872](https://github.com/rails/rails/issues/1872). Closes [#2031](https://github.com/rails/rails/issues/2031).
    Signed-off-by: José Valim <jose.valim@gmail.com>
  * Rename new method to_path to to_partial_path to avoid conflicts with
    File[#](https://github.com/rails/rails/issues/)to_path and similar.

2011-07-31
==========

  * Merge pull request [#2379](https://github.com/rails/rails/issues/2379) from arunagw/extra_require_removal
    Removing extra requires from the test. Already loaded in abstract_unit.
  * Merge pull request [#2377](https://github.com/rails/rails/issues/2377) from castlerock/remove_require
    remove extra require for 'active_support/dependencies' as it is required
  * Removing extra requires from the test. Already loaded in abstract_unit.
  * remove extra require for 'active_support/dependencies' as it is required in abstract_unit.rb
  * Merge pull request [#2370](https://github.com/rails/rails/issues/2370) from castlerock/remove_duplicate_require
    remove extra require for 'stringio' as it is required in helper.rb
  * Merge pull request [#2375](https://github.com/rails/rails/issues/2375) from vijaydev/rakeaboutfix
    Fixes [#2368](https://github.com/rails/rails/issues/2368). rake about not showing a few properties
  * fixes [#2368](https://github.com/rails/rails/issues/2368). rake about not showing the middleware, db adapter and
    db schema version
  * Merge pull request [#2371](https://github.com/rails/rails/issues/2371) from bradediger/issue-2346
    remove_possible_method: test if method exists
  * remove_possible_method: test if method exists
    This speeds up remove_possible_method substantially since it doesn't
    have to rescue a NameError in the common case.
    Closes [#2346](https://github.com/rails/rails/issues/2346).
  * remove extra require for 'stringio' as it is required in helper.rb
  * Merge pull request [#2358](https://github.com/rails/rails/issues/2358) from arunagw/test_fix_187_skip
    skiping magic comment test for < 1.9

2011-07-30
==========

  * Merge pull request [#2345](https://github.com/rails/rails/issues/2345) from
    castlerock/plugin_new_generator_more_default_file
    Covering more files in test for plugin new generator.
  * magic comment test only if encoding_aware?.
  * Merge pull request [#2364](https://github.com/rails/rails/issues/2364) from
    bcardarella/resolve_undefined_instance_attributes_instance_variable
    Resolve warnings by instantizing @attrubtes as nil
  * Resolve warnings by instantizing @attrubtes as nil

2011-07-29
==========

  * Merge pull request [#2354](https://github.com/rails/rails/issues/2354) from waynn/patch-1
    remove redundant calls to stringify_keys
