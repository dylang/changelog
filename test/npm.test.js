"use strict";
var expect = require('chai').expect;

var npm = require('../lib/datasrc/npm');

describe('npm', function () {

    it('should have something come back for pageHistory', function (done) {
        npm.packageHistory('changelog', 'latest').then(function (results) {
            expect(results).to.be.an.object;
        })
        .catch(function(err){throw err;})
        .done(done);
    });
});