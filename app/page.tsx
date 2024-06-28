"use client";
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
import AnnouncementBanner from "@/components/Landing/Banner";
import { useState } from "react";

export default function Page() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <main className="flex flex-col items-center gap-[120px] md:gap-[190px]">
      <div className="flex flex-col items-center gap-[90px] w-[90%] md:gap-[190px]">
        <div className="flex items-center flex-col gap-[45px]">
          <AnnouncementBanner />
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
