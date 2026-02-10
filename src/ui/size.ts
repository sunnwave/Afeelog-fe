export type UISize = "sm" | "md" | "lg";

export const UI_SIZE = {
  sm: {
    pad: "p-4",
    bookmarkPos: "top-4 right-4",
    bottomPos: "bottom-3 left-3 right-3",
    title: "text-lg mb-1",
    body: "text-xs",
    meta: "text-sm",
    caption: "text-xs",
    icon: "w-4 h-4",
    bookmarkIcon: "w-6 h-6",
    avatar: "xs" as const,
    gap: "gap-3",
    // 멀티라인 clamp (Tailwind 플러그인 없이 arbitrary props로)
    titleClamp: "overflow-hidden whitespace-nowrap text-ellipsis",
    bodyClamp:
      "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]",
  },
  md: {
    pad: "p-8",
    bookmarkPos: "top-8 right-8",
    bottomPos: "bottom-8 left-8 right-8",
    title: "text-3xl mb-2",
    body: "text-lg",
    meta: "text-xl",
    caption: "text-base",
    icon: "w-8 h-8",
    bookmarkIcon: "w-11 h-11",
    avatar: "md" as const,
    gap: "gap-4",
    titleClamp: "overflow-hidden whitespace-nowrap text-ellipsis",
    bodyClamp:
      "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]",
  },
  lg: {
    pad: "p-8",
    bookmarkPos: "top-8 right-8",
    bottomPos: "bottom-8 left-8 right-8",
    title: "text-2xl mb-2",
    body: "text-lg",
    meta: "text-xl",
    caption: "text-base",
    icon: "w-8 h-8",
    bookmarkIcon: "w-11 h-11",
    avatar: "md" as const,
    gap: "gap-4",
    titleClamp: "overflow-hidden whitespace-nowrap text-ellipsis",
    bodyClamp:
      "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]",
  },
} satisfies Record<UISize, any>;
