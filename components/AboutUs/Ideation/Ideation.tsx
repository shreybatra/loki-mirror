"use client";
import Image from "next/image";
import React from "react";
import CosmocloudImg from "@/assets/svg/CosmocloudLogo.svg";
import CircularArrow1 from "@/assets/png/curve_arrow-1.png";
import IdeationImage from "@/assets/png/ideation.png";

export const Ideation = () => {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col items-center gap-[12px]">
        <h2 className="text-primary-pink uppercase tracking-[5px] text-center">
          Prepared the ground for a future
        </h2>
        <div className="flex flex-col gap-[8px] items-center">
          <h1 className="text-center text-[20px] font-[700]">
            2023 a cultivating year
          </h1>
          <p className="text-[12px] text-muted font-[400] text-center">
            Giving rise to new idea, new partnerships, new connections, new
            experience
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] md:-rotate-90">
        <div className="flex flex-col gap-[8px] ">
          {years.map((year) => {
            return (
              <div key={year} className="flex gap-[8px]">
                <p className="text-[10px] font-[400] text-[#505050]">{year}</p>
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
            <p className="text-[10px] font-[400] text-[#505050]">2023</p>
            <div className="pt-[6px]">
              <div className="w-[54px] h-[2px] strip-unplayed relative ideation-dot"></div>
              <div className="h-full flex justify-center">
                <div className="h-full w-[2px] strip-unplayed"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex relative">
              <div className="ideation-image-box p-[8px] w-[118px] relative md:rotate-90">
                <Image className="" src={CosmocloudImg} alt="Cosmocloud logo" />
                <div className="absolute top-[50%] right-[-40px] md:-rotate-90 md:right-[20%] md:top-[-110%]">
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
