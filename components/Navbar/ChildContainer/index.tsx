import { NavItem } from "../DesktopNavbar/NavItem";
import { routesType } from "@/constants/Navbar/Routes";

type styleObjType = {
  [key: string]: string;
};

export type ChildContainerProps = {
  routes?: routesType;
  mobile?: boolean;
  toggleOpen : React.Dispatch<React.SetStateAction<boolean>>
};

export const ChildContainer = ({
  routes,
  mobile = false,
  toggleOpen,
}: ChildContainerProps) => {
  const styleObj: styleObjType = {};
  let classString = "";
  if (mobile) {
    styleObj["position"] = "relative";
    styleObj["left"] = "0px";
    classString = "relative";
  } else {
    styleObj["position"] = "absolute";
    styleObj["top"] = "3rem";
    styleObj["zIndex"] = "100";
    classString = " border-background  relative py-2 feature-description";
  }

  return (
    <div className={classString} style={styleObj}>
      {routes?.map((child) => (
        <div onClick={() => { toggleOpen(false) }} className="px-5 pb-2" key={crypto.randomUUID()}>
          <NavItem newTab={true} route={child} isMobile={mobile} />
        </div>
      ))}
    </div>
  );
};
