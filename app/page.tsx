import {
  Client,
  Features,
  GetStarted,
  Home,
  OutOfTheBox,
  Partners,
  ProductionFlow,
  SecurityComplianceCheck,
  Testimonials,
} from "@/components/Landing";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-[120px] md:gap-[190px]">
      <div className="flex flex-col items-center gap-[120px] w-[90%] md:gap-[190px]">
        <Home />
        <Client />
        <ProductionFlow />
        <Partners />
        <Features />
        <OutOfTheBox />
      </div>
      <div className="flex flex-col items-center gap-[120px] w-[100%] md:gap-[190px]">
        <Testimonials />
        <SecurityComplianceCheck />
      </div>
      <div className="flex flex-col items-center gap-[120px] w-[90%] md:gap-[190px]">
        <GetStarted />
      </div>
    </main>
  );
}
