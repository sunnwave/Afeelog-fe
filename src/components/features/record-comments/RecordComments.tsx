import { useRouter } from "next/router";
import { useFetchRecordComments } from "./hooks/queries/useFetchRecordComments";
import CommmentList from "../../commons/comment/commentList/CommentList";
import CommentInput from "@/components/commons/comment/commentInput/CommentInput";
import { useCreateRecordComment } from "./hooks/mutations/useCreateRecordComment";
import { useBreakpoint } from "@/shared/hooks/ui/useBreakpoint";

export default function RecordComments() {
  const router = useRouter();
  const recordId =
    router.isReady && typeof router.query.recordId === "string"
      ? router.query.recordId
      : undefined;

  // TODO: 로그인 유저 정보 받아오기
  const writer = "test";
  const password = "test";

  const { data, fetchMore, refetch, loading } =
    useFetchRecordComments(recordId);

  const { onCreateRecordComment } = useCreateRecordComment({
    recordId,
    writer,
    password,
  });

  const bp = useBreakpoint();
  const isFixed = bp !== "desktop";

  const comments = data?.fetchBoardComments ?? [];

  console.log(comments);

  const onSubmit = (contents: string) => {
    onCreateRecordComment({ contents });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">
        댓글 <span>{comments.length}</span>
      </h2>
      <CommmentList isLoading={loading} comments={comments} />
      <CommentInput onSubmit={onSubmit} isLoggedIn={true} isFixed={isFixed} />
    </div>
  );
}
