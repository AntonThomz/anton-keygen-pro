/**
 * Fungsi untuk log kesalahan yang lebih terstruktur.
 * @param {string} message - Pesan kesalahan.
 * @param {Error} error - Objek error.
 */
function logError(message, error) {
  console.error(`[${new Date().toISOString()}] ${message}:`, error);
}

module.exports = { logError };