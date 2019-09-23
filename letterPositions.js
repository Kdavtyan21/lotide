const assertArraysEqual = require('./assertArraysEqual')



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

module.exports = letterPositions;