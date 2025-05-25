import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-700">
          <Link href={"/"}>NextAuth 5 Demo</Link>
        </span>
        <div className="flex gap-2">
          <Link href={"/login"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
              Login
            </button>
          </Link>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
            Logout
          </button>

          <Link href={"/register"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
