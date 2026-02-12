import { JSX } from "react";
import KeywordDashBoard from "../KeywordDashBoard/KeywordDashBoard";
import { MOCK_FEELLOG_KEYWORDS, MOCK_MARKET_KEYWORDS } from "../../constants";

export default function TwoColumnDashboard(): JSX.Element {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 gap-6">
      {/* TODO:mock데이터가 아닌 실제 키워드로 넘겨줘야 함 */}
      {MOCK_FEELLOG_KEYWORDS.length > 0 && (
        <section>
          <KeywordDashBoard keywords={MOCK_FEELLOG_KEYWORDS} variant="feelog" />
        </section>
      )}

      {MOCK_MARKET_KEYWORDS.length > 0 && (
        <section>
          <KeywordDashBoard keywords={MOCK_MARKET_KEYWORDS} variant="market" />
        </section>
      )}
    </div>
  );
}
