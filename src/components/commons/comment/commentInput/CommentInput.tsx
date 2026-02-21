import { Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CommentInputProps {
  onSubmit: (comment: string) => void;
  placeholder?: string;
  isFixed?: boolean;
  isLoggedIn: boolean;
}

export default function CommentInput({
  onSubmit,
  placeholder = "댓글을 입력하세요...",
  isFixed = false,
  isLoggedIn,
}: CommentInputProps) {
  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  placeholder = isLoggedIn ? placeholder : "로그인 후 댓글을 작성해주세요";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment.trim());
      setComment("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleClear = () => {
    setComment("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.focus();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  }, [comment]);

  const inputContent = (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <textarea
        ref={textareaRef}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        rows={1}
        className={`
          w-full px-4 py-3 pr-24 rounded-xl resize-none
          border transition-all
          focus:outline-none
          placeholder:text-muted-foreground
          ${
            isFocused || comment
              ? "bg-background border-primary"
              : "bg-muted/50 border-border"
          }
        `}
        style={{ minHeight: "48px", maxHeight: "120px" }}
      />

      {/* Clear Button */}
      {comment && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-14 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
          aria-label="Clear comment"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!comment.trim()}
        className={`
          absolute right-3 top-1/2 -translate-y-1/2
          w-8 h-8 rounded-lg flex items-center justify-center
          transition-all
          ${
            comment.trim()
              ? "bg-primary text-primary-foreground hover:bg-primary-hover"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }
        `}
        aria-label="Submit comment"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );

  if (isFixed) {
    return (
      <div className="fixed bottom-16 left-0 right-0 z-40 lg:hidden">
        <div className="bg-background border-t border-border p-4 safe-bottom">
          {inputContent}
        </div>
      </div>
    );
  }

  return <div className="pt-4 border-t border-border">{inputContent}</div>;
}
