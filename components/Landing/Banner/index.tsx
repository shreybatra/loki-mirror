import React from "react";
import { IoClose } from "react-icons/io5";
import { BsRocketTakeoffFill } from "react-icons/bs";
const AnnouncementBanner = ({ close = false }) => {
  if (close) {
    return null;
  }
  return (
    <div className="background-gradient tracking-tight mt-6 relative w-[95%] md:w-[90%] text-white flex items-center justify-between py-4 px-12 shadow-sm rounded-2xl">
      <div className="flex flex-col items-start space-y-2">
        <div className="flex relative">
          <BsRocketTakeoffFill className="h-4 w-4 absolute left-[-30px] top-1" />
          <span className="font-bold">Cosmocloud for startups 2024</span>
        </div>
        <span>
          Cosmocloud offers free credits, technical guidence, and access to our partner network for <a href="" className="text-primary">startups</a>.
        </span>
      </div>
      <IoClose className="h-4 w-4 cursor-pointer absolute top-2 right-2" />
    </div>
  );
};
export default AnnouncementBanner;
