"use client";

import "./blogs.css";

import { BlogsHeader } from "@/components/Blogs/BlogsHeader/BlogsHeader";
import { BlogsNavbar } from "@/components/Blogs/BlogsNavbar/BlogsNavbar";
import Image from "next/image";
import PricingBg from "@/assets/svg/pricingBg.svg";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="sm:none bg-pricing">
        <Image src={PricingBg} alt="contact-bg" />
      </div>
      <BlogsHeader />
      <BlogsNavbar />
      <div className="flex flex-col md:flex-row mt-[42px]  md:mt-[84px]">
        {children}
      </div>
    </div>
  );
}
