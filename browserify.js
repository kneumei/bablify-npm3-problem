var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');
var row_flow = require('browserify-row-flow');

var bundledFile = fs.createWriteStream('app.js');

var b = browserify()
    b.add('./src/entry.js')
    b.add( './src/dep.js');
    b.transform(babelify, { presets: ["es2015"]})
    b.plugin(row_flow().plugin());

var js = b.bundle();
js.pipe(bundledFile);