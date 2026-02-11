import { IconSize, UI_ICON } from "@/ui/iconSize";
import { cn } from "@/utils/cn";
import { MessageCircle } from "lucide-react";
import { JSX } from "react";

export default function CommentIcon({
  count,
  iconSize = "sm",
  direction = "col",
  className,
}: {
  count: number;
  iconSize?: IconSize;
  direction?: "col" | "row";
  className?: string;
}): JSX.Element {
  const s = UI_ICON[iconSize];

  const isRow = direction === "row";
  return (
    <div
      className={cn(
        "flex items-center transition-colors group/like",
        isRow ? `flex-row ${s.gapRow}` : `flex-col ${s.gapCol}`,
        className
      )}
    >
      <MessageCircle className={cn(s.icon, className)} />
      <span className={cn(s.text, className)}>{count}</span>
    </div>
  );
}
