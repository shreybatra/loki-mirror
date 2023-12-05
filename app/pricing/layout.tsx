"use client";

import "./pricing.css";

import Image from "next/image"
import { PlanContextProvider } from "@/context/PlanContext";
import PricingBg from "@/assets/svg/pricingBg.svg"
import { PricingFooter } from "@/components/PricingDataTemplate/PricingFooter";
import { PricingHeader } from "@/components/Pricing/PricingHeader/PricingHeader";
import { PricingTitle } from "@/components/Pricing/PricingTitle/PricingTitle";
import { ReactNode } from "react";
import { VerticalNavbar } from "@/components/VerticalNavbar";
import { VerticalNavbar2 } from "@/components/VerticalNavbar2";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="sm:none bg-pricing">
        <Image src={PricingBg} alt="contact-bg" />
      </div>
      <PricingHeader />
      <PricingTitle />
      <PlanContextProvider>
        <div className="flex mt-[84px]">
          <VerticalNavbar />
          <VerticalNavbar2 />
          {children}
        </div>
      </PlanContextProvider>
      <PricingFooter />
    </div>
  );
}
