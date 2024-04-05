"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";

import PlanDropdown from "@/components/PricingDataTemplate/PlanDropdown";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { applicationEnvironmentData } from "@/constants/Pricing/applicationEnvironmentPricingData";
import { useState } from "react";
import { PricingPlans } from "@/components/Pricing/PricingPlans.tsx/PricingPlans";
import { ApplicationEnvPlans } from "@/components/Pricing/ApplicationEnvPlans/ApplicationEnvPlans";

const examples = [
  {
    title: "Example 1",
    content:
      "Let's say you have a project that has 2 application environments - 1 L0 for staging and 1 L2 for production. Therefore you would be paying ($0.2317 + $1.1585) * 730 hours = $1,014.84 per month.",
  },
  {
    title: "Example 2",
    content:
      "Let's say your project is using 1 Development environment and 1 L1 environment. Therefore you would be paying ($0.0000 + $0.6951) * 730 hours = $507.42 per month.",
  },
];

const environmentPlansContent = [
  {
    tierType: "shared",
    title: "Shared Tier",
    tierContent:
      "Shared (S) tiers can be used by individuals and small teams to get started with Cosmocloud. Shared Tiers are not recommended for production workloads.",
  },
  {
    tierType: "low",
    title: "Low Tier",
    tierContent:
      "Low (L) tiers give you the most basic CPU and RAM resources. These are recommended for staging or production workloads with low traffic.",
  },
  {
    tierType: "power",
    title: "Power Tier",
    tierContent:
      "Power (P) tiers give you 2x the CPU and RAM resources than Low tiers. These are recommended for production workloads with medium traffic.",
  },
  {
    tierType: "boost",
    title: "Boost Tier",
    tierContent:
      "Boost (B) tiers give you 4x the CPU and RAM resources than Low tiers. These are recommended for production workloads with high traffic or CPU intensive workloads.",
  },
];

export default function Page() {
  const [selectedRegion, setSelectedRegion] = useState("ap-south-1");
  const [selectedCloud, setSelectedCloud] = useState("aws");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const selectedCloudData: any = applicationEnvironmentData[selectedCloud];

  return (
    <div>
      <div className="ml-[16px] mr-[16px] md:ml-[42px] md:mr-[80px]">
        <h2 className="text-white text-[20px] font-medium md:font-bold md:text-[24px]">
          Application Environment
        </h2>

        <PricingPlans planName={"Free Plan"}>
          <p className="text-[12px] mb-[12px] md:text-[14px] text-muted">
            Excellent for trying out Cosmocloud. We give you a single
            Development environment by default with restrictions applied on
            them.
          </p>
          <div>
            <PlanInfoHighlight text={"Shared CPU & RAM"} />
            <PlanInfoHighlight text={"Max 100 API calls per day"} />
            <PlanInfoHighlight text={"Free forever"} />
          </div>
        </PricingPlans>

        <PricingPlans planName={"Standard Plan"}>
          <p className="text-[12px] md:text-[14px] text-muted">
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

          {environmentPlansContent.map((envPlan, idx) => {
            return (
              <ApplicationEnvPlans
                selectedCloudData={selectedCloudData}
                selectedCurrency={selectedCurrency}
                selectedRegion={selectedRegion}
                tierType={envPlan.tierType}
                title={envPlan.title}
                tierContent={envPlan.tierContent}
                key={idx}
              />
            );
          })}
        </PricingPlans>

        <div className="pt-[42px] pb-[42px] flex flex-col gap-[20px] border-b-2 border-solid border-gray-700">
          <h3 className="text-white text-[24px] font-[600]">Examples</h3>

          {examples.map((example) => {
            return (
              <div key={example.title}>
                <h4 className="text-[16px] font-[400]">{example.title}</h4>
                <p className="text-[16px] font-[400] text-muted">
                  {example.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
