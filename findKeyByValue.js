const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const findKeyByValue = function(tvObject, tvShow) {
  for (let genre of Object.keys(tvObject)) {
    if (tvShow === tvObject[genre]) {
      return genre;
    }
  }
}
