2011-08-23
==========

  * Make ActionController::TestCase[#](https://github.com/rails/rails/issues/)recycle! set @protocol to nil
    This ensures that the protocol does not get carried over when there are
    two or more requests in functional tests. This was a problem when e.g.
    the first request was HTTP and the second request was HTTPS.
    Closes [#2654](https://github.com/rails/rails/issues/2654).
    Signed-off-by: Andrew White <andyw@pixeltrix.co.uk>
  * Add failing test case for [#2654](https://github.com/rails/rails/issues/2654)
  * Ensure regexp and hash key are UTF-8
  * Merge pull request [#2616](https://github.com/rails/rails/issues/2616) from tilsammans/patch-2
    Removed my name from the changelog as the amount of blogspam became ridic
  * removed the link to my blog to help stop endless comments
  * Revert "Removed my name from the changelog as the amount of blogspam became ridiculous."
    This reverts commit 95bece9155c46a2273a3febc3a2e176b8c15df8f.
  * Merge pull request [#2653](https://github.com/rails/rails/issues/2653) from luckydev/ser-wrap
    Missing require array/wrap in serialization
  * Merge pull request [#2652](https://github.com/rails/rails/issues/2652) from dasch/remove-trailing-whitespace
    Remove trailing whitespace
  * added missing require array/wrap in serialization
  * Merge pull request [#2651](https://github.com/rails/rails/issues/2651) from luckydev/serialization-tests
    More tests for only-include and except-include options in serialization
  * Remove trailing whitespace
  * added more tests for only-include and except-include options in serialization
  * Don't modify params in place - fixes [#2624](https://github.com/rails/rails/issues/2624)
  * Merge pull request [#2646](https://github.com/rails/rails/issues/2646) from guilleiguaran/add-destroy-alias-to-engine
    Add destroy alias to engines
  * Add destroy alias to engines

2011-08-22
==========

  * Merge pull request [#2411](https://github.com/rails/rails/issues/2411) from ai/debug_assets_by_config
    Debug assets by config
  * Merge pull request [#2627](https://github.com/rails/rails/issues/2627) from luckydev/tr
    travis status image added
  * Merge pull request [#2611](https://github.com/rails/rails/issues/2611) from ognevsky/add-destroy-alias
    Added destroy alias to rails generator
  * Merge pull request [#2524](https://github.com/rails/rails/issues/2524) from JonathonMA/fix_ecd37084b28a05f05251
    Use mysql_creation_options inside rescue block
  * Merge pull request [#2634](https://github.com/rails/rails/issues/2634) from guilleiguaran/fix-sprockets-rewrite-asset-path
    Fix Sprockets rewrite_asset_path
  * Travis status image added to GitHub README, excluding API pages.
  * Fix Sprockets rewrite_asset_path
  * Merge pull request [#2631](https://github.com/rails/rails/issues/2631) from dasch/refactor-sprockets
    Refactor Sprockets::Helpers::RailsHelper[#](https://github.com/rails/rails/issues/)performing_caching?
  * Refactor Sprockets::Helpers::RailsHelper[#](https://github.com/rails/rails/issues/)performing_caching?
    No need for them lines to get so long! Also, move that comment into
    the method body where it belongs!
  * Add Destroy Alias
    * Added destroy alias to rails generator
    * add alias info for destroy command
    * Updated command line guides

2011-08-21
==========

  * Merge pull request [#2618](https://github.com/rails/rails/issues/2618) from FLOChip/unicode_j
    fix escape_javascript for unicode character \u2028.
  * Merge pull request [#2620](https://github.com/rails/rails/issues/2620) from cesario/3-1-0
    Fix CI and rename 1 misleading test case.
  * Allow to debug assets by config.assets.debug
  * Fix sprockets warnings
    Fixes [#2598](https://github.com/rails/rails/issues/2598)
  * Removed my name from the changelog as the amount of blogspam became ridiculous.
    When will docrails be back? :-p
  * fix escape_javascript for unicode character \u2028.
  * Merge pull request [#2610](https://github.com/rails/rails/issues/2610) from asmega/documentation
    added link to url_for in documentation
  * Use typewriter styling on url_for in documentation
  * Merge pull request [#2609](https://github.com/rails/rails/issues/2609) from guilleiguaran/bump-sprockets-beta14
    Bump sprockets to 2.0.0.beta.14
  * Merge pull request [#2600](https://github.com/rails/rails/issues/2600) from al/finder_sql_example_update
    Updated the docs for the has_many :finder_sql option

2011-08-20
==========

  * Bump sprockets to 2.0.0.beta.14
  * Merge pull request [#2596](https://github.com/rails/rails/issues/2596) from dharmatech/patch-1
    ActionController::Redirecting : fix docs typo
  * Merge pull request [#2595](https://github.com/rails/rails/issues/2595) from smartinez87/assets-guide
    Document debugging assets set by default for dev and test envs on guides
  * Merge pull request [#2597](https://github.com/rails/rails/issues/2597) from dharmatech/patch-2
    actionpack/lib/action_controller/base.rb: docs typo
  * Merge pull request [#2604](https://github.com/rails/rails/issues/2604) from vijaydev/params_wrapper_docs
    Minor edit in the params wrapper api docs
  * params wrapper docs correction
  * Merge pull request [#2602](https://github.com/rails/rails/issues/2602) from ernie/fix_predicate_builder_primary_key_assumption
    Fix assumption of primary key name in PredicateBuilder subquery.
  * Updated the docs for the has_many :finder_sql option to reflect changes made in
    [#](https://github.com/rails/rails/issues/)a7e19b30ca71f62af516, i.e. the use of Procs when interpolation of the SQL is required.
  * Merge pull request [#2603](https://github.com/rails/rails/issues/2603) from vijaydev/guides
    Minor change in the 3.1 release notes
  * minor change in the 3.1 release notes
  * Fix PredicateBuilder clobbering select_values in subquery.
  * Fix assumption of primary key name in PredicateBuilder subquery.
  * actionpack/lib/action_controller/base.rb: docs typo
  * ActionController::Redirecting : fix docs typo

2011-08-19
==========

  * Document debugging assets set by default for dev and test envs in the asset_pipeline guide.
  * Merge pull request [#2581](https://github.com/rails/rails/issues/2581) from guilleiguaran/debug-assets-in-dev
    Debug assets by default in development and test environments
  * Merge pull request [#2589](https://github.com/rails/rails/issues/2589) from vijaydev/guides
    Mailer guide fixes
  * mailer guide: fixes indentation, and use fixed width fonts wherever necessary

2011-08-18
==========

  * Debug assets by default in development and test environments
  * minor details revised in a gsub
    Regexps have a construct to express alternation of characters, which
    is character classes. In addition to being the most specific idiom to
    write this pattern, it reads better without the backslashes. Also, it
    is better not to use a capture if none is needed. As a side-effect of
    these changes, the gsub is marginally faster, but speed is not the
    point of this commit.

2011-08-17
==========

  * Merge branch 'master' of https://github.com/lifo/docrails
  * fixes generation of the AR querying guide
  * Merge pull request [#2551](https://github.com/rails/rails/issues/2551) from rgo/remove-blank-spaces-application-css
    Cleanup application.css

2011-08-16
==========

  * Updates to remove extra whitespaces and notably fix a whitespace issue with ajax_on_rails causing a code block not to render the entire
    block properly.
  * Fix typo in i18n.textile header and remove extra whitespace.
  * Fix ruby typo to correctly render code block in initializer.textile
  * Fix spacing in plugins.textile to fix html rendering and remove extra whitespace from security.textile
  * Cleanup application.css
  * making the order more clear, adding linux distros mailing lists to our cc
  * adding lessons learned so I do not make the same mistake twice
  * Properly escape glob characters.
  * properly escape html to avoid invalid utf8 causing XSS attacks
  * Tags with invalid names should also be stripped in order to prevent
    XSS attacks.  Thanks Sascha Depold for the report.
  * prevent sql injection attacks by escaping quotes in column names
  * adding security email address
  * Merge branch 'master' of github.com:rails/rails
  * Use lazy load hooks to set parameter wrapping configuration. This means that it doesn't force Action Controller / Active Record to load,
    but it doesn't fail if they have already loaded. Thanks @josevalim for the hint.
  * Merge branch 'master' of github.com:lifo/docrails
  * prefer ends_with? over slicing
  * AS guide: document in Module[#](https://github.com/rails/rails/issues/)delegate that the method must be public in the target
  * Fix formatting of active_record_validations_callbacks.textile so guide will render properly at
    http://edgeguides.rubyonrails.org/active_record_validations_callbacks.html[#](https://github.com/rails/rails/issues/)displaying-validation-errors-in-the-view
  * Fix assets tests in railties
  * Don't reference ActiveRecord::Base in initializers/wrap_parameters.rb. Use config.active_record instead. This yields about a 20% decrease
    in startup time because it means that the connection is not created immediately on startup. Of course, this is only useful if you are not
    going to immediately use the database after startup.
  * In 1efd88283ef68d912df215125951a87526768a51, ConnectionAdapters was put under eager_autoload. Due to the requires in that file, this
    caused ConnectionSpecification to be loaded, which references ActiveRecord::Base, which means the database connection is established. We
    do not want to connect to the database when Active Record is loaded, only when ActiveRecord::Base is first referenced by the user.
  * Revert "Merge pull request [#2543](https://github.com/rails/rails/issues/2543) from htanata/unused_require_in_ar_test"
    This reverts commit 87152f2604e73b218df90befda576f0acfed0bbf, reversing
    changes made to 0d3615f04c79f6e90d8ab33fdfc920b8faac9cb8.
  * Merge pull request [#2543](https://github.com/rails/rails/issues/2543) from htanata/unused_require_in_ar_test
    Remove unused require in activerecord/test/cases/attribute_methods_test.rb
  * document Array[#](https://github.com/rails/rails/issues/)append and Array[#](https://github.com/rails/rails/issues/)prepend methods in AS
    guide
  * Remove unused require.

2011-08-15
==========

  * Fix tzinfo require (it broke test_raises_when_an_invalid_timezone_is_defined_in_the_config in railties)
  * Fix wrap_parameters initializer template
  * Be more lazy about creating time zone objects. Decreases startup time by about 10%. ([#734](https://github.com/rails/rails/issues/734))
  * Don't refer to ActionController::Base in the wrap_parameters initializer - use config object instead. Cuts about 15% off the load time.
    ([#734](https://github.com/rails/rails/issues/734))
  * Document Hash[#](https://github.com/rails/rails/issues/)extract!.
  * Fixed mistakes in layouts/rendering guide about yield
    yield(:unspecified_block) actually returns true even if :unspecified_block never
    exists. This means you can't use the form yield(:unspecified_block) or yield.
  * Updates to Asset Pipeline Guide
    Grammar/syntax/style changes:
    1. Changed all 'we' to 'you'
    2. Corrected typos
    3. Make consistent styline (e.g., dashes & double-dash usage)
    4. Change use of future tense (will...) to present tense (easier to read).
  * Bump arel dependency
  * Use new SelectManager[#](https://github.com/rails/rails/issues/)source method
  * Use new SelectManager[#](https://github.com/rails/rails/issues/)projections= method
  * use update.key instead of update.ast.key. make better use of select manager.
  * Use a SelectCore rather than a full SelectManager
  * Refactor building the update manager
  * Support for multi-table updates with limits, offsets and orders
  * Support updates with joins. Fixes [#522](https://github.com/rails/rails/issues/522).
  * Added Array[#](https://github.com/rails/rails/issues/)prepend as an alias for Array[#](https://github.com/rails/rails/issues/)unshift and
    Array[#](https://github.com/rails/rails/issues/)append as an alias for Array[#](https://github.com/rails/rails/issues/)<< [DHH]
  * Merge pull request [#2539](https://github.com/rails/rails/issues/2539) from arunagw/delegate_expl
    Delegate expl
