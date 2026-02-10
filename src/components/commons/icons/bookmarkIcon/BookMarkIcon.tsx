import { UI_SIZE, UISize } from "@/ui/size";
import { Bookmark } from "lucide-react";
import { JSX, useState } from "react";

export default function BookMarkIcon({
  isSaved,
  size = "md",
}: {
  isSaved: boolean;
  size?: UISize;
}): JSX.Element {
  const s = UI_SIZE[size];
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
        className={`${s.bookmarkIcon} transition-colors ${
          saved
            ? "fill-point-emerald text-point-emerald"
            : "group-hover/save:text-point-emerald-light"
        }`}
        fill={saved ? "currentColor" : "none"}
      />
    </button>
  );
}
