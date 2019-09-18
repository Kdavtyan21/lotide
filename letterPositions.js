const assertArraysEqual = function(arr1, arr2) {
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


const letterPositions = function(newSentence) {
  const results = {};
  for (i = 0; i < newSentence.length; i++) {
    if (newSentence[i] !== ' ') {
      if (!results[newSentence[i]]) {
        results[newSentence[i]] = [i]
      } else {
        results[newSentence[i]].push(i);
      }
    }
  }
  return results;
};