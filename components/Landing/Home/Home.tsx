"use client";
import Image from "next/image";
import React from "react";

import Frame1Img from '@/assets/png/frame1.png';
import Frame2Img from '@/assets/png/frame2.png';
import Frame3Img from '@/assets/png/frame3.png';

export const Home = () => {
  return (
    <div className="flex flex-col gap-[56px]">
      <div className="flex flex-col items-center gap-[24px]">
        <div className="text-[48px] font-[700]">
          <h2 className="text-center">Full Featured, <span className="text-gradient font-[800]">NO CODE</span></h2>
          <h1 className="text-[56px] text-center">Backend-as-a-service</h1>
        </div>
        <p className="text-muted">
          Build your application’s backend in minutes. Make your developers 10x
          more productive.
        </p>
      </div>
      <div className="flex justify-center gap-[16px]">
        <button className="button-dark py-[12px] px-[24px]">Let{"'"}s get started</button>
        <button className="button-dark py-[12px] px-[24px]">Know more</button>
      </div>
      <div className="relative">
        <div className="absolute right-[-60px] top-[-28px]">
          <Image src={Frame1Img} alt=""/>
        </div>
        <div className="absolute bottom-[55px] left-[-170px]">
          <Image src={Frame2Img} alt=""/>
        </div>
        <div className="">
          <Image src={Frame3Img} alt="" />
        </div>
      </div>
    </div>
  );
};
