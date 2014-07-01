var defaults = {
  uploadOptions: {},
  sessionOptions: {}
};

module.exports = function (client, done, grunt) {
  var options = this.options(defaults);

  function createSession(doc) {
    client.sessions.create(doc.id, options.sessionOptions, function (err, session) {
      if (err) {
        grunt.fail.fatal(err);
      } else {
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
        done();
      }
    });
  }

  function handleUploadResponse(err, doc) {
    if (err) {
      grunt.fail.fatal(JSON.stringify(err.error));
    } else {
      createSession(doc);
    }
  }

  if (options.url) {
    // upload by url
    client.documents.uploadURL(options.url, options.uploadOptions, handleUploadResponse);
  } else if (options.file) {
    // upload by file
    client.documents.uploadFile(options.file, options.uploadOptions, handleUploadResponse);
  }
};
module.exports.description = 'Upload and create a session for a document';
