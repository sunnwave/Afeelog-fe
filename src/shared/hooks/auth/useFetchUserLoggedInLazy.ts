import { gql, useLazyQuery } from "@apollo/client";
import { IQuery } from "@/shared/graphql/generated/types";

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
  const [fetchUserLoggedIn, { data, loading, error }] = useLazyQuery<
    Pick<IQuery, "fetchUserLoggedIn">
  >(FETCH_USER_LOGGED_IN, {
    fetchPolicy: "network-only",
  });

  const run = async () => {
    const res = await fetchUserLoggedIn();
    if (res.error) throw res.error;
    return res.data?.fetchUserLoggedIn ?? null;
  };

  return { run, data, loading, error };
}
