import { AppHeader } from "@/components/layout/app-header";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F5F5]">
      <AppHeader />
      <main className="min-w-0">{children}</main>
    </div>
  );
}
