import { JSX } from "react";

export default function MyDashBoard(): JSX.Element {
  return (
    <section className="bg-gradient-to-br from-accent via-accent/50 to-background rounded-2xl border border-primary/10 p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">
          이번 달 내 여운
        </h3>
        <p className="text-sm text-muted-foreground">
          이번 달은 아직 여운을 남기지 않으셨네요
          {/* {stats.thisMonth > 0
            ? `이번 달 기록 ${stats.thisMonth}개`
            : "이번 달은 아직 여운을 남기지 않으셨네요"} */}
        </p>
      </div>
    </section>
  );
}
