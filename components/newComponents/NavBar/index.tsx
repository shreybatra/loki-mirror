"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import CosmocloudLogo from "@/assets/svg/cosmocloud-logo-full-dark.svg";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

const items = [
  {
    title: "Pricing",
    url: "/#pricing-plans",
    icon: Home,
  },
  {
    title: "Features",
    url: "/#features",
    icon: Inbox,
  },
  {
    title: "No-code Backend?",
    url: "/build",
    icon: Inbox,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Calendar,
  },
];

const DesktopNav = () => {
  return (
    <div className="w-full px-40 z-50 mt-4">
      <div className="flex justify-between w-full z-10">
        <div className="h-12 py-2 w-fit z-10">
          <Link href="/" passHref>
            <Image
              src={CosmocloudLogo}
              alt="Cosmocloud Logo"
              className="h-full w-fit z-10"
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href={item.url}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <Link href="https://deploy.cosmocloud.io" passHref>
              <Button
                variant="ghost"
                size="sm"
                className="button-dark border-background px-6"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileNav = () => {
  return (
    <div className="w-full px-4 z-50 mt-4">
      <div className="flex justify-between w-full items-center">
        <div className="h-10 py-2 w-fit">
          <Link href="/" passHref>
            <Image
              src={CosmocloudLogo}
              alt="Cosmocloud Logo"
              className="h-full w-fit"
            />
          </Link>
        </div>
        <SidebarTrigger />
      </div>
      <Sidebar side="right" variant="sidebar">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarProvider open={open} onOpenChange={setOpen} className="w-full z-50">
      <div className="hidden md:block w-full">
        <DesktopNav />
      </div>
      <div className="block md:hidden w-full z-50">
        <MobileNav />
      </div>
    </SidebarProvider>
  );
};
