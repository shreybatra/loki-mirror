import "./pricingDataTemplate.css";

import { PlanInfoBox } from "./PlanInfoBox";
import { PlanInfoHighlight } from "./PlanInfoHighlight";
import { PricingFooter } from "./PricingFooter";
import { PricingTable } from "./PricingTable";

interface PricingDataTemplateProps {
  heading: string;
}
export const PricingDataTemplate: React.FC<PricingDataTemplateProps> = ({
  heading,
}) => {
  return (
    <div className="pricingDataContainer">
      <h2 className="pricingDataTemplate--heading"> {heading} </h2>

      <div className="planBox">
        <h3 className="planBox--heading">Free Plan</h3>
        <p className="planBox--content">
          You can integrate your own MongoDB cluster per project, Cosmocloud
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
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
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
        </p>
      </div>
      <div className="planBox">
        <h3 className="planBox--heading">Shared Tier</h3>
        <p className="planBox--content">
          You can integrate your own MongoDB cluster per project, Cosmocloud
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
        </p>
        <div className="flex flex-row gap-[24px] mt-[20px]">
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
        </div>
      </div>
      <div className="planBox">
        <h3 className="planBox--heading">Low Tier</h3>
        <p className="planBox--content">
          You can integrate your own MongoDB cluster per project, Cosmocloud
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
        </p>
        <div className="flex flex-row gap-[24px] mt-[20px]">
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
        </div>
      </div>
      <div className="planBox">
        <h3 className="planBox--heading">Power Tier</h3>
        <p className="planBox--content">
          You can integrate your own MongoDB cluster per project, Cosmocloud
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
        </p>
        <div className="flex flex-row gap-[24px] mt-[20px]">
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
        </div>
      </div>
      <div className="planBox">
        <h3 className="planBox--heading">Boost Tier</h3>
        <p className="planBox--content">
          You can integrate your own MongoDB cluster per project, Cosmocloud
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
        </p>
        <div className="flex flex-row gap-[24px] mt-[20px]">
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
          <PlanInfoBox header={""} price={""} list={""} />
        </div>
      </div>

      <div className="planBox">
        <h3 className="planBox--heading--subheading">Examples</h3>
        <h4>Example 1</h4>

        <p>
          You can integrate your own MongoDB cluster per project, Cosmocloud
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
        </p>
        <h4>Example 2</h4>
        <p>
          You can integrate your own MongoDB cluster per project, Cosmocloud
          does not charge anything for this integration currently. In future,
          you will be able to spin up MongoDB Clusters directly from Cosmocloud.
        </p>
      </div>
    </div>
    
  );
};
