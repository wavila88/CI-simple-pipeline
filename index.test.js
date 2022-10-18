const sumar = require('./index');
const assert = require('assert');
describe('general test', () => {
  test('should sum', () => {
    assert.equal(sumar(2,3), 5)
  })
  

})