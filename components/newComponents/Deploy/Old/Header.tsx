import Image from "next/image";
import React from "react";
import Frame1Img from "@/assets/svg/frame1.svg";
import Frame2Img from "@/assets/svg/frame2.svg";
import Frame3Img from "@/assets/svg/frame3.svg";
const Header = () => {
  return (
    <div className="flex flex-col gap-[56px] relative">
      <div className="flex flex-col items-center gap-[24px] w-full">
        <div className="text-[22px] max-w-lg  md:text-[32px] lg:text-[48px] font-[700]">
          <h2 className="text-center">
            Your own effortless,
            <span className="text-gradient font-[800]"> AUTO-DEVOPS </span>
            <span>tool</span>
          </h2>
        </div>
        <p className="text-muted text-center">
          Make your developers{" "}
          <span className="text-gradient font-bold">10x</span> more productive.
          Build your app&apos;s backend{" "}
          <span className="text-gradient font-bold">in minutes</span>.
        </p>
      </div>
      <div className="flex justify-center gap-[16px]">
        <button className="button-gradient px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
          Let&apos;s get started
        </button>

        {/* </Link> */}
      </div>
      <div className="relative h-full w-full">
        <div className="absolute right-[-3%] md:right-[-5%] lg:right-[-15%] top-[-7%] aspect-[242/440] w-[36%]">
          <div className="screenshot-background h-full w-full p-1">
            <Image className="w-full" src={Frame1Img} alt="" priority={false} />
          </div>
        </div>
        <div className="absolute left-[-3%] md:left-[-5%] bottom-[10%] lg:left-[-18%] aspect-[154/58] w-[40%]">
          <div className="screenshot-background h-full w-full p-1">
            <Image className="h-full w-full" src={Frame2Img} alt="" />
          </div>
        </div>
        <div className="screenshot-background h-full w-full p-1">
          <Image className="w-full" src={Frame3Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
