"use client";
import React from "react";
import "./navbar.css";
import CosmocloudLogo from '@/assets/svg/CosmocloudLogo.svg';
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex justify-center w-full px-[10px] py-[6px] md:py-[24px]">
      <div className="navbar flex justify-between items-center w-full md:w-[90%] px-[6px] py-[12px] md:px-[24px] md:py-[12px]">
        <div className="logo w-[200px] md:w-full">
          <Image src={CosmocloudLogo} alt="Cosmocloud Logo" />
        </div>
        <div className="hidden navigation md:flex md:gap-4 lg:gap-10 items-center">
          <div className="text-muted cursor-pointer hover:text-white md:text-sm lg:text-base">Features</div>
          <div className="text-muted cursor-pointer hover:text-white md:text-sm lg:text-base">Solution</div>
          <div className="text-muted cursor-pointer hover:text-white md:text-sm lg:text-base">Resources</div>
          <button className="button-gradient md:text-sm lg:text-base md:px-[12px] md:py-[5px] lg:px-[24px] lg:py-[10px]">Login</button>
        </div>
      </div>
    </div>
  );
};
