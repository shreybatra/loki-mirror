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
  const maxPlayerWidth = window.innerWidth * 0.8;

  const finalWidth = maxPlayerWidth < width ? maxPlayerWidth : width;
  const finalHeight = finalWidth / 1.77;
  return {
    height: finalHeight,
    width: finalWidth,
  };
};

export const VideoComponent = () => {
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
    <div className="flex flex-col gap-[36px] items-center lg:flex-row md:w-[90%] w-full px-8 md:px-0">
      <div className="video-thumbnail-container p-[6px] relative">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0rB8a4GoAa0"
          controls={true}
          width={playerSize.width}
          height={playerSize.height}
        />
      </div>
      <div className="flex flex-col gap-[16px] md:gap-4">
        <div className="flex flex-col w-full gap-[12px]">
          <h3 className="text-[16px] font-semibold">
            Sneak peak into Cosmocloud Deploy
          </h3>
          <h2 className="text-gradient w-fit text-[20px] font-[700] md:text-[32px]">
            See it in action
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-muted-foreground text-[18px]">
          <p>
            Checkout how you can deploy your applications on Cosmocloud Deploy
            in just minutes! Now deploy, scale and monitor your applications,
            all from one single portal.
          </p>
          <p></p>
          <p className="text-gradient w-fit font-semibold">
            Checkout the demo now!
          </p>
        </div>
      </div>
    </div>
  );
};
