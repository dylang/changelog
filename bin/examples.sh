#!/usr/bin/env sh

echo Changelog\'s changelog
./bin/changelog.js --markdown > ./CHANGELOG.md

echo Express as markdown
./bin/changelog.js express --markdown > ./examples/express.markdown

echo Connect as markdown
./bin/changelog.js connect --markdown > ./examples/connect.markdown

echo Underscore as markdown
./bin/changelog.js connect --markdown > ./examples/connect.markdown

echo Node as markdown
./bin/changelog.js github.com/joyent/node --markdown > ./examples/node.markdown

echo Twitter Bootstrap from Github as markdown
./bin/changelog.js https://github.com/twitter/bootstrap --markdown > ./examples/twitter-bootstrap.markdown

echo NPM as markdown
./bin/changelog.js npm --markdown > ./examples/npm.markdown

echo NPM as JSON
./bin/changelog.js npm --json > ./examples/npm.json

echo Complete