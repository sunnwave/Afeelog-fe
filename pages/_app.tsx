import ApolloSetting from "@/lib/apollo/ApolloSetting";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Component {...pageProps} />
      </ApolloSetting>
    </RecoilRoot>
  );
}
