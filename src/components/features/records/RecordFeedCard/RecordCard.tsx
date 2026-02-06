import { IBoard } from "@/commons/graphql/generated/types";
import { useRouter } from "next/router";
import { JSX } from "react";

type RecordFeedCardType = "image" | "quote";

export default function RecordFeedCard({
  board,
  type,
}: {
  board: IBoard;
  type: RecordFeedCardType;
}): JSX.Element {
  const router = useRouter();

  const preview = (board.contents ?? "").replace(/\s+/g, " ").trim();
  const bodyPreview =
    preview.length > 120 ? preview.slice(0, 120) + "…" : preview;

  const dateText = new Date(board.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const onClick = () => {
    void router.push(`/records/${board._id}`);
  };

  return (
    <article
      onClick={onClick}
      className="relative bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all overflow-hidden cursor-pointer group aspect-[3/4]"
    ></article>
  );
}
