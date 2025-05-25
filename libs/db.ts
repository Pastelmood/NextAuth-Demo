import Database from "better-sqlite3";

const db = new Database("nextAuth.db");


export interface Account {
  id: number;
  email: string;
  password: string;
  role: "user" | "admin";
}


/**
 * Inserts a new account into the database.
 *
 * @param account Partial<Account> object containing email, password, and role.
 *                The 'id' field is optional and ignored.
 * @returns The ID of the newly created account.
 */
export function createAccount(account: Partial<Account>): number {
  const stmt = db.prepare(`
    INSERT INTO account (email, password, role)
    VALUES (?, ?, ?)
  `);

  const result = stmt.run(account.email, account.password, account.role);
  return result.lastInsertRowid as number;
}


/**
 * Retrieves all accounts from the database.
 *
 * @returns An array of Account objects. Returns an empty array if no accounts exist.
 */
export function getAccounts(): Account[] {
  const stmt = db.prepare(`
    SELECT id, email, password, role FROM account
  `);
  const rows = stmt.all();
  return rows as Account[];
}


/**
 * Retrieves an account from the database by its unique ID.
 *
 * @param id The unique identifier of the account to retrieve.
 * @returns The Account object if found, or undefined if no account exists with the given ID.
 */
export function getAccountById(id: number): Account | undefined {
  const stmt = db.prepare(`
    SELECT id, email, password, role FROM account WHERE id = ?
  `);
  const row = stmt.get(id) as Account | undefined;
  if (!row) return undefined;

  return {
    id: row.id,
    email: row.email,
    password: row.password,
    role: row.role,
  } as Account;
}


/**
 * Retrieves the role ("user" or "admin") associated with the given email address from the database.
 *
 * @param email The email address to search for in the account table.
 * @returns The role as "user" or "admin" if found, or undefined if no account exists with the given email.
 */
export function findRoleByEmail(email: string): "user" | "admin" | undefined {
  const stmt = db.prepare(`
    SELECT role FROM account WHERE email = ?
  `);
  const row = stmt.get(email) as { role?: "user" | "admin" } | undefined;
  if (!row || !row.role) return undefined;
  return row.role;
}


/**
 * Updates the password for the account associated with the given email.
 *
 * @param email The email address of the account whose password is to be updated.
 * @param password The new password to be set for the account.
 * @returns True if the password was successfully updated, false otherwise.
 */
export function updateAccountPasswordByEmail(email: string, password: string): boolean {
  const stmt = db.prepare(`
    UPDATE account SET password = ? WHERE email = ?
  `);
  const result = stmt.run(password, email);
  return result.changes > 0;
}