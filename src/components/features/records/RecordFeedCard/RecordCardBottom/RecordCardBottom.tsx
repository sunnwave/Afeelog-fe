import { JSX } from "react";
import Profile from "../Profile/Profile";
import { IBoard } from "@/commons/graphql/generated/types";
import CommentIcon from "@/components/commons/icons/commentIcon/CommentIcon";
import HeartIcon from "@/components/commons/icons/heartIcon/HeartIcon";
import { UI_SIZE, UISize } from "@/ui/size";

export default function RecordCardBottom({
  board,
  size = "md",
}: {
  board: IBoard;
  size?: UISize;
}): JSX.Element {
  const s = UI_SIZE[size];
  return (
    <div className="flex items-center justify-between">
      <Profile board={board} size={size} />
      <div className={`flex items-center ${s.gap}`}>
        <CommentIcon count={board.likeCount ?? 0} size={size} />
        <HeartIcon likeCount={board.likeCount} isLiked={false} size={size} />
      </div>
    </div>
  );
}
