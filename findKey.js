const assertEqual = require('./assertEqual')

const findKey = function (object, callback) {
  for (let item of Object.keys(object)) {
    if (callback(object[item]) === true)
    return item;
  }
}

module.exports = findKey;