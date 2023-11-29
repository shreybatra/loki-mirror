import Image from "next/image";
import ProductImage from "@/assets/png/sde.png";
import React from "react";

interface ProductionFlowCardProps {
  title: string;
  description: string;
  type?: "pink" | "purple";
  showBorder?: boolean;
  displayMd?:boolean
}

export const ProductionFlowCard = ({
  title,
  description,
  type,
  showBorder,
  displayMd
}: ProductionFlowCardProps) => {
  return (
    <div
      data-color={type}
      className="production-flow-card flex flex-col w-[290px] md:w-[170px] lg:w-[280px] h-full before:content-[''] md:before:content-none"
    >
      {showBorder && (
        <div className="w-[700px] production-flow-border md:hidden"></div>
      )}
      <div className={`product-image`}>
        <Image src={ProductImage} alt="image" />
      </div>
      <div className="flex flex-col p-[8px] gap-[8px] items-center md: items-baseline">
        <h3 className="text-[14px] lg:text-[20px] font-[700] md: text-[14px] text-start">{title}</h3>
        <p className="text-center text-[10px] lg:text-[14px] font-[400] line-clamp  md: text-[12px] text-start">
          {description}
        </p>
      </div>
    </div>
  );
};
