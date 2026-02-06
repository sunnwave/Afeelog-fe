import { IBoard } from "@/commons/graphql/generated/types";
import Avatar from "@/components/commons/avatar/Avatar";
import formatDate from "@/utils/formatDate";
import { JSX } from "react";

export default function Profile({ board }: { board: IBoard }): JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <Avatar user={board.user || undefined} size="sm" type="outlined" />
      <div className="flex flex-col ">
        <p className="text-base text-white/90">{board.user?.name || "익명"}</p>
        <p className="text-sm text-white/70">{formatDate(board.createdAt)}</p>
      </div>
    </div>
  );
}
