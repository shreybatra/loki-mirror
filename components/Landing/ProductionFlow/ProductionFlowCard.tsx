import Image from "next/image";
import React from "react";
import ProductImage from "@/assets/png/sde.png";

interface ProductionFlowCardProps {
  title: string;
  description: string;
}

export const ProductionFlowCard = ({title, description}: ProductionFlowCardProps) => {
  return (
    <div className="production-flow-card flex flex-col w-[300px] h-full">
      <div className="product-image">
        <Image src={ProductImage} alt="image" />
      </div>
      <div className="flex flex-col p-[8px] gap-[8px] items-center">
        <h3 className="text-[20px] font-[700]">{title}</h3>
        <p className="text-center text-[14px] font-[400] line-clamp">
          {description}
        </p>
      </div>
    </div>
  );
};
