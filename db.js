const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Tentukan jalur ke database
const dbPath = path.resolve(__dirname, 'app.db');

// Buat koneksi ke database
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;
