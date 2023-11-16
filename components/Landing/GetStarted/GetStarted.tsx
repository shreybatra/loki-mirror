"use client";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import InfinityCosmocloud from "@/assets/svg/infinity_cosmocloud.svg";
import Image from "next/image";

export const GetStarted = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center w-full lg:w-[750px]">
      <div>
        <Image src={InfinityCosmocloud} alt="Infinity Cosmocloud" />
      </div>
      <div className="flex flex-col gap-[16px] items-center">
        <h2 className="text-[16px] md:text-[32px] lg:text-[44px] font-[700] text-center">Start turning your ideas into reality</h2>
        <h4 className="text-muted text-[12px]  md:text-[20px] font-[400] text-center">
          Build your application’s backend in minutes. Build your application’s
          backend in minutes. Build your application’s backend in minutes
        </h4>
      </div>
      <div className="flex flex-col items-center w-full md:w-[250px]">
        <button className="button-gradient text-[16px] px-[24px] py-[12px] md:py-[16px] w-full">Let’s get started</button>
        <div className="cursor-pointer flex justify-center gap-2 items-center text-muted p-[16px] w-full">
          <p>Book a demo</p>
          <MdChevronRight />
        </div>
      </div>
    </div>
  );
};
