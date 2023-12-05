import "./contactUs.css";

import React from "react";

const ContactUsHeader = () => {
  return (
    <div className=" mt-[49.5px]  w-[90%] md:mt-[80px]">
      <h2 className="text-[22px] md:text-[22px] lg:text-[48px] font-[700] gap-[16px] ">
        Contact Us
      </h2>

      <p className="text-[12px] md:text-[18px] font-[400] text-muted">
        Reach out to us and book a demo
      </p>
    </div>
  );
};

export default ContactUsHeader;
