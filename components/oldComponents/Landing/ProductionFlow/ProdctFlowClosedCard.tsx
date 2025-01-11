import Image from "next/image";
import ProductImage from "@/assets/png/sde.png";
import React from "react";

interface ProductionFlowClosedCardProps {
  title: string;
  description: string;
  showBorder?: boolean;
  displayMd?: boolean;
}

export const ProductionFlowClosedCard = ({
  title,
  description,
  showBorder,
}: ProductionFlowClosedCardProps) => {
  return (
    <div className="w-60 border-1 border-white">
      <div className="flex flex-col w-[290px] md:w-[170px] lg:w-[280px] h-full before:content-[''] md:before:content-none">
        <div className="flex flex-col p-[8px] gap-[8px]">
          <h3 className=" lg:text-[20px] font-[700] md: text-[14px] text-start">
            {title}
          </h3>
          <p className="lg:text-[14px] font-[400] line-clamp  md: text-[12px] text-start">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
