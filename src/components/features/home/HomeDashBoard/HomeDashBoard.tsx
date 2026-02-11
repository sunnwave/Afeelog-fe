import { accessTokenState } from "@/commons/stores";
import { JSX } from "react";
import { useRecoilValue } from "recoil";
import MyDashBoard from "./MyDashBoard/MyDashBoard";
import { MOCK_FEELLOG_KEYWORDS, MOCK_MARKET_KEYWORDS } from "../constants";
import KeywordDashBoard from "./KeywordDashBoard/KeywordDashBoard";

export default function HomeDashBoard(): JSX.Element {
  const accessToken = useRecoilValue(accessTokenState);
  const isLoggedIn = !!accessToken;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 space-y-10 md:space-y-12">
        {isLoggedIn && <MyDashBoard />}
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 gap-6">
        {MOCK_FEELLOG_KEYWORDS.length > 0 && (
          <section>
            <KeywordDashBoard
              keywords={MOCK_FEELLOG_KEYWORDS}
              variant="feelog"
            />
          </section>
        )}

        {MOCK_MARKET_KEYWORDS.length > 0 && (
          <section>
            <KeywordDashBoard
              keywords={MOCK_MARKET_KEYWORDS}
              variant="market"
            />
          </section>
        )}
      </div>
    </div>
  );
}
