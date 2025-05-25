import { hash, compare } from "bcryptjs";

/**
 * Hashes a plain text password using bcrypt with a salt round of 12.
 *
 * @param plainPassword The plain text password to hash.
 * @returns A promise that resolves to the hashed password string.
 */
export async function hashPassword(plainPassword: string) {
  return await hash(plainPassword, 12);
}

/**
 * Compares a plain text password with a hashed password to verify if they match.
 *
 * @param plainPassword The plain text password to verify.
 * @param hashedPassword The hashed password to compare against.
 * @returns A promise that resolves to true if the passwords match, false otherwise.
 */
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
) {
  return await compare(plainPassword, hashedPassword);
}
