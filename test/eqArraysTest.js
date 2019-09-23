const assert = require('chai').assert
const eqArrays = require('../eqArrays')

describe('#eqArrays', () => {
  it('returns true for [1, 2, 3, 3] and [1, 2, 3, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3, 3], [1, 2, 3, 3]), true)
  });
});
