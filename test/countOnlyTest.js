const assert = require('chai').assert
const countOnly = require('../countOnly')

describe('#countOnly', () => {
  it('returns [1, 2] for [1, 2, 3, 3] when you ask to count to 2', () => {
    assert.deepEqual(countOnly([1, 2, 3, 3], 2) [1, 2])
  });
});