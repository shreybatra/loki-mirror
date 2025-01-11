import Link from "next/link";

interface PricingFooterProps {
  label: string;
  label2?: string;
  span?: string;
  description: string | React.ReactNode;
  buttonLabel: string;
  linkUrl?: string;
  linkButton?: React.ReactNode;
}
export const PricingHorizontalCards = ({
  label,
  label2,
  span,
  description,
  buttonLabel,
  linkUrl,
  linkButton,
}: PricingFooterProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-between md:items-center md:px-10 px-5 my-12 py-8 mx-auto border-background">
      <div className="flex flex-col w-full justify-center ">
        <h1 className="flex text-start w-full font-medium">
          <span className="text-lg w-full md:text-2xl mr-1">
            {label}{" "}
            <span className="text-lg w-full md:text-2xl text-gradient font-semibold">
              {span}
            </span>{" "}
            {label2}
          </span>{" "}
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-between ">
          <div className="text-[16px] text-muted">{description}</div>
        </div>
      </div>
      <div className="flex min-w-fit pt-2 md:pt-0">
        {linkUrl && (
          <Link href={linkUrl}>
            <button className="button-gradient px-[18px] py-[9px] md:py-[12px] md:px-[24px]">
              {buttonLabel}
            </button>
          </Link>
        )}
        {linkButton}
      </div>
    </div>
  );
};
