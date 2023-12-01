"use client";

import { LeadersData } from "@/constants/Leaders";
import React from "react";
import { AngelInvestorCard } from "../AngelInvestors/AngelInvestorCard";

export const Leaders = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-[8px] items-center">
        <h2 className="text-[12px] md:text-[16px] lg:text-[28px] font-[700]">
          Our Leaders
        </h2>
        <h3 className="text-gradient-2 text-[16px] md:text-[21px] lg:text-[32px] font-[700]">
          Our Secret Weapons. Our team of Experts
        </h3>
      </div>
      <div className="flex flex-wrap lg:gap-10 gap-4 justify-center w-full lg:max-w-[1024px]">
        {LeadersData.map(({ name, linkedinProfile, image, position }) => {
          return (
            <AngelInvestorCard
              key={crypto.randomUUID()}
              name={name}
              linkedinProfile={linkedinProfile}
              image={image}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
};
