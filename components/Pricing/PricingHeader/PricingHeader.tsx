export const PricingHeader = () => {
  return (
    <div className="flex flex-col items-center w-[90%] mb-[107px] mt-[92px] ">
      <div className="flex flex-col items-center text-[22px] md:text-[32px] lg:text-[48px] font-[700]">
        <h2>
          Start for free, on
          <span className="text-gradient font-[800]"> Free tier limits</span>
        </h2>
        <h2 className="text-[22px] md:text-[32px] lg:text-[48px]">
          of each resource
        </h2>
      </div>
      <p className="text-muted">
        Cosmocloud bills each project on a monthly subscription model.
      </p>
      <div className="flex flex-rowstarted gap-[16px] mt-[56px]">
        <button className="button-dark border-background text-[16px] px-[24px] py-[12px] md:py-[16px]">
          Check Enterprise Plan
        </button>
        <button className="button-gradient text-[16px] px-[24px] py-[12px] md:py-[16px] ">
          Let’s get started
        </button>
      </div>
    </div>
  );
};
