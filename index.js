const crypto = require('crypto');

function generateKey(segmentCount, segmentLength, characters) {
  let key = '';
  for (let i = 0; i < segmentCount; i++) {
    let segment = '';
    for (let j = 0; j < segmentLength; j++) {
      const randomIndex = crypto.randomInt(0, characters.length);
      segment += characters[randomIndex];
    }
    key += segment + (i < segmentCount - 1 ? '-' : '');
  }
  return key;
}

// Fungsi untuk jenis kunci yang berbeda
const AntonKeyGen = () => generateKey(4, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
const AntonKeyGen2 = () => generateKey(4, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const AntonKeyGen3 = () => generateKey(4, 4, '0123456789');
const AntonKeyGen4 = () => generateKey(3, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
const AntonKeyGen5 = () => generateKey(3, 4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const AntonKeyGen6 = () => generateKey(3, 4, '0123456789');
const AntonKeyGen7 = () => crypto.randomBytes(16).toString('hex');

// Menghasilkan kunci
const key1 = AntonKeyGen();
const key2 = AntonKeyGen2();
const key3 = AntonKeyGen3();
const key4 = AntonKeyGen4();
const key5 = AntonKeyGen5();
const key6 = AntonKeyGen6();
const key7 = AntonKeyGen7();

// Ekspor modul
module.exports = {
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7
};