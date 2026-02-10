import { Heart } from "lucide-react";
import { JSX, useState } from "react";

export default function HeartIcon({
  isLiked,
  likeCount,
}: {
  isLiked: boolean;
  likeCount: number;
}): JSX.Element {
  const [liked, setLiked] = useState(isLiked);
  const [likes, setLikes] = useState(likeCount ?? 0);

  const handelClickLike = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked((prev) => !prev);
  };

  return (
    <button
      onClick={handelClickLike}
      className="flex flex-col items-center gap-1 transition-colors group/like"
    >
      <Heart
        className={`h-5 w-5 transition-colors ${
          liked
            ? "text-point-indigo"
            : "text-white/90 group-hover/like:text-point-indigo-light"
        }`}
        fill={liked ? "currentColor" : "none"}
      />

      <span
        className={`text-sm ${liked ? "text-point-indigo" : "text-white/60"}`}
      >
        {likes}
      </span>
    </button>
  );
}
