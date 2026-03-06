import { atom } from "recoil";
import { IQuery } from "@/shared/graphql/generated/types";

export type LoggedInUser = IQuery["fetchUserLoggedIn"] | null;

export const loggedInUserState = atom<LoggedInUser>({
  key: "loggedInUserState",
  default: null,
});
