import Image from "next/image";
import React from "react";
import ProductImage from "@/assets/png/sde.png";

interface ProductionFlowCardProps {
  title: string;
  description: string;
  type?: "pink" | "purple";
  showBorder?: boolean;
}

export const ProductionFlowCard = ({
  title,
  description,
  type,
  showBorder,
}: ProductionFlowCardProps) => {
  return (
    <div
      data-color={type}
      className="production-flow-card flex flex-col w-[290px] md:w-[170px] lg:w-[280px] h-full before:content-[''] md:before:content-none"
    >
      {showBorder && (
        <div className="w-[700px] production-flow-border md:hidden"></div>
      )}
      <div className="product-image">
        <Image src={ProductImage} alt="image" />
      </div>
      <div className="flex flex-col p-[8px] gap-[8px] items-center">
        <h3 className="text-[14px] lg:text-[20px] font-[700]">{title}</h3>
        <p className="text-center text-[10px] lg:text-[14px] font-[400] line-clamp">
          {description}
        </p>
      </div>
    </div>
  );
};
