var BoxView = require('box-view');

module.exports = {
  create: function (token) {
    var client = BoxView.createClient(token || process.env.BOX_VIEW_API_TOKEN);
    if (process.env.BOX_VIEW_DOCUMENTS_URL) {
      client.documentsURL = process.env.BOX_VIEW_DOCUMENTS_URL;
    }
    if (process.env.BOX_VIEW_DOCUMENTS_UPLOAD_URL) {
      client.documentsUploadURL = process.env.BOX_VIEW_DOCUMENTS_UPLOAD_URL;
    }
    if (process.env.BOX_VIEW_SESSIONS_URL) {
      client.sessionsURL = process.env.BOX_VIEW_SESSIONS_URL;
    }
    return client;
  }
};
