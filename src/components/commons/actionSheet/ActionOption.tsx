import { cn } from "@/shared/utils";
import type { ActionOptionVariant, ActionSheetOption } from "./type";

const styles: Record<ActionOptionVariant, { iconWrap: string; title: string }> =
  {
    default: {
      iconWrap:
        "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
      title: "text-foreground group-hover:text-primary",
    },
    destructive: {
      iconWrap:
        "bg-destructive/10 text-destructive group-hover:bg-destructive/20",
      title: "text-destructive",
    },
  };

export default function ActionOption({
  option,
  onClose,
}: {
  option: ActionSheetOption;
  onClose: () => void;
}) {
  const Icon = option.icon;
  const v: ActionOptionVariant = option.variant ?? "default";
  const s = styles[v];

  return (
    <button
      type="button"
      onClick={() => {
        option.onClick();
        onClose();
      }}
      className={cn(
        "group w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-colors active:bg-muted hover:bg-primary/5"
      )}
    >
      {Icon && (
        <div
          className={cn(
            "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
            s.iconWrap
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}

      <div className="flex-1 text-left min-w-0">
        <h4 className={cn("font-semibold mb-0.5 truncate", s.title)}>
          {option.label}
        </h4>
        {option.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {option.description}
          </p>
        )}
      </div>
    </button>
  );
}
