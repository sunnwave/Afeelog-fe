import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({
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
        "flex items-center rounded-xl px-3 py-2 text-sm",
        active
          ? "bg-[#FFF7E6] text-[#B45309] font-semibold"
          : "text-[#4B5563] hover:bg-[#FFF7E6]/60",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
