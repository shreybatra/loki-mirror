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
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-[190px] w-[1280px]">
        <Home />
        <Client />
        <ProductionFlow />
        <Partners />
        <Features />
        <OutOfTheBox />
        <Testimonials />
        <SecurityComplianceCheck />
        <GetStarted />
      </div>
    </main>
  );
}
