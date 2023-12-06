"use client";

import "@/components/PricingDataTemplate/pricingDataTemplate.css";

import { PlanContext } from "@/context/PlanContext"
import PlanDropdown from "@/components/PricingDataTemplate/PlanDropdown";
import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";
import { PricingTable } from "@/components/PricingDataTemplate/PricingTable";
import { databasesPricingData } from "@/constants/Pricing";
import { useContext } from "react";

const Page = () => {
    const { plan, setPlan } = useContext(PlanContext);
    const databasesPriceDisplay:any = databasesPricingData[plan.cloud].find((region) => region.region == plan.region)

    return (
        <main>
            <div className="ml-[16px] mr-[16px]  md:ml-[42px] md:mr-[80px]">
                <h2 className="text-white text-2xl font-bold">Databases</h2>

                <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700">
                    <h3 className="text-white text-xl font-semibold mb-5">Free Plan</h3>
                    <p className="text-muted-800 text-base font-normal">
                        You have selected cloud as {plan.cloud} and region as {databasesPriceDisplay.region} and cost as {databasesPriceDisplay.cost[plan.currency]}
                    </p>
                    <div className="mt-[16px]">
                        <PlanInfoHighlight text={"Lorem Ipsum 1"} />
                        <PlanInfoHighlight text={"Lorem Ipsum 1"} />
                        <PlanInfoHighlight text={"Lorem Ipsum 1"} />
                    </div>
                </div>
                <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700">
                    <h3 className="text-white text-xl font-semibold mb-5">Standard Plan</h3>
                    <PlanDropdown />
                    <p className="text-muted-800 text-base font-normal">
                        You have selected cloud as {plan.cloud} and region as {databasesPriceDisplay.region} and cost as {databasesPriceDisplay.cost[plan.currency]}
                    </p>
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
            </div >
        </main >

    );
};

export default Page;
