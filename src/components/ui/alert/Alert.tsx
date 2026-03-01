import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/shared/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        success:
          "text-success bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-success/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type AlertVariant = NonNullable<
  VariantProps<typeof alertVariants>["variant"]
>;

function Alert({
  className,
  variant,
  withBar = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & { withBar?: boolean }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), withBar && "pl-5", className)}
      {...props}
    >
      {withBar && (
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-1.5 rounded-l-2xl pointer-events-none",
            variant === "success" && "bg-success",
            variant === "destructive" && "bg-destructive",
            (!variant || variant === "default") && "bg-primary/40"
          )}
        />
      )}
      {props.children}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

function AlertIcon({
  variant = "default",
  className,
}: {
  variant?: AlertVariant;
  className?: string;
}) {
  if (variant === "success") return <CheckCircle2 className={className} />;
  if (variant === "destructive") return <AlertTriangle className={className} />;
  return <Info className={className} />;
}

export { Alert, AlertTitle, AlertDescription, AlertIcon };
