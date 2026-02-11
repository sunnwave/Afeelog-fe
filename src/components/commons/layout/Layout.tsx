import type { ReactNode } from "react";
import BottomNav from "./BottomNav/BottomNav";
import Logo from "../ui/logo/Logo";
import Sidebar from "./SideNav/SideNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen  text-[#111827] bg-background">
      {/* Desktop: sidebar + content */}
      <div className="mx-auto w-full max-w-[1200px] lg:grid lg:grid-cols-[272px_1fr]">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
        <div className="w-full flex items-center justify-center py-3 lg:hidden bg-white/80 border border-border">
          <div className="block md:hidden">
            <Logo size="md" showSubtitle={false} />
          </div>
          <div className="hidden md:block">
            <Logo size="lg" showSubtitle={false} />
          </div>
        </div>

        {/* Content */}
        <main className="w-full px-3 py-3 pb-20 md:px-6 md:py-8 lg:px-6 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Mobile/Tablet: bottom nav */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
