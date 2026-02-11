export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * 대부분의 아이콘 + 숫자 라벨(카운트)까지 같이 쓸 수 있는 공통 토큰
 */
export const UI_ICON: Record<
  IconSize,
  { icon: string; text: string; gapCol: string; gapRow: string }
> = {
  xs: {
    icon: "w-3.5 h-3.5",
    text: "text-xs",
    gapCol: "gap-1",
    gapRow: "gap-1.5",
  },
  sm: { icon: "w-4 h-4", text: "text-xs", gapCol: "gap-1", gapRow: "gap-1.5" },
  md: { icon: "w-5 h-5", text: "text-sm", gapCol: "gap-1", gapRow: "gap-2" },
  lg: {
    icon: "w-6 h-6",
    text: "text-base",
    gapCol: "gap-1.5",
    gapRow: "gap-2.5",
  },
  xl: {
    icon: "w-8 h-8",
    text: "text-xl",
    gapCol: "gap-1.5",
    gapRow: "gap-2.5",
  },
};
