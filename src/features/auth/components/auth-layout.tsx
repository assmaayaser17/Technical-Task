'use client';

import { BrandPanel } from './brand-panel';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = 'The Only Platform You Need for Multi-Channel Ads';
const DEFAULT_DESCRIPTION =
  'Create once, publish everywhere. Let AI handle your ad campaigns across Meta, Google Ads, and TikTok from one unified dashboard.';

export function AuthLayout({
  children,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">
      <div className="order-2 flex-1 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white lg:order-1">
        <BrandPanel  title={title} description={description} />
      </div>
      <div className="order-1 flex flex-1 flex-col items-center justify-center bg-white px-6 py-12 lg:order-2 lg:px-12">
        {children}
      </div>
    </div>
  );
}
