"use server";

import { getAccountByEmail, updateAccountPasswordByEmail } from "@/libs/db";
import { hashPassword, verifyPassword } from "@/libs/password";
import { unauthorized } from "next/navigation";

export interface FormState {
  success: boolean | undefined;
  message?: string;
  fieldMessage?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export async function ChangePasswordAction(
  prevState: FormState,
  formData: FormData
) {
  // TODO:
  // const session = await auth()
  // get session from auth() from nextAuth
  // redirect to unauthorize page
  const session = { user: { email: "test@example.com" } };
  if (!session) unauthorized();

  const email = session.user.email;
  const currentPassword = formData.get("currentPassword")?.toString().trim();
  const newPassword = formData.get("newPassword")?.toString().trim();
  const confirmPassword = formData.get("confirmPassword")?.toString().trim();

  let response: FormState = {
    success: false,
    currentPassword,
    newPassword,
    confirmPassword,
  };

  if (
    !currentPassword ||
    currentPassword.length === 0 ||
    currentPassword.length < 8
  ) {
    response.fieldMessage =
      "Current password is required and must be at least 8 characters long.";
    return response;
  }

  if (!newPassword || newPassword.length === 0 || newPassword.length < 8) {
    response.fieldMessage =
      "New password is required and must be at least 8 characters long.";
    return response;
  }

  if (
    !confirmPassword ||
    confirmPassword.length === 0 ||
    confirmPassword.length < 8
  ) {
    response.fieldMessage =
      "Confirm password is required and must be at least 8 characters long.";
    return response;
  }

  if (newPassword !== confirmPassword) {
    response.fieldMessage = "Passwords do not match.";
    return response;
  }

  const account = getAccountByEmail(email);
  if (!account) unauthorized();

  const isPwdValid = await verifyPassword(currentPassword, account.password);
  if (!isPwdValid) {
    response.fieldMessage = "Current password is incorrect.";
    return response;
  }

  const hashedNewPassword = await hashPassword(newPassword);

  const result = updateAccountPasswordByEmail(email, hashedNewPassword);

  if (!result) {
    response.message = "Unable to change password. please try again later.";
    return response;
  }

  response.success = true;
  response.message = "Password has been changed successfully.";
  response.currentPassword = "";
  response.newPassword = "";
  response.confirmPassword = "";
  return response;
}
