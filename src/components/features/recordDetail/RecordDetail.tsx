import { JSX } from "react";
import { useRouter } from "next/router";
import { useFetchRecord } from "./hooks/queries/useFetchRecord";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/commons/button/Button";
import { useNavigation } from "@/commons/hooks/ui/useNavigation";

export default function RecordDetail(): JSX.Element {
  const router = useRouter();
  const recordId =
    router.isReady && typeof router.query.recordId === "string"
      ? router.query.recordId
      : undefined;

  if (!router.isReady) return <></>;
  if (!recordId) return <></>;

  const data = useFetchRecord(recordId); // ✅ 항상 호출
  console.log(data);

  const { onClickNavigation } = useNavigation();

  return (
    <div className="min-h-screen bg-background px-3 py-3 lg:px-4 lg:py-4">
      {/* 뒤로가기 버튼 */}
      <div className="sticky top-0 z-50 ">
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
    </div>
  );
}
