import {
  About,
  AngelInvestors,
  Ideation,
  Investors,
  Leaders,
  Motto,
  WorkCulture,
} from "@/components/AboutUs";
import { GetStarted } from "@/components/Landing";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-[120px] w-[90%] md:gap-[190px]">
        <Motto />
        <About />
        <Leaders />
        <Ideation />
        <WorkCulture />
        <Investors />
        <AngelInvestors />
        <GetStarted />
      </div>
    </main>
  );
}
