
module.exports = function (client, done, grunt) {
  var options = this.options();

  client.documents.list(options, function (err, result) {
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
};
module.exports.description = 'List documents uploaded to the View API';
