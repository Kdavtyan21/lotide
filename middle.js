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

const middle = function (array) {
  let middleArray = []
  if (array.length === 0 || array.length === 1 || array.length ===2) {
    return [];
  } else if (array.length % 2 !== 0) {
   return [array[Math.floor(array.length/2)]];
  } else if (array.length % 2 === 0){
    return [ array[Math.floor(array.length/2)-1],array[Math.floor(array.length/2)]]
  }
}
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([])) 
console.log(middle([1,2,3])) 


console.log(middle([1, 2, 3, 4, 5, 6,7,8,9,10])) // => [3, 4]
