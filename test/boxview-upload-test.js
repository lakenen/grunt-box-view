'use strict';
var view = require('../commands/upload'),
  test = require('tape'),
  sinon = require('sinon'),
  grunt = require('grunt');

var client = {
  documents: {
    uploadURL: function () {},
    uploadFile: function () {}
  }
};

test('upload task should call client.documents.uploadURL when url option is set', function (t) {
  t.plan(1);
  var url = 'http://some.url/foo';
  var options = {
    url: url,
    uploadOptions: {}
  };
  var task = {
    options: function () { return options; }
  };
  var stub = sinon.stub(client.documents, 'uploadURL')
    .withArgs(url, options.uploadOptions, sinon.match.func)
    .callsArgWith(2, null, { id: 'foo' });
  view.call(task, client, function () {}, grunt);
  t.ok(stub.called, 'uploadURL should be called');
  client.documents.uploadURL.restore();
});

test('upload task should call client.documents.uploadFile when file option is set', function (t) {
  t.plan(1);
  var file = '/path/to/some/file';
  var options = {
    file: file,
    uploadOptions: {}
  };
  var task = {
    options: function () { return options; }
  };
  var stub = sinon.stub(client.documents, 'uploadFile')
    .withArgs(file, options.uploadOptions, sinon.match.func)
    .callsArgWith(2, null, { id: 'foo' });
  view.call(task, client, function () {}, grunt);
  t.ok(stub.called, 'uploadFile should be called');
  client.documents.uploadFile.restore();
});

test('upload task should set the config properly when the prop option is set', function (t) {
  t.plan(1);
  var id = 'someid';
  var options = {
    prop: 'some.property',
    file: '/path/to/some/file',
    uploadOptions: {}
  };
  var result = { id: 'foo' };
  var task = {
    options: function () { return options; }
  };
  sinon.stub(client.documents, 'uploadFile')
    .callsArgWith(2, null, result);
  var stub = sinon.stub(grunt, 'config').withArgs(options.prop, result);
  view.call(task, client, function () {}, grunt);
  t.ok(stub.called, 'grunt.config should be called');
  client.documents.uploadFile.restore();
  grunt.config.restore();
});

test('upload task should call the callback fn when the callback option is set', function (t) {
  t.plan(1);
  var id = 'someid';
  var options = {
    callback: sinon.spy(),
    file: '/path/to/some/file',
    uploadOptions: {}
  };
  var result = { id: 'foo' };
  var task = {
    options: function () { return options; }
  };
  sinon.stub(client.documents, 'uploadFile')
    .callsArgWith(2, null, result);
  view.call(task, client, function () {}, grunt);
  t.ok(options.callback.calledWith(result), 'callback should be called');
  client.documents.uploadFile.restore();
});
