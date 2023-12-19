"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";

import { PlanContext } from "@/context/PlanContext";
import PlanDropdown from "@/components/PricingDataTemplate/PlanDropdown";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { storagePricingData } from "@/constants/Pricing/index";
import { useContext, useState } from "react";
import { PricingPlans } from "@/components/Pricing/PricingPlans.tsx/PricingPlans";

const Page = () => {
  // const { plan, setPlan } = useContext(PlanContext);

  const [selectedRegion, setSelectedRegion] = useState("ap-south-1");
  const [selectedCloud, setSelectedCloud] = useState("aws");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const examples = [
    {
      title: "Example 1",
      content:
        "For example you create 2 Storage Accounts with 100 GB and 200 GB capacity respectively. You will be charged for 300 GB of data storage capacity.",
    },
  ];

  const storagePriceDisplay: any = storagePricingData[selectedCloud].find(
    (region) => region.region == selectedRegion
  );

  const locale = selectedCurrency === "USD" ? "en-US" : "en-IN";

  return (
    <main>
      <div className="ml-[16px] mr-[16px] md:ml-[42px] md:mr-[80px]">
        <h2 className="text-white text-[20px] font-medium md:font-bold md:text-[24px]">
          Storage Accounts (Object Storage)
        </h2>

        <PricingPlans planName={"Free Plan"}>
          <p className="text-[12px] mb-[12px] md:text-[14px] text-muted">
            On the Free Plan, you will get 1 Storage Account already created,
            with a 512MB cap size allocated to you.
          </p>
          <div className="mt-[16px]">
            <PlanInfoHighlight text={"You can upload any file."} />
            <PlanInfoHighlight text={"You can download any file."} />
            <PlanInfoHighlight
              text={"You cannot increase data capacity in Free Plan."}
            />
          </div>
        </PricingPlans>

        <PricingPlans planName={"Standard Plan"}>
          <p className="text-[12px] md:text-[14px] text-muted">
            Cosmocloud charges for the data storage capacity `requested` across
            all Storage Accounts per month.
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
            The storage price for {selectedRegion} in {selectedCloud} is{" "}
            {Intl.NumberFormat(locale, {
              maximumFractionDigits: 4,
              minimumFractionDigits: 0,
              style: "currency",
              currency: selectedCurrency,
            }).format(storagePriceDisplay.cost[selectedCurrency])}{" "}
            per GB per month.
          </p>
        </PricingPlans>

        <div className="pt-[42px] pb-[42px] flex flex-col gap-[20px] border-b-2 border-solid border-gray-700">
          <h3 className="text-white text-[24px] font-[600]">Examples</h3>

          {examples.map((example) => {
            return (
              <>
                <h4 className="text-[16px] font-[400]">{example.title}</h4>
                <p className="text-[16px] font-[400] text-muted">
                  {example.content}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
