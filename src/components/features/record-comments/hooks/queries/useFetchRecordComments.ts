import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "@/shared/graphql/generated/types";
import { gql, useQuery } from "@apollo/client";

const FETCH_RECORD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      user {
        name
        _id
        email
        picture
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const useFetchRecordComments = (recordId?: string) => {
  return useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_RECORD_COMMENTS, {
    variables: {
      boardId: recordId ?? "",
      page: 1,
    },
    skip: !recordId,
  });
};
