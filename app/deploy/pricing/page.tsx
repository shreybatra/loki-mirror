import ComputeCost from "@/components/DeployPricing/ComputeCost";
import Header from "@/components/DeployPricing/Header";
import Pricing from "@/components/DeployPricing/Pricing";
import { PricingHorizontalCards } from "@/components/PricingDataTemplate/PricingHorizontalCards";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col items-center gap-[120px] md:gap-[190px]">
      <div className="flex flex-col items-center gap-[90px] w-[90%] md:gap-[120px]">
        <Header />
        <Pricing /> <ComputeCost />
      </div>
    </main>
  );
};
export default Page;
