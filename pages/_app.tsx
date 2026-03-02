import Layout from "@/components/commons/layout/Layout";
import ConfirmModalHost from "@/components/commons/modal/ConfirmModalHost";
import { ToastProvider } from "@/components/commons/toast/ToastProvider";
import ApolloSetting from "@/lib/apollo/ApolloSetting";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ToastProvider>
        <ApolloSetting>
          <Layout>
            <Component {...pageProps} />
            <ConfirmModalHost />
          </Layout>
        </ApolloSetting>
      </ToastProvider>
    </RecoilRoot>
  );
}
