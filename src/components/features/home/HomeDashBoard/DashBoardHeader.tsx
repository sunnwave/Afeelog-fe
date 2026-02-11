import { TrendingUp } from "lucide-react";
import { JSX } from "react";

type DashBoardType = "feelog" | "market" | "my";

const variants: Record<
  DashBoardType,
  { icon?: string; header: string; subHeader: string }
> = {
  feelog: {
    icon: "text-point-indigo",
    header: "인기 필로그 키워드",
    subHeader: "최근 가장 많이 언급된 필로그 키워드",
  },
  market: {
    icon: "text-point-emerald",
    header: "인기 마켓 키워드",
    subHeader: "최근 가장 많이 언급된 마켓 키워드",
  },
  my: {
    header: "이번 달 내 활동",
    subHeader: "이번 달 내 에필로그 활동 내역을 살펴볼 수 있어요",
  },
};

export default function DashBoardHeader({
  variant,
}: {
  variant: DashBoardType;
}): JSX.Element {
  const v = variants[variant];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-1">
        {variant !== "my" && <TrendingUp className={`w-5 h-5 ${v.icon}`} />}
        <h3 className="text-lg font-bold text-foreground">{v.header}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{v.subHeader}</p>
    </div>
  );
}
