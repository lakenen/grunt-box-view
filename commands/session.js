var defaults = {
  sessionOptions: {}
};

module.exports = function (client, done, grunt) {
  var options = this.options(defaults);
  var opt = {
    retry: true,
    params: options.sessionOptions
  };

  if (options.documentId) {
    client.sessions.create(options.documentId, opt, function (err, result) {
      if (err) {
        grunt.fail.fatal(JSON.stringify(err.message || err, true, 2));
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
