import { JSX } from "react";

export default function RecordDetailContentTop(): JSX.Element {
  return (
    <div className="flex items-center justify-between p-4">
      <Profile record={record} tone="primary" size="sm" />
      {isWriter && (
        <Button tone="neutral" size="xs" variant="outlined" onClick={onEdit}>
          <Edit className="w-4 h-4" />
          <span>수정</span>
        </Button>
      )}
    </div>
  );
}
