import { ArrowLeft } from "lucide-react";
import { Button } from "../button/Button";
import { ButtonHTMLAttributes, useCallback } from "react";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  fallbackHref?: string;
  label?: string;
  forceFallback?: boolean;
};

export default function BackButton({
  fallbackHref = "/",
  label = "뒤로",
  forceFallback = false,
  className,
  ...props
}: Props) {
  const router = useRouter();

  const onBack = useCallback(() => {
    if (
      !forceFallback &&
      typeof window !== "undefined" &&
      window.history.length > 1
    ) {
      router.back();
      return;
    }
    void router.push(fallbackHref);
  }, [router, fallbackHref, forceFallback]);

  return (
    <div className={cn("sticky top-0 z-50 py-4 mt-2 bg-white/90", className)}>
      <Button
        variant="ghost"
        tone="neutral"
        className="p-0 justify-start"
        onClick={onBack}
      >
        <ArrowLeft className="w-4-h-4" />
        <span>{label}</span>
      </Button>
    </div>
  );
}
