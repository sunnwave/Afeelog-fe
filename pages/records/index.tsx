// import {
//   IQuery,
//   IQueryFetchBoardsArgs,
// } from "@/commons/graphql/generated/types";
// import RecordFeedCard from "@/components/features/records/RecordFeedCard/RecordFeedCard";
// import { gql, useQuery } from "@apollo/client";
// import { JSX, useState } from "react";

import RecordFeedPage from "@/components/features/records/RecordFeedPage";
import { JSX } from "react";

// const FETCH_BOARDS = gql`
//   query fechBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//       createdAt
//     }
//   }
// `;

// export default function RecordFeedPage(): JSX.Element {
//   const [page, setPage] = useState(1);

//   const { data, loading, fetchMore } = useQuery<
//     Pick<IQuery, "fetchBoards">,
//     IQueryFetchBoardsArgs
//   >(FETCH_BOARDS, { variables: { page: 1 } });

//   const records = data?.fetchBoards ?? [];

//   console.log(records);

//   const onClickLoadMore = async () => {
//     const nextPage = page + 1;

//     await fetchMore({
//       variables: { page: nextPage },
//       updateQuery: (prev, { fetchMoreResult }) => {
//         if (!fetchMoreResult?.fetchBoards) return prev;

//         return {
//           fetchBoards: [
//             ...(prev.fetchBoards ?? []),
//             ...fetchMoreResult.fetchBoards,
//           ],
//         };
//       },
//     });

//     setPage(nextPage);
//   };

//   return (
//     <main style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
//       <header
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 12,
//           marginBottom: 16,
//         }}
//       >
//         <h1 style={{ fontSize: 22, margin: 0 }}>기록</h1>
//         <span style={{ color: "#666" }}>에필로그 피드</span>
//       </header>

//       {loading && records.length === 0 ? (
//         <div style={{ padding: 12, color: "#666" }}>불러오는 중…</div>
//       ) : (
//         <section style={{ display: "grid", gap: 12 }}>
//           {records.map((board) => (
//             <RecordFeedCard key={board._id} board={board} />
//           ))}
//         </section>
//       )}

//       <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
//         <button
//           onClick={onClickLoadMore}
//           style={{
//             padding: "10px 14px",
//             borderRadius: 10,
//             border: "1px solid #ddd",
//             background: "white",
//             cursor: "pointer",
//           }}
//         >
//           더 보기
//         </button>
//       </div>
//     </main>
//   );
// }

export default function RecordsPage(): JSX.Element {
  return <RecordFeedPage />;
}
