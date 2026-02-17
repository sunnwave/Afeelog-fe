import { accessTokenState } from "@/commons/stores";
import { JSX, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import MyDashBoard from "./MyDashBoard/MyDashBoard";
import TwoColumnDashboard from "./TwoColumnDashboard/TwoColumnDashboard";
import SingleDashBoard from "./SingleDashBoard/SingleDashBoard";

export default function HomeDashBoard(): JSX.Element {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  const [activeKeywordType, setActiveKeywordType] = useState<
    "feelog" | "market"
  >("feelog");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKeywordType((prev) => (prev === "feelog" ? "market" : "feelog"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleManualSwitch = (type: "feelog" | "market") => {
    setActiveKeywordType(type);
  };

  return (
    // <div className="min-h-screen bg-background">
    <>
      {/* <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 space-y-10 md:space-y-12">
        {isLoggedIn && <MyDashBoard />}
        </div> */}
      {/* 모바일&태블릿 */}
      <SingleDashBoard
        activeKeywordType={activeKeywordType}
        handleManualSwitch={handleManualSwitch}
      />

      {/* 데스트탑 */}
      <TwoColumnDashboard />
    </>
    // </div>
  );
}
