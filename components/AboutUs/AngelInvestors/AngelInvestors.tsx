"use client";
import React from "react";
import { AngelInvestorCard } from "./AngelInvestorCard";
import { AngelInvestorsData } from "@/constants/AngelInvestors";

export const AngelInvestors = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-[12px] items-center">
        <h1 className="text-primary-pink uppercase tracking-[5px] text-center">
          Our Investors
        </h1>
        <div className="flex flex-col gap-[8px] items-center">
          <h2 className="text-[20px] text-center font-[700]">
            Angel Investors
          </h2>
          <p className="text-[12px] font-[400] text-description">Such as...</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[16px] justify-center">
        {AngelInvestorsData.map(({ name, linkedinProfile, image, position }) => {
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
