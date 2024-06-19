import Link from "next/link";

interface PricingFooterProps {
  label: string;
  span?: string;
  description: string;
  buttonLabel: string;
}
export const PricingHorizontalCards = ({ label, span, description, buttonLabel }: PricingFooterProps) => {
  return (
    <div className="w-full flex justify-between items-center md:px-10 px-5 my-12 py-8  mx-auto  border-background">
      <div className="flex flex-col w-full justify-center "> 
        <h2 className="flex text-start w-full font-[700]">
          <span className="text-[20px] w-full md:text-[28px] mr-1">{label}  <span className="text-[20px] w-full md:text-[32px] text-gradient font-[800]">
            {span}
          </span></span>{" "}
           
          </h2> 
        <div className="flex md:flex-row flex-col items-center justify-between ">
          <div className="text-[16px] text-muted">
            {description}
          </div>
        
        </div>
        
      </div>
      <div className="flex min-w-fit" >
        <Link href={"/contact"}
          className="relative group inline-block py-3 px-10 text-center text-gray-300 hover:text-gray-50 bg-gray-800  rounded-full overflow-hidden transition duration-200"
        >
          <div
            className="absolute top-0 right-full w-full h-full button-gradient transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
          ></div>
          <span className="relative !text-[16px]">{buttonLabel}</span>
        </Link>
      </div>
    </div>
  );
};
