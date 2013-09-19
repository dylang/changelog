"use strict";
var expect = require('chai').expect;

var github = require('../lib/datasrc/github');

describe('github', function () {

    it('should have something come back', function (done) {
        github.changelog('dylang/changelog', 'latest').then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });
});
