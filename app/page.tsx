import CosmocloudIconBackground from "@/assets/svg/CosmocloudIconBackground.svg";

import React from "react";

import { Carousal } from "@/components/newComponents/Deploy/Carousal";
import { Partners } from "@/components/oldComponents/Landing";
import { FeaturesGrid } from "@/components/newComponents/Deploy/FeaturesGrid";
import { Pointers } from "@/components/newComponents/Deploy/Pointers";
import { DevopsCostly } from "@/components/newComponents/Deploy/DevopsCostly";
import Image from "next/image";
import { DeployPricingPlans } from "@/components/newComponents/Deploy/Pricing Plans";
import { ComputePricing } from "@/components/newComponents/Deploy/ComputePricing";
import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";
import { VideoComponent } from "@/components/newComponents/Deploy/VideoComponent";
import { NewDefaultPage } from "@/components/NewDefaultPage";

export default function Page() {
  return (
    <NewDefaultPage>
      <div className="flex flex-col items-center gap-[120px] md:gap-[190px] z-10">
        <div className="space-y-4 md:mt-52 mt-20 w-full md:px-40 px-4 text-white animate-slide-up tracking-tighter">
          <div className="md:text-6xl text-2xl font-medium w-fit space-y-2">
            <div className="w-full">Deploy, scale & monitor</div>
            <div className="text-gradient w-fit md:text-8xl text-4xl">
              Superfast!
            </div>
          </div>
          <div className="md:text-2xl text-lg text-muted-foreground md:w-[70%]">
            Cosmocloud Deploy is your own Auto-Devops tool to easily deploy your
            applications on the cloud of your choice.
          </div>

          <SchedulingModal
            btnText="Schedule a demo"
            cName="button-gradient px-4 py-2"
          />
        </div>

        <Carousal />
        <DevopsCostly />
        <Pointers />
        <FeaturesGrid />

        <VideoComponent />
        <DeployPricingPlans />
        <ComputePricing />

        {/* <div className="flex flex-col items-center gap-[90px] w-[90%] md:gap-[190px]">
        <div className="flex items-center flex-col mt-6 gap-[45px]">
          <Header />
        </div>
        <Features />
        <AutoDevops />
        <FAQSection />
        
      </div> */}
        <div className="w-full">
          <Partners />
        </div>
        <div className=" hidden md:block absolute inset-0 bg-cover bg-no-repeat -z-10 opacity-30 w-screen">
          <div className="flex w-full justify-end h-screen mt-12">
            <Image
              src={CosmocloudIconBackground}
              alt=""
              className="block -z-10 w-fit"
            />
          </div>
        </div>
      </div>
    </NewDefaultPage>
  );
}
