/*
 * Copyright (c) 2013 Dylan Greene
 * Licensed under the MIT license.
 */
'use strict';



module.exports = function (grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        mochaTest: {
            notify: {
                src: 'test/**/*.test.js',
                options: {
                    timeout: 10000,
                    ui: 'bdd',
                    reporter: 'spec'
                }
            }
        },
        jshint: {
            options: {
                node: true, // node's globals
                force: true,        // don't stop when there is an error
                maxerr: 10000,      // keep running no matter how many errors were found
                globalstrict: true, // allows 'use strict' with single quotes
                newcap: false       // allows  functions to be capitalized without New
            },
            gruntfile: {
                options: {
                },
                files: {
                    src: [
                        'Gruntfile.js'
                    ]
                }
            },
            lib: {
                options: {
                    globals: {
                    }
                },
                files: {
                    src: [
                        'lib/**/*.js'
                    ]
                }
            },
            test: {
                options: {
                    expr: true,         // allow expressions like foo.ok;
                    globals: {
                        it: true,
                        xit: true,
                        expect: true,
                        runs: true,
                        waits: true,
                        waitsFor: true,
                        beforeEach: true,
                        afterEach: true,
                        describe: true,
                        xdescribe: true
                    }
                },
                files: {
                    src: 'test/**/*.js'
                }
            }
        },
        watch: {
            test: {
                files: [
                    'Gruntfile.js',
                    'lib/**/*',
                    'test/**/*'
                ],
                tasks: ['test'],
                options: {
                    nospawn: true
                }
            }
        },
        readme: {
            options: {
                readme: 'templates/README.md.tmpl',
                contributing: false
            }
        }
    });

    // Actually load this plugin's task(s).
    require('load-grunt-tasks')(grunt);

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['mochaTest']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
