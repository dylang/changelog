2011-08-23
==========

  * Merge pull request [#71](https://github.com/twitter/bootstrap/issues/71) from
    DHS/fix-select-labels
    Fixed empty for fields on select labels in documentation
  * Fixed empty for fields on select labels
    Also added id fields to selects where needed
  * add delete button + give .btn cursor:pointer
  * comment out button method with // so less doesn't compile it into source
  * append checkbox to password input [#36](https://github.com/twitter/bootstrap/issues/36)
  * remake
  * goodbye -ms-filter.

2011-08-22
==========

  * remove templates
  * rename examples dir
  * adding first template to the repo for a generic website page
  * Bugfix and copy changes
  * remake
  * Merge branch 'master' of github.com:twitter/bootstrap
  * fix copy for ie in docs
  * Merge pull request [#51](https://github.com/twitter/bootstrap/issues/51) from
    Tigraine/master
    Fixed syntax error in patterns.less
  * Merge pull request [#58](https://github.com/twitter/bootstrap/issues/58) from
    sankage/master
    fixed [#10](https://github.com/twitter/bootstrap/issues/10): color-stop() function removed,
    @colorStop fixed for moz to be unitless
  * changed @colorStop to be unitless
  * fixed color-stop for opera, ie10, w3c, new webkit
  * Fixed a syntax error preventing less compilation with dotless
  * update copy for browser support
  * v1.1.0
  * finish cleaning up ie 7-8 support
  * update few things for ie
  * link docs to correct css
  * fix crappy merge
  * Merge branch 'master' of github.com:twitter/bootstrap
    Conflicts:
    bootstrap-1.0.0.css
    bootstrap-1.0.0.min.css
    docs/index.html
  * Merge branch 'misc_css_fixes'
    Conflicts:
    bootstrap-1.0.0.css
    lib/patterns.less
  * go with greyed out next
  * hide overflow for ie 7
  * fix border for popover ie6-7
  * remove ie8 hack
  * ie-6/7 hack for border colors
  * fix conflict

2011-08-21
==========

  * 1 more space for disabled
  * more tweaks to resolve some missed conflicts
  * nonbreaking spaces for ie7 after buttons :/
  * re-add div to error class
  * resolve conflicts again and rebuild
  * resolve conflicts
  * merge in master, resolve conflicts
  * upated compiled
  * remake with latest
  * Merge branch 'misc_css_fixes' of github.com:twitter/bootstrap into misc_css_fixes
    Conflicts:
    lib/forms.less
  * more little ie6-7 hacks :/
  * updated to resolve conflicts
  * fix topbar dropdown active and hover states
  * remove tags from form selectors
  * fix color for alert blocks in ie6-7
  * give popovers and modals border colors you can see in IE8 and down
  * tweak pagination styles to include better border and box shadow
  * rebuild and updated tables to remove tags from selectors
  * updated list html, tweaks to patterns
  * touch up less
  * fix btn borders ie7/ie8
  * Fix for alert box gradients in IE7/8
  * make topbar .fill wrap
  * fix disabled button for ie 8 and below
  * pull filter gradients out completely because IE can't render them correctly in half of all
    instances and they are performance problems with them; tweak alert message styles,
    particularly close button;
  * remove 60px top margin on body and tweak a few other things
  * fix up the modals for ie8
  * darken shadow for ie
  * define button border size for ie
  * add "shadows" for ie buttons
  * remake
  * no gradients on alerts for <= ie8
  * ie hack
  * rgba breaks whole def
  * another attempt at getting ie border thign working
  * remake junk
  * more ie border junk
  * don't display right border for ie
  * remake with border fix
  * give pagination nav borders in ie
  * introduce .fill class to top-nav for overflow bug
  * try only -ms-filter
  * blah
  * just disable filter
  * add # to color
  * ie8 dropdown tweaks
  * ie Xp
  * more debugging of ie nav display issues
  * simplify drop down logic - fix color of search hover for ie
  * fix error styles a bit on stacked form fields
  * fix bg-clip property's old value, move from padding to padding-box
  * updated compiled and minified, fix bug where links didn't inherit font weight
  * more spacing and commenting
  * more spacing tweaks
  * docs spacing, spare divs in a few places, updating css spacing
  * mozilla doesn't support color-stop() function in gradients
  * remove rogue ul
  * fixing conflict to merge in copy changes
  * Merge pull request [#30](https://github.com/twitter/bootstrap/issues/30) from
    sankage/master
    color-stop() not supported in mozilla gradients

2011-08-20
==========

  * merging in misc fixes to docs and css from other branch
  * updated compiled css
  * updated docs to fix inconsistent display of code elements, update scaffolding to fix padding
    issue on fluid containers, add placeholder hero unit in patterns for future use, continue to
    refactor some rgba to hex values
  * Fix broken quotes and bizarre update of HTML5 to 6.
