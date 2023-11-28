"use client";

import Image from "next/image";
import { PartnersLogo } from "@/constants/Partners";
import React from "react";

export const Partners = () => {
  return (
    <div className="flex flex-col gap-[64px] items-center">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px]">
          Our Partners
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Empowering success through partnerships
          </h2>
          <p className="text-muted text-[14px] md:text-[16px] text-center" >
            Our partners are integral to our success. Together, we drive
            innovation and mutual growth
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-[32px] flex-nowrap overflow-x-auto md:flex-col ">
        <div className="flex gap-[16px] justify-center flex-[0_0_auto] md:gap-[42px]" >
          <div  className="h-[120px] w-[210] md:w-[195]">
            <Image src={PartnersLogo.MongodbPartnerLogo} alt="MongoDB"/>
          </div>
          <div className="vertical-gradient-line"></div>
          <div  className="h-[120px] w-[210] md:w-[195]">
            <Image src={PartnersLogo.NasscomPartnerLogo} alt="Nasscom"/>
          </div>
        </div>
        <div className="flex gap-[16px] flex-[0_0_auto] md:gap-[42px]" >
          <div  className="h-[120px] w-[210] md:w-[195]">
            <Image src={PartnersLogo.GooglePartnerLogo} alt="Google for startups"/>
          </div>
          <div className="vertical-gradient-line"></div>
          <div  className="h-[120px] w-[210] md:w-[195]">
            <Image src={PartnersLogo.AWSPartnerLogo} alt="AWS startups" />
          </div>
          <div className="vertical-gradient-line"></div>
          <div  className="h-[120px] w-[210] md:w-[195]">
            <Image src={PartnersLogo.NvidiaPartnerLogo} alt="Nvidia"/>
          </div>
        </div>
      </div>
    </div>
  );
};
