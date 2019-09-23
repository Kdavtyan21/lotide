const assertArraysEqual = require('./assertArraysEqual')


const without = function(source, itemsToRemove) {
  var newArray = [];
  for (i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = without;