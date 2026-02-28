import type { LucideIcon } from "lucide-react";

export type ActionOptionVariant = "default" | "destructive";

export interface ActionSheetOption {
  icon?: LucideIcon;
  label: string;
  description?: string;
  onClick: () => void;
  variant?: ActionOptionVariant;
}
