import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authInitializedState } from "@/shared/stores/auth";
import { loggedInUserState } from "@/shared/stores/user";
import { accessTokenState } from "@/shared/stores/authToken";
import { useAuthInitialize } from "@/shared/hooks/auth/useAuthInitialize";

export default function AuthInitialize() {
  useAuthInitialize();

  const initialized = useRecoilValue(authInitializedState);
  const accessToken = useRecoilValue(accessTokenState);
  const user = useRecoilValue(loggedInUserState);

  useEffect(() => {
    if (!initialized) return;
  }, [initialized, accessToken, user]);

  return null;
}
