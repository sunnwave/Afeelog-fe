import { ICON_COLOR, ICON_SIZE, IconColor, IconSize } from "@/ui/iconSize";
import { cn } from "@/utils/cn";
import { Bookmark } from "lucide-react";
import { JSX, useState } from "react";

export default function BookMarkIcon({
  isSaved,
  iconSize = "lg",
  iconColor = "white",
  className,
}: {
  isSaved: boolean;
  iconSize?: IconSize;
  iconColor?: IconColor;
  className?: string;
}): JSX.Element {
  const s = ICON_SIZE[iconSize];
  const c = ICON_COLOR[iconColor];
  const [saved, setSaved] = useState(isSaved);

  const handleClickSave = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setSaved((prev) => !prev);
  };
  return (
    <button
      onClick={handleClickSave}
      className={`${c.icon} hover:text-white transition-all group/save`}
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
