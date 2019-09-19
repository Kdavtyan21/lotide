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

const without = function(source, itemsToRemove) {
  var newArray = [];
  for (i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}