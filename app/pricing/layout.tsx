"use client";

import "./pricing.css";
import Image from "next/image";
import { PlanContextProvider } from "@/context/PlanContext";
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
  }, [])
  return (
    <div>
      <div className="hidden md:block bg-pricing">
        <Image src={PricingBg} alt="contact-bg" />
      </div>
      <PricingHeader />
      <PricingTitle />
      {/* <PlanContextProvider>
        <div className="flex flex-col md:flex-row mt-[42px]  md:mt-[84px]">
          <VerticalNavbar />
          <VerticalNavbar2 />
          {children}
        </div>
      </PlanContextProvider> */}
      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-2xl px-[6vw] justify-center items-center">
          <PricingHorizontalCards label="Get Start with" span="free tier" description="Start for free, on free tier
for each resource. Build your app's backend in minutes." buttonLabel={'Get started'} />
          <div className="flex w-full md:flex-row gap-12 flex-col justify-between items-center">
            <PricingCards />
          </div>
          <PricingHorizontalCards label="Looking for
"  span="enterprise plans?" description="  Interested in learning about pricing, reach out to us and upgrade your
            free tier." buttonLabel={"Contact sales"} />
        </div>
      </div>
    </div>
  );
}
