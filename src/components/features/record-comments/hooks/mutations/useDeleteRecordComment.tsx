// src/components/features/boardCommentList/hooks/mutations/useDeleteBoardComment.ts
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "@/shared/graphql/generated/types";
import { gql, useMutation } from "@apollo/client";

const DELETE_RECORD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const useDeleteRecordComment = ({ password }: { password: string }) => {
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_RECORD_COMMENT);

  const onDeleteRecordComment = async (commentId: string) => {
    // 1) 모달 열림 + callback 등록
    try {
      await deleteBoardComment({
        variables: { password, boardCommentId: commentId },
        update(cache) {
          cache.modify({
            fields: {
              fetchBoardComments(existing = [], { readField }) {
                return existing.filter(
                  (ref: any) => readField("_id", ref) !== commentId
                );
              },
            },
          });
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(err);
        console.error(err);
      }
    }
  };

  return {
    onDeleteRecordComment,
  };
};
