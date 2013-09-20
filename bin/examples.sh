#!/usr/bin/env sh

echo Changelog\'s changelog
./bin/changelog.js all --markdown  > ./CHANGELOG.md

echo Grunt as markdown
./bin/changelog.js grunt all --markdown  > ./examples/grunt.markdown

echo Node as markdown
./bin/changelog.js github.com/joyent/node all --markdown  > ./examples/node.markdown

echo NPM as markdown
./bin/changelog.js npm all --markdown  > ./examples/npm.markdown

echo NPM as JSON
./bin/changelog.js npm all --json  > ./examples/npm.json

echo Complete