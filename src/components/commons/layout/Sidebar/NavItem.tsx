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
        "flex items-center rounded-xl px-3 py-2 text-sm hover:cursor-pointer transition-transform duration-150 ease-out motion-reduce:transition-none motion-reduce:hover:scale-100 hover:scale-[1.03]",
        active ? "bg-[#CC7533] text-[#ffffff] font-medium" : "text-[#111827]",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
