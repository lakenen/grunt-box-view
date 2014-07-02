var defaults = {
  uploadOptions: {}
};

module.exports = function (client, done, grunt) {
  var options = this.options(defaults);

  function handleUploadResponse(err, result) {
    if (err) {
      grunt.fail.fatal(JSON.stringify(err.error));
    } else {
      if (options.prop) {
        grunt.config(options.prop, result);
      }
      if (options.callback) {
        options.callback(result);
      }
      done();
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
module.exports.description = 'Upload a document to the View API';
