import { ToastItem } from "./types";
import ToastCard from "./ToastCard";

export function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}) {
  return (
    // ✅ bottom-right 고정, 아래에서 위로 쌓이기
    <div className="fixed top-4 right-4 z-[200] flex w-[340px] flex-col gap-2">
      {toasts.map((t) => (
        <ToastCard key={t.id} toast={t} onDismiss={() => onDismiss(t.id)} />
      ))}
    </div>
  );
}
