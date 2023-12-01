"use client";

import AboutTimeline from "@/assets/svg/about-timeline.svg";
import AboutTimelineMobile from "@/assets/svg/about-timeline-mobile.svg";
import Image from "next/image";
import React from "react";

export const Ideation = () => {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

  return (
    <div>
      <Image
        className="lg:block hidden"
        src={AboutTimeline}
        alt="about timeline"
      />
      <Image
        className="block lg:hidden"
        src={AboutTimelineMobile}
        alt="about timeline mobile"
      />
    </div>
  );
};
