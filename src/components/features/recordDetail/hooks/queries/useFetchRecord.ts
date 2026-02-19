import {
  IQuery,
  IQueryFetchBoardArgs,
} from "@/commons/graphql/generated/types";
import { gql, useQuery } from "@apollo/client";

const FETCH_RECORD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      likeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;

export const useFetchRecord = (recorId: string) => {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_RECORD,
    {
      variables: recorId ? { boardId: recorId } : undefined,
      skip: !recorId,
    }
  );

  return data;
};
