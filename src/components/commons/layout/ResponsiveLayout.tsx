import { JSX, ReactNode } from "react";

interface IResponsiveLayoutProps {
  children: ReactNode;
  /**
   * Content type determines max-width:
   * - 'reading': 720px max (for feed, details)
   * - 'full': 100% width (for forms, grids)
   * - 'app': 1440px max (for general app layout)
   */
  contentType?: "reading" | "full" | "app";
  center?: boolean;
  className?: string;
}

export function ResponsiveLayout({
  children,
  contentType = "reading",
  center = true,
  className = "",
}: IResponsiveLayoutProps): JSX.Element {
  const maxW =
    contentType === "reading"
      ? "max-w-[720px]"
      : contentType === "app"
      ? "max-w-[1440px]"
      : "max-w-full";

  return (
    <div
      className={`
        ${maxW}
        ${center ? "mx-auto" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
