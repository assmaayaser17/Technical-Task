"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/features/auth/context/auth-context";

export function AppHeader() {
  // Hooks
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <>
      {/* App header */}
      <header className="hidden border-b border-gray-200 bg-white md:block">
        <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-4 lg:px-30">
          {/* Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-xl font-bold text-[#A08268]"
            >
              TinyTales
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/dashboard"
                className={`text-sm ${pathname === "/dashboard" ? "font-medium text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
              >
                Home
              </Link>
              <Link
                href="/products/1"
                className={`text-sm ${pathname?.startsWith("/products") ? "font-medium text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
              >
                Our Category
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                FAQs
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded p-2 hover:bg-gray-100"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="rounded p-2 hover:bg-gray-100"
              aria-label="Wishlist"
            >
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button className="rounded p-2 hover:bg-gray-100" aria-label="Cart">
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <button
              className="rounded p-2 hover:bg-gray-100"
              aria-label="Profile"
            >
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            {user ? (
              <button
                onClick={logout}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Sign In
              </Link>
            )}
            <span className="rounded border border-gray-300 px-3 py-1 text-sm">
              EN
            </span>
          </div>
        </div>
      </header>

      {/* Mobile header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded p-2 hover:bg-gray-100"
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link href="/dashboard" className="text-lg font-semibold text-gray-900">
          TinyTales
        </Link>
        <div className="flex items-center gap-2">
          <button className="rounded p-2 hover:bg-gray-100" aria-label="Search">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="rounded p-2 hover:bg-gray-100" aria-label="Cart">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-200 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 pt-16">
          <Link
            href="/dashboard"
            className="font-medium text-gray-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products/1"
            className="font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Category
          </Link>
          <Link
            href="/dashboard"
            className="font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/dashboard"
            className="font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/dashboard"
            className="font-medium text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          {user ? (
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="text-left font-medium text-gray-700"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className="font-medium text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
