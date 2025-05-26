import { logoutAction } from "@/actions/logout-action";
import { auth } from "@/libs/auth";
import Link from "next/link";

export default async function MainNavigation() {
  const session = await auth();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-700">
          <Link href={"/"}>NextAuth 5 Demo</Link>
        </span>
        <div className="flex items-center gap-2">
          {!session && (
            <>
              <Link href={"/login"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                  Login
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                  Register
                </button>
              </Link>
            </>
          )}

          {session && (
            <>
            <p>{`Hi, ${session.user?.email}`}</p>
            <form action={logoutAction}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                Logout
              </button>
            </form>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
