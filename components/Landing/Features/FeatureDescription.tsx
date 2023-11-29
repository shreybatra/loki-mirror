"use client";

import Image from "next/image";
import React from "react";

interface FeatureDescriptionProps {
  icon: string;
  name: string;
  description: string;
  className?: string;
}

export const FeatureDescription = ({
  icon,
  name,
  description,
  className,
}: FeatureDescriptionProps) => {
  return (
    <div
      className={`border-background flex flex-col gap-[16px] p-[12px] feature-description w-full h-auto h-[195px] md:h-[250px] lg:h-[230px] xl:h-[220px] min-h-fit ${className}`}
    >
      <div>
        <Image src={icon} alt={name} width={32} height={32} />
      </div>
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-[700]">
          {name}
        </h2>
        <p className="text-muted text-[12px] md:text-[14px] lg:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};
