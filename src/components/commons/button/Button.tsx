import type { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "solid" | "soft" | "outline" | "ghost" | "link";
type ButtonTone = "brand" | "neutral" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 select-none whitespace-nowrap " +
  "rounded-xl font-medium transition-colors focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
  icon: "h-10 w-10 p-0",
};

const variants: Record<ButtonVariant, Record<ButtonTone, string>> = {
  solid: {
    brand:
      "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed",
    neutral: "bg-foreground text-background hover:opacity-90 active:opacity-85",
    danger:
      "bg-destructive text-destructive-foreground hover:opacity-90 active:opacity-85",
  },
  soft: {
    brand:
      "bg-accent text-accent-foreground hover:bg-accent/80 active:bg-accent/70",
    neutral: "bg-muted text-foreground hover:bg-muted/80 active:bg-muted/70",
    danger:
      "bg-destructive/10 text-destructive hover:bg-destructive/15 active:bg-destructive/20",
  },
  outline: {
    brand:
      "border border-border bg-transparent text-foreground hover:bg-accent/70 active:bg-accent/60",
    neutral:
      "border border-border bg-transparent text-foreground hover:bg-muted/70 active:bg-muted/60",
    danger:
      "border border-destructive/40 bg-transparent text-destructive hover:bg-destructive/10 active:bg-destructive/15",
  },
  ghost: {
    brand:
      "bg-transparent text-foreground hover:bg-accent/70 active:bg-accent/60",
    neutral:
      "bg-transparent text-foreground hover:bg-muted/70 active:bg-muted/60",
    danger:
      "bg-transparent text-destructive hover:bg-destructive/10 active:bg-destructive/15",
  },
  link: {
    brand:
      "bg-transparent text-foreground underline-offset-4 hover:underline active:opacity-80",
    neutral:
      "bg-transparent text-muted-foreground underline-offset-4 hover:underline active:opacity-80",
    danger:
      "bg-transparent text-destructive underline-offset-4 hover:underline active:opacity-80",
  },
};

export default function Button({
  variant = "solid",
  tone = "brand",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}): JSX.Element {
  return (
    <button
      className={cn(
        base,
        sizes[size],
        variants[variant][tone],
        isLoading && "cursor-wait",
        className
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span className="opacity-90">{children}</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
