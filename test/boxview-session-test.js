'use strict';
var view = require('../commands/session'),
  test = require('tape'),
  sinon = require('sinon'),
  grunt = require('grunt');

var client = {
  sessions: {
    create: function () {}
  }
};

test('session task should call client.sessions.create when url option is set', function (t) {
  t.plan(1);
  var options = {
    documentId: 'foo',
    sessionOptions: {}
  };
  var task = {
    options: function () { return options; }
  };
  var stub = sinon.stub(client.sessions, 'create')
    .withArgs(options.documentId, options.sessionOptions, sinon.match.func);
  view.call(task, client, function () {}, grunt);
  t.ok(stub.called, 'create should be called');
  client.sessions.create.restore();
});

test('session task should set the config properly when the prop option is set', function (t) {
  t.plan(1);
  var options = {
    prop: 'some.property',
    documentId: 'foo',
    sessionOptions: {}
  };
  var result = { id: 'bar' };
  var task = {
    options: function () { return options; }
  };
  sinon.stub(client.sessions, 'create')
    .callsArgWith(2, null, result);
  var stub = sinon.stub(grunt, 'config').withArgs(options.prop, result);
  view.call(task, client, function () {}, grunt);
  t.ok(stub.called, 'grunt.config should be called');
  client.sessions.create.restore();
  grunt.config.restore();
});

test('session task should call the callback fn when the callback option is set', function (t) {
  t.plan(1);
  var options = {
    callback: sinon.spy(),
    documentId: 'foo',
    uploadOptions: {},
    sessionOptions: {}
  };
  var result = { id: 'bar' };
  var task = {
    options: function () { return options; }
  };
  sinon.stub(client.sessions, 'create')
    .callsArgWith(2, null, result);
  view.call(task, client, function () {}, grunt);
  t.ok(options.callback.calledWith(result), 'callback should be called');
  client.sessions.create.restore();
});
