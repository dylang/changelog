"use strict";
var expect = require('chai').expect;
var assert = require('chai').assert;
var proxyquire = require('proxyquire');

var changelog = proxyquire('../lib/changelog', {
    request: function(options, cb) {
        cb(null, {}, require('./fixtures/github-dylang-changelog.json'));
        //cb(null, {}, require('./fixtures/npm-changelog.json'));
    }
});


describe('changelog', function() {

    it('should get a change log', function (done) {
        changelog.generate('changelog', null, 'latest').then(function (results) {
            assert.isObject(results);
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should be able to fomat the results as markdown', function (done) {
        changelog.generate('changelog', null, 'latest')
            .then(changelog.markdown)
            .then(function (results) {
            expect(results).to.be.a.string;
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should be able to fomat the results for the terminal', function (done) {
        changelog.generate('changelog', null, 'latest')
            .then(changelog.terminal)
            .then(function (results) {
            expect(results).to.be.a.string;
        })
        .catch(function(err){throw err;})
        .done(done);
    });
});