var defaults = {
  sessionOptions: {}
};

module.exports = function (client, done, grunt) {
  var options = this.options(defaults);

  if (options.documentId) {
    client.sessions.create(options.documentId, options.sessionOptions, function (err, result) {
      if (err) {
        grunt.fail.fatal(err);
      } else {
        if (options.prop) {
          grunt.config(options.prop, result);
        }
        if (options.callback) {
          options.callback(result);
        }
        done();
      }
    });
  }
};
module.exports.description = 'Create a session for a document on the View API';
