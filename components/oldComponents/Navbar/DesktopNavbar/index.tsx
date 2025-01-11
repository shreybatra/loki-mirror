import Link from "next/link";
import { routesType } from "@/constants/Navbar/Routes";
import cn from "clsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { updateWebAnalytics } from "@/functions/WebAnalytics";

type DesktopNavbarProps = {
  routes: routesType;
};

export const DesktopNavbar = ({ routes }: DesktopNavbarProps) => {
  return (
    <NavigationMenu className="hidden lg:flex md:gap-4 lg:gap-10 items-center">
      <NavigationMenuList>
        {routes.map((route, idx) => {
          return (
            <NavigationMenuItem key={idx}>
              {!!route.children ? (
                <>
                  <NavigationMenuTrigger className="text-[16px] bg-transparent">
                    {route.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <AspectRatio ratio={9 / 9}>
                            <Image
                              src={route.banner}
                              alt="Image"
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </NavigationMenuLink>
                      </li>
                      {route.children.map((child, idx) => {
                        return (
                          <ListItem
                            key={idx}
                            href={child.path}
                            title={child.label}
                            target={child?.target ? `_blank` : ""}
                          >
                            {child.description}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link
                  href={route.path}
                  key={idx}
                  legacyBehavior
                  passHref
                  target={route?.target ? `_blank` : ""}
                >
                  <NavigationMenuLink className="md:p-4 lg:p-6">
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      <Link href={"https://dashboard.cosmocloud.io/sign-in"}>
        <button className="button-gradient text-[14px] md:text-sm lg:text-base md:px-[12px] md:py-[5px] lg:px-[24px] lg:py-[10px]">
          Login
        </button>
      </Link>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li
      onClick={() => {
        if (props.target === "_blank")
          updateWebAnalytics({
            type: "PAGE_VIEW",
            eventId: `${props.href}`,
          });
      }}
    >
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-[#fff] leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
