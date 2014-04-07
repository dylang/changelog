#!/usr/bin/env sh

echo Changelog\'s changelog
./bin/changelog.js all --markdown  > ./CHANGELOG.md

echo Gulp as markdown
./bin/changelog.js gulp all --markdown  > ./examples/gulp.markdown

echo Node as markdown
./bin/changelog.js github.com/joyent/node all --markdown  > ./examples/node.json

echo Complete