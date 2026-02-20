import { useEffect, useRef } from "react";

interface IUseInfiniteScrollProps {
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  onLoadMore,
}: IUseInfiniteScrollProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
          onLoadMore();
        }
      },
      { threshold: 0.5 }
    );

    const el = targetRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasMore, isLoading, onLoadMore]);

  return targetRef;
};
