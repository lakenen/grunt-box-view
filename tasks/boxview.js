/*
 * grunt-box-view
 * https://github.com/lakenen/grunt-box-view
 *
 * Copyright (c) 2014 Cameron Lakenen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var commands = require('../commands');
  Object.keys(commands).forEach(function (name) {
    var cmd = commands[name];
    grunt.registerMultiTask('boxview-' + name, cmd.description, function () {
      var done = this.async();
      var options = this.options({
        token: process.env.BOX_VIEW_API_TOKEN
      });
      var client = require('../lib/client').create(options.token);
      cmd.call(this, client, done, grunt);
    });
  });
};
