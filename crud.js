'use strict';

const crud = require('./crudUtil');

var [ , , command, ...data] = process.argv;

crud[command](data);
