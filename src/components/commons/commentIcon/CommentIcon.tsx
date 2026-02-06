import { MessageCircle } from "lucide-react";
import { JSX } from "react";

export default function CommentIcon({ count }: { count: number }): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-1">
      <MessageCircle className="h-[22.5px] w-[22.5px] text-white/90" />
      <span className="text-sm text-white/90">{count}</span>
    </div>
  );
}
