#!/usr/bin/env sh

echo Changelog\'s changelog
./bin/changelog.js --markdown > ./CHANGELOG.md

echo Grunt as markdown
./bin/changelog.js grunt --markdown > ./examples/grunt.markdown

echo Node as markdown
./bin/changelog.js github.com/joyent/node --markdown > ./examples/node.markdown

echo NPM as markdown
./bin/changelog.js npm --markdown > ./examples/npm.markdown

echo NPM as JSON
./bin/changelog.js npm --json > ./examples/npm.json

echo Complete