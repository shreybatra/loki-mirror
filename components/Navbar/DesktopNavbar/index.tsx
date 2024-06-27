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
                  <NavigationMenuTrigger className="text-[16px]">
                    {route.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md background-gradient from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <route.icon className="h-6 w-6 text-[#fff]" />
                            <div className="mb-2 mt-4 text-lg text-[#fff] font-medium">
                              {route.label}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {
                        route.children.map((child, idx) => {
                          return (
                            <ListItem
                              key={idx}
                              href={child.path}
                              title={child.label}
                            >
                              {child.description}
                            </ListItem>
                          );
                        
                        })
                      }
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={route.path} key={idx} legacyBehavior passHref>
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
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-[#fff] leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
