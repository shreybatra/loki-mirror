"use client";
import Image from "next/image";
import React from "react";
import BgImage from "@/assets/png/about_us_background.png";

export const Motto = () => {
  return (
    <div className="w-full h-[200px] flex flex-col items-center gap-[16px] max-w-[310px] md:max-w-[462px] lg:max-w-[700px]">
      <div className="w-full absolute top-0 left-0 z-[-10]">
        <Image className="h-[350px] lg:h-[500px] object-cover" src={BgImage} alt="bg" />
      </div>
      <h1 className="text-[22px] lg:text-[48px] font-[700] text-center">Next-Gen Solutions, Zero Coding Hassles</h1>
      <p className="text-muted text-[12px] lg:text-[18px] font-[400] text-center">
        Cutting-edge solutions that require no coding, ushering in a new era of
        seamless and hassle-free technological advancements
      </p>
    </div>
  );
};