import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { ToastApi, ToastItem, ToastOptions } from "./types";
import { ToastViewport } from "./ToastViewport";

const ToastContext = createContext<ToastApi | null>(null);

const MAX_TOASTS = 3;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Record<string, number>>({});

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current[id];
    if (timer) window.clearTimeout(timer);
    delete timersRef.current[id];
  }, []);

  const clear = useCallback(() => {
    setToasts([]);
    Object.values(timersRef.current).forEach((t) => window.clearTimeout(t));
    timersRef.current = {};
  }, []);

  const show = useCallback(
    (opts: ToastOptions) => {
      const id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : String(Date.now() + Math.random());

      const item: ToastItem = {
        id,
        title: opts.title,
        description: opts.description,
        variant: opts.variant ?? "default",
        durationMs: opts.durationMs ?? 3000,
      };

      setToasts((prev) => [item, ...prev].slice(0, MAX_TOASTS));

      const timer = window.setTimeout(() => dismiss(id), item.durationMs);
      timersRef.current[id] = timer;
    },
    [dismiss]
  );

  const api = useMemo<ToastApi>(
    () => ({
      show,
      dismiss,
      clear,
      success: (description, title = "완료") =>
        show({ variant: "success", title, description, durationMs: 2000 }),
      error: (description, title = "오류") =>
        show({ variant: "destructive", title, description, durationMs: 4000 }),
      info: (description, title = "안내") =>
        show({ variant: "default", title, description }),
    }),
    [show, dismiss, clear]
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
