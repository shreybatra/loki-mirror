"use client";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import { IoCloseSharp } from "react-icons/io5";
import routes from "@/constants/Navbar/Routes";
import { DesktopNavbar } from "./DesktopNavbar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import CosmocloudLogo from "@/assets/svg/CosmocloudLogo.svg";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-[10px] justify-center w-full items-center px-[10px] py-[6px] md:py-[24px] ">
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
        <DesktopNavbar routes={routes} />
        <div className="lg:hidden">
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <IoCloseSharp className="text-[20px]" />
            ) : (
              <HiOutlineMenuAlt3 className="text-[20px]" />
            )}
          </div>
        </div>
      </div>
      <MobileNavbar open={open} setOpen={setOpen} routes={routes} />
    </div>
  );
};
