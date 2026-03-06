import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "@/shared/stores";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";
import { JSX, useEffect, useMemo } from "react";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "../getAccessToken";
import { useRouter } from "next/router";

const cache = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const loadable = useRecoilValueLoadable(restoreAccessTokenLoadable);

  const router = useRouter();

  useEffect(() => {
    void loadable.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, [loadable, setAccessToken]);

  const authLink = useMemo(
    () =>
      setContext((_, { headers }) => ({
        headers: {
          ...headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      })),
    [accessToken]
  );

  const errorLink = useMemo(
    () =>
      onError(({ graphQLErrors, operation, forward }) => {
        const isUnauthenticated = graphQLErrors?.some(
          (e) => e.extensions?.code === "UNAUTHENTICATED"
        );

        if (!isUnauthenticated) return;

        const redirectPath = router.asPath || "/";

        return fromPromise(
          getAccessToken().then((newAccessToken) => {
            if (!newAccessToken) {
              setAccessToken("");
              router.push(
                `/login?redirect=${encodeURIComponent(redirectPath)}`
              );
              return;
            }

            setAccessToken(newAccessToken);

            operation.setContext(({ headers = {} }) => ({
              headers: {
                ...headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }));
          })
        ).flatMap(() => forward(operation));
      }),
    [setAccessToken, router]
  );

  const uploadLink = useMemo(
    () =>
      createUploadLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
        credentials: "include",
      }),
    []
  );

  const client = useMemo(
    () =>
      new ApolloClient({
        link: ApolloLink.from([
          errorLink,
          authLink,
          uploadLink as unknown as ApolloLink,
        ]),
        cache,
      }),
    [authLink, errorLink, uploadLink]
  );

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
