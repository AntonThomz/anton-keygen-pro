// __tests__/index.test.js

const { generateKeys } = require('../src/generateKey');

describe('Key Generation Tests', () => {
  let keys;

  beforeEach(() => {

    keys = generateKeys();
  });

  test('Should generate valid keys', () => {
    expect(keys.key1).toMatch(/^[A-Z0-9-]+$/);
    expect(keys.key7.length).toBe(32);
  });

  test('Should generate unique keys', () => {
    const keys2 = generateKeys();
    expect(keys.key1).not.toBe(keys2.key1);
  });

  test('Should contain all expected keys', () => {
    const expectedKeys = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7'];
    expectedKeys.forEach(key => {
      expect(keys).toHaveProperty(key);
    });
  });
});
