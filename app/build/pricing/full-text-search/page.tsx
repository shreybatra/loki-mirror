"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";

import { PlanContext } from "@/context/PlanContext";
import PlanDropdown from "@/components/PricingDataTemplate/PlanDropdown";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { fullTextSearchPricingData } from "@/constants/Pricing/index";
import { useContext, useState } from "react";
import { PricingPlans } from "@/components/Pricing/PricingPlans.tsx/PricingPlans";

const Page = () => {
  // const { plan, setPlan } = useContext(PlanContext);

  const [selectedRegion, setSelectedRegion] = useState("ap-south-1");
  const [selectedCloud, setSelectedCloud] = useState("aws");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const examples = [
    {
      title: "Example 1",
      content:
        "You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud.",
    },
    {
      title: "Example 2",
      content:
        "You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud.",
    },
  ];

  const fullTextPriceDisplay: any = fullTextSearchPricingData[
    selectedCloud
  ].find((region) => region.region == selectedRegion);
  return (
    <main>
      <div className="ml-[16px] mr-[16px]  md:ml-[42px] md:mr-[80px]">
        <h2 className="text-white text-[20px] font-medium md:font-bold md:text-[24px]">
          Full Text Search
        </h2>
        <PricingPlans planName={"Free Plan"}>
          <p className="text-[12px] mb-[12px] md:text-[14px] text-muted">
            Full Text Search is currently free to use, powered by your MongoDB
            Atlas cluster.
          </p>
        </PricingPlans>

        <PricingPlans planName={"Standard Plan"}>
          <p className="text-[12px] md:text-[14px] text-muted">
            Dedicated search nodes are coming soon.
          </p>
        </PricingPlans>
      </div>
    </main>
  );
};

export default Page;
