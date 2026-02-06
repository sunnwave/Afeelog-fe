import { JSX } from "react";
import Profile from "../Profile/Profile";
import CommentIcon from "@/components/commons/commentIcon/CommentIcon";
import HeardtIcon from "@/components/commons/heartIcon/HeartIcon";
import { IBoard } from "@/commons/graphql/generated/types";

export default function RecordCardBottom({
  board,
}: {
  board: IBoard;
}): JSX.Element {
  return (
    <div className="flex items-center justify-between">
      <Profile board={board} />
      <div className="flex items-center gap-4">
        <CommentIcon count={board.likeCount ?? 0} />
        <HeardtIcon likeCount={board.likeCount} isLiked={false} />
      </div>
    </div>
  );
}
