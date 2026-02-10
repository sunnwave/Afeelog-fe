import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/commons/graphql/generated/types";
import { ResponsiveLayout } from "@/components/commons/layout/ResponsiveLayout";
import { gql, useQuery } from "@apollo/client";
import { JSX, useState } from "react";
import RecordFeedCard from "./RecordFeedCard/RecordFeedCard";
import { Sparkles } from "lucide-react";
import ResponsiveGrid from "@/components/commons/layout/ResponsiveGrid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function RecordFeed(): JSX.Element {
  const [page, setPage] = useState(1);

  const { data, loading, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });

  const records = data?.fetchBoards ?? [];
  const isEmpty = !loading && records.length === 0;

  const onClickLoadMore = async () => {
    const nextPage = page + 1;

    await fetchMore({
      variables: { page: nextPage },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards) return prev;

        return {
          fetchBoards: [
            ...(prev.fetchBoards ?? []),
            ...fetchMoreResult.fetchBoards,
          ],
        };
      },
    });

    setPage(nextPage);
  };

  if (loading && records.length === 0) {
    return (
      <ResponsiveLayout contentType="app" className="py-4">
        <div className="p-3 text-muted-foreground">불러오는 중…</div>
      </ResponsiveLayout>
    );
  }

  if (isEmpty) {
    return (
      <ResponsiveLayout contentType="app" className="pt-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Sparkles className="w-8 h-8" />
          <span>첫 공연의 여운을 남겨보세요</span>
        </div>
      </ResponsiveLayout>
    );
  }

  return (
    <ResponsiveLayout contentType="app" className="py-4">
      <ResponsiveGrid colsMobile={1} colsTablet={2} colsDesktop={3} gap={2}>
        {records.map((board) => (
          <RecordFeedCard key={board._id} board={board} />
        ))}
      </ResponsiveGrid>

      <div className="mt-4 flex justify-center">
        <button
          onClick={onClickLoadMore}
          className="rounded-xl border border-border bg-background px-4 py-2 text-sm hover:bg-accent/60 transition-colors"
        >
          더 보기
        </button>
      </div>
    </ResponsiveLayout>
  );
}
