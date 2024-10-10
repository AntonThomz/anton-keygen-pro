# Anton KeyGen Pro 🔑

**Anton KeyGen Pro** adalah utilitas yang kuat untuk menghasilkan kunci acak dengan format tersegmentasi yang dapat disesuaikan. Proyek ini dirancang untuk membantu pengembang dalam membuat pengenal unik, kunci lisensi, atau kode untuk aplikasi mereka.

## Fitur

- **Kunci Acak**: Menghasilkan kunci yang sepenuhnya acak yang terdiri dari huruf kapital dan angka, memastikan keunikan di setiap instance. Ini sangat berguna untuk keperluan seperti pengenal pengguna atau kunci lisensi.

- **Format Tersegmentasi**: Kunci yang dihasilkan akan diformat dalam struktur yang tersegmentasi, dibagi menjadi empat segmen (misalnya, `ABCD-1234-EFGH-5678`) dengan setiap segmen berisi 4 karakter. Format ini membuat kunci lebih mudah dibaca dan digunakan.

- **Konversi ke Huruf Kecil**: Kunci yang dihasilkan dikembalikan dalam format huruf kecil, menjamin konsistensi gaya dan memudahkan integrasi ke dalam sistem yang memerlukan input huruf kecil.

- **Keamanan Kriptografis**: Menggunakan modul `crypto` dari Node.js untuk menghasilkan byte acak yang aman, memastikan tingkat keacakan yang tinggi dan mengurangi kemungkinan prediksi kunci.

- **Kustomisasi**: Mudah diperluas untuk memodifikasi panjang segmen, jumlah segmen, atau set karakter yang digunakan, memberikan fleksibilitas kepada pengembang untuk menyesuaikan kunci sesuai kebutuhan aplikasi mereka.

## Instalasi

Untuk menginstal paket ini, gunakan npm dengan perintah berikut:

```bash
npm install anton-keygen-pro
```
## Contoh pengguna

```bash
// Mengimpor fungsi AntonKeyGen dari paket
const { AntonKeyGen } = require('anton-keygen-pro');

// Menghasilkan kunci baru
const generatedKey = AntonKeyGen();

// Menampilkan kunci yang dihasilkan di konsol
console.log(`Kunci yang dihasilkan: ${generatedKey}`);
