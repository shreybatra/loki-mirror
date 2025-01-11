"use client";

import { updateWebAnalytics } from "@/functions/WebAnalytics";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const WebAnalytics = () => {
  const route = usePathname();
  const eventId = route === "/" ? "/home" : route;
  useEffect(() => {
    updateWebAnalytics({ type: "PAGE_VIEW", eventId });
  }, [route]);
  return null;
};

export default WebAnalytics;
