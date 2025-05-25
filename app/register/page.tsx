"use client";

import { FormState, registerAccountAction } from "@/actions/register-action";
import { useActionState } from "react";

const initialState: FormState = {
  success: undefined,
  message: "",
};

export default function RegisterPage() {
  const [formState, formAction] = useActionState(
    registerAccountAction,
    initialState
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an account
        </h2>
        {/* Alert placeholder */}
        <div className="mb-4 space-y-2">
          {/* Example error alert */}
          {formState.success !== undefined && (
            <div
              className={` ${
                formState.success
                  ? "bg-green-100 border-green-400 text-green-700"
                  : "bg-red-100 border border-red-400 text-red-700"
              } px-4 py-3 rounded relative`}
            >
              <span className="block sm:inline">{formState.message}</span>
            </div>
          )}
          {/* Example success alert */}
          {/* <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">
              Account created successfully!
            </span>
          </div> */}
        </div>
        <form className="space-y-5" action={formAction}>
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
              autoComplete="email"
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
              autoComplete="new-password"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
