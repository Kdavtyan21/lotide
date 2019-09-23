const asserEqual = require('./assertEqual')
const countLetters = function (lettersToCount) {
  const result = {}
  let newLettersToCount = lettersToCount.replace(/\s/g, "");
  for (const letter of newLettersToCount) {
    if (!result[letter]) {
        result[letter] = 1;
      } else 
        result[letter] += 1;
    }
  return result;
};
module.exports = countLetters;