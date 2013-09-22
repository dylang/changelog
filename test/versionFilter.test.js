"use strict";
var expect = require('chai').expect;
var proxyquire = require('proxyquire');

var npm = proxyquire('../lib/datasrc/npm', {
    request: function(options, cb) {
        cb(null, {}, require('./fixtures/npm-changelog.json'));
    }
});
var versionFilter = require('../lib/util/versionFilter');

describe('npm', function () {

    var versions;

    beforeEach(function(done) {
        npm.packageHistory('changelog', 'all').then(function(results){
            versions = results.versions;
            done();
        });
    });

    it('should return everything with no filter', function () {
        expect(versionFilter(versions)).to.have.length(16);
    });

    it('should return everything with filter all', function () {
        expect(versionFilter(versions, 'all')).to.have.length(16);
    });

    it('should return latest with filter latest', function () {
        var fixture = [ { version: '1.0.2',
            date: new Date('2013-09-20T13:33:31.054Z') } ];
        expect(versionFilter(versions, 'latest')[0].version).to.equal(fixture[0].version);
    });

    it('should return matching single one with semver filter', function () {
        expect(versionFilter(versions, '0.0.6')[0].version).to.equal('0.0.6');
    });

    it('should return matching several with semver filter', function () {
        var filteredVersions = versionFilter(versions, '~0.0.6');
        expect(filteredVersions).to.have.length(4);
        expect(filteredVersions[0].version).to.equal('0.0.9');
    });

});