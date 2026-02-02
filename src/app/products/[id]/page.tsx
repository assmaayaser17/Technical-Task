"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  productMock,
  ratingMock,
  reviewsMock,
  similarProductsMock,
} from "@/data/product.mock";

const ACCENT_COLOR = "#A08268";
const BUTTON_RED = "#B91C1C";

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedType, setSelectedType] = useState("Cotton");
  const [selectedSize, setSelectedSize] = useState("2XI");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = productMock.price * quantity;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Desktop Header */}
      <header className="hidden border-b border-gray-200 bg-white md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-[120px]">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-[#A08268]">
              TinyTales
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
                Our Category
              </Link>
              <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
                About Us
              </Link>
              <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
                Contact Us
              </Link>
              <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
                FAQs
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded p-2 hover:bg-gray-100" aria-label="Search">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="rounded p-2 hover:bg-gray-100" aria-label="Wishlist">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="rounded p-2 hover:bg-gray-100" aria-label="Cart">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="rounded p-2 hover:bg-gray-100" aria-label="Profile">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <span className="rounded border border-gray-300 px-3 py-1 text-sm">EN</span>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded p-2 hover:bg-gray-100"
          aria-label="Menu"
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-900">{productMock.category}</h1>
        <div className="flex items-center gap-2">
          <button className="rounded p-2 hover:bg-gray-100" aria-label="Search">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="rounded p-2 hover:bg-gray-100" aria-label="Cart">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
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
          <Link href="/" className="font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/" className="font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
            Our Category
          </Link>
          <Link href="/" className="font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/" className="font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
          <Link href="/" className="font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
            FAQs
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-[1440px] px-4 py-6 md:px-6 md:py-8 lg:px-[120px]">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-500 md:mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/" className="hover:text-gray-700">Our Category</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 md:hidden">{productMock.category}</span>
          <span className="hidden text-gray-900 md:inline">Product Details</span>
        </nav>

        {/* Product Section - Figma: 524x565 image, radius 24px, #F5F5F5 bg */}
        <section className="mb-12 rounded-[40px] bg-[#F5F5F5] p-4 md:mb-16 md:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[524px_1fr] lg:gap-12">
            {/* Image Gallery - Figma pixel-perfect */}
            <div className="space-y-4">
              {/* Main product image - Figma: 524×565, radius 24px, top 396, left 120 */}
              <div
                className="relative overflow-hidden bg-gray-200 mx-auto lg:mx-0 w-full max-w-[524px]"
                style={{
                  width: 524,
                  height: 565,
                  borderRadius: 24,
                  opacity: 1,
                  transform: "rotate(0deg)",
                  maxWidth: "100%",
                }}
              >
                <Image
                  src={productMock.images[selectedImage]}
                  alt={productMock.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 524px"
                  unoptimized
                />
                <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-md hover:bg-white md:left-4">
                  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-md hover:bg-white md:right-4">
                  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Thumbnail gallery - Figma: 523×183, gap 8px, top 969, left 120 */}
              <div
                className="flex pb-2 mx-auto lg:mx-0 w-full max-w-[523px]"
                style={{
                  width: 523,
                  height: 183,
                  gap: 8,
                  opacity: 1,
                  transform: "rotate(0deg)",
                  maxWidth: "100%",
                }}
              >
                {productMock.images.slice(0, 3).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative flex-shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                      selectedImage === i ? "border-[#A08268]" : "border-transparent"
                    }`}
                    style={{
                      width: (523 - 16) / 3,
                      height: 183,
                    }}
                  >
                    <Image
                      src={productMock.images[i]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="175px"
                      unoptimized
                    />
                    {i === 2 && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xs font-medium">
                        +2
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-5">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-gray-200 px-4 py-1.5 text-sm text-gray-700">
                  {productMock.category}
                </span>
                <button className="rounded p-2 hover:bg-gray-200/50" aria-label="Add to wishlist">
                  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <h1 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
                {productMock.name}
              </h1>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-gray-900">${productMock.price.toFixed(2)}</span>
                <span className="text-lg text-gray-400 line-through">${productMock.originalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500">This price is exclusive of taxes</p>

              <p className="text-gray-600 leading-relaxed">{productMock.description}</p>

              {/* Type - Dropdown (Cotton) */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="h-11 w-full max-w-[200px] rounded-lg border border-gray-300 bg-white px-4 text-sm focus:border-[#A08268] focus:outline-none focus:ring-2 focus:ring-[#A08268]/20"
                >
                  {productMock.types.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Size - Dropdown (2XI) */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="h-11 w-full max-w-[200px] rounded-lg border border-gray-300 bg-white px-4 text-sm focus:border-[#A08268] focus:outline-none focus:ring-2 focus:ring-[#A08268]/20"
                >
                  {productMock.sizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Colors - with checkmark on selected */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Colors</label>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex gap-2">
                    {productMock.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(i)}
                        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                          selectedColor === i
                            ? "border-gray-900 ring-2 ring-gray-900 ring-offset-2"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === i && (
                          <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{productMock.colors[selectedColor].name}</span>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Quantity ($300.00 for Piece)
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    -
                  </button>
                  <div className="flex h-11 min-w-[3rem] items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-center font-medium">
                    {quantity.toString().padStart(2, "0")}
                  </div>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    +
                  </button>
                  <span className="ml-2 text-lg font-semibold text-gray-900 md:ml-4">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full rounded-lg py-6 text-base font-medium text-white md:max-w-[280px]"
                style={{ backgroundColor: BUTTON_RED }}
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add To Cart
              </Button>
            </div>
          </div>
        </section>

        {/* Rating & Reviews */}
        <section className="mb-12 rounded-[40px] bg-[#F5F5F5] p-4 md:mb-16 md:p-6 lg:p-8">
          <h2 className="mb-6 text-xl font-bold text-gray-900 md:mb-8 md:text-2xl">Rating & Reviews</h2>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{ratingMock.average}</span>
                <span className="text-xl text-gray-500">/5</span>
              </div>
              <div className="flex gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className={`h-6 w-6 ${i === 5 ? "opacity-50" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="space-y-2">
                {ratingMock.distribution.map((r) => (
                  <div key={r.stars} className="flex items-center gap-3">
                    <span className="w-12 text-sm text-gray-600">{r.stars} stars</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${r.percentage}%` }}
                      />
                    </div>
                    <span className="w-10 text-sm text-gray-600">%{r.percentage}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-700">
                Total Reviews <span className="text-xl font-bold text-gray-900">{(ratingMock.totalReviews / 1000).toFixed(1)}K</span>
              </p>
              <Button
                className="mt-6 w-full rounded-lg py-6 md:max-w-[200px]"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                Add Comment
              </Button>
            </div>

            <div className="space-y-6 lg:col-span-2">
              {reviewsMock.map((review) => (
                <div key={review.id} className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-gray-900">{review.author}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="mb-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? "text-amber-400" : "text-gray-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{review.text}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full rounded-lg py-6">
                View More Comments
              </Button>
            </div>
          </div>
        </section>

        {/* Similar Items */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900 md:mb-6 md:text-2xl">Similar Items</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {similarProductsMock.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  {product.discount && (
                    <span
                      className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white md:right-4 md:top-4 md:px-4 md:text-sm"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      {product.discount}% OFF
                    </span>
                  )}
                  <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-md hover:bg-white md:right-4 md:top-4">
                    <svg className="h-4 w-4 text-gray-600 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-3 md:p-4">
                  <div className="mb-1 flex items-center gap-1 text-sm text-amber-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700">{product.rating} ({product.reviewCount})</span>
                  </div>
                  <p className="mb-1 text-xs text-gray-500">{product.category}</p>
                  <h3 className="mb-2 line-clamp-2 text-sm font-medium text-gray-900">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-900">AED {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">AED {product.originalPrice}</span>
                      )}
                    </div>
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:opacity-90 md:h-10 md:w-10"
                      style={{ backgroundColor: ACCENT_COLOR }}
                      aria-label="Add to cart"
                    >
                      <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
