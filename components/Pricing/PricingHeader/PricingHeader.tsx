import SchedulingModal from "@/components/Scheduling/SchedulingModal";
import Link from "next/link";

export const PricingHeader = () => {
  return (
    <div className="text-center w-[90%] mb-[107px] mt-[92px] ml-[auto] mr-[auto]">
      <div className="text-[22px] md:text-[32px] lg:text-[48px] font-medium  md:font-[700] ">
        <h2>
          Start for free, on
          <span className="text-gradient font-[800]"> free tier</span>
        </h2>
        <h2 className="text-[22px] md:text-[32px] lg:text-[48px]">
          for each resource
        </h2>
      </div>
      <p className="text-muted font-semibold">
        Cosmocloud bills on a monthly subscription model for resources used per
        project
      </p>
      <div className="flex flex-col items-center gap-[12px] md:flex-row   text-center md:justify-center    mt-[56px]">
        {/* <Link href="/contact">
          <div className="button-dark border-background md:mr-[16px] text-[16px] px-[24px] py-[12px] md:py-[16px] w-48">
            Book a demo
          </div>
        </Link> */}
        <SchedulingModal className="button-dark border-background md:mr-[16px] text-[16px] px-[24px] py-[12px] md:py-[16px] w-48" />
        <button
          className="button-gradient text-[16px] px-[24px] py-[12px] md:py-[16px] w-48"
          onClick={() =>
            (window.location.href = "https://dashboard.cosmocloud.io/sign-up")
          }
        >
          Let’s get started
        </button>
      </div>
    </div>
  );
};
