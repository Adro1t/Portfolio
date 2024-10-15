import Intro from "@/components/Intro";
import { ModeToggle } from "@/components/ModeToggle";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-2/3">
          <Intro />
        </div>
        <div className="w-1/3">
          <Projects />
        </div>
      </div>
      <ModeToggle />
    </>
  );
}
