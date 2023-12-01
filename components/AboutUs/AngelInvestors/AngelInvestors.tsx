"use client";

import { AngelInvestorCard } from "./AngelInvestorCard";
import { AngelInvestorsData } from "@/constants/AngelInvestors";
import React from "react";

export const AngelInvestors = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-[12px] items-center">
        <h2 className="text-[12px] md:text-[16px] lg:text-[28px] font-[700]">
          Our Investors
        </h2>
        <h3 className="text-gradient-2 text-[16px] md:text-[21px] lg:text-[32px] font-[700]">
          Industry leaders backing us
        </h3>
      </div>
      <div className="flex flex-wrap lg:gap-10 gap-3 justify-center">
        {AngelInvestorsData.map(
          ({ name, linkedinProfile, image, position, company }) => {
            return (
              <AngelInvestorCard
                key={crypto.randomUUID()}
                name={name}
                linkedinProfile={linkedinProfile}
                image={image}
                company={company}
                position={position}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
