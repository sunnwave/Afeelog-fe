import Header from "@/components/commons/layout/Header/Header";
import SearchBar from "@/components/commons/search/SearchBar";
import { JSX } from "react";

export default function RecordFeedPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl space-y-2 lg:space-y-4">
        <Header text="필로그" />
        <SearchBar variant="withDate" />
      </div>
    </div>
  );
}
