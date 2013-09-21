/*
 * Copyright (c) 2013 Dylan Greene
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        cafemocha: {
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
            example: {
                files: [
                    'Gruntfile.js',
                    'tasks/**/*.js',
                    'test/**/*.js'
                ],
                tasks: ['notify:custom_options'],
                options: {
                    nospawn: false
                }
            },
            test: {
                files: [
                    'Gruntfile.js',
                    'tasks/**/*.js',
                    'test/**/*.js'
                ],
                tasks: ['cafemocha'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-cafe-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['cafemocha']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};