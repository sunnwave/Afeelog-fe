import { useRouter } from "next/router";

interface IUseNavigationReturn {
  onClickNavigation: (path: string) => () => void;
}

export const useNavigation = (): IUseNavigationReturn => {
  const router = useRouter();

  const onClickNavigation = (path: string) => () => {
    void router.push(path);
  };

  return {
    onClickNavigation,
  };
};
