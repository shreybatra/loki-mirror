import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ChildContainer } from "../../ChildContainer";
import { routeType } from "@/constants/Navbar/Routes";

type MobileNavItemProps = {
  route: routeType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileNavItem = ({ route, setOpen }: MobileNavItemProps) => {
  const path = usePathname();
  const [showChildren, setShowChildren] = useState(false);
  const ifChildren = route.children;

  if (ifChildren) {
    return (
      <>
        <div
          className="flex items-center relative"
          onClick={() => {
            setShowChildren(!showChildren);
          }}
        >
          <div
            className={`mobile-link  ${path === route.path ? "active" : ""}`}
          >
            {route.label}
          </div>
          <div className="cursor-pointer ">
            {<RiArrowDropDownLine size={25} />}{" "}
          </div>
        </div>
        {showChildren && (
          <ChildContainer
            toggleOpen={setOpen}
            mobile={true}
            routes={route.children}
          />
        )}
      </>
    );
  }

  return (
    <Link
      key={route.path}
      href={route.path}
      target={route.target ? "_blank" : ""}
    >
      <div className="flex items-center relative">
        <div
          className={`mobile-link  ${path === route.path ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {route.label}
        </div>
      </div>
    </Link>
  );
};
