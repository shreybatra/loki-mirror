"use client";

import Image from "next/image";
import React from "react";
import Security1Img from "@/assets/svg/security1.svg";
import Security2Img from "@/assets/svg/security2.svg";
import Security3Img from "@/assets/svg/security3.svg";

export const SecurityComplianceCheck = () => {
  return (
    <div className="security-compliance-container w-full p-[16px] md:px-[80px] md:py-[110px] flex flex-col md:flex-row gap-[40px] items-center">
      <div className="flex flex-col gap-[12px] md:gap-[24px]">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px]">
          Security Compliance Check
        </h3>
        <h2 className="md:text-[32px] font-[700] w-[80%] text-[16px] md:text-[20px] w-[100%]">
          Ensuring compliance for a safer environment
        </h2>
      </div>
      <div className="w-full flex justify-between grow-2 md:items-center">
        <Image className="w-[96px] aspect-[231/109] md:w-[230px]" src={Security3Img} alt="security 3" />
        <Image className="w-[96px] aspect-[1/1] md:w-[160px]" src={Security2Img} alt="security 2" />
        <Image className="w-[96px] aspect-[1/1] md:w-[160px]" src={Security1Img} alt="security 1" />
      </div>
    </div>
  );
};
