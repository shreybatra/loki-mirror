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
        <div>
          <div className="text-[20px] font-medium md:text-[24px]">
            {Intl.NumberFormat(locale, {
              maximumFractionDigits: 4,
              minimumFractionDigits: 0,
              style: "currency",
              currency: currency,
            }).format(price)}
            <span className="text-muted">/-</span>
          </div>
          <p className="text-[12px] font-[400] text-muted md:[14px]">
            per project per hour
          </p>
        </div>
        <Link
          className="planInfo--button text-center"
          href="https://dashboard.cosmocloud.io/sign-up"
          target="_blank"
        >
          <div className="text-[14px] font-[500] ">Get Started</div>
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
