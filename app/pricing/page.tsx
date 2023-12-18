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

  const examples =[
    {
      "title":"Example 1",
      "content":"You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud."
    },
    {
      "title":"Example 2",
      "content":"You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud."
    },
  ]

  const environmentPlansContent =[
    {
      "tierType":'shared',
      "title":"Shared Tier",
      "tierContent":"You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud."
    },
    {
      "tierType":'low',
      "title":"Low Tier",
      "tierContent":"You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud."
    },
    {
      "tierType":'power',
      "title":"Power Tier",
      "tierContent":"You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud."
    },
    {
      "tierType":'boost',
      "title":"Boost Tier",
      "tierContent":"You can integrate your own MongoDB cluster per project, Cosmocloud does not charge anything for this integration currently. In future,you will be able to spin up MongoDB Clusters directly fromCosmocloud."
    }
  ]


  return (
    <main>
      <div className="ml-[16px] mr-[16px]  md:ml-[42px] md:mr-[80px]">
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

          {
            environmentPlansContent.map((envPlan)=>{
            return <ApplicationEnvPlans
            selectedCloudData={selectedCloudData}
            selectedCurrency={selectedCurrency}
            selectedRegion={selectedRegion}
            tierType={envPlan.tierType}
            title={envPlan.title}
            tierContent={envPlan.tierContent}
          /> 
           })
          }
        </PricingPlans>

        <div className="pt-[42px] pb-[42px] flex flex-col gap-[20px] border-b-2 border-solid border-gray-700">
          <h3 className="text-white text-[24px] font-[600]">Examples</h3>
          
          {
            examples.map((example)=>{
              return <>
              <h4 className="text-[16px] font-[400]">{example.title}</h4>
              <p className="text-[16px] font-[400] text-muted">{example.content}</p>
              </>
            })
          }
        </div>
      </div>
    </main>
  );
}
