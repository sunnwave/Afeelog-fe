import Link from "next/link";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/commons/stores";
import BottomNavItem from "./BottomNavItem";
import { FileText, Home, Plus, Ticket, User } from "lucide-react";
import Avatar from "../../avatar/Avatar";

export default function BottomNav() {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border safe-area-inset-bottom">
      <div className="grid grid-cols-5 items-center h-16 max-w-2xl mx-auto px-2">
        <BottomNavItem href="/" label="홈" icon={Home} />
        <BottomNavItem href="/records" label="기록" icon={FileText} />
        {/* Write (+) */}
        <Link
          href={isLoggedIn ? "/write" : "/login"}
          className="flex flex-col items-center justify-center gap-1 h-full transition-colors relative"
          aria-label="작성"
        >
          <div className="flex items-center justify-center w-12 h-12 -mt-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <Plus className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="text-xs font-semibold">작성</span>
        </Link>
        <BottomNavItem href="/trade" label="거래" icon={Ticket} />

        {isLoggedIn ? (
          <Link
            href="/me"
            className="flex flex-1 flex-col items-center justify-center"
          >
            <Avatar size="md" />
          </Link>
        ) : (
          <BottomNavItem href="/login" label="로그인" icon={User} />
        )}
      </div>
    </nav>
  );
}
