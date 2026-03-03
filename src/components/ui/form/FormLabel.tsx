import { cn } from "@/shared/utils";

export function FormLabel({
  required = false,
  className,
  children,
  ...props
}: {
  required?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={cn(` text-sm font-medium text-foreground`, className)}
    >
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}

export default FormLabel;
