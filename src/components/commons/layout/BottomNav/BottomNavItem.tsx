import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNavItem({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-1 h-full
            transition-colors relative
            ${
              isActive
                ? "text-primary-pressed"
                : "text-muted-foreground hover:text-foreground"
            }
          `}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs">{label}</span>
      {isActive && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 mb-1 rounded-full bg-primary" />
      )}
    </Link>
  );
}
