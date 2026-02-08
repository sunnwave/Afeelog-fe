import { FileText, Home, LucideIcon, Ticket } from "lucide-react";

export const NAV_ITEMS = [
  { tab: "home", href: "/", label: "홈", icon: Home },
  { tab: "records", href: "/records", label: "필로그", icon: FileText },
  { tab: "trade", href: "/trade", label: "거래", icon: Ticket },
] as const satisfies ReadonlyArray<{
  tab: string;
  label: string;
  href: string;
  icon: LucideIcon;
}>;

export type TabType = (typeof NAV_ITEMS)[number]["tab"];
export type NavItemType = (typeof NAV_ITEMS)[number];
