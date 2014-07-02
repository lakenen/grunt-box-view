# grunt-box-view

> Box View API grunt tasks

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-box-view --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-box-view');
```

## The "boxview-upload" task

> Upload a document to the View API

### Overview
In your project's Gruntfile, add a section named `boxview-upload` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'boxview-upload': {
    somefile: {
      options: {
        file: '/path/to/some/file.pdf'
        uploadOptions: {
          'non_svg': true
        }
      }
    }
  },
});
```

### Options

#### options.file
Type: `String`
Default value: `null`

A string value of a local file to upload.

#### options.url
Type: `String`
Default value: `null`

A string value of a URL to a file to upload.

#### options.uploadOptions
Type: `Object`
Default value: `{}`

An object representing the upload parameters to use (see [node-box-view docs](https://github.com/lakenen/node-box-view#uploadfile) for more details).


## The "boxview-session" task

> Create a session for a document on the View API

### Overview
In your project's Gruntfile, add a section named `boxview-session` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'boxview-session': {
    somefile: {
      options: {
        documentId: 'somedocumentuuid'
        sessionOptions: {
          duration: 99999999
        }
      }
    }
  },
});
```

### Options

#### options.documentId
Type: `String`
Default value: `null`

A string value of the document id to use when creating the session.

#### options.sessionOptions
Type: `Object`
Default value: `{}`

An object representing the session parameters to use (see [node-box-view docs](https://github.com/lakenen/node-box-view#create) for more details).


## The "boxview-view" task

> Upload and create a session for a document on the View API

### Overview
In your project's Gruntfile, add a section named `boxview-view` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'boxview-view': {
    somefile: {
      options: {
        url: 'http://some.url/file.pdf',
        uploadOptions: {
          name: 'awesome pdf'
        },
        sessionOptions: {
          duration: 99999999
        }
      }
    }
  },
});
```

### Options

#### options.file
Type: `String`
Default value: `null`

A string value of a local file to upload.

#### options.url
Type: `String`
Default value: `null`

A string value of a URL to a file to upload.

#### options.uploadOptions
Type: `Object`
Default value: `{}`

An object representing the upload parameters to use (see [node-box-view docs](https://github.com/lakenen/node-box-view#uploadfile) for more details).

#### options.sessionOptions
Type: `Object`
Default value: `{}`

An object representing the session parameters to use (see [node-box-view docs](https://github.com/lakenen/node-box-view#create) for more details).


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

