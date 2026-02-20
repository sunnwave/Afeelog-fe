import { accessTokenState } from "@/shared/stores";
import { JSX, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
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
    <>
      {/* 모바일&태블릿 */}
      <SingleDashBoard
        activeKeywordType={activeKeywordType}
        handleManualSwitch={handleManualSwitch}
      />

      {/* 데스트탑 */}
      <TwoColumnDashboard />
    </>
  );
}
