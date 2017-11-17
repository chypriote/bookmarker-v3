const fs = require('fs')
const _ = require('underscore')

function format(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

var DIR = process.env.DIR || './';

function getFiles(dir) {
  dir = dir.replace(/\/$/, '');
  return _.flatten(fs.readdirSync(dir).map(function(file) {
    var fileOrDir = fs.statSync([dir, file].join('/'));
    if (fileOrDir.isFile()) {
      return (dir + '/' + file).replace(/^\.\/\/?/, '');
    } else if (fileOrDir.isDirectory()) {
      return getFiles([dir, file].join('/'));
    }
  }));
}

var allFiles = getFiles(DIR).map(function(file) {
  return fs.readFileSync(file);
}).join('\n');

console.log('size of ' + DIR + ' is: ' + format(allFiles.length));