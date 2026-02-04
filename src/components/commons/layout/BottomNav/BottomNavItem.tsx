import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();
  const active = router.pathname === href;

  return (
    <Link
      href={href}
      className={[
        "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs",
        active ? "text-[#B45309] font-semibold" : "text-[#4B5563]",
      ].join(" ")}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: active ? "#F59E0B" : "transparent" }}
      />
      {label}
    </Link>
  );
}
