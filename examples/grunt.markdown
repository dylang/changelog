0.4.1 / 2013-03-13
==================

  * Bumping version to 0.4.1 and publishing to npm.
  * Fix path.join thrown errors with expandMapping rename. Closes gh-725.
  * Update copyright date to 2013. Closes gh-660.
  * Remove some side effects from manually requiring Grunt. Closes gh-605.
    * Add and remove process uncaughtException handler only when appropriate.
  * grunt.log: add formatting support and implicitly cast msg to a string. Closes gh-703.
    * Added unit tests.
    * Bump error count on log.error() regardless of message.
    * Add support for casting and formatting.
    * Simplified log.debug.
  * Update js-yaml to version 2. Closes gh-683.
    * I've been assured there are no breaking changes. God help me (and I'm super sorry) if that's bullshit.
  * The grunt.util.spawn method now falls back to stdout when the `grunt` option is set. Closes gh-691.
    * This is a band-aid until Grunt 0.5 comes out. Grunt 0.5 will output errors on stderr instead of stdout.
  * Making --verbose "Files:" warnings less scary. Closes gh-657.
    * They're now yellow (warning) instead of red (error).
  * Fixing typo: the grunt.fatal method now defaults to FATAL_ERROR. Closes gh-656, gh-707.
  * Removed a duplicate line. Closes gh-702.
  * Gruntfile name should no longer be case sensitive. Closes gh-685.
    * Updated glob dependency to 3.1.21
  * The grunt.file.delete method warns and returns false if file doesn't exist. Closes gh-635, gh-714.
  * The grunt.package property is now resolved via require(). Closes gh-704.
  * The grunt.util.spawn method no longer breaks on multibyte stdio. Closes gh-710.
  * Fix "path.join arguments must be strings" error in file.expand/recurse when options.cwd is not set. Closes gh-722.
  * Adding a fairly relevant keyword to package.json.
  * Bumping version for development.

0.4.0 / 2013-02-18
==================

  * Updating ancient docs link, just in case.
  * Bumping version to 0.4.0 for release!
  * Bumping devDependency versions.
  * Simplifying the readme.
  * Bumping version to 0.4.0rc8 and publishing to npm.
  * The file.expandMapping method now creates arrays of src files if they share a dest. Closes gh-665.
    * Note that the .src property of all generated src-dest objects is now always an array.

0.4.0-rc8 / 2013-02-13
======================

  * Updating to the new official tagline. Closes gh-659.
  * Updating glob dependency to 3.1.17, which fixes a directory matching issue on Windows.
  * Bumping version to 0.4.0rc7 and publishing to npm.
    * The file.expandMapping method "ext" option is now / aware. Closes gh-625.

0.4.0-rc7 / 2013-01-21
======================

  * Make --help options footer a separate method.
  * The file.expandMapping method "ext" option is now / aware. Closes gh-625.

0.4.0-rc6 / 2013-01-18
======================

  * Bumping version to 0.4.0rc6 and publishing to npm.
    * Updating grunt/gruntplugin dependencies to rc6.
    * Changing in-development grunt/gruntplugin dependency versions from tilde version ranges to specific versions.
  * Taking my own advice and removing ~ from pre-release version numbers in package.json.

