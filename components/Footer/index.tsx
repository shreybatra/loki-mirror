"use client";

import "./footer.css";

import CosmocloudLogo from "@/assets/svg/CosmocloudLogo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const socialIcons = [
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/company/cosmocloud/",
  },
  {
    icon: <BsTwitter />,
    link: "https://twitter.com/TeamCosmocloud",
  },
  {
    icon: <BsInstagram />,
    link: "https://www.instagram.com/cosmocloud.io/",
  },
];

const footerLinks = [
  {
    href: "/terms-of-service",
    name: "Terms of Service",
  },
  {
    href: "/privacy-policy",
    name: "Privacy Policy",
  },
  {
    href: "https://merchant.razorpay.com/policy/NHeXV9vtYZiRFY/refund",
    name: "Refund Policy",
    target: "_blank",
  },
  {
    href: "https://merchant.razorpay.com/policy/NHeXV9vtYZiRFY/shipping",
    name: "Shipping Policy",
    target: "_blank",
  },
];

export const Footer = () => {
  return (
    <div className="footer">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center md:items-center gap-[24px] md:flex-row md:[80px] lg:mt-[150px] px-[16px] py-[24px] md:px-[24px] md:py-[80px] w-full">
        <div className="flex justify-center md:justify-start h-[20px] w-full md:h-full md:w-[5%] md:grow">
          <Link href={"/"}>
            <Image
              className="w-[130px] md:w-auto"
              src={CosmocloudLogo}
              alt="Cosmocloud Logo"
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-[24px] justify-between md:justify-around items-center md:w-auto md:grow">
          <div className="flex items-center gap-[16px]">
            {socialIcons.map((item, index) => (
              <button
                key={index}
                onClick={() => window.open(item.link, "_blank")}
                className="border-[1px] h-[32px] w-[32px] md:h-[48px] md:w-[48px] flex items-center justify-center rounded-[9999px] md:py-[12px] md:px-[15px]"
              >
                {item.icon}
              </button>
            ))}
          </div>
          <div className="flex align-center justify-center gap-[10px] text-[12px] md:text-[14px] md:gap-[20px] ">
            {footerLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.target ? item.target : "_self"}
                rel="noreferrer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
