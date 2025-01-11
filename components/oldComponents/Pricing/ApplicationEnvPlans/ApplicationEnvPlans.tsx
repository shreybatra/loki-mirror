import { PlanInfoBox } from "@/components/oldComponents/PricingDataTemplate/PlanInfoBox";

type ApplicationEnvPlansProps = {
  selectedCloudData: any;
  selectedRegion: string;
  selectedCurrency: string;
  tierType: string;
  title: string;
  tierContent: string;
};

type FeatureMapTypes = {
  [key: string]: string[];
};

const featureMap: FeatureMapTypes = {
  S0: ["Shared CPU", "Shared RAM", "Up to 1,000 API calls per day"],
  S1: [
    "Shared Resources",
    "Up to 3,000 API calls per day",
    "Greater Availability",
  ],
  S2: [
    "Everything in S1",
    "Up to 5,000 API calls per day",
    "Intended for personal production use",
  ],
  L0: ["Dedicated CPU", "Dedicated RAM", "Unlimited API calls"],
  L1: ["x3 instances than L0", "Higher availability", "Higher RPS throughput"],
  L2: [
    "x5 instances than L0",
    "Intra region availability",
    "Downtime protection",
  ],
  L3: [
    "x7 instances than L0",
    "Intra region availability",
    "Downtime protection",
  ],
  P0: ["x2 CPU than L0", "x2 RAM of L0", "For small scale apps"],
  P1: ["x3 instances than P0", "Higher availability", "For medium scale apps"],
  P2: [
    "x5 instances than P0",
    "intra region availability",
    "For medium scale apps",
  ],
  P3: ["x7 instances than P0", "x2 RAM of L0", "For large scale apps"],
  B0: ["Heavy CPU workloads", "x4 resources of L0", "For small scale apps"],
  B1: ["x3 instances than B0", "High availability", "For medium scale apps"],
  B2: [
    "x5 instances than B0",
    "Intra region availability",
    "For medium scale apps",
  ],
  B3: [
    "x7 instances than B0",
    "Intra region availability",
    "For large scale apps",
  ],
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
      <h3 className="text-[14px] font-[700] md:text-[20px] text-white">
        {title}
      </h3>
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
