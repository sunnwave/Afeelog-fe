import { IBoard } from "@/commons/graphql/generated/types";
import { Button } from "@/components/commons/button/Button";
import Profile from "@/components/commons/profile/Profile";
import { Edit } from "lucide-react";
import { JSX } from "react";
import RecordDetailContentSubInfo from "./RecordDetailContentSubInfo";
import RecordDetailContentMain from "./RecordDetailContentMain";
import HeartIcon from "@/components/commons/ui/icons/heartIcon/HeartIcon";
import BookMarkIcon from "@/components/commons/ui/icons/bookmarkIcon/BookMarkIcon";

export default function RecordDetailContent({
  record,
  isWriter,
}: {
  record: IBoard;
  isWriter: boolean;
}): JSX.Element {
  const onEdit = () => {};
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      {/* contents top */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Profile record={record} tone="primary" size="sm" />
        {isWriter && (
          <Button
            tone="neutral"
            size="xs"
            variant="outlined"
            onClick={onEdit}
            className="max-w-fit"
          >
            <Edit className="w-4 h-4" />
            <span>수정</span>
          </Button>
        )}
      </div>
      {/* sub info */}
      <RecordDetailContentSubInfo record={record} />
      {/* main */}
      <RecordDetailContentMain record={record} />

      {/*  */}
      <div className="flex flex-row gap-6 items-center justify-end p-4">
        {/* TODO: isLiked, isSaved 값 설정하기 */}
        <HeartIcon
          isLiked={false}
          likeCount={record.likeCount}
          direction="row"
          iconSize="md"
          iconColor="neutral"
        />
        <BookMarkIcon isSaved={false} iconColor="neutral" iconSize="md" />
      </div>
    </div>
  );
}
