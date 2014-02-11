
## Changelog API

Changelog can be easily integrated into other tools.

### `changelog.generate(name, versions)

* `name` string, _required_ NPM module name from registry.
* `versions` integer or semver, _optional_ Number of versions, or the semver version to show.


````js
var changelog = require('changelog');

changelog.generate(NpmPackageName, countOrVersions)
    .then(changelog.markdown);

````

````js
var changelog = require('changelog');

changelog.generate('grunt')
    .then(showChanges);

function showChanges(data) {

    //With npm each "version" corresponds to all changes for that build pushed on npm
    //With github each "version" is one GMT day of changes
    data.versions.forEach(function(version) {
        console.log(version.version); //currently npm projects only
        console.log(version.date);    //JS Date

        //version.changes is an array of commit messages for that version
        version.changes.forEach(function(change) {
            console.log(' * ' + change);
        });
    });

    //Information about the project
    console.log(data.project);
}
````