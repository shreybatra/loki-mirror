"use client";
import React, { cloneElement } from "react";
import "./scroller.css";

interface HorizontalScrollerProps {
  children: React.ReactNode;
  direction: "left" | "right";
  speed: "fast" | "slow"; // in seconds
}

export const HorizontalScroller = ({
  children,
  direction,
  speed,
}: HorizontalScrollerProps) => {
  if (!Array.isArray(children)) return children;

  return (
    <div
      className="scroller max-w-max"
      data-speed={speed}
      data-direction={direction}
      data-animated={true}
    >
      <div className="scroller__inner">
        {children}
        <>
          {children.map((child, idx) =>
            cloneElement(child, {
              key: idx,
            })
          )}
        </>
      </div>
    </div>
  );
};
