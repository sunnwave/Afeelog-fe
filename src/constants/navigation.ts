import { FileText, Home, LucideIcon, Plus, Ticket } from "lucide-react";

export const SIDE_NAV_ITEMS = [
  { tab: "home", href: "/", label: "홈", icon: Home },
  { tab: "records", href: "/records", label: "필로그", icon: FileText },
  { tab: "market", href: "/market", label: "마켓", icon: Ticket },
] as const satisfies ReadonlyArray<{
  tab: string;
  label: string;
  href: string;
  icon: LucideIcon;
}>;

export type TabType = (typeof SIDE_NAV_ITEMS)[number]["tab"];
export type SideNavItemType = (typeof SIDE_NAV_ITEMS)[number];
