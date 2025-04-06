// models/db.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./UnderSounds.db.sql', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado a la base de datos UnderSounds.');
});

module.exports = db;
