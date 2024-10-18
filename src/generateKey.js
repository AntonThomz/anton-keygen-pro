const { createKey } = require('./keyTypes');

/**
 * Fungsi untuk menghasilkan berbagai jenis kunci berdasarkan tipe yang diberikan.
 * @returns {object} Objek yang berisi kunci yang dihasilkan.
 */
function generateKeys() {
  const keys = {};
  const keyTypes = ['alphanumeric', 'alphabetic', 'numeric', 'custom1', 'custom2', 'custom3', 'randomHex'];

  keyTypes.forEach((type, index) => {
    try {
      keys[`key${index + 1}`] = createKey(type);
    } catch (error) {
      console.error(`Gagal menghasilkan kunci untuk tipe ${type}:`, error.message);
    }
  });

  return keys;
}

module.exports = { generateKeys };