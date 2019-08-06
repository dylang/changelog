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


xdescribe('changelog', function() {

    it('should get a change log', function (done) {
        changelog.generate('changelog', 'latest').then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should be able to format the results as markdown', function (done) {
        changelog.generate('changelog', 'latest')
            .then(changelog.markdown)
            .then(function (results) {
            expect(results).to.be.a.string;
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should be able to format the results for the terminal', function (done) {
        changelog.generate('changelog', 'latest')
            .then(changelog.terminal)
            .then(function (results) {
            expect(results).to.be.a.string;
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should also send errors like "no project" through a promise', function (done) {
        var count = 0;
        changelog.generate(null, null, 'latest').then(function (results) {
            assert.ok(false, "should never get here");
        })
        .catch(function(err){
            count++;
            assert.equal(count, 1);
            assert(err.message.includes("No project specified."));
        })
        .then(function () {
            count++;
            assert.equal(count, 2);
        })
        .done(done);
    });

});