import { IBoard } from "@/commons/graphql/generated/types";
import { JSX } from "react";

type RecordCardContentVariant = "poster" | "quote";

export default function RecordCardContent({
  board,
  variant,
}: {
  board: IBoard;
  variant: RecordCardContentVariant;
}): JSX.Element {
  const preview = (board.contents ?? "").replace(/\s+/g, " ").trim();
  const bodyPreview =
    preview.length > 120 ? preview.slice(0, 120) + "…" : preview;

  if (variant === "poster") {
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
  } else {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        <div className="text-center">
          <div className="text-6xl text-justify leading-none text-white/40 font-serif select-none">
            "
          </div>
          <blockquote className="text-lg font-semibold text-white leading-relaxed line-clamp-4 mb-4 drop-shadow-lg">
            {bodyPreview}
          </blockquote>
          <div className="text-6xl justify-self-end leading-none text-white/40 font-serif select-none">
            "
          </div>
          <h3 className="text-base font-bold text-white/90 line-clamp-2 drop-shadow-lg">
            {board.title}
          </h3>
        </div>
      </div>
    );
  }
}
