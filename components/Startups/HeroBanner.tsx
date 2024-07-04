import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface IBannerProps {
  badge: string;
  bannerSmallScreen: StaticImageData;
  bannerLargeScreen: StaticImageData;
  heading: React.ReactNode;
  desc: string;
  cta: string;
}

const HeroBanner = ({
  badge,
  heading,
  desc,
  cta,
  bannerSmallScreen,
  bannerLargeScreen,
}: IBannerProps) => {
  return (
    <div className="flex relative py-10 mb-20 md:py-20 items-start flex-col-reverse space-between gap-4 md:gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
      <div className={`space-y-4 md:w-1/2`}>
        <div className="inline-block rounded-full tracking-tight button-gradient font-medium px-4 py-2 text-md">
          {badge}
        </div>
        <h1 className={"text-[22px] md:text-[32px] lg:text-[48px] font-[700] "}>
          {heading}
        </h1>
        <p className="text-neutral-300 tracking-tight md:text-[22px] py-2 md:py-4">
          {desc}
        </p>
        <div className="flex min-w-fit">
          <Link href={"linkUrl"}>
            <button className="button-dark border-background px-[18px] py-2 md:py-4 md:px-[24px]">
              {cta}
            </button>
          </Link>
        </div>
      </div>
      <div className={`flex items-center md:w-1/2 justify-center`}>
        <Image
          src={bannerLargeScreen}
          width={695}
          height={550}
          alt="Hero"
          className={
            "rounded-xl absolute overflow-hidden top-[50%] left-[50%] translate-y-[-40%] sm:w-full hidden md:block md:left-2 z-[-200]"
          }
        />
        <Image
          src={bannerSmallScreen}
          width={695}
          height={550}
          alt="Hero"
          className={
            "hidden"
          }
        />
      </div>
    </div>
  );
};

export default HeroBanner;
