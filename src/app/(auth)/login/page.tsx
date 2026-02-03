import { Suspense } from "react";
import { AuthLayout } from "@/features/auth/components/auth-layout";
import LoginForm from "./_components/login-form";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <AuthLayout>
          <div className="w-full max-w-md">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="animate-pulse space-y-4">
                <div className="h-8 w-48 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-12 w-full rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </AuthLayout>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
