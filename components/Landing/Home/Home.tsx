"use client";
import Image from "next/image";
import React from "react";

import Frame1Img from '@/assets/png/frame1.png';
import Frame2Img from '@/assets/png/frame2.png';
import Frame3Img from '@/assets/png/frame3.png';

export const Home = () => {
  return (
    <div className="flex flex-col gap-[56px] relative">
      <div className="ellipse-1"></div>
      <div className="ellipse-2"></div>
      <div className="flex flex-col items-center gap-[24px] w-full">
        <div className="text-[22px] md:text-[32px] lg:text-[48px] font-[700]">
          <h2 className="text-center">Full Featured, <span className="text-gradient font-[800]">NO CODE</span></h2>
          <h1 className="text-[22px] md:text-[32px] lg:text-[56px] text-center">Backend-as-a-service</h1>
        </div>
        <p className="text-muted text-center">
          Build your application’s backend in minutes. Make your developers 10x
          more productive.
        </p>
      </div>
      <div className="flex justify-center gap-[16px]">
        <button className="button-dark px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">Let{"'"}s get started</button>
        <button className="button-dark px-[18px] py-[9px] md:py-[12px] md:px-[24px]">Know more</button>
      </div>
      <div className="relative h-full w-full">
        <div className="absolute right-[-3%] md:right-[-5%] lg:right-[-15%] top-[-7%] aspect-[129/228] w-[36%]">
          <Image className="h-full" src={Frame1Img} alt=""/>
        </div>
        <div className="absolute left-[-3%] md:left-[-5%] bottom-[10%] lg:left-[-18%] aspect-[154/58] w-[40%]">
          <Image className="h-full" src={Frame2Img} alt=""/>
        </div>
        <div className="">
          <Image src={Frame3Img} alt="" />
        </div>
      </div>
    </div>
  );
};
