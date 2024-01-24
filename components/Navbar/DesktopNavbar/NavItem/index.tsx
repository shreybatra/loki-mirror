import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ChildContainer } from "../../ChildContainer";
import { routeType } from "@/constants/Navbar/Routes";

type NavItemProps = {
  route: routeType;
  newTab?: boolean;
};

export const NavItem = ({ route, newTab = false }: NavItemProps) => {
  const [showChildren, setShowChildren] = useState(false);
  const ifChildren = route.children;
  let targetVal = "_self";
  if (newTab) {
    targetVal = "_blank";
  }
  if (ifChildren) {
    return (
      <>
        <div className="flex items-center relative">
          <div
            className="flex items-center"
            onClick={() => {
              setShowChildren(!showChildren);
            }}
          >
            <div className="text-muted cursor-pointer hover:text-white md:text-sm lg:text-base">
              {route.label}
            </div>
            {ifChildren && (
              <div className="text-muted cursor-pointer ">
                {<RiArrowDropDownLine size={25} />}
              </div>
            )}
          </div>
          {showChildren && <ChildContainer routes={route.children} />}
        </div>
      </>
    );
  }

  return (
    <div className="flex items-center relative">
      <Link href={route.path} key={route.path} target={targetVal}>
        <div className="text-muted cursor-pointer hover:text-white md:text-sm lg:text-base">
          {route.label}
        </div>
      </Link>
    </div>
  );
};
