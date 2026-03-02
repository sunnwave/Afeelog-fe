import { useRouter } from "next/router";
import { useState } from "react";
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
import { useConfirmPreset } from "@/shared/hooks/ui/useConfirmPreset";

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

  const { openConfirmPreset } = useConfirmPreset();

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
    // setTargetCommentId(commentId);
    openConfirmPreset("deleteComment", {
      onConfirm: async () => {
        await onDeleteRecordComment(commentId);
      },
    });
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
    </>
  );
}
