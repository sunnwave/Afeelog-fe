import WriterMenu from "@/components/commons/writerMenu/WriterMenu";
import Avatar from "@/components/ui/avatar/Avatar";
import { IBoardComment } from "@/shared/graphql/generated/types";
import { fromNow } from "@/utils/date";
import { useState } from "react";
import { CommentUpdate } from "../commentUpdate/CommentUpdate";

export default function CommentItem({
  comment,
  isWriter = true,
}: {
  comment: IBoardComment;
  isWriter?: boolean;
}) {
  // TODO: 작성자 판별
  // const isWriter=comment.user?._id
  // const isWriter = false;

  const [isUpdate, setIsUpdate] = useState(false);

  const onDeleteClick = () => {};
  const onSave = () => {};

  return (
    <div className="w-full flex items-start gap-3">
      <Avatar
        user={comment.user ?? undefined}
        writer={comment.writer ?? undefined}
        size="md"
        type="filled"
      />
      <div className="flex flex-1 justify-between">
        <div className="w-full flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-medium text-sm">{comment.writer}</span>
            <span className="text-xs font-regular text-muted-foreground">
              {comment.updatedAt === comment.createdAt
                ? `${fromNow(comment.createdAt)} 작성됨`
                : `${fromNow(comment.updatedAt)} 수정됨`}
            </span>
          </div>

          {isUpdate ? (
            <CommentUpdate
              initialContent={comment.contents}
              onSave={onSave}
              setIsUpdate={setIsUpdate}
            />
          ) : (
            <p className="w-full text-sm leading-relaxed text-foreground mb-2 whitespace-pre-wrap">
              {comment.contents}
            </p>
          )}
        </div>
        {isWriter && (
          <WriterMenu
            onEditClick={() => setIsUpdate(true)}
            onDeleteClick={onDeleteClick}
          />
        )}
      </div>
    </div>
  );
}
