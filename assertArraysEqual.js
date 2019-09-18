const assertEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return `💔💔💔Assertion Failed: ${arr1} !==  ${arr2}`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `💔💔💔Assertion Failed: ${arr1} !==  ${arr2}`;
    } else {
      return `💚💚💚Assertion Passed: ${arr1} === ${arr2}`;
    }
  }
};
