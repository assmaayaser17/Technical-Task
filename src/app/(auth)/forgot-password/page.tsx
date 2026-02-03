import Link from "next/link";
import { AuthLayout } from "@/features/auth/components/auth-layout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">
            Forgot password?
          </h2>
          <p className="mb-6 text-gray-600">
            Contact support to reset your password.
          </p>
          <Link
            href="/login"
            className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
