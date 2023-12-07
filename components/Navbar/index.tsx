"use client";

import "./navbar.css";

import React, { useState } from "react";

import CosmocloudLogo from "@/assets/svg/CosmocloudLogo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  // {
  //   path: "/pricing",
  //   label: "Pricing",
  // },

  // {
  //   "path":"/features",
  //   "label":"Features"
  // },
  // {
  //   "path":"/solutions",
  //   "label":"Solutions"
  // },
  // {
  //   "path":"/resources",
  //   "label":"Resources"
  // },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <div className="flex flex-col gap-[10px] justify-center w-full items-center px-[10px] py-[6px] md:py-[24px]">
      <div
        className={`navbar ${
          open ? "open" : "close"
        } flex justify-between items-center w-full md:w-[90%] px-[6px] py-[12px] md:px-[24px] md:py-[12px]`}
      >
        <div className="logo w-[116px] md:w-[200px]">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src={CosmocloudLogo} alt="Cosmocloud Logo" />
          </Link>
        </div>
        <div className="hidden navigation md:flex md:gap-4 lg:gap-10 items-center">
          {routes.map((route: any) => (
            <Link href={route.path} key={route.path}>
              <div className="text-muted cursor-pointer hover:text-white md:text-sm lg:text-base">
                {route.label}
              </div>
            </Link>
          ))}
          <button
            className="button-gradient text-[14px] md:text-sm lg:text-base md:px-[12px] md:py-[5px] lg:px-[24px] lg:py-[10px]"
            onClick={() =>
              (window.location.href = "https://dashboard.cosmocloud.io/sign-in")
            }
          >
            Login
          </button>
        </div>
        <div className="md:hidden">
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <IoCloseSharp className="text-[20px]" />
            ) : (
              <HiOutlineMenuAlt3 className="text-[20px]" />
            )}
          </div>
        </div>
      </div>
      <div className={`mobile ${open ? "fade-in" : "fade-out"}`}>
        <div className="mobile-links">
          {routes.map((route: any) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => setOpen(!open)}
            >
              <div
                className={`mobile-link  ${
                  path === route.path ? "active" : ""
                }`}
              >
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <button
          className="button-gradient text-sm text-base px-[12px] py-[5px]"
          onClick={() =>
            (window.location.href = "https://dashboard.cosmocloud.io/sign-in")
          }
        >
          Login
        </button>
      </div>
    </div>
  );
};
