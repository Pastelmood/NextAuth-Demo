"use server";

import { createAccount, getAccountByEmail } from "@/libs/db";
import { hashPassword } from "@/libs/password";

export interface FormState {
  success: boolean | undefined;
  message: string;
}

/**
 * Handles user registration by validating input, checking for duplicate emails,
 * hashing the password, and creating a new account in the database.
 *
 * @param prevState The previous form state.
 * @param formData The FormData object containing 'email' and 'password' fields.
 * @returns A promise that resolves to a FormState object indicating success or failure and a message.
 */
export async function registerAccountAction(
  prevState: FormState,
  formData: FormData
) {
  const email =
    formData.get("email")?.toString().trim().toLocaleLowerCase() ?? "";
  const password = formData.get("password")?.toString().trim() ?? "";

  let response: FormState = {
    success: undefined,
    message: "",
  };

  if (email.length === 0 || !email.includes("@")) {
    response.success = false;
    response.message = "Email is required";
    return response;
  }

  if (password.length === 0) {
    response.success = false;
    response.message = "Password is required";
    return response;
  }

  if (password.length < 8) {
    response.success = false;
    response.message = "Password must be at least 8 characters long.";
    return response;
  }

  const account = getAccountByEmail(email);
  if (account) {
    response.success = false;
    response.message = "Email is already in use.";
    return response;
  }

  const hashedPassword = await hashPassword(password);

  const result = createAccount({
    email: email,
    password: hashedPassword,
    role: "user",
  });

  if (result === undefined) {
    response.success = false;
    response.message = "Failed to create account.";
    return response;
  }

  response.success = true;
  response.message = "Account has been created successfully.";
  return response;
}
