'use strict';

// let util = require('./util');

const path = require('path');
const fs = require('fs');



// // var [node, main, ...args] = process.argv;

var dirs = process.argv.slice(2);


dirs.forEach(dir => {

  let dirPath = path.join(__dirname, dir);
  fs.mkdirSync(dirPath);

});


console.log('done!');


