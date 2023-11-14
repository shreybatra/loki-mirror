"use client";
import React from "react";
import Security1Img from "@/assets/svg/security1.svg";
import Security2Img from "@/assets/svg/security2.svg";
import Security3Img from "@/assets/svg/security3.svg";
import Image from "next/image";

export const SecurityComplianceCheck = () => {
  return (
    <div className="security-compliance-container w-screen px-[80px] py-[110px] flex gap-[40px] items-center">
      <div className="flex flex-col gap-[24px]">
        <h3 className="text-primary-pink uppercase tracking-[5px]">
          Security Compliance Check
        </h3>
        <h2 className="text-[32px] font-[700]">
          Ensuring compliance for a safer environment
        </h2>
      </div>
      <div className="flex gap-[50px] grow-2 w-2/3">
        <Image src={Security3Img} alt="security 3" />
        <Image src={Security2Img} alt="security 2" />
        <Image src={Security1Img} alt="security 1" />
      </div>
    </div>
  );
};
