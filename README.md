<h1 align="center">
    <br>
    <br>
    <img width="320" src="media/logo.jpg" alt="Anton KeyGen Pro 🔑">
    <br>
    <br>
    <br>
</h1>

# Anton KeyGen Pro 🔑

**Anton KeyGen Pro** adalah utilitas yang kuat untuk menghasilkan kunci acak dengan format tersegmentasi yang dapat disesuaikan. Proyek ini dirancang untuk membantu pengembang dalam membuat pengenal unik, kunci lisensi, atau kode untuk aplikasi mereka.

## Penjelasan Proyek: AntonKeyGen

Dengan kemampuan untuk menghasilkan kunci dalam berbagai format, **AntonKeyGen** menawarkan fleksibilitas dan keamanan yang tinggi, memungkinkan pengguna untuk menyesuaikan kunci sesuai dengan kebutuhan spesifik aplikasi mereka.

## Penjelasan File `index.js` dalam Anton KeyGen Pro

File `index.js` pada proyek **Anton KeyGen Pro** berfungsi sebagai inti dari generator kunci acak. File ini memanfaatkan modul kriptografi bawaan dari Node.js (`crypto`) untuk memastikan kunci yang dihasilkan memiliki tingkat keamanan yang tinggi dan benar-benar acak.

Pada file ini, terdapat beberapa fungsi untuk menghasilkan kunci dalam berbagai format, seperti:

1. **key1**: Menghasilkan kunci yang terdiri dari kombinasi huruf kapital dan angka, tersegmentasi menjadi 4 bagian, masing-masing dengan 4 karakter.
   
2. **key2**: Menghasilkan kunci yang hanya terdiri dari huruf kapital.

3. **key3**: Menghasilkan kunci yang hanya terdiri dari angka, cocok untuk aplikasi yang memerlukan format numerik.

4. **key4**: Kunci tersegmentasi dengan tiga segmen yang terdiri dari kombinasi huruf kapital dan angka.

5. **key5**: Mirip dengan AntonKeyGen4, tetapi hanya menggunakan huruf kapital.

6. **key6**: Hanya menggunakan angka dengan tiga segmen.

7. **key7**: Kunci acak berbasis byte yang dihasilkan menggunakan fungsi `crypto.randomBytes`, memberikan tingkat keamanan yang lebih tinggi dengan menghasilkan 32 karakter dalam format hexadecimal.

### Contoh Fungsi Utama

```javascript
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
````
# Instalasi

Untuk menginstal paket ini, gunakan npm dengan perintah berikut:

```bash
npm install anton-keygen-pro
```

## Contoh Penggunaan

```javascript
const {
 key1, 
 key2, 
 key3, 
 key4, 
 key5, 
 key6, 
 key7
} = require('anton-keygen-pro');

(async () => {
    console.log(key1);
    console.log(key2);
    console.log(key3);
    console.log(key4);
    console.log(key5);
    console.log(key6);
    console.log(key7);
})();
```

## report bug

<span style="color: red;">[Report bug](https://wa.me/6283198645688)</span>
