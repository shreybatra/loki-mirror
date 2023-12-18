import Link from "next/link";
import { PlanInfoHighlight } from "./PlanInfoHighlight";

interface PlanInfoBoxProps {
  displayName: string;
  tier: string;
  price: number;
  features: string[];
  currency: string;
}

export const PlanInfoBox: React.FC<PlanInfoBoxProps> = ({
  displayName,
  tier,
  price,
  currency,
  features,
}) => {
  const locale = currency === "USD" ? "en-US" : "en-IN";
  return (
    <div className="planInfo--box">
      <div className="planInfoText">
        <h4 className="text-xs md:text-base text-primary-pink tracking-widest">
          ({tier}) {displayName}
        </h4>
        <div className="text-xl md:text-2xl">
          {Intl.NumberFormat(locale, {
            maximumFractionDigits: 4,
            minimumFractionDigits: 0,
            style: "currency",
            currency: currency,
          }).format(price)}
          /-
          <p className="text-sm text-muted">per project per hour</p>
        </div>
        <Link
          className="planInfo--button text-center"
          href="https://dashboard.cosmocloud.io/sign-up"
          target="_blank"
        >
          <div className="text-sm ">Get Started</div>
        </Link>
      </div>
      <div className="mb-[20px] ml-[16px]">
        {features.map((feature, idx) => {
          return <PlanInfoHighlight text={feature} key={idx} />;
        })}
      </div>
    </div>
  );
};
