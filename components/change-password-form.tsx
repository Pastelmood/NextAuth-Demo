"use client";

import {
  ChangePasswordAction,
  FormState,
} from "@/actions/change-password-action";
import { useActionState } from "react";

const initialState: FormState = {
  success: undefined,
};

export default function ChangePasswordForm() {
  const [formState, formAction] = useActionState(
    ChangePasswordAction,
    initialState
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Change Password
      </h2>
      {/* Alert placeholder */}
      <div className="mb-4 space-y-2">
        {formState.success !== undefined && formState.message && (
          <div
            className={`${
              formState.success
                ? "bg-green-100 border border-green-400 text-green-700"
                : "bg-red-100 border border-red-400 text-red-700"
            } px-4 py-3 rounded relative`}
          >
            <span className="block sm:inline">{formState.message}</span>
          </div>
        )}
      </div>
      <form className="space-y-5" action={formAction}>
        <div>
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="current-password"
            defaultValue={formState.currentPassword}
          />

          {formState.success === false &&
            formState.fieldMessage?.includes("Current password") && (
              <p className="text-red-700">
                Current password is required and must be at least 8 characters
                long.
              </p>
            )}
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="new-password"
            defaultValue={formState.newPassword}
          />

          {formState.success === false &&
            formState.fieldMessage?.includes("New password") && (
              <p className="text-red-700">
                New password is required and must be at least 8 characters long.
              </p>
            )}

          {formState.success === false &&
            formState.fieldMessage?.includes("match") && (
              <p className="text-red-700">Passwords do not match.</p>
            )}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="new-password"
            defaultValue={formState.confirmPassword}
          />

          {formState.success === false &&
            formState.fieldMessage?.includes("Confirm password") && (
              <p className="text-red-700">
                Confirm password is required and must be at least 8 characters
                long.
              </p>
            )}

          {formState.success === false &&
            formState.fieldMessage?.includes("match") && (
              <p className="text-red-700">Passwords do not match.</p>
            )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
