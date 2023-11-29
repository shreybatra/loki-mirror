"use client";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import CosmocloudFullLogo from "@/assets/svg/cosmocloud-logo-full-dark.svg";
import Image from "next/image";
import Link from "next/link";

export const GetStarted = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center w-full lg:w-[750px]">
      <div className="w-1/3">
        <Image src={CosmocloudFullLogo} alt="Infinity Cosmocloud" />
      </div>
      <div className="flex flex-col gap-[16px] items-center">
        <h2 className="text-[16px] md:text-[32px] lg:text-[44px] font-[700] text-center">
          Start turning your ideas into reality
        </h2>
        {/* <h4 className="text-[12px]  md:text-[20px] font-semibold text-center">
          No-Code, Backend-as-a-Service (BaaS) platform
        </h4> */}
      </div>
      <div className="flex flex-col items-center w-full md:w-[250px]">
        <Link href="https://dashboard.cosmocloud.io/sign-up">
          <div className="button-gradient text-[16px] px-[24px] py-[12px] md:py-[16px] w-full">
            Let's get started
          </div>
        </Link>
        <div className="cursor-pointer flex justify-center gap-2 items-center text-muted p-[16px] w-full">
          <p>Book a demo</p>
          <MdChevronRight />
        </div>
      </div>
    </div>
  );
};
