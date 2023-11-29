"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const reactPlayerSize = {
  "360": {
    width: 387,
    height: 218,
  },
  "720": {
    width: 387,
    height: 218,
  },
  "1440": {
    width: 640,
    height: 360,
  },
};

export const OutOfTheBox = () => {
  const [playerSize, setPlayerSize] = useState(reactPlayerSize["1440"]);

  useEffect(() => {
    if (window.innerWidth <= 360) {
      setPlayerSize(reactPlayerSize["360"]);
    } else if (window.innerWidth <= 720) {
      setPlayerSize(reactPlayerSize["720"]);
    } else {
      setPlayerSize(reactPlayerSize["1440"]);
    }
  }, []);

  return (
    <div className="flex flex-col gap-[36px] items-center md:flex-row">
      <div className="video-thumbnail-container p-[6px] relative">
        <ReactPlayer
          url="https://youtu.be/UWco0D6xp7U"
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
          <p className="text-gradient">Checkout the demo video!</p>
        </div>
      </div>
    </div>
  );
};
