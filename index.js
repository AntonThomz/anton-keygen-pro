const crypto = require('crypto');

/**
 * Menghasilkan kunci dengan format tertentu.
 * @param {number} segmentCount - Jumlah segmen dalam kunci.
 * @param {number} segmentLength - Panjang setiap segmen.
 * @param {string} characters - Karakter yang digunakan untuk menghasilkan kunci.
 * @returns {string} Kunci yang dihasilkan.
 */
function generateKey(segmentCount, segmentLength, characters) {
  if (segmentCount <= 0 || segmentLength <= 0 || characters.length === 0) {
    throw new Error('Parameter tidak valid untuk menghasilkan kunci.');
  }

  return Array.from({ length: segmentCount }, () => {
    return Array.from({ length: segmentLength }, () => {
      const randomIndex = crypto.randomInt(0, characters.length);
      return characters[randomIndex];
    }).join('');
  }).join('-');
}

// Fungsi untuk menghasilkan berbagai jenis kunci
function createKey(type) {
  switch (type) {
    case 'alphanumeric':
      return generateKey(4, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    case 'alphabetic':
      return generateKey(4, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    case 'numeric':
      return generateKey(4, 4, '0123456789');
    case 'custom1':
      return generateKey(3, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    case 'custom2':
      return generateKey(3, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    case 'custom3':
      return generateKey(3, 4, '0123456789');
    case 'randomHex':
      return crypto.randomBytes(16).toString('hex');
    default:
      throw new Error('Tipe kunci tidak dikenal.');
  }
}

// Menghasilkan kunci
const anton = {
  key1: createKey('alphanumeric'),
  key2: createKey('alphabetic'),
  key3: createKey('numeric'),
  key4: createKey('custom1'),
  key5: createKey('custom2'),
  key6: createKey('custom3'),
  key7: createKey('randomHex'),
};

// Ekspor modul
module.exports = anton;