import type { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";
import BottomNav from "./BottomNav/BottomNav";
import Logo from "./Logo";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen  text-[#111827]">
      {/* Desktop: sidebar + content */}
      <header className="lg:hidden mx-auto max-w-[720px] py-2 border-b border-[#E5E7EB]">
        <Logo />
      </header>
      <div className=" w-full max-w-[1200px] lg:grid lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        {/* Content */}
        <main className="px-4 py-6 pb-20 lg:pb-6">{children}</main>
      </div>

      {/* Mobile/Tablet: bottom nav */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
