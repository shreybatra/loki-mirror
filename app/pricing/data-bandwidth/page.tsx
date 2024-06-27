"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";
import PlanDropdown from "@/components/PricingDataTemplate/PlanDropdown";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { dataBandwidthPricingData } from "@/constants/Pricing";
import { useState } from "react";
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

  const dataBandwidthPriceDisplay: any = dataBandwidthPricingData[
    selectedCloud
  ].find((region) => region.region == selectedRegion);

  return (
    <main>
      <div className="ml-[16px] mr-[16px]  md:ml-[42px] md:mr-[80px]">
        <h2 className="text-white text-[20px] font-medium md:font-bold md:text-[24px]">
          Data bandwidth
        </h2>
        <PricingPlans planName={"Free Plan"}>
          <p className="text-[12px] mb-[12px] md:text-[14px] text-muted">
            You have selected cloud as {selectedCloud} and region as{" "}
            {dataBandwidthPriceDisplay.region} and cost as{" "}
            {dataBandwidthPriceDisplay.cost[selectedCurrency]}
          </p>
          <div className="mt-[16px]">
            <PlanInfoHighlight text={"Lorem Ipsum 1"} />
            <PlanInfoHighlight text={"Lorem Ipsum 1"} />
            <PlanInfoHighlight text={"Lorem Ipsum 1"} />
          </div>
        </PricingPlans>

        <PricingPlans planName={"Standard Plan"}>
          <p className="text-[12px] md:text-[14px] text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea
            voluptates cumque distinctio cum voluptate necessitatibus iste iusto
            perferendis, quibusdam quo repellendus molestiae fugiat id suscipit?
            Assumenda quod dolor tempora.
          </p>
          <PlanDropdown
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedCloud={selectedCloud}
            setSelectedCloud={setSelectedCloud}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />

          <p className="text-muted-800 text-base font-normal">
            You have selected cloud as {selectedCloud} and region as{" "}
            {dataBandwidthPriceDisplay.region} and cost as{" "}
            {dataBandwidthPriceDisplay.cost[selectedCurrency]}
          </p>
        </PricingPlans>

        <div className="pt-[42px] pb-[42px] flex flex-col gap-[20px] border-b-2 border-solid border-gray-700">
          <h3 className="text-white text-[24px] font-[600]">Examples</h3>

          {examples.map((example,idx) => {
            return (
              <div key={idx}>
                <h4 className="text-[16px] font-[400]">{example.title}</h4>
                <p className="text-[16px] font-[400] text-muted">
                  {example.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
