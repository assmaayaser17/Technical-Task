'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/context/AuthContext';

export default function DashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-600">AdPortal</span>
          </div>
          <button
            onClick={logout}
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {user.name}
          </h1>
          <p className="mt-2 text-gray-600">
            You have successfully signed in to your dashboard.
          </p>
        </div>
      </main>
    </div>
  );
}
