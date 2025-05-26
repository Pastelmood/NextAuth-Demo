import { logoutAction } from "@/actions/logout-action";

export default function LogoutButton() {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
      formAction={logoutAction}
    >
      Logout
    </button>
  );
}
