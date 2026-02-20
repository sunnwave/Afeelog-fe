import { IBoard } from "@/shared/graphql/generated/types";
import { Button } from "@/components/commons/button/Button";
import Profile from "@/components/commons/profile/Profile";
import { Edit } from "lucide-react";
import { JSX } from "react";
import RecordDetailContentSubInfo from "./RecordDetailContentSubInfo";
import RecordDetailContentMain from "./RecordDetailContentMain";
import HeartIcon from "@/components/ui/icons/heartIcon/HeartIcon";
import BookMarkIcon from "@/components/ui/icons/bookmarkIcon/BookMarkIcon";
import { cn } from "@/utils/cn";

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
      </div>
    </div>
    // </>
  );
}
