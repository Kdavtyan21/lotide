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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
     return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !==  ${expected}`)
  }
};
assertArraysEqual(results1,[1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])
