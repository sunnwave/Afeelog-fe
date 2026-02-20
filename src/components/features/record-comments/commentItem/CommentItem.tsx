import WriterMenu from "@/components/commons/writerMenu/WriterMenu";
import Avatar from "@/components/ui/avatar/Avatar";
import HeartIcon from "@/components/ui/icons/heartIcon/HeartIcon";
import { IBoardComment } from "@/shared/graphql/generated/types";
import { fromNow } from "@/utils/date";

export default function CommentItem({
  comment,
  isWriter,
}: {
  comment: IBoardComment;
  isWriter: boolean;
}) {
  // TODO: 작성자 판별
  // const isWriter=comment.user?._id

  const onEditClick = () => {};
  const onDeleteClick = () => {};

  return (
    <div className="w-full flex items-start gap-3">
      <Avatar
        user={comment.user ?? undefined}
        writer={comment.writer ?? undefined}
        size="md"
        type="filled"
      />
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <span className="font-medium text-sm">{comment.writer}</span>
            <span className="text-xs font-regular text-muted-foreground">
              {comment.updatedAt === comment.createdAt
                ? `${fromNow(comment.createdAt)} 작성됨`
                : `${fromNow(comment.updatedAt)} 수정됨`}
            </span>
          </div>
          <p className="w-full text-sm leading-relaxed text-foreground mb-2 whitespace-pre-wrap">
            {comment.contents}
          </p>
        </div>
        <div className="flex items-start gap-4.5 ml-3">
          <HeartIcon
            iconSize="xs"
            isLiked={false}
            likeCount={comment.rating}
            iconColor="neutral"
          />
          {isWriter && (
            <WriterMenu
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
