import { ReactNode } from "react";

export interface ActionSheetOption {
  icon?: ReactNode;
  label: string;
  description?: string;
  onClick: () => void;
  variant?: "default" | "primary" | "danger";
}
