import { useRouter } from "next/router";
import { useState } from "react";
import { ConfirmModal } from "@/components/commons/modal/ConfirmModal";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/commons/button/Button";
import {
  CommentActionsProvider,
  CommentInput,
  CommentList,
} from "@/components/commons/comment";
import {
  useCreateRecordComment,
  useDeleteRecordComment,
  useFetchRecordComments,
  useUpdateRecordComment,
} from "./hooks";

export default function RecordComments() {
  const router = useRouter();
  const recordId =
    router.isReady && typeof router.query.recordId === "string"
      ? router.query.recordId
      : undefined;

  // TODO: 로그인 유저 정보 받아오기
  const IsLoggedIn = true;
  const meId = "test";
  const writer = "test";
  const password = "test";

  const [modalOpen, setModalOpen] = useState(false);
  const [targetCommentId, setTargetCommentId] = useState<string | null>(null);

  const { data, fetchMore, refetch, loading } =
    useFetchRecordComments(recordId);

  const { onCreateRecordComment } = useCreateRecordComment({
    recordId,
    writer,
    password,
  });

  const { onUpdateRecordComment } = useUpdateRecordComment({ password });
  const { onDeleteRecordComment } = useDeleteRecordComment({ password });

  const comments = data?.fetchBoardComments ?? [];

  console.log(comments);

  const requestDeleteComment = (commentId: string) => {
    setTargetCommentId(commentId);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!targetCommentId) return;
    await onDeleteRecordComment(targetCommentId);
    setModalOpen(false);
    setTargetCommentId(null);
  };

  const onSubmit = (contents: string) => {
    if (!IsLoggedIn) return;
    onCreateRecordComment({ contents });
  };

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-lg font-bold">
          댓글 <span>{comments.length}</span>
        </h2>
        <CommentActionsProvider
          value={{
            // TODO:작성자 판별
            canEdit: (c) => meId && c.writer === meId,
            onSave: (commentId, next) => onUpdateRecordComment(commentId, next),
            onRequestDelete: (commentId) => requestDeleteComment(commentId),
          }}
        >
          <CommentList isLoading={loading} comments={comments} />
        </CommentActionsProvider>
        <CommentInput onSubmit={onSubmit} isLoggedIn={true} />
      </div>

      <ConfirmModal
        open={modalOpen}
        onOpenChange={(v) => {
          setModalOpen(v);
          if (!v) setTargetCommentId(null);
        }}
        title="댓글을 삭제할까요?"
        description="삭제한 댓글은 복구할 수 없어요."
        icon={Trash2}
        variant="destructive"
        footer={
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => setModalOpen(false)}
              className="flex-1"
            >
              취소
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="flex-1"
            >
              삭제
            </Button>
          </div>
        }
      />
    </>
  );
}
