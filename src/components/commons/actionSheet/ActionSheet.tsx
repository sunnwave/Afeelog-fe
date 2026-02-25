import { useEffect } from "react";
import { LogOut, X } from "lucide-react";
import { ActionSheetOption } from "./type";
import ActionOption from "./ActionOption";
import IconButton from "../button/IconButton";
import { Button } from "../button/Button";

type ActionSheetVariant = "withHeader" | "withIcon";

interface ActionSheetProps {
  variant?: ActionSheetVariant;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  options: ActionSheetOption[];
}

export function ActionSheet({
  variant = "withHeader",
  isOpen,
  onClose,
  title,
  description,
  options,
}: ActionSheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] animate-in fade-in"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-[70] animate-in slide-in-from-bottom">
        <div className="max-w-lg mx-auto bg-background rounded-t-3xl shadow-xl overflow-hidden">
          {/* Header */}
          {variant === "withIcon" ? (
            <div className="flex flex-col gap-2 items-center justify-center py-6">
              <div className="flex w-14 h-14 bg-accent items-center justify-center rounded-full mb-2">
                <LogOut className="w-7 h-7" />
              </div>
              <h4 className="text-foreground font-bold text-2xl">{title}</h4>
              <p className="text-muted-foreground text-xl">{description}</p>
            </div>
          ) : (
            <div className="flex items-center justify-between px-4 py-4.5 border-b border-border">
              <h3 className="text-lg font-semibold">{title}</h3>
              <IconButton onClick={onClose}>
                <X className="w-5 h-5" />
              </IconButton>
            </div>
          )}

          {/* Options */}
          <div className="px-4 py-2 pb-safe">
            {options.map((option, index) => (
              <ActionOption
                key={index}
                option={option}
                index={index}
                onClose={onClose}
              />
            ))}
          </div>

          {/* Cancel Button */}
          <div className="px-4 pb-6 pt-2">
            <Button tone="neutral" onClick={onClose}>
              취소
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
