"use client";
import React from "react";
import Security1Img from "@/assets/svg/security1.svg";
import Security2Img from "@/assets/svg/security2.svg";
import Security3Img from "@/assets/svg/security3.svg";
import Image from "next/image";

export const SecurityComplianceCheck = () => {
  return (
    <div className="security-compliance-container w-full p-[16px] md:px-[80px] md:py-[110px] flex flex-col md:flex-row gap-[40px] items-center">
      <div className="flex flex-col gap-[24px]">
        <h3 className="text-primary-pink uppercase tracking-[5px]">
          Security Compliance Check
        </h3>
        <h2 className="font-[16px] md:text-[32px] font-[700]">
          Ensuring compliance for a safer environment
        </h2>
      </div>
      <div className="w-full flex gap-[50px] grow-2 md:w-2/3 items-center">
        <Image className="w-1/3 aspect-[231/109]" src={Security3Img} alt="security 3" />
        <Image className="w-1/3 aspect-[1/1]" src={Security2Img} alt="security 2" />
        <Image className="w-1/3 aspect-[1/1]" src={Security1Img} alt="security 1" />
      </div>
    </div>
  );
};
