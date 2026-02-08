import { JSX } from "react";
import Profile from "../Profile/Profile";
import { IBoard } from "@/commons/graphql/generated/types";
import CommentIcon from "@/components/commons/icons/commentIcon/CommentIcon";
import HeartIcon from "@/components/commons/icons/heartIcon/HeartIcon";

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
        <HeartIcon likeCount={board.likeCount} isLiked={false} />
      </div>
    </div>
  );
}
