import { MoreVertical } from "lucide-react";
import { useState } from "react";

export default function WriterMenu({
  onEditClick,
  onDeleteClick,
}: {
  // TODO: 수정, 삭제 함수 추가
  onEditClick: () => void;
  onDeleteClick: () => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="rounded hover:bg-muted flex items-center justify-center transition-colors"
        aria-label="더보기"
      >
        <MoreVertical className="w-4 h-4 text-muted-foreground" />
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 top-8 z-20 w-28 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => {
                onEditClick();
                setShowMenu(false);
              }}
              className="w-full px-3 py-2 text-left hover:bg-muted transition-colors text-xs"
            >
              수정하기
            </button>
            <button
              onClick={() => {
                onDeleteClick();
                setShowMenu(false);
              }}
              className="w-full px-3 py-2 text-left hover:bg-muted transition-colors text-xs text-red-600"
            >
              삭제하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}
