import { IMutation } from "@/shared/graphql/generated/types";
import { accessTokenState } from "@/shared/stores";
import { loggedInUserState } from "@/shared/stores/user";
import { gql, useMutation } from "@apollo/client";
import { useSetRecoilState } from "recoil";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function useLogoutUser() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setUser = useSetRecoilState(loggedInUserState);

  const [logoutUser, { loading }] =
    useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onLogoutUser = async () => {
    try {
      await logoutUser({
        context: { credentials: "include" },
      });
    } finally {
      setAccessToken("");
      setUser(null);
    }
  };

  return {
    onLogoutUser,
    loading,
  };
}
