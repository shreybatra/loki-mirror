"use client";

import Image from "next/image";
import { InvestorsData } from "@/constants/Investors";
import React from "react";

export const Investors = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-[12px] items-center">
        <h1 className="text-[12px] font-[500] text-primary-pink uppercase tracking-[5px] text-center md:text-[16px]">
          Our Investors
        </h1>
        <div className="flex flex-col gap-[8px] items-center">
          <h2 className="text-[20px] text-center font-[700] md:text-[32px]">
            Backed by VCs and Angel Investors
          </h2>
          <p className="text-[12px] font-[400] opacity-[0.75] md:text-[14px]">Such as...</p>
        </div>
      </div>
      <div className="flex gap-[32px] flex-wrap justify-center md:justify-between md:max-w-[60vw]">
        {InvestorsData.map(({ image }) => {
          return (
            <div className="border-gradient w-[156px] md:w-[218px]" key={crypto.randomUUID()}>
              <div className="px-[12px] py-[20px] investor-card w-full flex justify-center md:px-[24px] md:py-[24px]">
                <Image src={image} alt="investor" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
