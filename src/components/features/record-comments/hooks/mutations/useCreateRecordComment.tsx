import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "@/shared/graphql/generated/types";
import { gql, useMutation } from "@apollo/client";

const CREATE_RECORD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      user {
        name
        _id
        picture
      }
      createdAt
      updatedAt
      deletedAt
      __typename
    }
  }
`;

type CreateCommentForm = {
  contents: string;
};

interface ICreateRecordCommentReturn {
  onCreateRecordComment: (form: CreateCommentForm) => Promise<void>;
}

export const useCreateRecordComment = ({
  writer,
  password,
  recordId,
}: {
  writer: string;
  password: string;
  recordId?: string;
}): ICreateRecordCommentReturn => {
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_RECORD_COMMENT);

  const onCreateRecordComment = async (form: CreateCommentForm) => {
    if (!recordId) {
      alert("잘못된 게시글 ID입니다.");
      // await openAlertModal("잘못된 게시글 ID입니다.");
      return;
    }

    const contents = form.contents.trim();
    if (!contents) return;

    try {
      await createBoardComment({
        variables: {
          boardId: recordId,
          createBoardCommentInput: {
            // TODO: 로그인한 유저 정보 입력
            writer,
            password,
            contents,
            rating: 0,
          },
        },
        update(cache, { data }) {
          if (!data) return;

          const newComment = data.createBoardComment;

          cache.modify({
            fields: {
              fetchBoardComments(existing = []) {
                return [newComment, ...existing];
              },
            },
          });
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
        // await openAlertModal(err.message);
        console.error(err);
      }
    }
  };

  return {
    onCreateRecordComment,
  };
};
