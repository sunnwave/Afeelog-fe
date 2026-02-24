import { useRef } from "react";

export default function useSwipeToDismiss(onDismiss: () => void) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current == null || startY.current == null) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    const isHorizontal = Math.abs(dx) > Math.abs(dy);
    const threshold = 80;

    if (isHorizontal && Math.abs(dx) >= threshold) onDismiss();

    startX.current = null;
    startY.current = null;
  };

  return { onPointerDown, onPointerUp };
}
