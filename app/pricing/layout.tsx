"use client";

import "./pricing.css";
import Image from "next/image";
import PricingBg from "@/assets/svg/pricingBg.svg";
import { PricingHorizontalCards } from "@/components/PricingDataTemplate/PricingHorizontalCards";
import { PricingHeader } from "@/components/Pricing/PricingHeader/PricingHeader";
import { PricingTitle } from "@/components/Pricing/PricingTitle/PricingTitle";
import { ReactNode, useEffect } from "react";
import { VerticalNavbar } from "@/components/VerticalNavbar";
import { VerticalNavbar2 } from "@/components/VerticalNavbar2";
import PricingCards from "@/components/Pricing/PricingCards";

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="hidden md:block bg-pricing">
        <Image src={PricingBg} alt="contact-bg" />
      </div>
      <PricingHeader />
      <PricingTitle />

      {/* Old Granular pricing
      <PlanContextProvider>
        <div className="flex flex-col md:flex-row mt-[42px]  md:mt-[84px]">
          <VerticalNavbar />
          <VerticalNavbar2 />
          {children}
        </div>
      </PlanContextProvider> */}

      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-2xl px-[6vw] justify-center items-center">
          <PricingHorizontalCards
            label="Get started with"
            span="Free Tier"
            description="Start for free to build your personal projects."
            buttonLabel={"Sign up now"}
            linkUrl="https://dashboard.cosmocloud.io/sign-up"
          />

          <div className="flex w-full md:flex-row gap-12 flex-col justify-between items-center">
            <PricingCards />
          </div>
          <PricingHorizontalCards
            label="Looking to create "
            span="end-to-end"
            label2="projects?"
            description="Cosmocloud helps startups and companies build their projects using an amazing dev team."
            buttonLabel={"Reach out to us"}
            linkUrl="/contact"
          />
        </div>
      </div>
    </div>
  );
}
