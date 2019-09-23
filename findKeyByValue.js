const findKeyByValue = function(tvObject, tvShow) {
  for (let genre of Object.keys(tvObject)) {
    if (tvShow === tvObject[genre]) {
      return genre;
    }
  }
}
module.exports = findKeyByValue;