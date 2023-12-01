"use client";

import BgImage from "@/assets/png/about_us_background.png";
import Image from "next/image";
import React from "react";

export const Motto = () => {
  return (
    <div className="flex flex-col items-center gap-[16px]">
      {/* <div className="w-full absolute top-0 left-0 z-[-1]"> */}
      {/* <Image
          className="w-full md:h-[630px] object-cover"
          src={BgImage}
          alt="bg"
        /> */}
      {/* </div> */}
      <div>
        <h1 className="text-[22px] lg:text-[48px] md:mt-[60px] font-[700] text-center">
          Full featured, <span className="text-gradient">no-code</span>
        </h1>
        <h1 className="text-[22px] lg:text-[48px] font-[700] text-center">
          Backend-as-a-Service
        </h1>
      </div>
      <p className="text-muted text-[12px] lg:text-[18px] text-center">
        Create complex scalable backends,{" "}
        <span className="text-gradient font-bold">with no-code</span>, in
        minutes.
      </p>
    </div>
  );
};
