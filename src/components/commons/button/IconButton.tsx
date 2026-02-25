import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: ReactNode;
};

export default function IconButton({
  className,
  children,
  type,
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type ?? "button"}
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
