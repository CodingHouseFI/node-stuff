'use strict';

const path = require('path');
const fs = require('fs');

var dataPath = path.join(__dirname, 'data.json');

exports.get = () => {
  getArray(function(err, array) {
    if(err) return console.log('err:', err);
    console.log(array);
  });
}

exports.add = data => {
  getArray(function(err, array) {
    if(err) return console.log('err:', err);

    array.push(data[0]);

    writeArray(array, function(err) {
      if(err) return console.log('err:', err);

      console.log('done!');
    });
  });
}

exports.remove = data => {
  getArray(function(err, array) {
    if(err) return console.log('err:', err);

    let index = array.indexOf(data[0]);
    array.splice(index, 1);
    writeArray(array, function(err) {
      if(err) return console.log('err:', err);

      console.log('done!');
    });
  });
}

exports.edit = data => {
  getArray(function(err, array) {
    if(err) return console.log('err:', err);

    let index = array.indexOf(data[0]);
    array[index] = data[1];
    writeArray(array, function(err) {
      if(err) return console.log('err:', err);

      console.log('done!');
    });
  });
}

function writeArray(array, cb) {
  fs.writeFile(dataPath, JSON.stringify(array), err => {
    cb(err);
  });
}

function getArray(cb) {
  fs.readFile(dataPath, (err, data) => {
    if(err) {
      return cb(err);
    }

    try {
      var arr = JSON.parse(data);      
    } catch (e) {
      var arr = [];
    }

    cb(null, arr);
  });
}
