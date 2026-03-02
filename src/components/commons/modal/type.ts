import { ConfirmVariant } from "@/shared/stores";
import { LucideIcon } from "lucide-react";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title?: string;
  description?: string;

  icon?: LucideIcon;
  variant?: ConfirmVariant;

  confirmText?: string;
  cancelText?: string;

  closeOnOverlayClick?: boolean;

  loading?: boolean;

  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
  onClose?: () => void;

  className?: string;
};