0.4.0-rc5 / 2013-01-09
======================

  * Updating grunt to 0.4.0rc5, updating dev deps as well.
  * Updating Gruntfile to be a little more watch-friendly.
  * Prevent config expansion when multi tasks need to run all targets in turn.
  * Inside of tasks, this.errorCount and this.filesSrc should be enumerable.
  * The file.expand 'filter' option can now be either a string or a function.
    * The string has to be a valid a fs.Stats method name.
    * The function is synchronous, accepts a relative filepath, and should return true or false.
  * Removing no-longer necessary file.expandDirs and file.expandFiles methods.
    * file.expandDirs(…) -> file.expand({filter: 'isDirectory'), …)
    * file.expandFiles(…) -> file.expand({filter: 'isFile'), …)
  * Reverted changes made for gh-524.
    * The previous abstraction, while nice, didn't allow for practical per-task setup/teardown. Instead of building further abstraction, I am reverting. This will be addressed in 0.5.
    * Multi task functions are now run once per target, not once per file mapping object.
    * Inside tasks, this.files is an array of fully normalized/expanded file mapping objects, each with .src .dest .orig properties (as appropriate)
    * Inside tasks, this.filesSrc is a flattened, uniqued array of all this.files object .src properties.
    * Task authors will be responsible for iterating over this.files or this.filesSrc to process files in their multi task.
  * Inside multi tasks, all templates (values, not keys) in this.data are automatically processed.
    * "dest" key values will be automatically processed while being normalized in file objects.
  * Improving multi task test gruntfile error output via difflet lib.
  * File mappings now support an 'ext' option to change file extensions.
  * The file.expand method now supports a "filter" option.
    * Its string value is the name of any method supported by fs.statSync, eg. 'isFile' or 'isDirectory'.
  * Removing file.expandFileURLs method as it's now obviated by the "nonull" option.
  * Adding --verbose logging for multi task src-dest mappings.
  * Support expandMapping declaratively within multi task files object.
    * Set expand: true to enable.
    * Supports all file.expandMapping options.
    * Files are expanded at task-run-time, so filesystem changes post init-time will be recognized.
    * Resulting this.file.orig property contains all properties of the original file object.
  * Support .nonull in multi task file objects.
  * Changing this.task.file somewhat.
    * .dest is still template-expanded.
    * .src is still a template-/file-expanded, flattened array.
    * .srcRaw has been removed.
    * .orig contains the normalized file object with .src, .dest, etc. properties
    * The .orig.dest and .orig.src properties are not template-expanded.
    * The .orig.src property is normalized to a non-file-expanded, flattened array.
  * Adding config.process method to process raw values already retrieved from config data.
  * The fail.fatal method now respects the --stack option. Closes gh-578.
  * Add tests for grunt.option. Closes gh-585.
  * Updating file.expandMapping to return a more explicit array of file objects.
    * Instead of {dest1: src1, dest2: src2, …} it returns [{dest: dest1, src: src1}, {dest: dest2, src: src2}, …] which is the format the files object is normalized to inside multi tasks
  * Fixing issue with missing grunt plugin keywords metadata. Closes gh-588.
  * Fixed bug when displaying a "missing gruntfile" error.
  * Bumping version to 0.4.0rc4.

0.4.0-rc4 / 2012-12-17
======================

  * The config.get method should work with mixed-case property names. Closes gh-583.
  * Minor tweak to util.spawn tests for gh-571.
  * The util.spawn method no longer throws an exception when custom stdio stream(s) are specified. Closes gh-571.
  * Updating isPathAbsolute tests to make more sense on Windows.
  * Updating file.expandMapping to properly normalize expanded Windows paths.
  * More util.spawn tests and fixes for Windows.
  * In util.spawn, only use "which" if cmd has no path component. Closes gh-576.
  * Remove preinstall script.
  * install grunt-cli globally for testing
  * Bumping version to 0.4.0rc3.
  * Moving shell auto-completion code from grunt to grunt-cli.

0.4.0-rc3 / 2012-12-12
======================

  * Renamed devel branch to master!
    * Sorry, but you're probably going to have to re-fork.
    * FWIW, this should never happen again.
    * <3
  * Removing superfluous file.clearRequireCache method.
  * Updating some "watch" task/plugin stuff.
  * Removing init/user {% %} [% %] templates by default (they can still be added in manually if needed).
  * Updating file.findup to use the findup-sync lib.
  * Removing superfluous fail.warnAlternate method.
  * Removing superfluous grunt.task.unregisterTasks method.
  * simplify
  * Reverting CONTRIBUTING.md to previous version 1d6bc198, gh-566 introduced an outdated copy.
  * Bumping version, publishing 0.4.0rc2.

0.4.0-rc2 / 2012-12-10
======================

  * Remove docs as they are now in the wiki. Closes gh-566.
  * renamed grunt.file.fileMapping to grunt.file.expandMapping
  * Adding file.fileMapping method. Closes gh-450.
  * Bumping version to 0.4.0rc1. This is a release candidate, folks.

0.4.0-rc1 / 2012-12-07
======================

  * Migrated expect script to grunt-init.
  * Minor tweaks to the way --version --verbose is displayed.
  * Removed obsolete grunt-init methods.
    The following methods have been removed and are now implemented in grunt-init where appropriate:
    * task.searchDirs
    * task.expand
    * task.expandDirs
    * task.expandFiles
    * task.getFile
    * task.readDefaults
    * file.userDir
  * grunt-init is now a standalone installable module.
    * No longer depends on grunt-init
    * Task no longer loads init task from included grunt-init
    * Refactored --help to allow it to be modified (as the standalone grunt-init is just a wrapper around grunt)
  * Removing cruft in gruntfile, oops.
  * Template errors now have stack traces visible with --stack. Closes gh-555.

0.4.0-a / 2012-12-05
====================

  * Removing deprecated task this.files property, once and for all!
