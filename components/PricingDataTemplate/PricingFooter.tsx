export const PricingFooter = () => {
  return (
    <div className="flex flex-col items-center gap-[24px] pt-[62px]">
      <div className="font-[700]">
        <h2 className="flex text-center gap-[8px]">
          <span className="text-[20px] md:[28px]">
          Still have a,
          </span>
          <span className="text-[20px] md:[32px] text-gradient font-[800]"> Question?</span>
        </h2>
      </div>{" "}
      <div className="text-[12px] md:[14px] text-center text-muted">
        Interested in learning about pricing, reach out to us and upgrade your
        free tier.
      </div>
      <div className="text-center">
        <button className="planInfo--button text-[16px]">Contact sales </button>{" "}
      </div>
    </div>
  );
};
