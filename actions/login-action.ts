"use server";

import { getAccountByEmail } from "@/libs/db";
import { verifyPassword } from "@/libs/password";

interface FormState {
  success: boolean | undefined;
  message?: string;
  email?: string;
}

/**
 * Handles user login by validating credentials, verifying the password, and preparing the user object for authentication.
 *
 * @param prevState The previous form state.
 * @param formData The FormData object containing 'email' and 'password' fields.
 * @returns A promise that resolves to a FormState object indicating success or failure and a message.
 */
export async function loginAction(prevState: FormState, formData: FormData) {
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString().trim();

  let response: FormState = {
    success: undefined,
    message: "Login failed",
    email: email,
  };

  if (!email || email.length === 0 || !password || password.length === 0) {
    response.success = false;
    response.message = "Email and password are required.";
    return response;
  }

  const account = getAccountByEmail(email);
  if (!account) {
    response.success = false;
    response.message = "Invalid email or password.";
    return response;
  }

  const isPwdValid = await verifyPassword(password, account.password);
  if (!isPwdValid) {
    response.success = false;
    response.message = "Invalid email or password.";
    return response;
  }

  const user = {
    email: account.email,
    redirectTo: "/",
  };

  // TODO:
  // Call singIn("credentials", user) from nextAuth
  // redirect to "/" when signIn() called

  response.success = true;
  response.message = "Login successful.";
  response.email = "";
  return response;
}
