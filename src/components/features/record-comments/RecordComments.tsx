import { useRouter } from "next/router";
import { useFetchRecordComments } from "./hooks/queries/useFetchRecordComments";

export default function RecordComments() {
  const router = useRouter();
  const recordId =
    router.isReady && typeof router.query.recordId === "string"
      ? router.query.recordId
      : undefined;

  const { data, fetchMore, refetch, loading } =
    useFetchRecordComments(recordId);
  const comments = data?.fetchBoardComments ?? [];

  console.log(comments);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">
        댓글 <span>{comments.length}</span>
      </h2>
    </div>
  );
}
