import { IBoard } from "@/commons/graphql/generated/types";
import BookMarkIcon from "@/components/commons/bookmarkIcon/BookMarkIcon";
import { getImageUrl } from "@/utils/getImage";
import Image from "next/image";
import { useRouter } from "next/router";
import { JSX } from "react";
import RecordCardBottom from "./RecordCardBottom/RecordCardBottom";
import { pickQuoteGradient } from "@/utils/pickQuoteGradient";
import RecordCardContent from "./RecordCardContent/RecordCardContent";

// type RecordFeedCardType = "poster" | "quote";

export default function RecordFeedCard({
  board,
}: {
  board: IBoard;
}): JSX.Element {
  // const router = useRouter();

  const hasImages = !!(board.images && board.images.length > 0);
  const key = board._id || "default";
  const g = pickQuoteGradient(key);

  // const onClick = () => {
  //   void router.push(`/records/${board._id}`);
  // };

  return (
    <article
      // onClick={onClick}
      className="relative bg-card rounded-2xl p-4.5 hover:border-primary/50 hover:shadow-xl transition-all overflow-hidden cursor-pointer group aspect-[3/4]"
    >
      {/* poster type */}
      {hasImages ? (
        <>
          <Image
            src={getImageUrl(board.images![0])}
            alt={board.title}
            fill
            className="absolute inset-0 z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 z-20">
            <BookMarkIcon isSaved={false} />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white z-10">
            <RecordCardContent board={board} variant="poster" />
            <RecordCardBottom board={board} />
          </div>
        </>
      ) : (
        <>
          <div className={`absolute inset-0 ${g.bg}`}>
            <div
              className={`absolute -top-24 -right-24 w-72 h-72 ${g.blobTop} rounded-full blur-3xl`}
            />
            <div
              className={`absolute -bottom-24 -left-24 w-72 h-72 ${g.blobBottom} rounded-full blur-3xl`}
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 z-20">
            <BookMarkIcon isSaved={false} />
          </div>
          <RecordCardContent board={board} variant="quote" />
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <RecordCardBottom board={board} />
          </div>
        </>
      )}

      {/* Gradient Overlay */}
    </article>
  );
}
