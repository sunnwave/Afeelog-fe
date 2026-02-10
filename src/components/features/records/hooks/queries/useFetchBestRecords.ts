import { IQuery } from "@/commons/graphql/generated/types";
import { gql, useQuery } from "@apollo/client";

const FETCH_BEST_BOARDS = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      images
      user {
        name
        picture
      }
      createdAt
    }
  }
`;

export const useFetchBestBoards = () => {
  const { data, refetch } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARDS);

  console.log(data);

  return {
    data,
    refetch,
  };
};
