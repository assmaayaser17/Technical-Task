"use client";

import Image from "next/image";

interface BrandPanelProps {
  title: string;
  description: string;
  logoText?: string;
}

export function BrandPanel({
  title,
  description,
  logoText = "Tinytales",
}: BrandPanelProps) {
  return (
    <div className="flex flex-1 flex-col justify-center px-8 py-12 md:px-12 lg:px-16">
      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-lg">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold text-[#A08268]">{logoText}</span>
      </div>
      <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <p className="max-w-md text-base text-gray-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}
