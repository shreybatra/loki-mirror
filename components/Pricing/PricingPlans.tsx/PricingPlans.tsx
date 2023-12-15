import { PlanInfoHighlight } from "@/components/PricingDataTemplate/PlanInfoHighlight";

type PricingPlansTypes = {
  planName: string;
};

export const PricingPlans = ({ planName }) => {
  return (
    <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700 ">
      <h3 className="text-white text-xl  font-semibold mb-5">{planName}</h3>
      <p className="text-muted-800 text-base font-normal">
        You can integrate your own MongoDB cluster per project, Cosmocloud does
        not charge anything for this integration currently. In future, you will
        be able to spin up MongoDB Clusters directly from Cosmocloud.
      </p>
      <div className="mt-[16px]">
        <PlanInfoHighlight text={"Lorem Ipsum 1"} />
        <PlanInfoHighlight text={"Lorem Ipsum 1"} />
        <PlanInfoHighlight text={"Lorem Ipsum 1"} />
      </div>
    </div>
  );
};
