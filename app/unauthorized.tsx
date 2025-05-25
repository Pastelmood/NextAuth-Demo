export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline font-semibold">Unauthorized Access</span>
          <p className="mt-2 text-sm">You do not have permission to view this page.</p>
        </div>
        <p className="mt-6">
          <a href="/" className="text-blue-600 hover:underline font-medium">Back</a>
        </p>
      </div>
    </div>
  );
}