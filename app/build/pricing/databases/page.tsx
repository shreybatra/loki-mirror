"use client";

import { PlanContext } from "@/context/PlanContext";
import PlanDropdown from "@/components/oldComponents/PricingDataTemplate/PlanDropdown";
import { PlanInfoHighlight } from "@/components/oldComponents/PricingDataTemplate/PlanInfoHighlight";
import { databasesPricingData } from "@/constants/Pricing";
import { useContext, useState } from "react";
import { PricingPlans } from "@/components/oldComponents/Pricing/PricingPlans.tsx/PricingPlans";

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

  const databasesPriceDisplay: any = databasesPricingData[selectedCloud].find(
    (region) => region.region == selectedRegion
  );

  return (
    <main>
      <div className="ml-[16px] mr-[16px]  md:ml-[42px] md:mr-[80px]">
        <h2 className="text-white text-[20px] font-medium md:font-bold md:text-[24px]">
          Databases
        </h2>

        <PricingPlans planName={"Free Plan"}>
          <p className="text-[12px] mb-[12px] md:text-[14px] text-muted">
            Currently Cosmocloud does not spin up any Databases on its own. You
            can bring your own MongoDB clusters and integrate it with
            Cosmocloud. You can also reach out to Cosmocloud sales for a scaled
            up MongoDB cluster.
          </p>
        </PricingPlans>
      </div>
    </main>
  );
};

export default Page;
