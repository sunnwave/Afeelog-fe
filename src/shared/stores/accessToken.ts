import { getAccessToken } from "@/lib/getAccessToken";
import { atom, selector } from "recoil";

export const accessTokenState = atom<string | null>({
  key: "accessTokenState",
  default: null,
});

export const restoreAccessTokenLoadable = selector<string | null>({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const token = await getAccessToken();
    return token ?? null;
  },
});
