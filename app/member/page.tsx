import ChangePasswordForm from "@/components/change-password-form";
import { auth } from "@/libs/auth";
import { unauthorized } from "next/navigation";

export default async function MemberPage() {

  const session = await auth();

  if(!session) unauthorized();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Member Area</h1>
      <ChangePasswordForm />
    </div>
  );
}
