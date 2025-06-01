import { logoutAction } from "@/actions/logout-action";

export default function LogOutForm() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Logout</h2>

      <form className="space-y-5" action={logoutAction}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={"Belle.Phaethon@outlook.com"}
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            readOnly
            value={"P@ssw0rd"}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
