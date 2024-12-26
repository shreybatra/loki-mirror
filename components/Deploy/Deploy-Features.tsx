import React from "react";
import frame from "@/assets/svg/deploy-features.svg";
import Image from "next/image";
const Features = () => {
  return (
    <div className="flex flex-col gap-[24px] w-full">
      <div className="flex flex-col gap-[24px]">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-start text-[12px] md:text-[16px] md:text-center">
          Our Features
        </h3>
        <div className="flex flex-row gap-[12px] justify-between items-center md:flex-col">
          <h2 className="font-[700] w-[250px] text-[20px] text-start md:text-[32px] md:w-[100vw] md:text-center">
            Magic of Cosmocloud Deploy
          </h2>
          <div className="cursor-pointer flex gap-2 items-center text-muted"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] relative">
        <div className="flex gap-[20px] justify-center items-center relative w-full ">
          <Image src={frame} alt="Frame" />
        </div>
      </div>
    </div>
  );
};

export default Features;
