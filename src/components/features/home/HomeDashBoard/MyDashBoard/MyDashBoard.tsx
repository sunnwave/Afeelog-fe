import { JSX } from "react";
import DashBoardHeader from "../DashBoardHeader";

export default function MyDashBoard(): JSX.Element {
  return (
    <section className="w-full bg-gradient-to-br from-accent via-accent/50 to-background rounded-2xl border border-primary/10 p-6 shadow-sm">
      <DashBoardHeader variant="my" />
    </section>
  );
}
