import Image from "next/image";
import ProductImage from "@/assets/png/sde.png";
import React from "react";

interface ProductionFlowCardProps {
  title: string;
  description: string;
  type?: "pink" | "purple";
  showBorder?: boolean;
  displayMd?: boolean;
}

export const ProductionFlowCard = ({
  title,
  description,
  type,
  showBorder,
  displayMd,
}: ProductionFlowCardProps) => {
  return (
    <div className="screenshot-background p-2">
      <div className="flex flex-col w-[30%] md:w-[170px] lg:w-[280px] h-full">
        <div className={`product-image`}>
          <Image src={ProductImage} alt="image" />
        </div>
        <div className="flex flex-col p-[8px] gap-[8px] items-center md: items-baseline">
          <h3 className=" lg:text-[16px] font-[700] md: text-[14px] text-start">
            {title}
          </h3>
          <p className="lg:text-[12px] font-[400] line-clamp  md: text-[12px] text-start">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
