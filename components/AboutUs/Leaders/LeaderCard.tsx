"use client";

import Image, { StaticImageData } from "next/image";

import LinkedinLogo from "@/assets/svg/linkedin-logo.svg";
import React from "react";

interface LeaderCardProps {
  name: string;
  position: string;
  linkedinProfile: string;
  image: StaticImageData;
}
export const LeaderCard = ({
  name,
  position,
  linkedinProfile,
  image,
}: LeaderCardProps) => {
  return (
    <div className="leader-card pt-[8px] px-[12px] pb-[12px] flex flex-col justify-center items-center gap-[4px] w-[156px] md:w-[270px] md:h-[270px]">
      <div className="leader-card-bg w-[110px] h-[100px] relative md:w-[240px] md:h-[203px]">
        <Image
          className="w-[114px] h-[107px] absolute top-[-18px] md:w-[234px] md:h-[200px]"
          src={image}
          alt="name"
        />
      </div>
      <div className="flex w-full justify-between items-start items-center">
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-[14px] font-[700] md:text-[16px]">{name}</h4>
          <h6 className="text-muted text-[10px] font-[400] italic md:text-[12px]">
            {position}
          </h6>
        </div>
        <Image className="py-[3px] w-[20px] h-[20px] md:w-[28px] md:h-[28px]" src={LinkedinLogo} alt="Linkedin logo" />
      </div>
    </div>
  );
};
