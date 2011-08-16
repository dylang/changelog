2011-08-16
==========

  * Revert "Merge pull request [#2543](https://github.com/rails/rails/issues/2543) from htanata/unused_require_in_ar_test"
    This reverts commit 87152f2604e73b218df90befda576f0acfed0bbf, reversing
    changes made to 0d3615f04c79f6e90d8ab33fdfc920b8faac9cb8.
  * Merge pull request [#2543](https://github.com/rails/rails/issues/2543) from htanata/unused_require_in_ar_test
    Remove unused require in activerecord/test/cases/attribute_methods_test.rb
  * Remove unused require.

2011-08-15
==========

  * Fix tzinfo require (it broke test_raises_when_an_invalid_timezone_is_defined_in_the_config in railties)
  * Fix wrap_parameters initializer template
  * Be more lazy about creating time zone objects. Decreases startup time by about 10%. ([#734](https://github.com/rails/rails/issues/734))
  * Don't refer to ActionController::Base in the wrap_parameters initializer - use config object instead. Cuts about 15% off the load time. ([#734](https://github.com/rails/rails/issues/734))
  * Bump arel dependency
  * Use new SelectManager[#](https://github.com/rails/rails/issues/)source method
  * Use new SelectManager[#](https://github.com/rails/rails/issues/)projections= method
  * use update.key instead of update.ast.key. make better use of select manager.
  * Use a SelectCore rather than a full SelectManager
  * Refactor building the update manager
  * Support for multi-table updates with limits, offsets and orders
  * Support updates with joins. Fixes [#522](https://github.com/rails/rails/issues/522).
  * Added Array[#](https://github.com/rails/rails/issues/)prepend as an alias for Array[#](https://github.com/rails/rails/issues/)unshift and Array[#](https://github.com/rails/rails/issues/)append as
    an alias for Array[#](https://github.com/rails/rails/issues/)<< [DHH]
  * Merge pull request [#2539](https://github.com/rails/rails/issues/2539) from arunagw/delegate_expl
    Delegate expl
  * Requiring delegate.
  * Removing unnecessary require, solve 'circular require considered harmful' warning.
  * Fix typo
  * rake assets:precompile executes in production environment as default if RAILS_ENV was not provided
  * Merge pull request [#2536](https://github.com/rails/rails/issues/2536) from arunagw/unused_var
    Unused variable removed.
  * Update travis config on @joshk's instructions
  * Unused variable removed.
  * Document Object[#](https://github.com/rails/rails/issues/)public_send
  * Add a test for delegating a method ending in '=' as this is a special case.
  * Ensure empty has_many :through association preloaded via joins is marked as loaded. Fixes [#2054](https://github.com/rails/rails/issues/2054).
  * Merge pull request [#2534](https://github.com/rails/rails/issues/2534) from arunagw/public_send_require
    Need to include public_send
  * Need to include public_send
  * Split up the definitions in Module[#](https://github.com/rails/rails/issues/)delegate depending on :allow_nil, and don't use exceptions for flow control in the :allow_nil => true case.
  * Fix the line number in the backtrace when Module[#](https://github.com/rails/rails/issues/)delegate raises
  * Fix private methods which are delegated to. This previously worked because Module[#](https://github.com/rails/rails/issues/)delegate previously ignored method visibility.
  * Just do the method call directly in Module[#](https://github.com/rails/rails/issues/)delegate, if we can (we cannot for method names ending in '='). Two reasons: 1) it's faster, see
    https://gist.github.com/1089783 and 2) more importantly, delegate should not allow you to accidentally call private or protected methods.
  * Backport Object[#](https://github.com/rails/rails/issues/)public_send to 1.8 so that we can implement Module[#](https://github.com/rails/rails/issues/)delegate such that non-public methods raise

2011-08-14
==========

  * Ensure changing RAILS_GROUPS will load the proper dependencies.
  * Merge pull request [#2527](https://github.com/rails/rails/issues/2527) from cesario/fix_2511
    Methods like status and location are interfering with redirect_to [Closes [#2511](https://github.com/rails/rails/issues/2511)]
  * Methods like status and location are interfering with redirect_to [Closes [#2511](https://github.com/rails/rails/issues/2511)]

2011-08-13
==========

  * Merge branch 'master' of github.com:lifo/docrails
    Conflicts:
    RELEASING_RAILS.rdoc
    actionpack/lib/sprockets/railtie.rb
    actionpack/test/template/sprockets_helper_test.rb
    activerecord/test/cases/calculations_test.rb
    railties/guides/source/3_1_release_notes.textile
    railties/guides/source/active_resource_basics.textile
    railties/guides/source/command_line.textile
  * "suits" is correct here, not "suites"
  * Typo fix
  * Some fixes on the 3_1_release_notes guide.
  * update abstract_controller callbacks to document meta-programmed filters
  * ActiveModel::Validations basic guide
  * Document exclamation point on dynamic finders
  * update rails on rack guide, section 2 needs to be changed or maybe deleted
  * Revert "update rails on rack guide, section 2 needs to be changed or maybe deleted"
    This reverts commit 7a4e545eccf834cb620df0f909ef3f4bec4e6608.
  * comma is more appropriate here
  * Fixed typo (attachments method name was missing an s) in Action Mailer basics guide
  * Fixed typo
  * [asset pipeline] update snippet to reflect patch
    Two commented lines in example to match the
    commit (8845ae683e2688)
  * [asset pipeline] update to reflect new sendfile header default
    X-Sendfile headers are now set to nil and are off by default.
    See commit eff7fddeb26eaa346827
  * 3.1 release notes: fixed font changes
  * Point to current, official upgrade plugin
  * [asset pipeline] Update Capistrano info
    v2.8.0 of Capistrano has a recipe to handle precompile
    and symlinking.
  * 3.1 release notes: organize action_pack notes
  * prototype switch
  * expand tmp:* tasks, and a few more additions in the command line guide
  * indentation fixes
  * Dirty object methods added to active model basics
  * ActiveModel::Conversion basic guide
  * ActiveModel::Callbacks basic guide
  * [asset pipeline] fixed example
    Changed << to += because we are _concatenating_
    this new array to the end of config array, NOT
    pushing this array in it.
  * Rubygems => RubyGems
  * capitalize RubyGems properl
  * rephrase "like to be"
  * AttributeMethods refector suffix method added some usages
  * ActiveResource::Validations module basics updated
  * ActiveModel::AttributeMethods basic guide
  * Adding Basic file for ActiveModel. @vatrai and @sukeerthiadiga is going to take care other detailed stuff.
  * we should not ignore all gems in here
  * Add git push and git push --tags to RELEASING_RAILS.rdoc
  * moving CI and Sam Ruby to the top of the list.  I :heart: CI and Sam
  * add section about notifying implementors
  * fixing assert_difference issues on ruby 1.8
  * fixing wrong words.  thanks @jbrown
  * ActionView::Helpers::TextHelper[#](https://github.com/rails/rails/issues/)simple_format should not change the text in place. Now it duplicates it.
  * adding my brain dump of the release process
  * fix stringify_keys destructive behavior for most FormTagHelper functions
    add four new tests to verify that the other three methods that called stringify_keys! are fixed. verified that the tests break in master without the code patch. Closes
    [#2355](https://github.com/rails/rails/issues/2355)
  * Quote these dates to prevent intermittent test failure. Suppose local time is 00:50 GMT+1. Without the quoting, the YAML parser would parse this as 00:50 UTC, into the local time of 01:50 GMT+1.
    Then, it would get written into the database in local time as 01:50. When it came back out the UTC date from the database and the UTC date of two weeks ago would be compared. The former would be
    23:50, and the latter would be 00:50, so the two dates would differ, causing the assertion to fail. Quoting it prevents the YAML parser from getting involved.
  * Fix a bit precompile and lazy compile comments
  * make assert_difference error message not suck
  * accept option for recreate db for postgres (same as mysql now)
  * Don't require assets group in production by default, you can change this default in the application.rb anyways
  * This dep is already defined in activerecord.gemspec
  * initializing @open_transactions in the initialize method
  * add a migrate class method and delegate to the new instance
  * Ensure that .up and .down work as well.
  * Support backwards compatible interface for migration down/up with rails 3.0.x.
  * use File.directory? as Dir.exists? is only 1.9.2+
  * Merge pull request [#2324](https://github.com/rails/rails/issues/2324) from zenapsis/3-1-stable
    Rails 3.1 throws a Errno::ENOTDIR if files are put in assets directories
  * Pass options in ActiveSupport::Cache::CacheStore[#](https://github.com/rails/rails/issues/)read_multi through to the delete_entry call.
  * Remove unnecessary require (happened after fcbde454f6)
  * MassAssignmentProtection: consider 'id' insensetive in StrictSanitizer
    In order to use StrictSanitizer in test mode
    Consider :id as not sensetive attribute that can be filtered from
    mass assignement without exception.
  * Fix the issue where default_url_options is being cached on test cases. Closes [#1872](https://github.com/rails/rails/issues/1872). Closes [#2031](https://github.com/rails/rails/issues/2031).
    Signed-off-by: José Valim <jose.valim@gmail.com>
  * Rename new method to_path to to_partial_path to avoid conflicts with File[#](https://github.com/rails/rails/issues/)to_path and similar.
  * Removing extra requires from the test. Already loaded in abstract_unit.
  * remove extra require for 'active_support/dependencies' as it is required in abstract_unit.rb
  * remove extra require for 'stringio' as it is required in helper.rb
