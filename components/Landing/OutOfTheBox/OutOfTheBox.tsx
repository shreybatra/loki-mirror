"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const reactPlayerSize = {
  "360": {
    width: 360,
    height: 203,
  },
  "720": {
    width: 720,
    height: 406,
  },
  "1440": {
    width: 640,
    height: 360,
  },
};

const returnCalculatedPlayerSize = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  const maxPlayerWidth = window.innerWidth * 0.9;

  const finalWidth = maxPlayerWidth < width ? maxPlayerWidth : width;
  const finalHeight = finalWidth / 1.77;
  return {
    height: finalHeight,
    width: finalWidth,
  };
};

export const OutOfTheBox = () => {
  const [playerSize, setPlayerSize] = useState(reactPlayerSize["1440"]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setPlayerSize(returnCalculatedPlayerSize(reactPlayerSize["360"]));
    } else if (window.innerWidth <= 1000) {
      setPlayerSize(returnCalculatedPlayerSize(reactPlayerSize["720"]));
    } else {
      setPlayerSize(returnCalculatedPlayerSize(reactPlayerSize["1440"]));
    }
  }, []);

  return (
    <div className="flex flex-col gap-[36px] items-center lg:flex-row w-[90%]">
      <div className="video-thumbnail-container p-[6px] relative">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ulS2ljAdiIE"
          controls={true}
          width={playerSize.width}
          height={playerSize.height}
        />
      </div>
      <div className="flex flex-col gap-[16px] md:gap-[42px]">
        <div className="flex flex-col w-full gap-[12px]">
          <h3 className="text-[16px] font-[700]">Sneak peak into Cosmocloud</h3>
          <h2
            className="text-gradient text-[20px] font-[700] md:text-[32px]"
            style={{ backgroundColor: "red" }}
          >
            Building APIs in just 5 minutes
          </h2>
        </div>
        <div className="flex flex-col gap-[4px] text-muted text-[18px]">
          <p className="mb-4">
            Cosmocloud is a developer platform, which lets your developers build
            APIs in just few minutes. All the way from Scratch to deploying on
            Production.
          </p>
          <p className="mb-4">
            Now build complex APIs, add custom logic, authentication, and scale,
            all in minutes!
          </p>
          <p className="text-gradient">Checkout the demo now!</p>
        </div>
      </div>
    </div>
  );
};
