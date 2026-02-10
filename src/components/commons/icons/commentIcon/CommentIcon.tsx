import { UI_SIZE, UISize } from "@/ui/size";
import { MessageCircle } from "lucide-react";
import { JSX } from "react";

export default function CommentIcon({
  count,
  size = "md",
}: {
  count: number;
  size?: UISize;
}): JSX.Element {
  const s = UI_SIZE[size];
  return (
    <div className="flex flex-col items-center gap-1 text-white/90">
      <MessageCircle className={s.icon} />
      <span className={s.meta}>{count}</span>
    </div>
  );
}
