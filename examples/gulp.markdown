3.6.0 / 2014-03-28
==================

  * dont exit the process or stop watching on error
  * Merge pull request [#373](https://github.com/gulpjs/gulp/issues/373) from meleyal/patch-1
    Update "Using coffee-script for gulpfile" recipe with link to cult
  * Update using-coffee-script-for-gulpfile.md
  * Merge pull request [#367](https://github.com/gulpjs/gulp/issues/367) from steida/master
    Rename concat to merge.
  * Rename concat to merge.
    https://github.com/dominictarr/event-stream#merge-stream1streamn
  * closes [#366](https://github.com/gulpjs/gulp/issues/366)
  * Merge pull request [#351](https://github.com/gulpjs/gulp/issues/351) from tschaub/patch-1
    Another strategy for incremental builds
  * Another strategy for incremental builds
    While the `gulp-changed` and `gulp-cached` plugins work great with 1:1 src:dest file mapping, they should not be used for n:1 src:dest mapping.  With plugins like `gulp-concat`, `css-sprite`, etc. that generate a single output file given many input files, you want to compare the modification time of the output file to the modification file of each input file (and use all if any are newer).
    The `gulp-newer` plugin works with both 1:1 and n:1 src:dest mapping by comparing `mtime`.
  * Merge pull request [#346](https://github.com/gulpjs/gulp/issues/346) from floatdrop/master
    Actualize mocha recipe
  * Actualize mocha recipe
    Closes [#233](https://github.com/gulpjs/gulp/issues/233)
  * closes [#345](https://github.com/gulpjs/gulp/issues/345)

3.5.6 / 2014-03-13
==================

  * fix completion not being included
  * Merge pull request [#342](https://github.com/gulpjs/gulp/issues/342) from thejameskyle/patch-1
    Include completion files for npm
  * Add completion dir to package.json files
  * Merge pull request [#326](https://github.com/gulpjs/gulp/issues/326) from t3chnoboy/master
    add missing spaces into function declarations
  * Merge pull request [#327](https://github.com/gulpjs/gulp/issues/327) from stevermeister/man-update
    + update readme - plugin example
  * + update readme - plugin example
  * remove spaces before '(' to follow style guide
  * add missing spaces into function declarations
  * Merge pull request [#323](https://github.com/gulpjs/gulp/issues/323) from gulpjs/recommend-yargs
    Recommend `yargs` over `optimist`
  * Recommend `yargs` over `optimist`
    Substack has deprecated the `optimist` package, recommending the use of
    it's successor, `yargs`.
  * Merge pull request [#320](https://github.com/gulpjs/gulp/issues/320) from tkellen/misnamedvar
    env.localPackage should be env.modulePackage
  * env.localPackage should be env.modulePackage
  * 3.5.5

3.5.5 / 2014-03-01
==================

  * merge
  * new deprecation msg, update deps
  * Update guidelines.md
  * Merge pull request [#313](https://github.com/gulpjs/gulp/issues/313) from ezhilvendhan/master
    Fix typo in "Dealing With Streams" doc
  * Fix typo in Dealing With Streams doc
  * Merge pull request [#307](https://github.com/gulpjs/gulp/issues/307) from sindresorhus/chalk
    use `chalk` directly
  * use `chalk` directly
  * recommended modules
  * better log messages
  * Merge pull request [#305](https://github.com/gulpjs/gulp/issues/305) from tkellen/envarg
    receive environment as argument
  * receive environment as argument
  * optimistic version ranges, doc updates for gulp-util upcoming changes
  * Merge pull request [#296](https://github.com/gulpjs/gulp/issues/296) from minibikini/patch-1
    Update `Using coffee-script for gulpfile` recipe
  * Update `Using coffee-script for gulpfile` recipes
    Adds a link to coffeegulp.
  * Merge pull request [#295](https://github.com/gulpjs/gulp/issues/295) from koistya/patch-1
    Update fast-browserify-builds-with-watchify.md
  * Update fast-browserify-builds-with-watchify.md
  * docs/readme - link up gulpjs to the webchat
    not everyone knows how to use an IRC client. this makes it supersimple.
  * Merge pull request [#288](https://github.com/gulpjs/gulp/issues/288) from jamescrowley/updateReadmeWithStackOver
    Update documentation: where to go for help
  * Update documentation: where to go for help
  * Merge pull request [#278](https://github.com/gulpjs/gulp/issues/278) from hughsk/watchify-recipe-fix
    Improve watchify recipe.
  * Improve watchify recipe.
    As @andreypopp pointed out on IRC, this example was doubling up
    on watchers when it only needed to listen to watchify's "update"
    event.
  * note about incremental builds
  * clarity
  * clean up
  * Merge pull request [#275](https://github.com/gulpjs/gulp/issues/275) from jamescrowley/docs.filesPerFold
    Adding recipe for running task steps per folder
  * Update running-task-steps-per-folder.md
  * Rename running-task-steps-per-folder to running-task-steps-per-folder.md
  * Adding docs for running task steps per folder
  * Merge pull request [#272](https://github.com/gulpjs/gulp/issues/272) from hughsk/watchify-recipe
    Add watchify recipe
  * Add watchify recipe
    Offers considerably faster browserify builds by using the
    watchify module and vinyl-source-stream in place of
    gulp-browserify.
  * Merge pull request [#263](https://github.com/gulpjs/gulp/issues/263) from mslemeri/master
    Fixed "changed" event name to "change" on gulp.watch in docs
  * Fixed "changed" event name to "change"
  * more keywords
  * Improve package.json
    repo can use shorthand, correct homepage, remove main as it's moot when using index.js, add some keywords
  * Merge pull request [#260](https://github.com/gulpjs/gulp/issues/260) from shinnn/master
    Update URLs on package.json
  * Update URLs on package.json
  * Merge pull request [#256](https://github.com/gulpjs/gulp/issues/256) from darsain/docs-patch-1
    Using multiple source streams in ordered fashion
  * Forgot objectMode: true flag
  * Using multiple source streams in ordered fashion
  * -v removal wow this has gone back and forth like 5 times
  * Merge pull request [#249](https://github.com/gulpjs/gulp/issues/249) from callumlocke/less-startup-logging
    Skip "Working directory changed" log if not applicable
  * docs on lazypipe, docs on combine streams for errors. closes [#254](https://github.com/gulpjs/gulp/issues/254) [#252](https://github.com/gulpjs/gulp/issues/252) [#251](https://github.com/gulpjs/gulp/issues/251)
  * only chdir if necessary
  * fix EE watch docs
  * CLI cleanup
  * link to contributing guide
  * Merge branch 'master' of https://github.com/gulpjs/gulp
  * contributing.md
  * Merge pull request [#245](https://github.com/gulpjs/gulp/issues/245) from johnhaldson/patch-1
    Update CLI.md
  * Update CLI.md
    change V to lowercase v for getting version information
  * Merge pull request [#236](https://github.com/gulpjs/gulp/issues/236) from tkellen/liftoff
    implement the gulp cli using node-liftoff.

3.5.2 / 2014-02-05
==================

  * add guideline about shoehorning stream support
  * implement the gulp cli using node-liftoff.
  * fix gittip url
  * doc fixes RE [#232](https://github.com/gulpjs/gulp/issues/232)
  * 3.5.2
  * change lowercase -v to -V for unix conventions
  * temporary working gittip
  * Merge pull request [#231](https://github.com/gulpjs/gulp/issues/231) from gdi2290/patch-1
    update copyright year
  * update copyright year
  * add gittip
  * fix coffee sample
