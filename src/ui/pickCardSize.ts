import type { Breakpoint } from "@/shared/hooks/ui/useBreakpoint";
import { CARD_UI_SIZE } from "./size";

export const CARD_SIZE_BY_BP: Record<Breakpoint, CARD_UI_SIZE> = {
  mobile: "lg",
  tablet: "lg",
  desktop: "sm",
};
