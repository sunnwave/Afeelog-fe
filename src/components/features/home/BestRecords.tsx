import { JSX } from "react";
import { useFetchBestRecords } from "./hooks/queries/useFetchBestRecords";
import RecordCard from "../records/RecordCard/RecordCard";
import { Button } from "@/components/commons/button/Button";
import { ChevronRight, Flame } from "lucide-react";
import { useNavigation } from "@/shared/hooks/ui/useNavigation";

export default function BestRecords(): JSX.Element {
  const { data } = useFetchBestRecords();
  const { onClickNavigation } = useNavigation();

  return (
    <div className="w-full overflow-x-hidden flex flex-col space-y-6">
      <div className="flex flex-row ">
        <h2 className="w-full text-2xl font-bold flex flex-row items-center justify-start gap-1.5">
          <Flame className="w-5 h-5" />
          <span>이번 주 베스트 필로그</span>
        </h2>
        <Button
          variant="ghost"
          tone="neutral"
          className="justify-end max-w-fit hover:bg-background"
          onClick={onClickNavigation("/records")}
        >
          더보기
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="w-full max-w-full min-w-0 overflow-x-auto">
        <div className="flex flex-nowrap gap-5">
          {data?.fetchBoardsOfTheBest.map((board) => (
            <div key={board._id} className="shrink-0 w-[220px] md:w-[260px]">
              <div className="w-full aspect-[3/4]">
                <RecordCard board={board} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
