"use strict";
var expect = require('chai').expect;
var proxyquire = require('proxyquire');

var npm = proxyquire('../lib/datasrc/npm', {
    request: function(options, cb) {
        cb(null, {}, require('./fixtures/npm-changelog.json'));
    }
});

describe('npm', function () {

    it('should have something come back for pageHistory', function (done) {
        npm.packageHistory('changelog').then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });
});