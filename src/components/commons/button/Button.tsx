import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "tab" | "solid" | "outlined" | "ghost";
type ButtonTone = "primary" | "indigo" | "emerald" | "neutral";
type ButtonSize = "tab" | "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  selected?: boolean; // ✅ "선택됨" (persist 상태)
};

const base =
  "w-full flex items-center justify-center rounded-lg font-medium cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  tab: "py-2.5 px-4 text-sm", // 네가 쓰던 탭 버튼 사이즈
  sm: "px-4 py-3 text-sm font-medium gap-3",
  md: "px-5 py-3 text-md font-bold gap-3",
  lg: "px-6 py-4 text-base font-semibold gap-3",
} satisfies Record<ButtonSize, string>;

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

const solidTone = {
  primary: "bg-primary text-white hover:opacity-90 active:opacity-85",
  indigo: "bg-point-indigo text-white hover:opacity-90 active:opacity-85",
  emerald: "bg-point-emerald text-white hover:opacity-90 active:opacity-85",
  neutral: "bg-foreground text-background hover:opacity-90 active:opacity-85",
} satisfies Record<ButtonTone, string>;

const outlinedTone = {
  primary: "border border-primary text-primary hover:bg-primary/5",
  indigo:
    "border border-point-indigo text-point-indigo hover:bg-point-indigo/5 ",
  emerald:
    "border border-point-emerald text-point-emerald  hover:bg-point-emerald/5 ",
  neutral: "border border-foreground text-foreground hover:opacity-90 ",
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
    size = "sm",
    ...props
  },
  ref
) {
  const getVariantClass = () => {
    switch (variant) {
      case "tab":
        return selected ? tabTone[tone].selected : tabTone[tone].idle;
      case "solid":
        return solidTone[tone];
      case "outlined":
        return outlinedTone[tone];
      case "ghost":
        return ghostTone[tone];
      default:
        return ghostTone[tone];
    }
  };

  const variantClass = getVariantClass();

  return (
    <button
      ref={ref}
      className={cn(base, sizes[size], variantClass, className)}
      {...props}
    />
  );
});
