"use strict";
var expect = require('chai').expect;

var changelog = require('../changelog');

describe('changelog', function() {

    it('should have something come back', function (done) {
        changelog.npm.changelog('changelog', 'latest').then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });
});
