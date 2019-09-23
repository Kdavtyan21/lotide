const eqArrays = require('./eqArrays')
const assertArrraysEqual = require('./assertArraysEqual')


const flatten = function(array) {
  var flatArray = [];
  for (i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i])
    } else {
      for (x = 0; x < array[i].length; x++) {
        flatArray.push(array[i][x])
      }
    }
  }
return flatArray;
};

module.exports = flatten;