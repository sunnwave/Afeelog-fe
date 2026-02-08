import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/commons/stores";
import Logo from "../../logo/Logo";
import ProfileEntry from "./ProfileEntry/ProfileEntry";

export default function Sidebar() {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 h-screen w-70 bg-card border-r border-border z-50">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Logo size="lg" showSubtitle />
      </div>
      <ProfileEntry />
    </aside>
  );
}
