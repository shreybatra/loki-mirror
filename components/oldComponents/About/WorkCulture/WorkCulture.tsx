"use client";

import picture1 from "@/assets/png/work-culture/picture1.jpg";
import picture2 from "@/assets/png/work-culture/picture2.jpg";
import { HorizontalScroller } from "@/blocks";
import Image from "next/image";
import React from "react";
import { VerticalScroller } from "@/blocks/VerticalScroller";

export const WorkCulture = () => {
  const CultureImages = [picture1, picture2];
  return (
    <div className="flex flex-col gap-[16px] w-[90vw] lg:gap-[130px] md:flex-row justify-between overflow-hidden md:h-[300px] relative">
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-[16px] font-[700] md:text-[32px]">
          Culture and Work Environment
        </h1>
        <p className="text-[12px] font-[400] opacity-[0.75] max-w-[630px] md:text-[16px] text-justify">
          Join us in rewriting the code of innovation! Explore a dynamic work
          culture at Cosmocloud where creativity meets technology. We&apos;re
          not just building software, we&apos;re crafting a team of
          forward-thinkers, collaborators, and game-changers.
        </p>
        <p className="text-[12px] font-bold max-w-[630px] md:text-[16px] text-gradient">
          Building the future of backend development.
        </p>
      </div>
      <div className="md:hidden">
        <HorizontalScroller direction="left" speed="fast">
          {CultureImages.map((image, idx) => (
            <div className="rounded-[8px] my-auto" key={idx}>
              <Image
                className="rounded-[8px] w-[260px]"
                src={image}
                alt="culture"
              />
            </div>
          ))}
        </HorizontalScroller>
      </div>
      <div className="hidden md:block relative top-[-10%]">
        <VerticalScroller direction="up" speed="fast">
          {CultureImages.map((image, idx) => (
            <div className="rounded-[8px] mx-auto" key={idx}>
              <Image
                className="rounded-[8px] w-[400px]"
                src={image}
                alt="culture"
              />
            </div>
          ))}
        </VerticalScroller>
      </div>
    </div>
  );
};
