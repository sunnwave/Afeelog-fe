import { Search, X } from "lucide-react";
import { JSX, useState } from "react";
import DateFilter from "./DateFilter";

type SearchVariant = "withDate" | "onlySearch";

export default function SearchBar({
  variant,
}: {
  variant: SearchVariant;
}): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row gap-2">
      <div className="relative flex items-center">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="제목, 작성자, 내용 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl text-sm border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>
      {/* Date Input */}
      {variant === "withDate" && <DateFilter />}
    </div>
  );
}
