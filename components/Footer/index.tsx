"use client";

import "./footer.css";

import CosmocloudLogo from "@/assets/svg/CosmocloudLogo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center md:items-center gap-[24px] md:flex-row md:[80px] lg:mt-[150px] px-[16px] py-[24px] md:px-[24px] md:py-[80px] w-full">
        <div className="h-[20px] md:h-full md:grow">
          <Link href={"/"}>
            <Image
              className="w-[130px] md:w-auto"
              src={CosmocloudLogo}
              alt="Cosmocloud Logo"
            />
          </Link>
        </div>
        <div className="flex justify-between items-center w-full md:w-auto md:grow">
          <div className="flex items-center gap-[16px]">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/cosmocloud/",
                  "_blank"
                )
              }
              className="border-[1px] h-[32px] w-[32px] md:h-[48px] md:w-[48px] flex items-center justify-center rounded-[9999px] md:py-[12px] md:px-[15px]"
            >
              <BsLinkedin />
            </button>
            <button
              onClick={() =>
                window.open("https://twitter.com/TeamCosmocloud", "_blank")
              }
              className="border-[1px] h-[32px] w-[32px] md:h-[48px] md:w-[48px] flex items-center justify-center rounded-[9999px] md:py-[12px] md:px-[15px]"
            >
              <BsTwitter />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/cosmocloud.io/",
                  "_blank"
                )
              }
              className="border-[1px] h-[32px] w-[32px] md:h-[48px] md:w-[48px] flex items-center justify-center rounded-[9999px] md:py-[12px] md:px-[15px]"
            >
              <BsInstagram />
            </button>
          </div>
          <div className="flex gap-[12px] text-sm">
            <p>Terms</p>
            <p>Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
