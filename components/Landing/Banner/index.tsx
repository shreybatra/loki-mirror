import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
const AnnouncementBanner = ({
  close = false,
  heading = "Cosmocloud",
  description = "  Join us in Noida from June 7 – 9 to see what’s ",
  linkUrl = "",
  buttonLabel = "coming next.",
}) => {
  if (close) {
    return null;
  }
  return (
    <div className="flex gap-x-6 justify-between rounded-md overflow-hidden px-6 py-2.5 sm:px-3.5 mt-[30px]  border-white border-[1.6px] w-full">
      <div className="flex  flex-col gap-x-4 gap-y-2">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-[700]">
          {heading}
        </h2>
        <p className="text-muted text-[12px] md:text-[14px] lg:text-[16px]">
          {description}{" "}
          <Link className="underline" href={linkUrl}>
            {buttonLabel}
          </Link>
        </p>
      </div>

      <button type="button" className=" flex  items-start left-3 -m-3 p-3">
        <IoMdClose className="h-5 w-5 text-gray-100" aria-hidden="true" />
      </button>
    </div>
  );
};
export default AnnouncementBanner;
