import { JSX } from "react";
import { useRouter } from "next/router";
import { useFetchRecord } from "./hooks/queries/useFetchRecord";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/commons/button/Button";
import { useNavigation } from "@/shared/hooks/ui/useNavigation";
import RecordDetailContent from "./recordDetailContent/RecordDetailContent";
import ImageCarousel from "@/components/commons/imageCarousel/ImageCarousel";

export default function RecordDetail(): JSX.Element | null {
  const router = useRouter();
  const recordId =
    router.isReady && typeof router.query.recordId === "string"
      ? router.query.recordId
      : undefined;

  const { data, loading, error } = useFetchRecord(recordId); // ✅ 항상 호출
  const record = data?.fetchBoard;

  const { onClickNavigation } = useNavigation();

  if (!router.isReady) return null;
  if (!recordId) return null;
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러!</div>;

  const images = (record?.images ?? []).filter((v): v is string => !!v);
  const hasImages = images.length > 0;

  console.log(hasImages);

  if (!router.isReady) return <></>;
  if (!recordId) return <></>;

  return (
    <div className="min-h-screen bg-background flex flex-col px-3 py-3 lg:px-4 lg:py-4">
      {/* 뒤로가기 버튼 */}
      <div className="sticky top-0 z-50 py-2 bg-white/90">
        <Button
          variant="ghost"
          tone="neutral"
          className="p-0 justify-start"
          onClick={onClickNavigation("/records")}
        >
          <ArrowLeft className="w-4-h-4" />
          <span>목록으로</span>
        </Button>
      </div>
      {hasImages ? (
        <div className="grid grid-cols-2 gap-8">
          <ImageCarousel images={record?.images ?? []} />
          {record && <RecordDetailContent record={record} isWriter={false} />}
        </div>
      ) : (
        record && (
          <RecordDetailContent
            record={record}
            isWriter={false}
            className="w-full max-w-3xl mx-auto lg:px-4 lg:py-2"
          />
        )
      )}
    </div>
  );
}
