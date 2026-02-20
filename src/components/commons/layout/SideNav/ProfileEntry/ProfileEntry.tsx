import { IUser } from "@/shared/graphql/generated/types";
import { useNavigation } from "@/shared/hooks/ui/useNavigation";
import { Button } from "@/components/commons/button/Button";
import Avatar from "@/components/ui/avatar/Avatar";
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

  const { onClickNavigation } = useNavigation();

  return (
    <div className="p-4 border-b border-border">
      <Button
        variant="outlined"
        tone="neutral"
        onClick={
          isLoggedIn ? onClickNavigation("/me") : onClickNavigation("/login")
        }
      >
        {isLoggedIn && <Avatar user={user} size="md" type="filled" />}
        <div className="flex-1 min-w-0 flex flex-col items-start">
          <p className="font-semibold text-base text-foreground truncate">
            {isLoggedIn ? user?.name : "로그인해주세요"}
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            {isLoggedIn ? "마이페이지로 이동" : "로그인하고 내 기록을 관리해요"}
          </p>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </Button>
    </div>
  );
}
