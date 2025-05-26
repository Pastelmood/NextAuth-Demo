import Image from "next/image";

export default function GoogleButton() {
  return (
    <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-md bg-white text-gray-700 hover:shadow-md px-4 py-2 transition">
      <Image
        src={"https://www.svgrepo.com/show/475656/google-color.svg"}
        alt="Google logo"
        className="w-5 h-5"
        height={10}
        width={10}
      />
      <span className="text-sm font-medium">Login with Google</span>
    </button>
  );
}
