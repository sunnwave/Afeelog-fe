import { Bookmark } from "lucide-react";
import { JSX, useState } from "react";

export default function BookMarkIcon({
  isSaved,
}: {
  isSaved: boolean;
}): JSX.Element {
  const [saved, setSaved] = useState(isSaved);

  const handleClickSave = (): void => {
    setSaved((prev) => !prev);
  };
  return (
    <button
      onClick={handleClickSave}
      className=" text-white/90 hover:text-white transition-all group/save"
      aria-label="저장"
    >
      <Bookmark
        className={`w-5 h-5 transition-colors ${
          saved
            ? "fill-point-emerald text-point-emerald"
            : "group-hover/save:text-point-emerald-light"
        }`}
        fill={saved ? "currentColor" : "none"}
      />
    </button>
  );
}
