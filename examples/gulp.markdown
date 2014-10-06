3.8.8 / 2014-09-07
==================

  * minor doc tweak
  * Sexier option parsing example
  * Merge pull request [#648](https://github.com/gulpjs/gulp/issues/648) from julien-f/patch-1
    Fix 2 links.
  * Fix 2 links.
  * Merge pull request [#647](https://github.com/gulpjs/gulp/issues/647) from briandipalma/gulp.dest-doc
    Create missing `gulp.dest` parameter docs.
  * Create missing `gulp.dest` parameter docs.
  * Merge pull request [#645](https://github.com/gulpjs/gulp/issues/645) from baer/browserify-recipe
    Add browserify recipe
  * Merge pull request [#635](https://github.com/gulpjs/gulp/issues/635) from PeterDaveHello/patch-1
    make CI build faster
  * Add browserify recipe
  * Merge pull request [#643](https://github.com/gulpjs/gulp/issues/643) from stevemao/patch-1
    add missing semicolon in browserify recipe
  * add missing semicolon in browserify recipe
    add missing semicolon in browserify recipe
  * Merge pull request [#642](https://github.com/gulpjs/gulp/issues/642) from baer/patch-1
    Correct confusing whitespace
  * Correct confusing whitespace
    I stared at this for a few minutes thinking there was a missing `}` but it's just some bad spacing :)
  * Merge pull request [#637](https://github.com/gulpjs/gulp/issues/637) from sleeper/fix_recipe
    Fix the gulp.watch example in the "Server with live-reloading and CSS injection" recipe
  * Fix the gulp.watch example
    gulp.watch is relative to `process.cwd()`. We thus need to indicate the `app`
    directory as the base.
  * make CI build faster
  * Merge pull request [#633](https://github.com/gulpjs/gulp/issues/633) from mikaelbr/licenseHeader
    Adds proper LICENSE file header according to MIT site
  * Adds proper LICENSE file header according to MIT site
  * recipes - switch out `stream-combiner` with `multistream`
    as `stream-combiner` is streams1 while multistream is streams2.
  * Merge pull request [#624](https://github.com/gulpjs/gulp/issues/624) from egtork/patch-1
    Update fast-browserify-builds-with-watchify.md
  * Update fast-browserify-builds-with-watchify.md
    Added browserify dependency
  * docs - grammar
  * Merge pull request [#623](https://github.com/gulpjs/gulp/issues/623) from sindresorhus/delete-recipe
    add recipe for deleting files
  * add recipe for deleting files
  * docs - more cleanup
  * docs - cleanup all the recipes
    make them more consistent, grammar, code style, etc.
  * docs - add readme index for recipes
  * add markdown handling to .editorconfig
  * Merge pull request [#563](https://github.com/gulpjs/gulp/issues/563) from zoombody/patch-1
    Only output version if no tasks were specified
  * Merge pull request [#621](https://github.com/gulpjs/gulp/issues/621) from barneycarroll/patch-1
    API docs wording change: plugin stream support
  * API docs wording change: plugin stream support
    It sounds stupid, but I was struggling to grok why plugins weren't allowed to implement buffer support. The sentence came across as a directive more than a warning.
    ```
    - Plugins may not implement support for streams.
    + Plugins might not implement support for streams.
    ```
  * Merge pull request [#620](https://github.com/gulpjs/gulp/issues/620) from maximilianschmitt/patch-1
    Added "Get started with gulp (video series)" to README
  * Added "Get started with gulp (video series)" to README
  * 3.8.7
  * update gulp-util for new errors

3.8.7 / 2014-08-02
==================

  * Merge pull request [#608](https://github.com/gulpjs/gulp/issues/608) from megakote/patch-3
    Fixed recipes for new browserify/watchify
  * Fixed recipes for new browserify/watchify
  * Merge pull request [#604](https://github.com/gulpjs/gulp/issues/604) from samccone/sjs/remove
    Remove explitive in gulp src
  * Remove explitive in gulp src
  * Merge pull request [#598](https://github.com/gulpjs/gulp/issues/598) from pkozlowski-opensource/patch-2
    fix markdown formatting for the "silent" option
  * fix markdown formatting for the "silent" option
  * add silent docs
  * Merge pull request [#595](https://github.com/gulpjs/gulp/issues/595) from pkozlowski-opensource/patch-1
    update URL to the search plugins site
  * update URL to the search plugins site
    http://gulpjs.com/plugins/ probably be an "official"
    search plugins website as it filters out black-listed ones.
  * Merge pull request [#588](https://github.com/gulpjs/gulp/issues/588) from CaryLandholt/master
    Add "Gulp-The Basics" screencast in documentation
  * Merge pull request [#589](https://github.com/gulpjs/gulp/issues/589) from shakyShane/master
    Docs: return stream & fix syntax highlighting
  * Docs: return stream & fix syntax highlighting
  * Add "Gulp-The Basics" screencast in documentation
  * clean up code for [#587](https://github.com/gulpjs/gulp/issues/587) close
  * log unknown errors. closes [#587](https://github.com/gulpjs/gulp/issues/587)
  * Merge pull request [#567](https://github.com/gulpjs/gulp/issues/567) from AntouanK/add-new-recipe
    Add new recipe for making streams from memory contents
  * One var per line 
    One var per line ( to be consistent with the guidelines )
  * change promises to event-stream
  * Merge pull request [#585](https://github.com/gulpjs/gulp/issues/585) from fcambus/master
    Adding "Building With Gulp" article in documentation
  * Adding "Building With Gulp" article in documentation
  * Merge pull request [#582](https://github.com/gulpjs/gulp/issues/582) from appleboy/patch
    Add BrowserSync web site link.
  * add BrowserSync web site link.
    Signed-off-by: Bo-Yi Wu <appleboy.tw@gmail.com>
  * Update README.md
  * 3.8.6
  * dep updates

3.8.6 / 2014-07-09
==================

  * Merge pull request [#580](https://github.com/gulpjs/gulp/issues/580) from shakyShane/master
    Docs: Added server example with BrowserSync
  * Docs: Added server example with BrowserSync
  * Merge pull request [#576](https://github.com/gulpjs/gulp/issues/576) from cognitom/recipe-running-task-steps-per-folder
    Update the recipe "running-task-steps-per-folder.md"
  * No more `.apply(null, args)`
  * Merge pull request [#573](https://github.com/gulpjs/gulp/issues/573) from jbnicolai/remove-exec-from-licence
    Removes executable flag from LICENCE.
  * Removes executable flag from LICENCE.
  * Only output version if no tasks were specified
  * remove console.log test
  * add a recipe for starting streams with memory content ( virtual files )
  * Merge pull request [#559](https://github.com/gulpjs/gulp/issues/559) from tkellen/patch-1
    update liftoff
  * Merge pull request [#560](https://github.com/gulpjs/gulp/issues/560) from crzidea/patch-1
    Style js in README.md
  * Style js in README.md
  * update liftoff
  * Merge pull request [#558](https://github.com/gulpjs/gulp/issues/558) from RnbWd/master
    Updated Async Callback Support Readme
  * Updated Async Callback Support Readme
  * update docs for watchify, closes [#488](https://github.com/gulpjs/gulp/issues/488)
  * 3.8.5

3.8.5 / 2014-06-27
==================

  * fix autocomplete, closes [#539](https://github.com/gulpjs/gulp/issues/539)
  * 3.8.4
  * 3.8.4 - closes [#479](https://github.com/gulpjs/gulp/issues/479)

3.8.4 / 2014-06-27
==================

  * use exit code 1 when a task fails
  * 3.8.3
