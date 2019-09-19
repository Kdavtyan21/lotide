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