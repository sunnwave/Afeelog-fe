import { JSX } from "react";
import HomeDashBoard from "./HomeDashBoard/HomeDashBoard";
import BestRecords from "./BestRecords";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/commons/stores";
import MyDashBoard from "./HomeDashBoard/MyDashBoard/MyDashBoard";

export default function HomePage(): JSX.Element {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden px-4 py-4 lg:px-6 lg:pb-8">
      <div className="mx-auto max-w-5xl space-y-4 lg:space-y-4">
        {isLoggedIn && <MyDashBoard />}
        <HomeDashBoard />
        <BestRecords />
      </div>
    </div>
  );
}
