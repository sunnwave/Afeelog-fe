import { IBoard } from "@/commons/graphql/generated/types";
import { JSX } from "react";

export default function RecordCardContent({
  board,
}: {
  board: IBoard;
}): JSX.Element {
  const preview = (board.contents ?? "").replace(/\s+/g, " ").trim();
  const bodyPreview =
    preview.length > 120 ? preview.slice(0, 120) + "…" : preview;

  return (
    <>
      <h3 className="font-bold text-xl mb-2 line-clamp-2 drop-shadow-lg">
        {board.title}
      </h3>
      <p className="text-sm text-white/80 mb-4 line-clamp-2 leading-relaxed">
        {bodyPreview}
      </p>
    </>
  );
}
