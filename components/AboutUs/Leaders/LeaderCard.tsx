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
    <div className="leader-card pt-[8px] px-[12px] pb-[12px] flex flex-col justify-center items-center gap-[4px] w-[156px]">
      <div className="leader-card-bg w-[110px] h-[100px]  relative">
        <Image
          className="w-[114px] h-[107px] absolute top-[-9px]"
          src={image}
          alt="name"
        />
      </div>
      <div className="flex w-full justify-between items-start">
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-[14px] font-[700]">{name}</h4>
          <h6 className="text-muted text-[10px] font-[400] italic">
            {position}
          </h6>
        </div>
        <Image className="py-[3px]" src={LinkedinLogo} alt="Linkedin logo" />
      </div>
    </div>
  );
};
