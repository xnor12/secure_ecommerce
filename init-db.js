const sqlite3 = require('sqlite3').verbose();

const dbPath = './database/app.db';
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // Membuat tabel pengguna
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      photo TEXT,
      phone TEXT NOT NULL,
      website TEXT,
      birth_place TEXT,
      birth_date TEXT,
      no_kk TEXT,
      no_ktp TEXT
    )
  `);

  // Membuat tabel produk
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL
    )
  `);

  // Menambahkan data produk awal
  db.run(`INSERT INTO products (name, price) VALUES ('Product 1', 10.0), ('Product 2', 20.0)`);
});

db.close(() => {
  console.log('Database initialized');
});
