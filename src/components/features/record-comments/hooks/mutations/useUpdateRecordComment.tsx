import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "@/shared/graphql/generated/types";
import { gql, useMutation } from "@apollo/client";

const UPDATE_RECORD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
      user {
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

type UpdateCommentForm = {
  commentId: string;
  newContents: string;
};

interface IUpdateRecordCommentReturn {
  onUpdateRecordComment: (
    commentId: string,
    newContents: string
  ) => Promise<void>;
}

export const useUpdateRecordComment = ({
  password,
}: {
  password: string;
}): IUpdateRecordCommentReturn => {
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_RECORD_COMMENT);

  const onUpdateRecordComment = async (
    commentId: string,
    newContents: string
  ) => {
    const contents = newContents.trim();
    if (!contents) return;

    try {
      await updateBoardComment({
        variables: {
          boardCommentId: commentId,
          // TODO: 유저 비밀번호 입력
          password,
          updateBoardCommentInput: {
            contents,
          },
        },
      });
      await alert("댓글이 수정되었습니다");
      // await openAlertModal("댓글이 수정되었습니다.");
      // setIsUpdate?.(false);
    } catch (err) {
      if (err instanceof Error) {
        alert(err);
        console.error(err);
      }
    }
  };

  return {
    onUpdateRecordComment,
  };
};
