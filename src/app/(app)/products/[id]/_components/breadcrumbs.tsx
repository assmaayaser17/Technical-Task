import { productMock } from "@/data/product.mock";
import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <div
      className="mb-4 rounded-t-2xl px-3 py-3 sm:mb-6 sm:rounded-t-3xl sm:px-4 sm:py-4 md:mb-8 md:px-6 md:py-4 lg:rounded-t-[40px] lg:px-8 lg:py-4"
      style={{ backgroundColor: "#ECECEC66" }}
    >
      <nav className="text-sm text-gray-500">
        <Link href="/dashboard" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link href="/products/1" className="hover:text-gray-700">
          Our Category
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 md:hidden">{productMock.category}</span>
        <span className="hidden text-gray-900 md:inline">Product Details</span>
      </nav>
    </div>
  );
}
