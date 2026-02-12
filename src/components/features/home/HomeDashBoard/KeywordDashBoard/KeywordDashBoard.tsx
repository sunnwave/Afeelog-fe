import { JSX, useEffect, useState } from "react";
import KeywordItem from "./KeywordItem";
import DashBoardHeader from "../DashBoardHeader";

type DashBoardType = "feelog" | "market";

export default function KeywordDashBoard({
  variant,
  keywords,
  intervalMs = 2000,
}: {
  variant: DashBoardType;
  keywords: Array<{ rank: number; name: string }>;
  intervalMs?: number;
  pauseOnHover?: boolean;
}): JSX.Element {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const len = keywords?.length ?? 0;
  const safeIndex = len > 0 ? highlightedIndex % len : 0;

  useEffect(() => {
    if (len <= 1) return;

    const timer = window.setInterval(() => {
      setHighlightedIndex((prev) => {
        const next = prev + 1;
        return next >= len ? 0 : next;
      });
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [len, intervalMs]);

  return (
    <div className="bg-gradient-to-br from-secondary via-accent/50 to-background rounded-2xl border border-border p-6 shadow-sm h-full flex flex-col">
      {/* Header */}
      <DashBoardHeader variant={variant} />

      <div className="space-y-2 flex-1">
        {keywords.map((keyword, index) => (
          <KeywordItem
            key={keyword.rank}
            keyword={keyword}
            active={safeIndex === index}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
