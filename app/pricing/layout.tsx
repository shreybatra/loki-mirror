"use client";

import "./pricing.css";

import { PlanContextProvider } from "@/context/PlanContext";
import { PricingFooter } from "@/components/PricingDataTemplate/PricingFooter";
import { PricingHeader } from "@/components/Pricing/PricingHeader/PricingHeader";
import { PricingTitle } from "@/components/Pricing/PricingTitle/PricingTitle";
import { ReactNode } from "react";
import { VerticalNavbar } from "@/components/VerticalNavbar";
import { useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <PricingHeader />
      <PricingTitle />
      <PlanContextProvider>
        <div className="flex">
          <VerticalNavbar />
          {children}
        </div>
      </PlanContextProvider>
      <PricingFooter />
    </div>
  );
}
