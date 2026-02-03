"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthLayout } from "@/features/auth/components/auth-layout";
import { authService } from "@/shared/services/auth.service";
import {
  verifySchema,
  type VerifyFormData,
} from "@/shared/validations/auth.schemas";
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

const TEST_VERIFICATION_CODE = "123456";

export default function VerifyContent() {
  // States
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isResending, setIsResending] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // React hook form
  const form = useForm<VerifyFormData>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      email: searchParams.get("email") ?? "",
      code: "",
    },
  });

  // Use effect
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) form.setValue("email", emailParam);
  }, [searchParams, form]);

  // Verify onsubmit function
  const onSubmit = async (data: VerifyFormData) => {
    setError("");
    setSuccessMessage("");
    try {
      const response = await authService.verifyEmail({
        email: data.email,
        code: data.code,
      });
      if (response.status) {
        setSuccessMessage(
          response.message || "Account verified! Redirecting to login...",
        );
        const email = data.email;
        setTimeout(
          () => router.push(`/login?email=${encodeURIComponent(email)}`),
          1500,
        );
      } else {
        setError(response.message || "Invalid verification code");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed");
    }
  };

  // Handel resend code
  const handleResendCode = async () => {
    const email = form.getValues("email");
    if (!email) {
      setError("Please enter your email address first");
      return;
    }
    setError("");
    setSuccessMessage("");
    setIsResending(true);
    try {
      const response = await authService.resendVerificationCode({ email });
      if (response.status) {
        setSuccessMessage(
          response.message || "Verification code sent! Check your email.",
        );
      } else {
        setError(response.message || "Failed to resend code");
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to resend code";
      if (
        message.toLowerCase().includes("unauthenticated") ||
        message.toLowerCase().includes("401")
      ) {
        setError("Session expired. Please register or login again.");
      } else {
        setError(message);
      }
    } finally {
      setIsResending(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        {/* Layout */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* Title */}
          <h2 className="mb-1 text-2xl font-bold text-gray-900">
            Verify your account
          </h2>

          {/* Description */}
          <p className="mb-6 text-gray-600">
            Enter the verification code sent to your email
          </p>

          {/* Form content */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}
              {successMessage && (
                <div className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
                  {successMessage}
                </div>
              )}

              {/* Email feild */}
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

              {/* Codefeild */}
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123456"
                        maxLength={6}
                        className="text-center text-lg tracking-[0.5em]"
                        {...field}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value.replace(/\D/g, "").slice(0, 6),
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                    <p className="text-xs text-muted-foreground">
                      For testing, use code: {TEST_VERIFICATION_CODE}
                    </p>
                  </FormItem>
                )}
              />

              {/* Verify button */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {form.formState.isSubmitting
                  ? "Verifying..."
                  : "Verify Account"}
              </Button>

              {/* Resend code */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={isResending || form.formState.isSubmitting}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
                >
                  {isResending ? "Sending..." : "Resend verification code"}
                </button>
              </div>
            </form>
          </Form>

          {/* Login link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already verified?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
