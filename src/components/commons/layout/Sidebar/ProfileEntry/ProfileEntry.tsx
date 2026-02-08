import { IUser } from "@/commons/graphql/generated/types";
import Avatar from "@/components/commons/avatar/Avatar";
import { ChevronRight } from "lucide-react";
import { JSX } from "react";

type ProfileEntryVariant = "loggedIn" | "loggedOut";

export default function ProfileEntry({
  user,
  variant = "loggedOut",
}: {
  user?: IUser;
  variant?: ProfileEntryVariant;
}): JSX.Element {
  const isLoggedIn = variant === "loggedIn";

  const onMoveMyPage = () => {};
  const onMoveLogin = () => {};

  return (
    <div className="p-4 border-b border-border">
      <button
        onClick={isLoggedIn ? onMoveMyPage : onMoveLogin}
        className="
            w-full flex items-center border border-border gap-4.5 px-4 py-4 rounded-[20px]
            hover:bg-accent/80 active:bg-accent/70 transition-colors cursor-pointer
          "
      >
        {isLoggedIn && <Avatar user={user} size="md" type="filled" />}
        <div className="flex flex-1 flex-col items-start min-w-0 w-full ">
          <p className="font-semibold text-base text-foreground truncate">
            {isLoggedIn ? user?.name : "로그인해주세요"}
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            {isLoggedIn ? "마이페이지로 이동" : "로그인하고 내 기록을 관리해요"}
          </p>
        </div>

        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </button>
    </div>
  );
}
