import React from "react";
import { IoClose } from "react-icons/io5";
import { BsRocketTakeoffFill } from "react-icons/bs";
const AnnouncementBanner = ({ close = false }) => {
  if (close) {
    return null;
  }
  return (
    <div className="background-gradient mt-6 relative w-[95%] lg:w-[130%] text-white flex items-center justify-between py-6 px-4 lg:px-12 rounded-xl border-background">
      <div className="flex flex-col items-start space-y-2 content-center">
        <div className="flex gap-2 items-baseline">
          <BsRocketTakeoffFill className="h-4 w-4 " />
          <span className="font-semibold text-sm lg:text-base">
            Cosmocloud Global Hackathon, 2024
          </span>
        </div>
        <span className="text-gray-300 text-sm lg:text-base">
          Cosmocloud offers free credits, technical guidence, and access to our
          partner network for{" "}
          <a href="" className="underline">
            startups
          </a>
          .
        </span>
      </div>
      <IoClose className="h-4 w-4 cursor-pointer absolute top-2 right-2" />
    </div>
  );
};
export default AnnouncementBanner;
