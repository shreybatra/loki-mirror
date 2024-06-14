import Link from "next/link";

interface PricingFooterProps {
  label: string;
  span?: string;
  description: string;
  buttonLabel: string;
}
export const PricingHorizontalCards = ({ label, span, description, buttonLabel }: PricingFooterProps) => {
  return (
    <div className="w-full md:px-10 px-5 my-12 py-8  mx-auto  border-background">
      <div className="flex flex-col justify-center w-full gap-[24px] "> 
        <h2 className="flex text-start w-full font-[700]">
          <span className="text-[20px] w-full md:text-[28px] mr-1">{label}  <span className="text-[20px] w-full md:text-[32px] text-gradient font-[800]">
            {span}
          </span></span>{" "}
           
          </h2> 
        <div className="flex md:flex-row flex-col items-center justify-between ">
          <div className="text-[16px] md:max-w-[60%]  md:[16px]   text-muted">
            {description}
          </div>
          <Link href={"/contact"}
            className="relative group inline-block py-1.5 px-3 text-center text-gray-300 hover:text-gray-50 bg-gray-800  rounded-full overflow-hidden transition duration-200"
          >
            <div
              className="absolute top-0 right-full w-full h-full button-gradient transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
            ></div>
            <span className="relative !text-[16px]">{buttonLabel}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
