import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/commons/stores";
import Logo from "../../ui/logo/Logo";
import ProfileEntry from "./ProfileEntry/ProfileEntry";
import { SIDE_NAV_ITEMS } from "@/constants/navigation";
import NavItem from "./NavItem";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 h-screen w-68 bg-card border-r border-border z-50">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Logo size="lg" showSubtitle />
      </div>
      <ProfileEntry />
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        <div className="pt-4 pb-2">
          <button
            // onClick={onWriteClick}
            className="
                    w-full h-12.5 flex items-center justify-center px-4 py-3 rounded-2xl
                    border border-primary text-primary font-bold text-sm
                    hover:bg-primary/5
                    active:scale-[0.98]
                    transition-all duration-200
                  "
          >
            <span>작성하기</span>
          </button>
        </div>
        {SIDE_NAV_ITEMS.map((item) => {
          return <NavItem key={item.label} nav={item} />;
        })}
        {isLoggedIn && (
          <div className="p-4 border-t border-border">
            <button
              className="w-full h-12.5 flex items-center gap-3 px-4 py-3 rounded-[20px]
              hover:bg-muted transition-colors text-muted-foreground text-sm"
            >
              <LogOut className="w-4.5 h-4.5" />
              <span>로그아웃</span>
            </button>
          </div>
        )}
      </nav>
    </aside>
  );
}
