import { IconSize, UI_ICON } from "@/ui/iconSize";
import { cn } from "@/utils/cn";
import { Bookmark } from "lucide-react";
import { JSX, useState } from "react";

export default function BookMarkIcon({
  isSaved,
  iconSize = "lg",
  className,
}: {
  isSaved: boolean;
  iconSize?: IconSize;
  className?: string;
}): JSX.Element {
  const s = UI_ICON[iconSize];
  const [saved, setSaved] = useState(isSaved);

  const handleClickSave = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setSaved((prev) => !prev);
  };
  return (
    <button
      onClick={handleClickSave}
      className=" text-white/90 hover:text-white transition-all group/save"
      aria-label="저장"
    >
      <Bookmark
        className={cn(
          s.icon,
          "transition-colors",
          saved
            ? "fill-point-emerald text-point-emerald"
            : "group-hover/save:text-point-emerald-light",
          className
        )}
        fill={saved ? "currentColor" : "none"}
      />
    </button>
  );
}
