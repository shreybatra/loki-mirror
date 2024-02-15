import Link from "next/link";
import { NavItem } from "./NavItem";
import { routesType } from "@/constants/Navbar/Routes";

type DesktopNavbarProps = {
  routes: routesType;
};

export const DesktopNavbar = ({ routes }: DesktopNavbarProps) => {
  return (
    <div className="hidden navigation md:flex md:gap-4 lg:gap-10 items-center">
      {routes.map((route, idx) => {
        return <NavItem route={route} key={idx} />;
      })}

      <Link href={"https://dashboard.cosmocloud.io/sign-in"}>
        <button className="button-gradient text-[14px] md:text-sm lg:text-base md:px-[12px] md:py-[5px] lg:px-[24px] lg:py-[10px]">
          Login
        </button>
      </Link>
    </div>
  );
};
