"use server";

import { signIn } from "@/libs/auth";

export async function loginAction(formData: FormData) {
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString().trim();

  console.log("Login Action:", { email, password });

  // Let say we have a user object after successful login
  // In a real application, you would validate the credentials and fetch user data from a database

  const credentials = {
    name: "Belle Phaethon",
    email: "Belle Phaethon@outlook.com",
    image: "https://i.pravatar.cc/150?img=3",

    redirectTo: "/", // Optional: where to redirect after login
  };

  // Call the signIn function from NextAuth with the user object
  // This will handle the session creation and redirection
  await signIn("credentials", credentials);
}
