'use strict';
var semver = require('semver');

function versionFilter(versions, filter) {

    if (!versions || !versions.length) {
        throw new Error('No versions found');
    }

    var filterWord = (filter || '').toString().toLowerCase();

    // Upcoming == Show what's in the pipeline for the next release
    if (filterWord === 'upcoming') {
        return versions.filter(function(version){
            return version.upcoming;
        });
    }

    var filterCount = filterWord === 'latest' ? 1
                      : filterWord === 'all' ? versions.length
                      : filterWord === '' ? versions.length
                      : !isNaN(filter) && Math.round(filter) === parseInt(filter, 10) ? parseInt(filter, 10)
                      : false;

    var releasedVersions = versions.filter(function(version){
        return !version.upcoming;
    });

    // Integer == that many versions.  1 = one version.
    if (filterCount) {
        return releasedVersions.filter(function(version, i) {
            return i < filterCount;
        });
    }

    if (semver.validRange(filter)) {
        return releasedVersions.filter(function(Version) {
            return semver.valid(Version.version) && semver.satisfies(Version.version, filter);
        });
    }

    // Require valid version
    throw new Error('Invalid version syntax. Versions can be latest, an integer, or n.n.n where n are integers.');
}

module.exports = versionFilter;

