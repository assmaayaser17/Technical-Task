import Image from "next/image";
import Breadcrumbs from "./_components/breadcrumbs";
import ProductDetails from "./_components/product-details";
import SimilarItems from "./_components/similar-items";

export default function ProductDetailsPage() {
  return (
    <>
      {/* Full-width hero title with background image, styled like Figma */}
      <section className="relative overflow-hidden bg-[#f7f5f3]">
        {/* Background image rotated 90deg */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <Image
            src="/hero-image.png"
            alt="Product details background"
            fill
            className="object-cover rotate-90"
            priority
          />
        </div>
        {/* Centered title */}
        <div className="relative mx-auto max-w-360 px-2 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-30">
          <h1 className="text-center text-base font-semibold tracking-wide text-gray-900 sm:text-lg md:text-xl">
            Product Details
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="min-w-0 mx-auto max-w-360 px-2 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-30 lg:py-12">
        {/* Breadcrumbs: Home › Our Category › Product Details */}
        <Breadcrumbs />

        {/* Product details */}
        <ProductDetails />

        {/* Similar items */}
        <SimilarItems />
      </div>
    </>
  );
}
