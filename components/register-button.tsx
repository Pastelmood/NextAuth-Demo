import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link href={"/register"}>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
        Register
      </button>
    </Link>
  );
}
