import { JSX } from "react";

export default function Header({ text }: { text: string }): JSX.Element {
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
        {text}
      </h1>
    </div>
  );
}
