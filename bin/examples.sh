#!/usr/bin/env sh

echo Changelog\'s changelog
./bin/changelog.js --markdown > ./changelog.md

echo Express as markdown
./bin/changelog.js express --markdown > ./examples/express.markdown

echo Connect as markdown
./bin/changelog.js connect --markdown > ./examples/connect.markdown

echo Underscore as markdown
./bin/changelog.js connect --markdown > ./examples/connect.markdown

echo Node as markdown
./bin/changelog.js github.com/joyent/node --markdown > ./examples/node.markdown

echo Node as markdown
./bin/changelog.js github.com/rails/rails --markdown > ./examples/rails.markdown

echo NPM as markdown
./bin/changelog.js npm --markdown > ./examples/npm.markdown
echo NPM as JSON
./bin/changelog.js npm --json > ./examples/npm.json
echo NPM as color text
./bin/changelog.js npm --color > ./examples/npm.txt

echo Complete