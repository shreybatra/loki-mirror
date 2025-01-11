import {
  Client,
  Features,
  GetStarted,
  Home,
  OutOfTheBox,
  Partners,
  Testimonials,
} from "@/components/oldComponents/Landing";
import AnnouncementBanner from "@/components/oldComponents/Landing/Banner";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-[120px] md:gap-[190px]">
      <div className="flex flex-col items-center gap-[90px] w-[90%] md:gap-[190px]">
        <div className="flex items-center flex-col mt-6 gap-[45px]">
          {/* <AnnouncementBanner /> */}
          <Home />
        </div>
        {/* Flagged off till data is not present. */}
        <Client />
        <OutOfTheBox />
        <Features />
        <Partners />
        {/* <ProductionFlow /> */}
      </div>
      {/* Flagged off till data is not present. */}
      {/* <div className="flex flex-col items-center gap-[100px] w-[100%] md:gap-[190px]"> */}

      <Testimonials />
      {/* <SecurityComplianceCheck /> */}
      {/* </div> */}
      <div className="flex flex-col items-center gap-[100px] w-[90%] md:gap-[190px]">
        <GetStarted />
      </div>
    </main>
  );
}
