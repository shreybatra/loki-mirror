"use client";
import React from "react";
import { MdChevronRight } from "react-icons/md";

import { FeaturesCollection } from "@/constants/Features";
import { FeatureDescription } from "./FeatureDescription";

export const Features = () => {
  const FeaturesAlignmentStyling = [
    "flex flex-col items-start gap-[36px] relative top-[66px] grow-1 w-1/2",
    "flex flex-col items-end gap-[38px] grow-1 w-1/2",
  ];

  return (
    <div className="flex flex-col gap-[24px] w-full">
      <div className="flex flex-col gap-[24px]">
        <h3 className="text-primary-pink uppercase tracking-[5px]">
          Our Features
        </h3>
        <div className="flex gap-[12px] justify-between items-center">
          <h2 className="text-[32px] font-[700]">
            Unlocking your potential with our capabilities
          </h2>
          <div className="cursor-pointer flex gap-2 items-center text-muted">
            <p>View All</p>
            <MdChevronRight />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] relative">
        <div className="flex gap-[20px] relative w-full md:w-2/3">
          {FeaturesCollection.slice(0, 2).map((features, featuresIndex) => {
            const className = FeaturesAlignmentStyling[featuresIndex];
            return (
              <div key={crypto.randomUUID()} className={className}>
                {features.map((feature, index) => (
                  <FeatureDescription
                    key={index}
                    name={feature.name}
                    description={feature.description}
                    icon={feature.icon}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <div key={crypto.randomUUID()} className="flex flex-row-reverse md:flex-col items-end gap-[20px] md:gap-[50px] relative top-[66px] md:top-[44px] w-full md:w-1/3">
          {FeaturesCollection[2].map((feature, index) => {
            const className = index === 0? "relative top-[-66px] md:top-0": "";
            return (
              <FeatureDescription
                key={index}
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
                className={className}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
