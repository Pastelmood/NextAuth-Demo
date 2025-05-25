import { findRoleByEmail, getAccounts } from "@/libs/db";
import { unauthorized } from "next/navigation";

export default async function AdminPage() {
  // Mockup session
  const session = { user: { email: "0864713049@outlook.com" } };

  if (!session) {
    unauthorized();
  }

  const role = findRoleByEmail(session.user.email);
  
  if (!role || role !== "admin") {
    unauthorized();
  }

  const members = getAccounts();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-28">
      <h1 className="text-3xl font-bold mb-8 text-center">All members</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                #
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Role
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map((member, idx) => (
              <tr key={member.email}>
                <td className="px-4 py-2 whitespace-nowrap">{idx + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{member.email}</td>
                <td className="px-4 py-2 whitespace-nowrap capitalize">
                  {member.role}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="text-red-600 hover:underline font-medium"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
