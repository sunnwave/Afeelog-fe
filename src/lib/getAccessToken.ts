import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = /* GraphQL */ `
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

type RestoreAccessTokenResponse = {
  restoreAccessToken: {
    accessToken: string;
  };
};

// 동시 refresh 방지용(싱글플라이트)
let refreshingPromise: Promise<string | null> | null = null;

export function getAccessToken(): Promise<string | null> {
  if (refreshingPromise) return refreshingPromise;

  refreshingPromise = (async () => {
    const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;
    if (!uri) {
      console.error("NEXT_PUBLIC_GRAPHQL_URI is not set");
      return null;
    }

    try {
      const graphqlClient = new GraphQLClient(uri, {
        credentials: "include",
      });

      const result = await graphqlClient.request<RestoreAccessTokenResponse>(
        RESTORE_ACCESS_TOKEN
      );

      const token = result?.restoreAccessToken?.accessToken ?? null;
      return token;
    } catch (e) {
      // console.error("restoreAccessToken failed:", e);
      return null;
    } finally {
      // 다음 refresh를 위해 초기화
      refreshingPromise = null;
    }
  })();

  return refreshingPromise;
}
