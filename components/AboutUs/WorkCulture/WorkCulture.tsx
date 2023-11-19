"use client";
import { HorizontalScroller } from "@/blocks";
import React from "react";

import CultureImage from "@/assets/png/culture.png";
import Image from "next/image";

export const WorkCulture = () => {
  const CultureImages = [CultureImage, CultureImage];
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="text-[16px] font-[700]">Culture and Work Environment</h1>
      <p className="text-[12px] font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore.
      </p>
      <div>
        <HorizontalScroller direction="left" speed="fast">
            {
              CultureImages.map(image => <div className="rounded-[8px]" key={crypto.randomUUID()}>
                  <Image className="rounded-[8px]" src={image} alt="culture"/>
              </div>)
            }
        </HorizontalScroller>
      </div>
    </div>
  );
};
