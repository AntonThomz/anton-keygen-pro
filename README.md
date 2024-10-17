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

1. **key1**: 
  Menghasilkan kunci yang terdiri dari kombinasi huruf kapital dan angka, tersegmentasi menjadi 4 bagian, masing-masing dengan 4 karakter.
   
2. **key2**: 
  Menghasilkan kunci yang hanya terdiri dari huruf kapital.

3. **key3**: 
  Menghasilkan kunci yang hanya terdiri dari angka, cocok untuk aplikasi yang memerlukan format numerik.

4. **key4**: 
  Kunci tersegmentasi dengan tiga segmen yang terdiri dari kombinasi huruf kapital dan angka.

5. **key5**: 
  Mirip dengan AntonKeyGen4, tetapi hanya menggunakan huruf kapital.

6. **key6**: 
  Hanya menggunakan angka dengan tiga segmen.

7. **key7**: 
   Kunci acak berbasis byte yang dihasilkan menggunakan fungsi `crypto.randomBytes`, memberikan tingkat keamanan yang lebih tinggi dengan menghasilkan 32 karakter dalam format hexadecimal.

## Contoh Kode Yang Dihasilkan anton-keygen-pro

```javascript
{
  key1: 'EHVG-7HRG-SVH7-2ZEB',
  key2: 'GRIP-ABCE-GCKQ-CPUV',
  key3: '0435-4801-9721-5063',
  key4: 'KS9G-THNE-ETTH',
  key5: 'OCBF-ZTNC-CFAC',
  key6: '3889-4302-2963',
  key7: 'ce340982c3ff438ce8af64900d4ab8dd'
}
```

## install module

berikut contoh penginstallan module anton-keygen-pro

```bash
npm install anton-keygen-pro
```

## Contoh Pengguna

```javascript
const anton = require("anton-keygen-pro")

console.log('Generated Key 1:', anton.key1)
console.log('Generated Key 2:', anton.key2)
console.log('Generated Key 3:', anton.key3)
console.log('Generated Key 4:', anton.key4)
console.log('Generated Key 5:', anton.key5)
console.log('Generated Key 6:', anton.key6)
console.log('Generated Key 7:', anton.key7)
```

## report bug

<span style="color: red;">[Report bug](https://wa.me/6283198645688)</span>
