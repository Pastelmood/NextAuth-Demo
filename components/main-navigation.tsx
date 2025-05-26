import Link from "next/link";
import LoginButton from "./login-button";
import RegisterButton from "./register-button";
import LogoutButton from "./logout-button";
import GreetingName from "./greeting-name";

export default function MainNavigation() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-700">
          <Link href={"/"}>NextAuth 5 Demo</Link>
        </span>
        <div className="flex gap-2">

          <GreetingName name="admin@admin.com" />
          
          <LoginButton />

          <RegisterButton />

          <LogoutButton />

        </div>
      </div>
    </nav>
  );
}
