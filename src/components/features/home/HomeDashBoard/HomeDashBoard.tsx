import { accessTokenState } from "@/commons/stores";
import { JSX } from "react";
import { useRecoilValue } from "recoil";
import MyDashBoard from "./MyDashBoard";

export default function HomeDashBoard(): JSX.Element {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 space-y-10 md:space-y-12">
        {isLoggedIn && <MyDashBoard />}
      </div>
    </div>
  );
}
