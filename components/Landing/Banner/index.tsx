"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsRocketTakeoffFill } from "react-icons/bs";
import Link from "next/link";
const AnnouncementBanner = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div
      className={`background-gradient relative w-[95%] lg:w-[130%] text-white flex items-center justify-between py-6 px-4 lg:px-12 rounded-xl border-background ${
        isClosed ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col items-start space-y-2 content-center">
        <div className="flex gap-2 items-baseline">
          <BsRocketTakeoffFill className="h-4 w-4 " />
          <span className="font-semibold text-sm lg:text-base">
            Cosmocloud Low-Code Hackathon
          </span>
        </div>
        <span className="text-gray-300 text-sm lg:text-base">
          Register for the{" "}
          <Link
            href="https://cosmocloud.io/redirect?event_id=cosmocloud_landing_hackathon_redirect&redirect_url=https://hackathon.cosmocloud.io"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Cosmocloud Low-Code Hackathon
          </Link>{" "}
          and get a chance to win upto $14,000 in prizes!
        </span>
      </div>
      <IoClose
        className="h-4 w-4 cursor-pointer absolute top-2 right-2"
        onClick={() => setIsClosed(true)}
      />
    </div>
  );
};
export default AnnouncementBanner;
