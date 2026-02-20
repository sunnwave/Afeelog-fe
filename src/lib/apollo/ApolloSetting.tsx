import { useRecoilState } from "recoil";
import { accessTokenState } from "@/shared/stores";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";
import { JSX, useEffect, useState } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);
  const [client, setClient] = useState<ApolloClient<any>>();

  useEffect(() => {
    const uploadLink = createUploadLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
      headers: { Authorization: accessToken ? `Bearer ${accessToken}` : "" },
    });

    const newClient = new ApolloClient({
      link: ApolloLink.from([uploadLink]),
      cache: GLOBAL_STATE,
    });

    setClient(newClient);
  }, [accessToken]);

  if (!client) return <></>;

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
