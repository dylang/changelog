#!/usr/bin/env sh

echo Changelog\'s changelog
./bin/changelog.js --markdown > changelog.md

echo Express as markdown
./bin/changelog.js express --markdown > express.markdown

echo Connect as markdown
./bin/changelog.js connect --markdown > connect.markdown

echo Underscore as markdown
./bin/changelog.js connect --markdown > connect.markdown

echo Node as markdown
./bin/changelog.js github.com/joyent/node --markdown > node.markdown

echo Node as markdown
./bin/changelog.js github.com/rails/rails --markdown > rails.markdown

echo NPM as markdown
./bin/changelog.js npm --markdown > npm.markdown
echo NPM as JSON
./bin/changelog.js npm --json > npm.json
echo NPM as color text
./bin/changelog.js npm --color > npm.txt

echo Complete