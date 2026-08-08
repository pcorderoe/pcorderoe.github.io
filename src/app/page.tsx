import Portfolio from "./portfolio";
import WorkingOn from "./working-on";

export default function Home() {
  if (process.env.NEXT_PUBLIC_ENV === "workingon") {
    return <WorkingOn />;
  }

  return <Portfolio />;
}
