import { IconSize, UI_ICON } from "@/ui/iconSize";
import { cn } from "@/utils/cn";
import { Heart } from "lucide-react";
import { JSX, useState } from "react";

export default function HeartIcon({
  isLiked,
  likeCount,
  iconSize = "sm",
  direction = "col",
  className,
}: {
  isLiked: boolean;
  likeCount: number;
  iconSize?: IconSize;
  direction?: "col" | "row";
  className?: string;
}): JSX.Element {
  const s = UI_ICON[iconSize];
  const [liked, setLiked] = useState(isLiked);
  const [likes, setLikes] = useState(likeCount ?? 0);

  const isRow = direction === "row";

  const handelClickLike = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked((prev) => !prev);
  };

  return (
    <button
      onClick={handelClickLike}
      className={cn(
        "flex items-center transition-colors group/like",
        isRow ? `flex-row ${s.gapRow}` : `flex-col ${s.gapCol}`,
        className
      )}
      aria-label="좋아요"
    >
      <Heart
        className={cn(
          s.icon,
          "transition-colors",
          liked
            ? "text-point-indigo"
            : "text-white/90 group-hover/like:text-point-indigo-light",
          className
        )}
        fill={liked ? "currentColor" : "none"}
      />
      <span
        className={cn(
          s.text,
          liked ? "text-point-indigo" : "text-white/60",
          className
        )}
      >
        {likes}
      </span>
    </button>
  );
}
