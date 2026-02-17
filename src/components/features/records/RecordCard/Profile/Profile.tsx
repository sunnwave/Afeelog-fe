import { IBoard } from "@/commons/graphql/generated/types";
import Avatar from "@/components/commons/ui/avatar/Avatar";
import { CARD_UI_SIZE, UI_SIZE } from "@/ui/size";
import formatDate from "@/utils/formatDate";
import { JSX } from "react";

export default function Profile({
  board,
  size = "lg",
}: {
  board: IBoard;
  size?: CARD_UI_SIZE;
}): JSX.Element {
  const s = UI_SIZE[size];
  return (
    <div className={`flex items-center ${s.gap}`}>
      <Avatar user={board.user || undefined} size={s.avatar} type="outlined" />
      <div className={`flex flex-col text-white/90`}>
        <p className={`${s.meta} font-medium max-w-[140px] truncate`}>
          {board.user?.name || "익명"}
        </p>
        <p className={`${s.caption} text-white/70`}>
          {formatDate(board.createdAt)}
        </p>
      </div>
    </div>
  );
}
