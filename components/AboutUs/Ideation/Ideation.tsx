"use client";

import CircularArrow1 from "@/assets/png/curve_arrow-1.png";
import CosmocloudImg from "@/assets/svg/CosmocloudLogo.svg";
import IdeationImage from "@/assets/png/ideation.png";
import Image from "next/image";
import React from "react";

export const Ideation = () => {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

  return (
    <div className="flex flex-col gap-[42px] md:items-center" >
      <div className="flex flex-col items-center w-[90vw] gap-[12px] md:items-baseline" >
        <div className="text-primary-pink uppercase tracking-[5px] text-center text-[12px] lg:text-[16px]">
          Prepared the ground for a future
        </div>
        <div className="flex flex-col gap-[8px] items-center">
          <div className="text-center w-full text-[20px] md:text-[44px] font-[700] md:text-left">
            2023 a cultivating year
          </div>
          <p className=" text-[12px] text-center text-muted md:text-[20px] font-[400] md:text-left ">
            Giving rise to new idea, new partnerships, new connections, new
            experience
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] md:-rotate-90 md:justify-end">
        <div className="flex flex-col gap-[8px] ">
          {years.map((year) => {
            return (
              <div key={year} className="flex gap-[8px]">
                <p className="text-[12px] font-[400] text-[#505050]">{year}</p>
                <div className="flex flex-col gap-[8px] items-center">
                  <div className="strip-played h-[1px] w-[54px] hover:strip-unplayed"></div>
                  <div className="strip-played h-[1px] w-[48px] hover:strip-unplayed"></div>
                  <div className="strip-played h-[1px] w-[48px] hover:strip-unplayed"></div>
                  <div className="strip-played h-[1px] w-[48px] hover:strip-unplayed"></div>
                  <div className="strip-played h-[1px] w-[48px] hover:strip-unplayed"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-[16px]">
          <div className="flex gap-[4px]">
            <p className="text-[12px] font-[400] text-[#505050]">2023</p>
            <div className="pt-[6px]">
              <div className="w-[54px] h-[2px] strip-unplayed relative ideation-dot"></div>
              <div className="h-full flex justify-center">
                <div className="h-full w-[2px] strip-unplayed"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex relative">
              <div className="ideation-image-box p-[8px] w-[118px] relative md:rotate-90 md:top-[-140%] md:left-[-10%] ">
                <Image className="" src={CosmocloudImg} alt="Cosmocloud logo" />
                <div className="absolute top-[50%] right-[-40px] md:-rotate-90 md:right-[0%] md:top-[-110%]">
                  <Image
                    className="w-[36px] h-[36px]"
                    src={CircularArrow1}
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
            <div className="ideation-image-box p-[8px] w-full md:rotate-90">
              <Image src={IdeationImage} alt="Ideation Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
