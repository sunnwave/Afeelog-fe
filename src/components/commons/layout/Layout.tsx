import type { ReactNode } from "react";
import BottomNav from "./BottomNav/BottomNav";
import Sidebar from "./SideNav/SideNav";
import Logo from "../ui/logo/Logo";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-[#111827]">
      {/* ✅ Desktop Sidebar: viewport 기준 왼쪽 고정 */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-[300px] z-50">
        <Sidebar />
      </aside>

      {/* ✅ Mobile Header */}
      <div className="w-full flex items-center justify-center py-3 lg:hidden bg-white/80 border-b border-border">
        <div className="block md:hidden">
          <Logo size="md" showSubtitle={false} />
        </div>
        <div className="hidden md:block">
          <Logo size="lg" showSubtitle={false} />
        </div>
      </div>

      {/* ✅ Main: sidebar 만큼 밀고, 내용만 컨테이너로 가운데 정렬 */}
      <div className={`lg:pl-[300px]`}>
        <main className="w-full">
          <div className="mx-auto w-full max-w-[1200px] pb-20">
            {/* <div className="mx-auto w-full max-w-[1200px] pb-20 md:px-6 md:py-8 lg:px-6 lg:pb-8"> */}
            {children}
          </div>
        </main>
      </div>

      {/* Mobile/Tablet BottomNav */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
