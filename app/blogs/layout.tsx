"use client";

import "./blogs.css";

import { BlogsHeader } from "@/components/oldComponents/Blogs/BlogsHeader/BlogsHeader";
import { BlogsNavbar } from "@/components/oldComponents/Blogs/BlogsNavbar/BlogsNavbar";
import Image from "next/image";
import BlogsBg from "@/assets/svg/blogsBg.svg";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="sm:none bg-pricing">
        <Image src={BlogsBg} alt="contact-bg" />
      </div>
      <div className="w-[90%] mx-auto">{children}</div>
    </div>
  );
}
