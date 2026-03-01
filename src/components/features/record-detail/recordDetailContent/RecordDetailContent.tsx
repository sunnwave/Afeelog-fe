import { IBoard } from "@/shared/graphql/generated/types";
import Profile from "@/components/commons/profile/Profile";
import { JSX } from "react";
import RecordDetailContentSubInfo from "./RecordDetailContentSubInfo";
import RecordDetailContentMain from "./RecordDetailContentMain";
import HeartIcon from "@/components/ui/icons/heartIcon/HeartIcon";
import BookMarkIcon from "@/components/ui/icons/bookmarkIcon/BookMarkIcon";
import RecordComments from "../../record-comments/RecordComments";
import WriterMenu from "@/components/commons/writerMenu/WriterMenu";
import { cn } from "@/shared/utils";

export default function RecordDetailContent({
  record,
  isWriter,
  className,
}: {
  record: IBoard;
  isWriter: boolean;
  className?: string;
}): JSX.Element {
  const onEdit = () => {};
  const onDelete = () => {};
  return (
    <div className={cn(className)}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold leading-tight">{record.title}</h1>

        {/* contents container */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          {/* contents top */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Profile record={record} tone="primary" size="sm" />
            {isWriter && (
              <WriterMenu onEditClick={onEdit} onDeleteClick={onDelete} />
            )}
          </div>
          {/* sub info */}
          <RecordDetailContentSubInfo record={record} />
          {/* main */}
          <RecordDetailContentMain record={record} />

          <div className="flex flex-row gap-6 items-center justify-end p-4">
            {/* TODO: isLiked, isSaved 값 설정하기 */}
            <HeartIcon
              isLiked={false}
              likeCount={record.likeCount ?? 0}
              direction="row"
              iconSize="md"
              iconColor="neutral"
            />
            <BookMarkIcon isSaved={false} iconColor="neutral" iconSize="md" />
          </div>
        </div>

        <div className="border-t border-border" />

        <RecordComments />
      </div>
    </div>
    // </>
  );
}
