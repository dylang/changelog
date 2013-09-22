"use strict";
var expect = require('chai').expect;
var proxyquire = require('proxyquire');

var github = proxyquire('../lib/datasrc/github', {
    request: function(options, cb) {
        cb(null, {}, require('./fixtures/github-dylang-changelog.json'));
    }
});

describe('github', function () {

    it('should have something come back for changelog', function (done) {
        github.changelog('dylang/changelog', 'latest').then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should have something come back for commit messages', function (done) {
        github.commitMessages({repo: 'dylang/changelog'}).then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });
});
