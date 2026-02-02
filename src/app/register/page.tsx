"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthLayout } from "@/features/auth/components/auth-layout";
import { authService } from "@/shared/services/auth.service";
import { STORAGE_KEYS } from "@/shared/constants/storage";
import {
  registerSchema,
  type RegisterFormData,
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

const COUNTRY_CODES = [
  { code: "971", country: "UAE" },
  { code: "966", country: "Saudi Arabia" },
  { code: "965", country: "Kuwait" },
  { code: "974", country: "Qatar" },
  { code: "973", country: "Bahrain" },
  { code: "968", country: "Oman" },
  { code: "20", country: "Egypt" },
  { code: "1", country: "USA/Canada" },
  { code: "44", country: "UK" },
  { code: "91", country: "India" },
];

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: "",
      mobile_country_code: "971",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setError("");
    try {
      const response = await authService.register({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
        mobile: data.mobile,
        mobile_country_code: data.mobile_country_code,
      });
      if (response.status && response.data) {
        const userData = response.data;
        if (userData.token) {
          localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, userData.token);
          localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
        }
        router.push(`/verify?email=${encodeURIComponent(data.email)}`);
      } else {
        setError(response.message || "Registration failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">
            Create account
          </h2>
          <p className="mb-6 text-gray-600">
            Register to access your dashboard
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
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

              <div className="flex gap-3">
                <FormField
                  control={form.control}
                  name="mobile_country_code"
                  render={({ field }) => (
                    <FormItem className="w-28">
                      <FormLabel>Country Code</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
                        >
                          {COUNTRY_CODES.map(({ code, country }) => (
                            <option key={code} value={code}>
                              +{code} ({country})
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="501231100" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {form.formState.isSubmitting
                  ? "Creating account..."
                  : "Create Account"}
              </Button>
            </form>
          </Form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
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
