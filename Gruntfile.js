/*
 * grunt-box-view
 * https://github.com/lakenen/grunt-box-view
 *
 * Copyright (c) 2014 Cameron Lakenen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    tape: {
      options: {
        pretty: true,
        output: 'console'
      },
      files: ['test/**/*.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-tape');

  grunt.registerTask('test', ['tape']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
