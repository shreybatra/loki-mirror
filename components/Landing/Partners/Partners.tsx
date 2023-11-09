"use client";
import { PartnersLogo } from "@/constants/Partners";
import Image from "next/image";
import React from "react";

export const Partners = () => {
  return (
    <div className="flex flex-col gap-[64px] items-center">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px]">
          Our Partners
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="text-[32px] font-[700]">
            Empowering success through partnerships
          </h2>
          <p className="text-muted">
            Our partners are integral to our success. Together, we drive
            innovation and mutual growth
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[42px] justify-center">
          <div>
            <Image src={PartnersLogo.MongodbPartnerLogo} alt="MongoDB" />
          </div>
          <div className="vertical-gradient-line"></div>
          <div>
            <Image src={PartnersLogo.NasscomPartnerLogo} alt="Nasscom" />
          </div>
        </div>
        <div className="horizontal-gradient-line w-full"></div>
        <div className="flex gap-[42px]">
          <div>
            <Image src={PartnersLogo.GooglePartnerLogo} alt="Google for startups" />
          </div>
          <div className="vertical-gradient-line"></div>
          <div>
            <Image src={PartnersLogo.AWSPartnerLogo} alt="AWS startups" />
          </div>
          <div className="vertical-gradient-line"></div>
          <div>
            <Image src={PartnersLogo.NvidiaPartnerLogo} alt="Nvidia" />
          </div>
        </div>
      </div>
    </div>
  );
};
