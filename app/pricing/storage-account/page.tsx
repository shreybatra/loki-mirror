"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";

import { PlanInfoBox } from "@/components/PricingDataTemplate/PlanInfoBox";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { PricingTable } from "@/components/PricingDataTemplate/PricingTable";
import { VerticalNavbar } from "@/components/VerticalNavbar";
import { applicationEnvironmentData } from "@/constants/Pricing/index";

const Page = () => {
  return (
    <main>
      <div className="">
        <div className="pricingDataContainer">
          <h2 className="pricingDataTemplate--heading">Object Storage</h2>

          <div className="planBox">
            <h3 className="planBox--heading">Free Plan</h3>
            <p className="planBox--content">
              You can integrate your own MongoDB cluster per project, Cosmocloud
              does not charge anything for this integration currently. In
              future, you will be able to spin up MongoDB Clusters directly from
              Cosmocloud.
            </p>
            <div className="mt-[16px]">
              <PlanInfoHighlight text={"Lorem Ipsum 1"} />
              <PlanInfoHighlight text={"Lorem Ipsum 1"} />
              <PlanInfoHighlight text={"Lorem Ipsum 1"} />
            </div>
            <PricingTable />
          </div>
          <div className="planBox">
            <h3 className="planBox--heading">Standard Plan</h3>
            <p className="planBox--content">
              You can integrate your own MongoDB cluster per project, Cosmocloud
              does not charge anything for this integration currently. In
              future, you will be able to spin up MongoDB Clusters directly from
              Cosmocloud.
            </p>
          </div>
          <div className="planBox">
            <h3 className="planBox--heading">Shared Tier</h3>
            <p className="planBox--content">
              {/* {applicationEnvironmentData.shared.info} */}
            </p>
            <div className="flex flex-row gap-[24px] mt-[20px]">
              {/* {applicationEnvironmentData.shared.data.map((entry, idx) => {
                return (
                  <PlanInfoBox
                    header={"SHARED" + entry.tier}
                    price={entry.cost.inr}
                    list={entry.features}
                    key={idx}
                  />
                );
              })} */}
            </div>
          </div>
          <div className="planBox">
            <h3 className="planBox--heading">Low Tier</h3>
            <p className="planBox--content">
              You can integrate your own MongoDB cluster per project, Cosmocloud
              does not charge anything for this integration currently. In
              future, you will be able to spin up MongoDB Clusters directly from
              Cosmocloud.
            </p>
            <div className="flex flex-row gap-[24px] mt-[20px]">
              {/* {applicationEnvironmentData.low.data.map((entry, idx) => {
                return (
                  <PlanInfoBox
                    header={"LOW" + entry.tier}
                    price={entry.cost.inr}
                    list={entry.features}
                    key={idx}
                  />
                );
              })} */}
            </div>
          </div>
          <div className="planBox">
            <h3 className="planBox--heading">Power Tier</h3>
            <p className="planBox--content">
              You can integrate your own MongoDB cluster per project, Cosmocloud
              does not charge anything for this integration currently. In
              future, you will be able to spin up MongoDB Clusters directly from
              Cosmocloud.
            </p>
            <div className="flex flex-row gap-[24px] mt-[20px]">
              {/* {applicationEnvironmentData.power.data.map((entry, idx) => {
                return (
                  <PlanInfoBox
                    header={entry.tier}
                    price={entry.cost.inr}
                    list={entry.features}
                    key={idx}
                  />
                );
              })} */}
            </div>
          </div>
          <div className="planBox">
            <h3 className="planBox--heading">Boost Tier</h3>
            <p className="planBox--content">
              You can integrate your own MongoDB cluster per project, Cosmocloud
              does not charge anything for this integration currently. In
              future, you will be able to spin up MongoDB Clusters directly from
              Cosmocloud.
            </p>
            <div className="flex flex-row gap-[24px] mt-[20px]">
              {/* {applicationEnvironmentData.boost.data.map((entry, idx) => {
                return (
                  <PlanInfoBox
                    header={entry.tier}
                    price={entry.cost.inr}
                    list={entry.features}
                    key={idx}
                  />
                );
              })} */}
            </div>
          </div>

          <div className="planBox">
            <h3 className="planBox--heading--subheading">Examples</h3>
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
      </div>
    </main>
  );
};

export default Page;
