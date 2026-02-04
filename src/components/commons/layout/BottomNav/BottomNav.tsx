import Link from "next/link";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/commons/stores";
import BottomNavItem from "./BottomNavItem";

export default function BottomNav() {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-[#E5E7EB] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[720px] items-center px-2">
        <BottomNavItem href="/" label="홈" />
        <BottomNavItem href="/records" label="기록" />

        {/* Write (+) */}
        <Link
          href={isLoggedIn ? "/write" : "/login"}
          className="mx-2 my-2 flex h-11 w-11 items-center justify-center rounded-full bg-amber-600 text-white shadow"
          aria-label="작성"
        >
          +
        </Link>

        <BottomNavItem href="/trade" label="거래" />

        {/* Profile entry (icon BottomNavItem) */}
        <Link
          href={isLoggedIn ? "/me" : "/login"}
          className="flex flex-1 flex-col items-center justify-center py-2 text-xs text-[#4B5563]"
        >
          <div className="h-6 w-6 rounded-full bg-[#FFF7E6] ring-1 ring-[#E5E7EB]" />
          프로필
        </Link>
      </div>
    </div>
  );
}
