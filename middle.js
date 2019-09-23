
const middle = function (array) {
  let middleArray = []
  if (array.length === 0 || array.length === 1 || array.length ===2) {
    return [];
  } else if (array.length % 2 !== 0) {
   return [array[Math.floor(array.length/2)]];
  } else if (array.length % 2 === 0){
    return [ array[Math.floor(array.length/2)-1],array[Math.floor(array.length/2)]]
  }
};

module.exports = middle;