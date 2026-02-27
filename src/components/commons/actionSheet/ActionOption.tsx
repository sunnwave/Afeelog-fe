import { LucideIcon } from "lucide-react";

export interface ActionSheetOption {
  icon?: LucideIcon;
  label: string;
  description?: string;
  onClick: () => void;
  variant?: "default" | "danger";
}

export default function ActionOption({
  option,
  onClose,
}: {
  option: ActionSheetOption;
  index: number;
  onClose: () => void;
}) {
  const Icon = option.icon;
  return (
    <>
      <button
        onClick={() => {
          option.onClick();
          onClose();
        }}
        className={`
        group w-full flex items-center gap-4 px-4 py-4 rounded-2xl
        hover:bg-primary/5 active:bg-muted transition-colors
        ${option.variant === "danger" ? "text-destructive" : ""}
        `}
      >
        {/* Icon */}
        {Icon && (
          <div
            className={`
          flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center 
          ${
            option.variant === "danger"
              ? "bg-destructive/10 text-destructive group-hover:bg-destructive/20 "
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          }
          `}
          >
            <Icon className={`w-5 h-5`} />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 text-left">
          <h4
            className={`
            font-semibold mb-0.5
            ${option.variant === "danger" ? "text-destructive" : "text-primary"}
            `}
          >
            {option.label}
          </h4>
          {option.description && (
            <p className="text-sm text-muted-foreground">
              {option.description}
            </p>
          )}
        </div>
      </button>
    </>
  );
}
