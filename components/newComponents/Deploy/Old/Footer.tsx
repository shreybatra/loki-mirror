"use client";
import CosmocloudFullLogo from "@/assets/svg/cosmocloud-logo-full-dark.svg";
import Image from "next/image";
import React from "react";
import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";
const Footer = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center w-full mb-[40px] lg:w-[750px]">
      <div className="w-1/3">
        <Image src={CosmocloudFullLogo} alt="Infinity Cosmocloud" />
      </div>
      <div className="flex flex-col gap-[16px] items-center">
        <h2 className="text-[16px] md:text-[32px] lg:text-[44px] font-[700] text-center">
          Start turning your ideas into reality
        </h2>
        <p className="text-sm px-5 text-center">
          Build your application’s backend in minutes. Build your application’s
          backend in minutes. Build your application’s backend in minutes
        </p>
      </div>
      <div className="flex flex-col items-center w-full md:w-[250px]">
        <SchedulingModal cName="button-gradient text-[16px] px-[24px] py-[12px] md:py-[16px] w-full" />
      </div>
    </div>
  );
};

export default Footer;
