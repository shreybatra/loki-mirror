import { PlanInfoBox } from "@/components/PricingDataTemplate/PlanInfoBox";

type ApplicationEnvPlansProps = {
  selectedCloudData: any;
  selectedRegion: string;
  selectedCurrency: string;
  tierType: string;
  title: string;
  tierContent:string,
};

type FeatureMapTypes = {
  [key: string]: string[];
};

const featureMap: FeatureMapTypes = {
  S0: ["Shared CPU", "Shared RAM", "Up to 1,000 API calls per day"],
  S1: ["Shared Resources", "Up to 3,000 API calls per day"],
  S2: ["Shared Resources", "Up to 5,000 API calls per day"],
  L0: ["Dedicated CPU", "Dedicated RAM", "Unlimited API calls"],
  L1: ["x3 Instances", "Higher Availability"],
  L2: ["x5 Instances", "Intra region availability"],
  L3: ["x7 Instances", "Intra region availability"],
  P0: ["x2 vCPUs", "2 RAM", "Unlimited API calls"],
  P1: ["h"],
  P2: ["i"],
  P3: ["i"],
  B0: [
    "x4 CPU than Low Tier",
    "x4 RAM than Low Tier",
    "Unlimited API calls",
  ],
  B1: ["k"],
  B2: ["l"],
  B3: ["l"],
};

export const ApplicationEnvPlans = ({
  selectedCloudData,
  selectedRegion,
  selectedCurrency,
  tierType,
  title,
  tierContent,
}: ApplicationEnvPlansProps) => {
  const regionPricing = selectedCloudData.find(
    (region: any) => region.region === selectedRegion
  );

  return (
    <div className="pb-[42px] border-solid border-gray-700 flex flex-col gap-[20px]">
      <h3 className="text-[14px] font-[700] md:text-[20px] text-white">{title}</h3>
      <p className="text-[12px] md:text-[16px] text-muted">{tierContent}</p>
      <div className="flex flex-row  gap-[24px] test">
        {regionPricing[tierType].data.map((entry: any, idx: any) => {
          return (
            <PlanInfoBox
              tier={entry.tier}
              displayName={entry.displayName}
              price={entry.cost[selectedCurrency]}
              currency={selectedCurrency}
              features={featureMap[entry.tier]}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};
