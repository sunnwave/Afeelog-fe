import { useEffect, useState } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

const getBreakpoint = () => {
  if (typeof window === "undefined") return "mobile" as const;

  // theme.css: tablet 768, desktop 1280
  if (window.matchMedia("(min-width: 1024px)").matches)
    return "desktop" as const;
  if (window.matchMedia("(min-width: 768px)").matches) return "tablet" as const;
  return "mobile" as const;
};

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(() => getBreakpoint());

  useEffect(() => {
    const mqlTablet = window.matchMedia("(min-width: 768px)");
    const mqlDesktop = window.matchMedia("(min-width: 1024px)");

    const update = () => setBp(getBreakpoint());

    update();
    mqlTablet.addEventListener("change", update);
    mqlDesktop.addEventListener("change", update);

    return () => {
      mqlTablet.removeEventListener("change", update);
      mqlDesktop.removeEventListener("change", update);
    };
  }, []);

  return bp;
}
