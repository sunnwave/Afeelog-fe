import * as React from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "@/shared/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
  error?: FieldError;
  /** input 오른쪽에 아이콘/버튼 넣고 싶을 때 */
  rightSlot?: React.ReactNode;
};

export function TextField({
  id,
  name,
  error,
  rightSlot,
  className,
  ...props
}: Props) {
  const inputId = id ?? (typeof name === "string" ? name : undefined);

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        className={cn(
          `
          w-full h-11 px-4 rounded-xl border bg-background
          transition-all duration-200
          placeholder:text-muted-foreground/50
          focus:outline-none focus:ring-2 focus:ring-primary/50
          ${
            error
              ? "border-red-500 focus:ring-red-500/50"
              : "border-border hover:border-primary/50"
          }
        `,
          className
        )}
        {...props}
      />

      {rightSlot ? (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {rightSlot}
        </div>
      ) : null}
    </div>
  );
}

export default TextField;
