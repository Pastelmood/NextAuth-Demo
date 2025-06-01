"use server"

import { signOut } from "@/libs/auth"

export async function logoutAction() {
  await signOut({redirectTo: "/"})
}