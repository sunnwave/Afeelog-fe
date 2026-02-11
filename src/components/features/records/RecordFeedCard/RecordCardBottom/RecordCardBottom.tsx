import { JSX } from "react";
import Profile from "../Profile/Profile";
import { IBoard } from "@/commons/graphql/generated/types";
import CommentIcon from "@/components/commons/ui/icons/commentIcon/CommentIcon";
import HeartIcon from "@/components/commons/ui/icons/heartIcon/HeartIcon";
import { CARD_UI_SIZE, UI_SIZE } from "@/ui/size";

export default function RecordCardBottom({
  board,
  size = "lg",
}: {
  board: IBoard;
  size?: CARD_UI_SIZE;
}): JSX.Element {
  const s = UI_SIZE[size];
  return (
    <div className="flex items-center justify-between">
      <Profile board={board} size={size} />
      <div className={`flex items-center ${s.gap}`}>
        {/* TODO: commentcount로 변경해야 함 */}
        <CommentIcon count={board.likeCount ?? 0} iconSize={size} />
        <HeartIcon
          likeCount={board.likeCount}
          isLiked={false}
          iconSize={size}
        />
      </div>
    </div>
  );
}
