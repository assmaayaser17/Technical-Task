"use client";

import { useRef } from "react";
import { similarProductsMock } from "@/data/product.mock";
import Image from "next/image";

const ACCENT_COLOR = "#BE968E";

export default function SimilarItems() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {/* Section title - underline only under "Similar" per Figma */}
      <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
        <span className="border-b-2 pb-0.5" style={{ borderColor: ACCENT_COLOR }}>
          Similar
        </span>
        <span className="ml-1">Items</span>
      </h2>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {similarProductsMock.map((product) => (
          <div
            key={product.id}
            className="group w-[260px] shrink-0 overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md sm:w-[280px] sm:rounded-2xl"
          >
            {/* Product image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="280px"
                unoptimized
              />

              {/* Discount badge - top-left */}
              {product.discount && (
                <span
                  className="absolute left-3 top-3 rounded-lg px-3 py-1 text-xs font-semibold text-white sm:left-4 sm:top-4"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  {product.discount}% OFF
                </span>
              )}

              {/* Overlay icons - top-right: cart+ and heart */}
              <div className="absolute right-3 top-3 flex gap-2 sm:right-4 sm:top-4">
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-md transition-colors hover:bg-white"
                  style={{ color: ACCENT_COLOR }}
                  aria-label="Add to cart"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-md transition-colors hover:bg-white"
                  style={{ color: ACCENT_COLOR }}
                  aria-label="Add to wishlist"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product details */}
            <div className="p-4">
              {/* Row 1: Category (left) + Rating (right) */}
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-xs text-gray-500">{product.category}</p>
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" style={{ color: ACCENT_COLOR }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviewCount})</span>
                </div>
              </div>

              {/* Row 2: Product name */}
              <h3 className="mb-3 line-clamp-2 text-sm font-medium text-gray-900">{product.name}</h3>

              {/* Row 3: Price (left) + Color swatches (right) */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-gray-900">AED {product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">AED {product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {"colors" in product && Array.isArray(product.colors) ? (
                    <>
                      {product.colors.slice(0, 3).map((color, i) => (
                        <span
                          key={i}
                          className="h-3 w-3 rounded-full border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      {"colorCount" in product && product.colorCount > 3 && (
                        <span className="text-xs text-gray-500">+{product.colorCount - 3}</span>
                      )}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - bottom center per Figma */}
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={() => scroll("left")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-gray-300"
          aria-label="Scroll left"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: ACCENT_COLOR }}
          aria-label="Scroll right"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
