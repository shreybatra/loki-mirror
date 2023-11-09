import React from "react";
import "./footer.css";

import TwitterLogo from "@/assets/svg/twitter_logo.svg";
import LinkedinLogo from "@/assets/svg/linkedin_logo.svg";
import InstagramLogo from "@/assets/svg/instagram_logo.svg";
import CosmocloudLogo from "@/assets/svg/CosmocloudLogo.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Image src={CosmocloudLogo} alt="Cosmocloud Logo" />
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="border-[1px] h-[48px] w-[48px] flex items-center justify-center rounded-[9999px] py-[12px] px-[15px]">
          <Image src={TwitterLogo} alt="Twitter" />
        </div>
        <div  className="border-[1px] h-[48px] w-[48px] flex items-center justify-center rounded-[9999px] py-[12px] px-[15px]">
          <Image src={LinkedinLogo} alt="Linkedin" />
        </div>
        <div  className="border-[1px] h-[48px] w-[48px] flex items-center justify-center rounded-[9999px] py-[12px] px-[15px]">
          <Image src={InstagramLogo} alt="Instagram" />
        </div>
      </div>
      <div className="flex gap-[12px] text-sm">
        <p>Terms</p>
        <p>Policy</p>
      </div>
    </div>
  );
};
