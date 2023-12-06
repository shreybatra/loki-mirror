export const PricingFooter = () => {
  return (
    <div className="pricing--footer items-center gap-[24px] p-[62px]">
      <div className=" text-xl  md:text-2xl font-[700] pb-[24px]">
        <h2 className="text-center">
          Still have,{" "}
          <span className="text-2xl md:text-3xl text-gradient font-[800]">Questions ?</span>
        </h2>
      </div>{" "}
      <p className="text-xs   text-muted text-center">
        Interested in learning about pricing, reach out to us and upgrade your
        free tier{" "}
      </p>{" "}
      <div className="text-center">
        <button className="planInfo--button">Contact sales </button>{" "}
      </div>
    </div>
  );
};
