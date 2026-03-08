import { gql, useLazyQuery } from "@apollo/client";
import { IQuery } from "@/shared/graphql/generated/types";
import { useCallback } from "react";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      createdAt
    }
  }
`;

export function useFetchUserLoggedInLazy() {
  const [fetchUserLoggedIn] = useLazyQuery<Pick<IQuery, "fetchUserLoggedIn">>(
    FETCH_USER_LOGGED_IN,
    { fetchPolicy: "network-only" }
  );

  const run = useCallback(
    async (token?: string) => {
      const res = await fetchUserLoggedIn({
        context: {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        },
      });

      if (res.error) throw res.error;
      return res.data?.fetchUserLoggedIn ?? null;
    },
    [fetchUserLoggedIn]
  );

  return { run };
}
