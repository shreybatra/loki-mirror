"use client";

import Image, { StaticImageData } from "next/image";
import { BsLinkedin } from "react-icons/bs";

import LinkedinLogo from "@/assets/svg/linkedin-logo.svg";
import React from "react";
import Link from "next/link";

interface AngelInvestorCardProps {
  name: string;
  position: string;
  linkedinProfile: string;
  company?: string;
  image: StaticImageData;
}
export const AngelInvestorCard = ({
  name,
  position,
  linkedinProfile,
  company,
  image,
}: AngelInvestorCardProps) => {
  return (
    <div className="leader-card pt-[8px] px-[12px] pb-[12px] flex flex-col justify-center items-center gap-1 lg:w-64 lg:h-64 w-32 h-32 border-background">
      <div className="leader-card-bg relative w-full h-full flex justify-center">
        <Image
          className="absolute bottom-0 h-[130%] w-auto"
          src={image}
          alt="name"
        />
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center">
          <h4 className="text-white text-[9px] font-[700] md:text-[14px] z-40">
            {name}
          </h4>
          <Link href={linkedinProfile} target="_blank">
            <BsLinkedin />
            {/* <Image src={LinkedinLogo} alt="Linkedin logo" /> */}
          </Link>
        </div>
        <h6 className="text-muted text-[8px] font-bold italic md:text-[12px]">
          {position}
        </h6>
        {company && (
          <h6 className="text-gradient-2 text-[8px] font-bold italic md:text-[12px]">
            {company}
          </h6>
        )}
      </div>
    </div>
  );
};
