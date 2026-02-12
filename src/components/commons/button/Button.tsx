import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonTone = "primary" | "indigo" | "emerald" | "neutral";
type ButtonVariant = "tab" | "solid" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  tone?: ButtonTone;

  selected?: boolean; // ✅ "선택됨" (persist 상태)
};

const base =
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  tab: "py-2.5 px-4 text-sm", // 네가 쓰던 탭 버튼 사이즈
  solid: "h-10 px-4 text-sm",
  ghost: "h-10 px-3 text-sm",
} satisfies Record<ButtonVariant, string>;

/**
 * ✅ tab 스타일(선택 상태 유지)
 * - selected=false: bg-accent text-muted-foreground hover:bg-soft-accent
 * - selected=true : bg-point-indigo text-white shadow-md  (tone에 따라 변경 가능)
 */
const tabTone = {
  primary: {
    idle: "hover:bg-accent text-foreground",
    selected: "bg-primary text-white",
  },
  indigo: {
    idle: "bg-accent text-muted-foreground hover:bg-soft-accent",
    selected: "bg-point-indigo text-white shadow-md",
  },
  emerald: {
    idle: "bg-accent text-muted-foreground hover:bg-soft-accent",
    selected: "bg-point-emerald text-white shadow-md",
  },
  neutral: {
    idle: "bg-accent text-muted-foreground hover:bg-soft-accent",
    selected: "bg-foreground text-background shadow-md",
  },
} satisfies Record<ButtonTone, { idle: string; selected: string }>;

// (옵션) 다른 variant들도 확장 가능
const solidTone = {
  primary:
    "bg-point-primary text-white hover:bg-primary-hover active:opacity-85",
  indigo: "bg-point-indigo text-white hover:opacity-90 active:opacity-85",
  emerald: "bg-point-emerald text-white hover:opacity-90 active:opacity-85",
  neutral: "bg-foreground text-background hover:opacity-90 active:opacity-85",
} satisfies Record<ButtonTone, string>;

const ghostTone = {
  primary: "text-foreground hover:bg-accent",
  indigo:
    "text-point-indigo hover:bg-point-indigo/10 active:bg-point-indigo/15",
  emerald:
    "text-point-emerald hover:bg-point-emerald/10 active:bg-point-emerald/15",
  neutral: "text-foreground hover:bg-muted active:bg-muted/80",
} satisfies Record<ButtonTone, string>;

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    className,
    variant = "solid",
    tone = "neutral",
    selected = false,
    ...props
  },
  ref
) {
  const variantClass =
    variant === "tab"
      ? cn(selected ? tabTone[tone].selected : tabTone[tone].idle)
      : variant === "solid"
      ? solidTone[tone]
      : ghostTone[tone];

  return (
    <button
      ref={ref}
      className={cn(base, sizes[variant], variantClass, className)}
      {...props}
    />
  );
});
