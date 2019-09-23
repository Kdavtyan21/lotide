const assert = require('chai').assert
const eqObjects = require('../eqObjects')

describe('#eqObjects', () => {
  it('returns true for  {1: 2, 3: 3} and {1: 2, 3: 3}', () => {
    assert.deepEqual(eqObjects({1: 2, 3: 3}, {1: 2, 3: 3}), true)
  });
    
  it('returns false for {1: 0} and {1: 2}', () => {
    assert.deepEqual(eqObjects({1: 0}, {1: 2}), false)
  });
});
