var defaults = {
  uploadOptions: {},
  sessionOptions: {}
};

module.exports = function (client, done, grunt) {
  var options = this.options(defaults);
  var doc;

  var uploadTaskOptions = {
    file: options.file,
    url: options.url,
    prop: 'boxview-upload.generated.result',
    callback: function (result) {
      doc = result;
    },
    uploadOptions: options.uploadOptions
  };
  grunt.config('boxview-upload.generated', { options: uploadTaskOptions });

  var sessionTaskOptions = {
    documentId: '<%= grunt.config("boxview-upload.generated.result").id %>',
    callback: function (session) {
      var result = {
        document: doc,
        session: session
      };
      if (options.prop) {
        grunt.config(options.prop, result);
      }
      if (options.callback) {
        options.callback(result);
      }
    },
    sessionOptions: options.uploadOptions
  };
  grunt.config('boxview-session.generated', { options: sessionTaskOptions });

  grunt.task.run(['boxview-upload:generated', 'boxview-session:generated']);
  done();
};
module.exports.description = 'Upload and create a session for a document on the View API';
