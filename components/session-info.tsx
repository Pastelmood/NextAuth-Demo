export interface SessionInfoProps {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
  userId?: string | null;
}

export default function SessionInfo({
  name,
  email,
  image,
  role,
  userId,
}: SessionInfoProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <div>
        <div className="flex justify-center">
          <h2 className="text-xl font-bold mb-4">Session Info</h2>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Default info</h3>

          <ul className="space-y-1 pl-4">
            <li>
              <span className="font-medium">Name:</span>{" "}
              {name || <span className="text-red-600 italic">no session</span>}
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              {email || <span className="text-red-600 italic">no session</span>}
            </li>
            <li>
              <span className="font-medium">Image:</span>{" "}
              {image || <span className="text-red-600 italic">no session</span>}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Custom info</h3>
          <ul className="space-y-1 pl-4">
            <li>
              <span className="font-medium">Role:</span>{" "}
              {role || (
                <span className="text-red-600 italic">
                  no session or no data
                </span>
              )}
            </li>
            <li>
              <span className="font-medium">User ID:</span>{" "}
              {userId || (
                <span className="text-red-600 italic">
                  no session or no data
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
