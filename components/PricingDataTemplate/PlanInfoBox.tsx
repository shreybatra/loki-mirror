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
        <h4 className="planInfo--heading">{header}</h4>
        <p className="planInfo--pricing">
          {price}{" "}
          <span className="planInfo--pricing--afterText">
            per month per project
          </span>{" "}
        </p>
        <button className="planInfo--button">Get Started</button>
      </div>
      <div className="planInfo--features ">
        {list.map((feature, idx) => {
          return <PlanInfoHighlight text={feature} key={idx} />;
        })}
      </div>
    </div>
  );
};
