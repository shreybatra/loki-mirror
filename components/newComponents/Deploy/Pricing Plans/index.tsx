import { PricingSection } from "@/components/oldComponents/Pricing/PricingSection";
import { PricingHorizontalCards } from "@/components/oldComponents/PricingDataTemplate/PricingHorizontalCards";
import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";

const plans = [
  {
    title: "Starter",
    popular: 0,
    price: 100,
    priceSubtitle: "+ compute cost",
    description: "For startups and small teams",
    buttonText: "Book a demo",
    benefitList: [
      "3 App Services",
      "Manage upto 12 CPUs scale",
      "7 days log retention",
      <span className="text-gradient font-bold" key={1}>
        Unlimited users
      </span>,
      "Standard support",
    ],
  },
  {
    title: "Standard",
    popular: 1,
    price: 500,
    priceSubtitle: "+ compute cost",
    description: "For mid size companies with higher traffic",
    buttonText: "Book a demo",
    benefitList: [
      "10 App Services",
      "Manage upto 100 CPUs scale",
      "30 days log retention",
      <span className="text-gradient font-bold" key={1}>
        Unlimited users
      </span>,
      "Dedicated support",
    ],
  },
  {
    title: "Plus",
    popular: 0,
    price: 1000,
    priceSubtitle: "+ compute cost",
    description: "For large teams working with numerous services and scale.",
    buttonText: "Book a demo",
    benefitList: [
      "25 App Services",
      "Manage upto 250 CPUs scale",
      <span className="text-gradient font-bold" key={1}>
        Longer log retention
      </span>,
      <span className="text-gradient font-bold" key={2}>
        24*7 support
      </span>,
    ],
  },
];

export const DeployPricingPlans = () => {
  return (
    <div className="w-full md:px-40 px-8" id="pricing-plans">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px]">
          Pricing Plans
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Flat pricing for your{" "}
            <span className="text-gradient">entire tech team</span>
          </h2>
          <p className="text-muted-foreground text-[14px] md:text-[16px] text-center">
            It costs less than hiring{" "}
            <span className="text-gradient font-bold">1 Devops engineer</span>!
          </p>
        </div>
      </div>
      <div className="flex w-full md:flex-row gap-12 flex-col justify-between items-center">
        <PricingSection plans={plans} />
      </div>
      <PricingHorizontalCards
        label="Looking for"
        span="unlimited scale?"
        description="Reach out to us and scale to a thousand instances!"
        buttonLabel={"Book a demo"}
        // linkUrl="https://cosmocloud.io/contact"
        linkButton={
          <SchedulingModal
            btnText="Schedule a demo"
            cName="button-gradient px-4 py-2"
          />
        }
      />
    </div>
  );
};
