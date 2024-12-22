import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import CosmoBased from "./pricing-tabs/CosmoBased";
import "@/app/build/pricing/pricing.css";
import { PricingHorizontalCards } from "../PricingDataTemplate/PricingHorizontalCards";

import { Coins } from "lucide-react";
const Pricing = () => {
  return (
    <div className="flex flex-col gap-[24px] w-full mt-12">
      <div className="flex flex-col gap-[24px]">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-start text-[12px] md:text-[16px] md:text-center">
          Our Features
        </h3>
        <div className="flex flex-row gap-[12px] justify-between w-full items-center md:flex-col">
          <Tabs
            defaultValue="account"
            className="flex flex-col items-center justify-center"
          >
            <TabsList className="grid w-[400px] p-3 tab grid-cols-2">
              <TabsTrigger
                className=" text-base rounded-[10px]"
                value="account"
              >
                <Coins /> Cosmocloud Based
              </TabsTrigger>
              <TabsTrigger
                className=" text-base rounded-[10px]"
                value="password"
              >
                Enterprise based
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="cursor-pointer flex gap-2 items-center text-muted">
                <CosmoBased />
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="cursor-pointer flex gap-2 items-center text-muted"></div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-[100px]">
          <PricingHorizontalCards
            label="Get started with"
            span="Free Tier"
            description={
              <>
                <ul className="flex gap-8 mt-5">
                  <li>Unlimited app services</li>
                  <li className=" list-disc">Unlimited CPUs</li>
                  <li className=" list-disc">30+ days logs</li>
                </ul>
              </>
            }
            buttonLabel={"Start for free"}
            linkUrl="https://dashboard.cosmocloud.io/sign-up"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
