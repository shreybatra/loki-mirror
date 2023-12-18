"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";

import PlanDropdown from "@/components/PricingDataTemplate/PlanDropdown";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { applicationEnvironmentData } from "@/constants/Pricing/applicationEnvironmentPricingData";
import { useState } from "react";
import { PricingPlans } from "@/components/Pricing/PricingPlans.tsx/PricingPlans";
import { ApplicationEnvPlans } from "@/components/Pricing/ApplicationEnvPlans/ApplicationEnvPlans";

export default function Page() {
  // const { plan, setPlan } = useContext(PlanContext);

  const [selectedRegion, setSelectedRegion] = useState("ap-south-1");
  const [selectedCloud, setSelectedCloud] = useState("aws");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const selectedCloudData: any = applicationEnvironmentData[selectedCloud];

  return (
    <main>
      <div className="ml-[16px] mr-[16px]  md:ml-[42px] md:mr-[80px]">
        <h2 className="text-white text-2xl font-medium md:font-bold">
          Application Environment
        </h2>

        <PricingPlans planName={"Free Plan"}>
          <p>
            Excellent for trying out Cosmocloud. We give you a single
            Development environment by default with restrictions applied on
            them.
          </p>
          <div className="mt-4">
            <PlanInfoHighlight text={"Max 100 API calls per day"} />
            <PlanInfoHighlight text={"Free forever"} />
          </div>
        </PricingPlans>

        <PricingPlans planName={"Standard Plan"}>
          <p>
            When you are ready to take your application to production, you can
            upgrade to a Standard Plan. Chose from a variety of tiers to suit
            your workload.
          </p>
          <PlanDropdown
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedCloud={selectedCloud}
            setSelectedCloud={setSelectedCloud}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />

          <ApplicationEnvPlans
            selectedCloudData={selectedCloudData}
            selectedCurrency={selectedCurrency}
            selectedRegion={selectedRegion}
            tierType="shared"
            title="Shared Tier"
          />
          <ApplicationEnvPlans
            selectedCloudData={selectedCloudData}
            selectedCurrency={selectedCurrency}
            selectedRegion={selectedRegion}
            tierType="low"
            title="Low Tier"
          />
          <ApplicationEnvPlans
            selectedCloudData={selectedCloudData}
            selectedCurrency={selectedCurrency}
            selectedRegion={selectedRegion}
            tierType="power"
            title="Power Tier"
          />
          <ApplicationEnvPlans
            selectedCloudData={selectedCloudData}
            selectedCurrency={selectedCurrency}
            selectedRegion={selectedRegion}
            tierType="boost"
            title="Boost Tier"
          />
        </PricingPlans>

        <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700">
          <h3 className="text-white text-base font-semibold">Examples</h3>
          <h4>Example 1</h4>

          <p>
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In future,
            you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
          <h4>Example 2</h4>
          <p>
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In future,
            you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
        </div>
      </div>
    </main>
  );
}
