const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const anton = require("./index"); // Mengimpor kunci dari 'index'
const app = express();
const port = 3005;

app.use(express.json());

// Route untuk generate key (menggunakan AntonKeyGen7)
app.get('/generate-key', (req, res) => {
  res.json({ key: anton.key7 }); // Mengirim key yang dihasilkan oleh AntonKeyGen7
});

// Membuat HTTP server dan WebSocket server
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Event WebSocket connection
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.send(`Generated key: ${anton.key7}`); // Kirim kunci ke client saat koneksi terhubung

  // Event untuk menerima pesan dari client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`You sent: ${message}`); // Balas pesan yang diterima dari client
  });

  // Event untuk menangani ketika client disconnect
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Menjalankan server
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});