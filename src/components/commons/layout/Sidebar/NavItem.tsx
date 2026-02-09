import { SideNavItemType } from "@/constants/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ nav }: { nav: SideNavItemType }) {
  const router = useRouter();
  const isActive = router.pathname === nav.href;

  return (
    <Link
      href={nav.href}
      className={`
                w-full h-12.5 flex items-center gap-3 px-4 py-3 rounded-[20px]
                transition-all font-medium relative
                ${
                  isActive
                    ? "bg-primary text-white "
                    : "hover:bg-accent text-foreground"
                }
              `}
    >
      <nav.icon className="w-4.5 h-4.5" />
      {nav.label}
    </Link>
  );
}
