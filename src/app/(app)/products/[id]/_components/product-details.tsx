"use client";

import { useState } from "react";
import Image from "next/image";
import { productMock, ratingMock, reviewsMock } from "@/data/product.mock";

export default function ProductDetails() {
  // States
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedType, setSelectedType] = useState("Cotton");
  const [selectedSize, setSelectedSize] = useState("2XI");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = productMock.price * quantity;

  return (
    <>
      {/* Product details */}
      <section className="mb-8 rounded-2xl bg-[#F5F5F5] p-3 sm:mb-12 sm:rounded-3xl sm:p-4 md:mb-16 md:p-6 lg:rounded-[40px] lg:p-8">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,524px)_1fr] lg:gap-12">
          {/* Image gallery  */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main product image - responsive aspect ratio, 524×565 on lg */}
            <div
              className="relative mx-auto w-full max-w-131 overflow-hidden rounded-2xl bg-gray-200 sm:rounded-[24px] lg:mx-0"
              style={{ aspectRatio: "524/565" }}
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-md hover:bg-white md:right-4">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Thumbnail gallery - responsive, gap 8px */}
            <div className="flex gap-2 pb-2 mx-auto w-full max-w-130.75 lg:mx-0">
              {productMock.images.slice(0, 4).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative min-w-0 flex-1 overflow-hidden rounded-lg border-2 transition-colors sm:rounded-xl ${
                    selectedImage === i
                      ? "border-[#A08268]"
                      : "border-transparent"
                  }`}
                  style={{ aspectRatio: "125/183" }}
                >
                  <Image
                    src={productMock.images[i]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="175px"
                    unoptimized
                  />
                  {i === 3 && productMock.images.length > 4 && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xs font-medium">
                      +{productMock.images.length - 4}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex min-w-0 flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <span className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 sm:px-4 sm:py-1.5 sm:text-sm">
                {productMock.category}
              </span>
              <button
                className="rounded p-2 hover:bg-gray-200/50"
                aria-label="Add to wishlist"
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
            </div>

            <h1 className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
              {productMock.name}
            </h1>

            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-xl font-bold text-gray-900 sm:text-2xl">
                ${productMock.price.toFixed(2)}
              </span>
              <span className="text-base text-gray-400 line-through sm:text-lg">
                ${productMock.originalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-500 sm:text-sm">
              This price is exclusive of taxes
            </p>

            <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
              {productMock.description}
            </p>

            {/* Type */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 sm:mb-2">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-10 w-full max-w-50 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:border-[#A08268] focus:outline-none focus:ring-2 focus:ring-[#A08268]/20 sm:h-11 sm:px-4"
              >
                {productMock.types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Size  */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 sm:mb-2">
                Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="h-10 w-full max-w-50 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:border-[#A08268] focus:outline-none focus:ring-2 focus:ring-[#A08268]/20 sm:h-11 sm:px-4"
              >
                {productMock.sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Colors */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 sm:mb-2">
                Colors
              </label>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2">
                  {productMock.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all sm:h-10 sm:w-10 ${
                        selectedColor === i
                          ? "border-gray-900 ring-2 ring-gray-900 ring-offset-2"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === i && (
                        <svg
                          className="h-4 w-4 text-gray-900 sm:h-5 sm:w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {productMock.colors[selectedColor].name}
                </span>
              </div>
            </div>

            {/* Quantity  */}
            <div>
              <label className="mb-2 block">
                <span className="font-bold text-gray-900">Quantity</span>
                <span className="ml-1 text-sm font-normal text-gray-500">
                  ($300.00 for Piece)
                </span>
              </label>

                 {/* Quantity button */}
              <div className="flex sm:flex-col lg:flex-row justify-between ">
                <div className="flex flex-wrap items-center lg:gap-10 sm:gap-8">
                <div className="flex items-center rounded-xl bg-gray-200">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-l-xl text-gray-600 hover:bg-gray-300/50"
                  >
                    -
                  </button>
                  <div className="flex h-11 min-w-12 items-center justify-center px-4 text-center font-medium text-gray-900">
                    {quantity.toString().padStart(2, "0")}
                  </div>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-r-xl text-gray-600 hover:bg-gray-300/50"
                  >
                    +
                  </button>
                </div>

                {/* Total price */}
                <span className="mt-1 font-bold text-gray-900 sm:mt-0">
                  ${totalPrice.toFixed(2)}
                </span>

                {/* Add to cart button  */}
                <button
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3 font-medium text-white sm:mt-0 sm:w-auto"
                  style={{ backgroundColor: "#BE968E" }}
                >
                  Add To Cart
                  <svg
                    className="h-5 w-5"
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
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Rating & reviews  */}
      <section className="mb-8 rounded-2xl bg-[#F5F5F5] p-3 sm:mb-12 sm:rounded-3xl sm:p-4 md:mb-16 md:p-6 lg:rounded-[40px] lg:p-8">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
            <span className="border-b-2 pb-0.5" style={{ borderColor: "#BE968E" }}>
              Rating
            </span>
            <span className="ml-1">& Reviews</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:gap-x-8 lg:grid-cols-[auto_1fr_auto] lg:gap-x-12">
          {/* Overall rating - centered on mobile, left-aligned on desktop */}
          <div className="flex items-start justify-center lg:justify-start">
            <div
              className="flex items-baseline gap-0.5 text-center lg:text-left"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span
                className="font-medium text-gray-900"
                style={{
                  fontSize: "clamp(3rem, 10vw, 120px)",
                  lineHeight: "100%",
                  fontWeight: 500,
                }}
              >
                {ratingMock.average}
              </span>
              <span className="text-xl text-gray-500">/5</span>
            </div>
          </div>

          {/* Middle stars */}
          <div
            className="flex flex-col justify-center"
            style={{
              width: "100%",
              maxWidth: 600,
              minHeight: 182,
              gap: 8,
              opacity: 1,
            }}
          >
            {ratingMock.distribution.map((r) => (
              <div key={r.stars} className="flex items-center" style={{ gap: 8 }}>
                <svg
                  className="h-4 w-4 shrink-0"
                  style={{ color: "#BE968E" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="w-4 shrink-0 text-sm" style={{ color: "#BE968E" }}>
                  {r.stars}
                </span>
                <div className="h-2 min-w-20 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${r.percentage}%`, backgroundColor: "#BE968E" }}
                  />
                </div>
                <span className="w-9 shrink-0 text-right text-sm font-medium text-gray-700">
                  %{r.percentage}
                </span>
              </div>
            ))}
          </div>

          {/* Total reviews  */}
          <div
            className="hidden w-full max-w-46.5 flex-col items-center justify-center md:flex"
            style={{
              minHeight: 184,
              gap: 8,
              opacity: 1,
            }}
          >
            <div className="flex flex-col">
              <p className="text-base font-normal text-center text-[#545454] ">Total Reviews</p>
              <p className="text-6xl text-center font-semibold text-[#020202]">
                {(ratingMock.totalReviews / 1000).toFixed(1)}K
              </p>
            </div>
            <button
              className="flex w-46.5 h-14 items-center justify-center gap-2 rounded-xl  font-medium text-white"
              style={{ backgroundColor: "#BE968E" }}
            >
              Add Comment
              <svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Reviews list */}
        <div className="mt-6 space-y-4">
          {reviewsMock.map((review) => (
            <div
              key={review.id}
              className="rounded-xl border border-gray-200 bg-white p-4 sm:rounded-2xl md:p-6"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">{review.author}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? ""
                            : "text-gray-200"
                        }`}
                        style={
                          i < review.rating
                            ? { color: "#BE968E" }
                            : undefined
                        }
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
          <button className="w-full rounded-lg border border-gray-300 py-4 font-medium text-gray-700 hover:bg-gray-50">
            View More Comments
          </button>
        </div>
      </section>
    </>
  );
}
