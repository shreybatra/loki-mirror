import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";
import Link from "next/link";
import { IoRocketOutline } from "react-icons/io5";

interface PricingCardsProps {
  heading: string;
  price: string;
  color?: string;
  features: IFeatures[];
  isMontly?: boolean;
  custom?: boolean;
  tagLine: string;
}
interface IFeatures {
  desc: any;
  isExcluded?: boolean;
}

const PricingCard = ({
  heading,
  price,
  color,
  isMontly,
  features,
  custom,
  tagLine,
}: PricingCardsProps) => {
  return (
    <div className="md:mb-0 md:w-[360px] w-full">
      <div className="max-w-sm lg:max-w-none border-background flex flex-col gap-[16px] p-[12px] feature-description mx-auto pt-10 px-10 pb-8 rounded-3xl">
        <div className="text-center">
          <h1
            className={`whitespace-nowrap font-medium ${
              custom ? "text-3xl text-gradient font-semibold" : "text-3xl"
            }`}
          >
            {heading}
          </h1>
          <div className="my-1 text-gray-400">{tagLine}</div>
        </div>
        <div className="text-center mb-3">
          <SchedulingModal
            btnText="Contact sales"
            cName="button-dark text-gradient border-background px-[18px] py-[9px] md:py-[12px] md:px-[24px]"
          />
        </div>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 mb-4 items-center">
              <div className="w-[26px] max-w-[26px]">
                <IoRocketOutline
                  width={"26px"}
                  height={"26px"}
                  className="fill-current w-[26px] max-w-[26px] text-gray-200"
                />
              </div>
              <span
                className={`${
                  feature.isExcluded ? "text-gray-500" : "text-gray-100"
                }`}
              >
                {feature.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
