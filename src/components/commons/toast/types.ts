export type ToastVariant = "default" | "success" | "destructive";

export type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  variant: ToastVariant;
  durationMs: number;
};

export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  durationMs?: number;
};

export type ToastApi = {
  show: (opts: ToastOptions) => void;
  success: (description: string, title?: string) => void;
  error: (description: string, title?: string) => void;
  info: (description: string, title?: string) => void;
  dismiss: (id: string) => void;
  clear: () => void;
};
