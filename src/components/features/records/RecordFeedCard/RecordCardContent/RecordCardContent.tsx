import { IBoard } from "@/commons/graphql/generated/types";
import { UI_SIZE, UISize } from "@/ui/size";
import { JSX } from "react";

export default function RecordCardContent({
  board,
  size = "md",
}: {
  board: IBoard;
  size?: UISize;
}): JSX.Element {
  const s = UI_SIZE[size];

  const preview = (board.contents ?? "").replace(/\s+/g, " ").trim();
  const bodyPreview =
    preview.length > 120 ? preview.slice(0, 120) + "…" : preview;

  return (
    <div className="mb-2">
      <h3 className={`${s.title} font-bold ${s.titleClamp}`}>{board.title}</h3>
      <p className={`${s.body} text-white/80 ${s.bodyClamp}`}>{bodyPreview}</p>
    </div>
  );
}
