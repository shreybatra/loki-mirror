import { PlanInfoBox } from "@/components/PricingDataTemplate/PlanInfoBox";
import { type } from "os";

type ApplicationEnvPlansProps = {
  selectedCloudData: any;
  selectedRegion: string;
  selectedCurrency: string;
  tierType: string;
  title: string;
};

type FeatureMapTypes = {
  [key: string]: string[];
};

const featureMap: FeatureMapTypes = {
  S0: ["Shared CPU", "Shared RAM", "Up to 1,000 API calls per day"],
  S1: ["Shared Resources", "Up to 3,000 API calls per day"],
  S2: ["Shared Resources", "Up to 5,000 API calls per day"],
  "LOW 0": ["Dedicated CPU", "Dedicated RAM", "Unlimited API calls"],
  "LOW 1": ["x3 Instances", "Higher Availability"],
  "LOW 2": ["x5 Instances", "Intra region availability"],
  "LOW 3": ["x7 Instances", "Intra region availability"],
  "POWER 0": ["x2 vCPUs", "2 RAM", "Unlimited API calls"],
  "POWER 1": ["h"],
  "POWER 2": ["i"],
  "POWER 3": ["i"],
  "BOOST 0": [
    "x4 CPU than Low Tier",
    "x4 RAM than Low Tier",
    "Unlimited API calls",
  ],
  "BOOST 1": ["k"],
  "BOOST 2": ["l"],
  "BOOST 3": ["l"],
};

export const ApplicationEnvPlans = ({
  selectedCloudData,
  selectedRegion,
  selectedCurrency,
  tierType,
  title,
}: ApplicationEnvPlansProps) => {
  const regionPricing = selectedCloudData.find(
    (region: any) => region.region === selectedRegion
  );

  return (
    <div className="pb-[42px] border-solid border-gray-700">
      <h3 className="text-[20px]">{title}</h3>
      <div className="flex flex-row  gap-[24px] mt-[20px] test">
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
