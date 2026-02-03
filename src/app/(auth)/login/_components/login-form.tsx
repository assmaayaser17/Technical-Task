"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/features/auth/components/auth-layout";
import { useAuth } from "@/features/auth/context/auth-context";
import { authService } from "@/shared/services/auth.service";
import { LoginFormData, loginSchema } from "@/shared/validations/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  // States
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // React hook form
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: searchParams.get("email") ?? "",
      password: "",
    },
  });

  // Use effect
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) form.setValue("email", emailParam);
  }, [searchParams, form]);

  // Login on submit function
  const onSubmit = async (data: LoginFormData) => {
    setError("");
    try {
      const response = await authService.login({
        email: data.email,
        password: data.password,
      });
      if (response.status && response.data) {
        login(response.data);
        router.push("/dashboard");
      } else {
        setError(response.message || "Login failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <AuthLayout>
      {/* Layout */}
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* Title */}
          <h2 className="mb-1 text-2xl font-bold text-gray-900">
            Welcome back
          </h2>

          {/* Description */}
          <p className="mb-6 text-[#A08268]">
            Sign in to access your dashboard
          </p>

          {/* Form content */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>

              {/* On submit */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-[#A08268] hover:bg-amber-900  "
              >
                {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>

          {/* Verifying email */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Need to verify your email?{" "}
            <Link
              href="/verify"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Verify account
            </Link>
          </p>

          {/* Register link */}
          <p className="mt-2 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
