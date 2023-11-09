"use client";
import React from "react";
import "./navbar.css";
import CosmocloudLogo from '@/assets/svg/CosmocloudLogo.svg';
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar flex justify-between items-center">
        <div className="logo">
          <Image src={CosmocloudLogo} alt="Cosmocloud Logo" />
        </div>
        <div className="navigation flex gap-10 items-center">
          <div className="text-muted cursor-pointer hover:text-white">Features</div>
          <div className="text-muted cursor-pointer hover:text-white">Solution</div>
          <div className="text-muted cursor-pointer hover:text-white">Resources</div>
          <button className="button-gradient px-[24px] py-[10px]">Login</button>
        </div>
      </div>
    </div>
  );
};
