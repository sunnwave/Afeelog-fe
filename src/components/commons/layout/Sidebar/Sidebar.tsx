import Link from "next/link";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/commons/stores";
import NavItem from "./NavItem";
import Logo from "../Logo";

export default function Sidebar() {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <div className="sticky top-0 h-screen border-r border-[#E5E7EB] bg-white/70 px-4 py-6 backdrop-blur">
      {/* Profile entry (top) */}
      <div className="mb-5 hidden lg:block">
        <Logo />
      </div>
      <Link
        href={isLoggedIn ? "/me" : "/login"}
        className="mb-6 flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-3 py-3 hover:bg-[#FFF7E6]/40"
      >
        {isLoggedIn && (
          <div className="h-10 w-10 rounded-full bg-[#FFF7E6] ring-1 ring-[#E5E7EB]" />
        )}
        <div className="min-w-0">
          <div className="text-sm font-semibold">
            {isLoggedIn ? "sun" : "로그인해주세요"}
          </div>
          <div className="text-xs text-[#4B5563]">
            {isLoggedIn ? "마이페이지로 이동" : "로그인하고 내 기록을 관리해요"}
          </div>
        </div>
        <div className="ml-auto text-[#4B5563]">›</div>
      </Link>

      {/* Write CTA (separate from active tab color) */}
      <Link
        href={isLoggedIn ? "/records/new" : "/login"}
        className="mb-6 flex items-center border border-amber-600 bg-white justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-amber-600 hover:opacity-95"
      >
        작성(+)
      </Link>

      <nav className="space-y-1">
        <NavItem href="/" label="홈" />
        <NavItem href="/records" label="필로그" />
        <NavItem href="/trade" label="거래" />
      </nav>
    </div>
  );
}
