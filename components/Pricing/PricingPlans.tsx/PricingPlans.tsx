type PricingPlansTypes = {
  planName: string;
  children: React.ReactNode;
};

export const PricingPlans = ({ planName, children }: PricingPlansTypes) => {
  return (
    <div className="pt-[42px] pb-[42px] border-b-2 border-solid border-gray-700 ">
      <h3 className="text-white text-xl  font-semibold mb-5">{planName}</h3>
      <div className="text-muted-800 text-base font-normal">{children}</div>
    </div>
  );
};
