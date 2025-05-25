import Database from "better-sqlite3";
import { hash } from "bcryptjs";

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

const password = await hash("P@ssw0rd", 12);

db.prepare(`INSERT INTO account (email, password, role) VALUES (?, ?, ?)`).run(
  "admin@admin.com",
  password,
  "admin"
);
