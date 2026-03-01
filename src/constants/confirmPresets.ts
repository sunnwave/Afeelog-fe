export type ConfirmKind =
  | "loginRequired"
  | "logout"
  | "deleteComment"
  | "deleteRecord";

export type ConfirmVariant = "default" | "primary" | "destructive" | "success";

export const CONFIRM_PRESETS: Record<
  ConfirmKind,
  { title: string; description: string; variant: ConfirmVariant }
> = {
  loginRequired: {
    title: "작성하려면 로그인해요✋🏻🤚🏻",
    description: "로그인하고 필로그와 거래글을 작성해보세요",
    variant: "primary",
  },
  logout: {
    title: "로그아웃 할까요?",
    description: "로그아웃하면 다시 로그인해야 해요.",
    variant: "destructive",
  },
  deleteComment: {
    title: "댓글을 삭제할까요?",
    description: "삭제하면 되돌릴 수 없어요.",
    variant: "destructive",
  },
  deleteRecord: {
    title: "게시물을 삭제할까요?",
    description: "삭제하면 되돌릴 수 없어요.",
    variant: "destructive",
  },
};
