import Link from "next/link";

type SizeVarint = "sm" | "md" | "lg";

const sizeClasses: Record<SizeVarint, { title: string; subtitle: string }> = {
  sm: {
    title: "text-lg",
    subtitle: "text-[10px]",
  },
  md: {
    title: "text-2xl",
    subtitle: "text-xs",
  },
  lg: {
    title: "text-3xl",
    subtitle: "text-sm",
  },
};

export default function Logo({
  size = "sm",
  showSubtitle = true,
}: {
  size: SizeVarint;
  showSubtitle: boolean;
}) {
  const s = sizeClasses[size];
  return (
    <Link href="/">
      <div className={`flex flex-col items-center justify-center`}>
        <h1
          className={`font-bold tracking-tight leading-none ${s.title} text-foreground`}
        >
          atFeelog
        </h1>
        {showSubtitle && (
          <p
            className={`leading-none mt-1 font-medium ${s.subtitle} text-muted-foreground`}
          >
            막이 내린 뒤, 내가 남기는 에필로그
          </p>
        )}
      </div>
    </Link>
  );
}
