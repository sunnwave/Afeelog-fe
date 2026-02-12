import { SideNavItemType } from "@/constants/navigation";
import { useRouter } from "next/router";
import { Button } from "../../button/Button";

export default function NavItem({ nav }: { nav: SideNavItemType }) {
  const router = useRouter();
  const isActive = router.pathname === nav.href;

  return (
    <Button
      variant="tab"
      tone="primary"
      size="sm"
      selected={isActive}
      className="relative rounded-2xl justify-start"
      onClick={() => router.push(nav.href)}
    >
      <nav.icon className="w-4.5 h-4.5" />
      {nav.label}
    </Button>
  );
}
