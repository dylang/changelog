"use strict";
var expect = require('chai').expect;

var changelog = require('../lib/changelog');

describe('changelog', function() {

    it('should get a change log', function (done) {
        changelog.generate('changelog', 'latest').then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should be able to fomat the results as markdown', function (done) {
        changelog.generate('changelog', 'latest')
            .then(changelog.markdown)
            .then(function (results) {
            expect(results).to.be.a.string;
        })
        .catch(function(err){throw err;})
        .done(done);
    });

    it('should be able to fomat the results for the terminal', function (done) {
        changelog.generate('changelog', 'latest')
            .then(changelog.terminal)
            .then(function (results) {
            expect(results).to.be.a.string;
        })
        .catch(function(err){throw err;})
        .done(done);
    });
});