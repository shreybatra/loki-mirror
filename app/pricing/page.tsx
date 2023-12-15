"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";

import { PlanContext } from "@/context/PlanContext";
import PlanDropdown from "@/components/PricingDataTemplate/PlanDropdown";
import { PlanInfoBox } from "@/components/PricingDataTemplate/PlanInfoBox";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { applicationEnvironmentData } from "@/constants/Pricing/index";
import { useContext } from "react";

export default function Page() {
  const { plan, setPlan } = useContext(PlanContext);
  const selectedCloudData: any = applicationEnvironmentData[plan.cloud]
  return (
    <main>
      <div className="ml-[16px] mr-[16px]  md:ml-[42px] md:mr-[80px]">
        <h2 className="text-white text-2xl font-medium md:font-bold">
          Application Environment
        </h2>

        <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700 ">
          <h3 className="text-white text-xl  font-semibold mb-5">Free Plan</h3>
          <p className="text-muted-800 text-base font-normal">
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In future,
            you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
          <div className="mt-[16px]">
            <PlanInfoHighlight text={"Lorem Ipsum 1"} />
            <PlanInfoHighlight text={"Lorem Ipsum 1"} />
            <PlanInfoHighlight text={"Lorem Ipsum 1"} />
          </div>
        </div>
        
        <div className="pt-[42px] pb-[42px]">
          <h3 className="planBox--heading">Standard Plan</h3>
          <p className="text-muted-800 text-base font-normal">
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In future,
            you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
          <PlanDropdown />
        </div>
        <div className="pb-[42px] border-b-2 border-solid border-gray-700">
          <h3 className="planBox--heading">Shared Tier</h3>
          <div className="flex flex-row  gap-[24px] mt-[20px] test">
            {selectedCloudData
              .find((region: any) => region.region === plan.region)
              .shared.data.map((entry: any, idx: any) => (
                <PlanInfoBox
                  header={entry.tier}
                  price={entry.cost[plan.currency]}
                  list={entry.features}
                  key={idx}
                />
              ))}
          </div>
        </div>

        <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700">
          <h3 className="planBox--heading">Low Tier</h3>
          <p className="text-muted-800 text-base font-normal">
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In future,
            you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
          <div className="flex flex-row gap-[24px] mt-[20px] test">
            {selectedCloudData
              .find((region: any) => region.region === plan.region)
              .low.data.map((entry: any, idx: any) => (
                <PlanInfoBox
                  header={entry.tier}
                  price={entry.cost.inr}
                  list={entry.features}
                  key={idx}
                />
              ))}
          </div>
        </div>

        <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700">
          <h3 className="planBox--heading">Power Tier</h3>
          <p className="text-muted-800 text-base font-normal">
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In
            future, you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
          <div className="flex flex-row gap-[24px] mt-[20px]">
            {selectedCloudData
              .find((region: any) => region.region === plan.region)
              .power.data.map((entry: any, idx: any) => (
                <PlanInfoBox
                  header={entry.tier}
                  price={entry.cost.inr}
                  list={entry.features}
                  key={idx}
                />
              ))}
          </div>
        </div>
        <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700">
          <h3 className="planBox--heading">Boost Tier</h3>
          <p className="text-muted-800 text-base font-normal">
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In
            future, you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
          <div className="flex flex-row gap-[24px] mt-[20px]">
            {selectedCloudData
              .find((region: any) => region.region === plan.region)
              .boost.data.map((entry: any, idx: any) => (
                <PlanInfoBox
                  header={entry.tier}
                  price={entry.cost[plan.currency]}
                  list={entry.features}
                  key={idx}
                />
              ))}
          </div>
        </div>
        <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700">
          <h3 className="text-white text-base font-semibold">Examples</h3>
          <h4>Example 1</h4>

          <p>
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In
            future, you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
          <h4>Example 2</h4>
          <p>
            You can integrate your own MongoDB cluster per project, Cosmocloud
            does not charge anything for this integration currently. In
            future, you will be able to spin up MongoDB Clusters directly from
            Cosmocloud.
          </p>
        </div>

      </div>
    </main>
  );
}
