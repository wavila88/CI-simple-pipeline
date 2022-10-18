const sumar = require('./operations');
const assert = require('assert');

beforeAll(done => {
  done()
})


describe('general test', () => {
  test('should sum', () => {
    assert.equal(sumar(2,3), 5);
  })
  

})