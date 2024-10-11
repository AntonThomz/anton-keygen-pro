const assert = require('assert');
const { AntonKeyGen } = require('../index.js'); // sesuaikan path jika diperlukan

describe('AntonKeyGen Tests', function() {
  it('should generate a valid key', async function() {
    const key = await AntonKeyGen();
    assert.ok(key.length > 0); // Contoh pengujian sederhana
  });
});
