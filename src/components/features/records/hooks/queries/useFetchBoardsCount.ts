import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "@/commons/graphql/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $startDate: DateTime
    $endDate: DateTime
    $search: String
  ) {
    fetchBoardsCount(startDate: $startDate, endDate: $endDate, search: $search)
  }
`;

export const useFetchBoardsCount = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  return {
    data,
    refetch,
  };
};
