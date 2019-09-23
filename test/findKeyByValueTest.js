const assert = require('chai').assert
const findKeyByValue = require('../findKeyByValue')

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
describe('#findKeyByValue', () => {
  it('returns drama for show the wire', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama')
  });
});
