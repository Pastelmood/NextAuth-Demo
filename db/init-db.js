import Database from "better-sqlite3";

const db = new Database("nextAuth.db");

// Drop table if it exists
db.prepare(`DROP TABLE IF EXISTS account`).run();

// Create table
db.prepare(
  `
  CREATE TABLE account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
  )
`
).run();
