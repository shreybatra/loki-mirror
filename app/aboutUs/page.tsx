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
    <main className="about-main flex flex-col items-center">
      <div className="flex flex-col items-center gap-[100px] w-[95%] md:gap-[190px]">
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
