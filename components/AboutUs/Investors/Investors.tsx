"use client";
import { InvestorsData } from "@/constants/Investors";
import Image from "next/image";
import React from "react";

export const Investors = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-[12px] items-center">
        <h1 className="text-primary-pink uppercase tracking-[5px] text-center">
          Our Investors
        </h1>
        <div className="flex flex-col gap-[8px] items-center">
          <h2 className="text-[20px] text-center font-[700]">
            Backed by VCs and Angel Investors
          </h2>
          <p className="text-[12px] font-[400] text-description">Such as...</p>
        </div>
      </div>
      <div className="flex gap-[8px] flex-wrap justify-between">
        {InvestorsData.map(({ image }) => {
          return (
            <div className="border-gradient w-[156px] md:w-1/3" key={crypto.randomUUID()}>
              <div className="px-[12px] py-[20px] investor-card w-full">
                <Image src={image} alt="investor" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
