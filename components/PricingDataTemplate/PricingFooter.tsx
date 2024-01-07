import Link from "next/link";

export const PricingFooter = () => {
  return (
    <div className="flex flex-col items-center gap-[24px] pt-[62px]">
      <div className="font-[700]">
        <h2 className="flex text-center gap-[8px]">
          <span className="text-[20px] md:[28px]">Looking for</span>{" "}
          <span className="text-[20px] md:[32px] text-gradient font-[800]">
            enterprise plans?
          </span>
        </h2>
      </div>{" "}
      <div className="text-[16px] md:[16px] text-center text-muted">
        Interested in learning about pricing, reach out to us and upgrade your
        free tier.
      </div>
      <div className="text-center">
        <Link href={"/contact"} className="planInfo--button text-[16px]">
          Contact sales{" "}
        </Link>{" "}
      </div>
    </div>
  );
};
