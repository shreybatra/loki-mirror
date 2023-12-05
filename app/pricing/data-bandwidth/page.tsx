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
            <div className="pricingDataContainer">
                <h2 className="pricingDataTemplate--heading">
                    Data Bandwidth
                </h2>

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
            </div>
        </main>
    );
};

export default Page;
