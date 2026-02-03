"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/context/auth-context";

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome, {user.name}
        </h1>
        <p className="mt-2 text-gray-600">
          You have successfully signed in to your dashboard.
        </p>
        <Link
          href="/products/1"
          className="mt-4 inline-block text-sm font-medium text-[#A08268] hover:text-[#8a6d55]"
        >
          View Product Details →
        </Link>
      </div>
    </div>
  );
}
