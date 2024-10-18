const { generateKeys } = require('./generateKey');

// Inisialisasi kunci pertama kali
const anton = generateKeys();

// Exports untuk penggunaan di luar
module.exports = anton;
