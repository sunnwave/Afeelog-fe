import { ActionSheetOption } from "./type";

export default function ActionOption({
  option,
  index,
  onClose,
}: {
  option: ActionSheetOption;
  index: number;
  onClose: () => void;
}) {
  return (
    <button
      key={index}
      onClick={() => {
        option.onClick();
        onClose();
      }}
      className={`
                  w-full flex items-center gap-4 px-4 py-4 rounded-2xl
                  hover:bg-muted/50 active:bg-muted transition-colors
                  ${option.variant === "primary" ? "bg-primary/5" : ""}
                  ${option.variant === "danger" ? "text-destructive" : ""}
                `}
    >
      {/* Icon */}
      {option.icon && (
        <div
          className={`
                      flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                      ${
                        option.variant === "primary"
                          ? "bg-primary/10 text-primary"
                          : option.variant === "danger"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-muted text-muted-foreground"
                      }
                    `}
        >
          {option.icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 text-left">
        <h4
          className={`
                      font-semibold mb-0.5
                      ${option.variant === "primary" ? "text-primary" : ""}
                      ${option.variant === "danger" ? "text-destructive" : ""}
                    `}
        >
          {option.label}
        </h4>
        {option.description && (
          <p className="text-sm text-muted-foreground">{option.description}</p>
        )}
      </div>
    </button>
  );
}
