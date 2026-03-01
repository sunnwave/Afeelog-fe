import { LucideIcon } from "lucide-react";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: LucideIcon;
  variant?: "default" | "destructive" | "success" | "primary";
  showCloseButton?: boolean;
  footer?: React.ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
};
