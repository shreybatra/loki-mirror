import { PlanInfoHighlight } from "./PlanInfoHighlight";

interface PlanInfoBoxProps {
  header: string;
  price: string;
  list: string[];
}

export const PlanInfoBox: React.FC<PlanInfoBoxProps> = ({
  header,
  price,
  list,
}) => {
  return (
    <div className="planInfo--box">
      <div className="planInfoText">
        <h4 className="text-xs font-medium md:text-base md:font-bold planInfo--heading">{header}</h4>
        <p className=" text-xl md:text-2xl font-semibold md:font-bold planInfo--pricing">
          {price}{"/-"}
          <p className="md:text-xs planInfo--pricing--afterText">
            per month per project
          </p>{" "}
        </p>
        <button className="text-sm planInfo--button">Get Started</button>
      </div>
      <div className="text-xs md:text-sm font-normal  mb-[20px] ml-[16px]">
        {list.map((feature, idx) => {
          return <PlanInfoHighlight text={feature} key={idx} />;
        })}
      </div>
    </div>
  );
};
