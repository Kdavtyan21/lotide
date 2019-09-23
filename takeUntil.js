const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item) === true) {
      return result
    }
    if (callback(item) === false) {
      result.push(item)
    }
  }
};

module.exports = takeUntil;