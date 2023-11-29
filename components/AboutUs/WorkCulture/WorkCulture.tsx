"use client";

import CultureImage from "@/assets/png/culture.png";
import { HorizontalScroller } from "@/blocks";
import Image from "next/image";
import React from "react";
import { VerticalScroller } from "@/blocks/VerticalScroller";

export const WorkCulture = () => {
  const CultureImages = [CultureImage, CultureImage];
  return (
    <div className="flex flex-col gap-[16px] lg:gap-[130px] md:flex-row overflow-hidden md:h-[300px] relative">
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-[32px] font-[700]">Culture and Work Environment</h1>
        <p className="text-[16px] font-[400] max-w-[630px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore.
        </p>
      </div>
      <div className="md:hidden">
        <HorizontalScroller direction="left" speed="fast">
          {CultureImages.map((image) => (
            <div className="rounded-[8px]" key={crypto.randomUUID()}>
              <Image className="rounded-[8px]" src={image} alt="culture" />
            </div>
          ))}
        </HorizontalScroller>
      </div>
      <div className="hidden md:block relative top-[-10%]">
        <VerticalScroller direction="up" speed="fast">
          {CultureImages.map((image) => (
            <div className="rounded-[8px]" key={crypto.randomUUID()}>
              <Image className="rounded-[8px]" src={image} alt="culture" />
            </div>
          ))}
        </VerticalScroller>
      </div>
    </div>
  );
};
