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
          url="https://youtu.be/0kOZudVNcvE"
          controls={true}
          width={playerSize.width}
          height={playerSize.height}
        />
      </div>
      <div className="flex flex-col gap-[16px] md:gap-[42px]">
        <div className="flex flex-col w-full gap-[12px]">
          <h3 className="text-[16px] font-[700]">Out of the box</h3>
          <h2
            className="text-gradient text-[20px] font-[700] md:text-[32px]"
            style={{ backgroundColor: "red" }}
          >
            Flexibility, Scalability, Security
          </h2>
        </div>
        <div className="flex flex-col gap-[4px] text-muted text-[18px]">
          <p className="mb-4">
            Cosmocloud is the next-gen no-code Backend-as-a-Service (BaaS)
            platform which lets you build and deploy your applications in a
            matter of minutes.
          </p>
          <p className="mb-4">
            From signing up to deploying your first application with a set of
            APIs, everything is possible in just 5 minutes.
          </p>
          <p className="text-gradient">Checkout the teaser!</p>
        </div>
      </div>
    </div>
  );
};
