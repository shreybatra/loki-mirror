import Link from "next/link";
import { MobileNavItem } from "./MobileNavItem";
import { routesType } from "@/constants/Navbar/Routes";

type MobileNavbarProps = {
  open: boolean;
  routes: routesType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileNavbar = ({ open, setOpen, routes }: MobileNavbarProps) => {
  return (
    <div className={`mobile ${open ? "fade-in" : "fade-out"}`}>
      <div className="mobile-links">
        {routes.map((route: any, idx) => (
          <MobileNavItem route={route} setOpen={setOpen} key={idx} />
        ))}
      </div>
      <Link href={"https://dashboard.cosmocloud.io/sign-in"}>
        <button className="button-gradient text-sm text-base px-[12px] py-[5px]">
          Login
        </button>
      </Link>
    </div>
  );
};
