2011-11-20
==========

  * push disable setting to the event loop - this allows for form submit to begin
  * remove js min from repo
  * add minified source to min dir in js + add uglify to make process

2011-11-16
==========

  * Merge pull request [#621](https://github.com/twitter/bootstrap/issues/621) from vshih/master
    Fix tab event selector in tabs JS docs example
  * Merge pull request [#645](https://github.com/twitter/bootstrap/issues/645) from mkaschenko/master
    Fix anchor to JS dropdown docs

2011-11-15
==========

  * Fix dropdown anchor
  * clean up var defintion
  * Merge branch 'master' of https://github.com/twitter/bootstrap
    Conflicts:
    bootstrap.css
  * improve alert api - $("#fat").alert("close") should just work.

2011-11-12
==========

  * Merge pull request [#629](https://github.com/twitter/bootstrap/issues/629) from leocassarani/patch-1
    Fix grammatically incorrect sentence in form docs
  * Fix grammatically incorrect sentence (copy-paste oversight?)

2011-11-11
==========

  * Fixes tab event selector in tabs example
  * ensure two-thirds grid offsets work the same as the others
  * fix broken state of active buttons

2011-11-07
==========

  * remove selector options for popover, in favor of more generic content selector

2011-11-06
==========

  * Merge pull request [#554](https://github.com/twitter/bootstrap/issues/554) from rvagg/poveropt
    optionable selectors for title & content elements

2011-11-05
==========

  * removed twipsy options
  * Merge remote-tracking branch 'twitter/master' into poveropt
    Conflicts:
    js/bootstrap-popover.js
  * don't include data-content/data-title as specifications for options in twipsy/popover

2011-11-04
==========

  * tests & docs & twipsy too
  * Merge branch 'master' into poveropt
  * rebuild
  * Merge branch 'master' of https://github.com/twitter/bootstrap
  * update to jquery 1.7 + add toggle method to twipsy/popover
  * Merge pull request [#557](https://github.com/twitter/bootstrap/issues/557) from JulianBirch/master
    Fixed compilation under dotLess
  * Add a missing bracket back in.  (Prevents dotLess from compiling.)

2011-11-03
==========

  * optionable selectors for title & content elements
  * add the tab-pane class back to example
  * make .tab-content backwards compat with 1.3
  * Merge branch 'master' of https://github.com/twitter/bootstrap
  * fix > & bug and point to 1.1.4 less version
  * Merge pull request [#537](https://github.com/twitter/bootstrap/issues/537) from hermanschutte/master
    Small change to correct the incorrect description for bootstrap-buttons.js in the Javascript section
  * update button comment
  * Merge pull request [#544](https://github.com/twitter/bootstrap/issues/544) from nikcub/master
    bump version number in docs
  * bump version number in docs
  * Add correct description for bootstrap-buttons.js in Javascript section

2011-11-02
==========

  * remove preserve-3d
  * update 1.4 docs
  * rebuild
  * Merge branch 'master' of https://github.com/twitter/bootstrap into dev
  * update 1.3 to 1.4 stuffs
  * rebuild css, add preserve-3d for faster animations, fix whitespace in mixins.less

2011-11-01
==========

  * Merge pull request [#525](https://github.com/twitter/bootstrap/issues/525) from mchung/patch-1
    Fixed typo in Makefile
  * Fixed typo in Makefile
  * fix tipsies, modals, and popovers from overlaying topbar
  * fix pagination inconsistencies

2011-010-31
===========

  * Merge branch 'kriansa-patch1' into dev
    Conflicts:
    bootstrap.css
  * tweak alignment for IE7 and chrome
  * Merge branch 'patch1' of https://github.com/kriansa/bootstrap into kriansa-patch1
  * Merge branch 'dev' of github.com:twitter/bootstrap into dev
    Conflicts:
    bootstrap.css
  * remove fixed height from select elements for IE7
  * issue [#240](https://github.com/twitter/bootstrap/issues/240) - firefox drop css transition events :{o

2011-010-29
===========

  * add template option and make title an optional attribute for popover
  * allow the use of data attributes to define popover options
  * add active class to css for buttons, write new spec for button, "use strict"
  * star work on bootstrap-buttons.js
  * Merge branch 'master' of github.com:twitter/bootstrap into dev
    Conflicts:
    bootstrap.css
    bootstrap.min.css
    lib/forms.less

2011-010-28
===========

  * adding resizable class and mixin
  * Update README.md
  * Update LICENSE
  * remove background color from html tag

2011-010-27
===========

  * Fixed a bug that wasn't working as expected on Linux
  * Merge branch 'patch1' of https://github.com/kriansa/bootstrap into kriansa-patch1
  * fix vertical position of dropdown menu in .tabs
  * fix prettyify and update the table styles to include a condensed flavor

2011-010-26
===========

  * Aligned close buttons to the middle of alert message

2011-010-22
===========

  * Merge pull request [#462](https://github.com/twitter/bootstrap/issues/462) from southpolesteve/master
    Use proper span classes for three column layout in hero example

2011-010-21
===========

  * Use proper classes for three column layout
  * tweaking prettify styles to introduce dark theme
  * move javascript to le footer

2011-010-20
===========

  * fix the popover background color to work in ie7
  * updated fluid example to not use floated sidebar and instead use position absolute; not ideal, but it works in most cases
  * update docs to streamline the tables section, remove redundant css for tables to simplify borders
  * remove redundant styles from inline forms
  * update docs copy to include mention of info alert messages

2011-010-12
===========

  * remove new tab stuff since it breaks backwards compatability
  * adding new tabble stuff, still a huge work in progress
  * updated pills to include vertical (stacked) variation in patterns and documentation

2011-010-010
============

  * Merge pull request [#408](https://github.com/twitter/bootstrap/issues/408) from tinyfly/grid-input-size-fix
    adjust width calculations for formColumns to fix issue [#404](https://github.com/twitter/bootstrap/issues/404)
  * fixing form input width sizing, removing unused CSS
  * adjust width calculations for formColumns to fix issue [#404](https://github.com/twitter/bootstrap/issues/404)
  * cleanup tabs and pills to prep css for new stuff
  * start adding examples to docs for alternate tabs and pills
  * small tweak to dropdowns for autocomplete if you implement dropdowns that way
  * improve text color and borders for legibility
  * new form state styles with lighter footprint
  * add extra states to the form examples

2011-010-09
===========

  * remove bottom margin from form in modals for temp fix"

2011-010-08
===========

  * modal was not centered correctly
  * remove select from docs form sizes
  * remove select from the new form grid sizes and let them inherit the default grid ones
  * add better handling to the tables so that the thead and tbody first row can have rounded corners where applicable
  * place popovers and twipsies above modals for use there
  * fix problems with scope in tables when using th in tbody
  * bring hover state back to the .brand element in the topbar to fix a bug
  * update docs to simplify first table example and introduce nested documentation
  * resolve problem with nested tables having double borders
  * Merge pull request [#381](https://github.com/twitter/bootstrap/issues/381) from smaboshe/docs
    Docs

2011-010-07
===========

  * .gitignore update.
