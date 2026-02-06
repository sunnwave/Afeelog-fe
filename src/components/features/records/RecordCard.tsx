import { useRouter } from "next/router";

type Board = {
  _id: string;
  writer: string;
  title: string;
  contents: string;
  createdAt: string;
};

export default function RecordCard({ board }: { board: Board }): JSX.Element {
  const router = useRouter();

  const preview = (board.contents ?? "").replace(/\s+/g, " ").trim();
  const bodyPreview =
    preview.length > 120 ? preview.slice(0, 120) + "…" : preview;

  const dateText = new Date(board.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const onClick = () => {
    void router.push(`/records/${board._id}`);
  };

  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{
        border: "1px solid #eee",
        borderRadius: 16,
        padding: 14,
        cursor: "pointer",
        background: "white",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 12 }}
      >
        <h2 style={{ fontSize: 16, margin: 0, lineHeight: 1.3 }}>
          {board.title}
        </h2>
        <span style={{ fontSize: 12, color: "#888", whiteSpace: "nowrap" }}>
          {dateText}
        </span>
      </div>

      <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.5 }}>
        {bodyPreview || <span style={{ color: "#999" }}>내용이 없습니다.</span>}
      </p>

      <div style={{ marginTop: 10, fontSize: 12, color: "#666" }}>
        {board.writer || "익명"}
      </div>
    </article>
  );
}
