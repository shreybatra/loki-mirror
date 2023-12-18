type PricingPlansTypes = {
  planName: string;
  children: React.ReactNode;
};

export const PricingPlans = ({ planName, children }: PricingPlansTypes) => {
  return (
    <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700 flex flex-col">
      <h3 className="text-white mb-[16px] text-[16px] font-[500] md:text-[20px]">{planName}</h3>
      <div >{children}</div>
    </div>
  );
};
