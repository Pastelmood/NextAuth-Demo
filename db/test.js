import Database from "better-sqlite3";

const db = new Database("nextAuth.db");

export function getAccountById(id) {
  const stmt = db.prepare(`
    SELECT * FROM account WHERE id = ?
  `);

  const account = stmt.get(id);
  console.log(account);
}

getAccountById(1);



const account = { email: "0864713049@outlook.com", password: "12233", role: "admin" };
export function insertAccount(account) {
  const stmt = db.prepare(`
    INSERT INTO account (email, password, role)
    VALUES (?, ?, ?)
  `);

  const result = stmt.run(account.email, account.password, account.role);
  return result.lastInsertRowid;
}

// insertAccount(account)

