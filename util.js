'use strict';

exports.sum = function(nums) {
  return nums.reduce((sum, num) => sum + num);
};


exports.sample = function(arr) {
  // return random element from the array
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

exports.gimmeFive = function() {
  return 5;
};

