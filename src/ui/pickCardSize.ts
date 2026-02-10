import type { UISize } from "@/ui/size";
import type { Breakpoint } from "@/hooks/useBreakpoint";

export const CARD_SIZE_BY_BP: Record<Breakpoint, UISize> = {
  mobile: "lg",
  tablet: "md",
  desktop: "sm",
};
