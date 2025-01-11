import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";
export const PricingHeader = () => {
  return (
    <div className="text-center w-[90%] mb-[107px] mt-[92px] ml-[auto] mr-[auto]">
      <div className="flex justify-center">
        <p className="px-4 py-2 button-dark border-background font-semibold w-fit">
          Cosmocloud Build
        </p>
      </div>
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
        <button
          className="button-gradient text-[16px] px-[24px] py-[12px] md:py-[16px] w-48"
          onClick={() =>
            (window.location.href = "https://dashboard.cosmocloud.io/sign-up")
          }
        >
          Let’s get started
        </button>
        <SchedulingModal cName="button-dark border-background md:mr-[16px] text-[16px] px-[24px] py-[12px] md:py-[16px] w-48" />
      </div>
    </div>
  );
};
