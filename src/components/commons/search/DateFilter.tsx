import { Calendar } from "lucide-react";
import { JSX } from "react";

export default function DateFilter(): JSX.Element {
  return (
    <div className="flex items-center gap-2 md:flex-shrink-0">
      <div className="relative">
        <input
          type="date"
          id="startDate"
          // value={startDate}
          // onChange={(e) => setStartDate(e.target.value)}
          placeholder="시작일"
          className="w-full md:w-[140px] h-10 pl-9 pr-3 rounded-lg border border-border bg-background text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <label
          htmlFor="startDate"
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-muted-foreground" />
        </label>
      </div>
      <span className="text-xs text-muted-foreground">~</span>
      <div className="relative">
        <input
          type="date"
          id="endDate"
          // value={endDate}
          // onChange={(e) => setEndDate(e.target.value)}
          placeholder="종료일"
          className="w-full md:w-[140px] h-10 pl-9 pr-3 rounded-lg border border-border bg-background text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <label
          htmlFor="endDate"
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-muted-foreground" />
        </label>
      </div>
    </div>
  );
}
