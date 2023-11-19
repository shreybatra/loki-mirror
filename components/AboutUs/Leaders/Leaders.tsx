"use client";
import { LeadersData } from "@/constants/Leaders";
import React from "react";
import { LeaderCard } from "./LeaderCard";

export const Leaders = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-[8px] items-center">
        <h2 className="text-[12px] font-[700]">Our Leaders</h2>
        <h3 className="text-gradient-2 text-[16px] font-[700]">
          Our Secret Weapons. Our team of Experts
        </h3>
      </div>
      <div className="flex flex-wrap gap-[16px] justify-center">
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
