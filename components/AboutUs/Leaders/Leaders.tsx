"use client";

import { LeaderCard } from "./LeaderCard";
import { LeadersData } from "@/constants/Leaders";
import React from "react";

export const Leaders = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-[8px] items-center">
        <h2 className="text-[12px] md:text-[16px] lg:text-[28px] font-[700]">Our Leaders</h2>
        <h3 className="text-gradient-2 text-[16px] md:text-[21px] lg:text-[32px] font-[700]">
          Our Secret Weapons. Our team of Experts
        </h3>
      </div>
      <div className="flex flex-wrap gap-[20px] justify-center">
        {LeadersData.map(({ name, linkedinProfile, image, position }) => {
          return (
            <LeaderCard
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
