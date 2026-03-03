import type { FieldError } from "react-hook-form";

export function FieldError({ error }: { error?: FieldError }) {
  if (!error?.message) return null;
  return <p className="text-xs text-destructive mt-1">{error.message}</p>;
}

export default FieldError;
