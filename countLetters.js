const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"))