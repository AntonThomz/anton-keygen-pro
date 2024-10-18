const crypto = require('crypto');

function createKey(type) {
  const keyTypes = {
    alphanumeric: () => generateKey(4, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
    alphabetic: () => generateKey(4, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    numeric: () => generateKey(4, 4, '0123456789'),
    custom1: () => generateKey(3, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
    custom2: () => generateKey(3, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    custom3: () => generateKey(3, 4, '0123456789'),
    randomHex: () => crypto.randomBytes(16).toString('hex'),
  };

  if (!keyTypes[type]) {
    throw new Error(`Tipe kunci tidak dikenal: ${type}`);
  }

  return keyTypes[type]();
}

function generateKey(segmentCount, segmentLength, characters) {
  return Array.from({ length: segmentCount }, () => {
    return Array.from({ length: segmentLength }, () => {
      const randomIndex = crypto.randomInt(0, characters.length);
      return characters[randomIndex];
    }).join('');
  }).join('-');
}

module.exports = { createKey };