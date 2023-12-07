import "./contactUs.css";

import React from "react";

const ContactUsHeader = () => {
  return (
    <div className="mt-10  w-[90%] md:mt-20">
      <h2 className="text-[48px] md:text-[48px] lg:text-[48px] font-[700] gap-[16px] ">
        Contact us
      </h2>

      <p className="text-[18px] font-[400] text-muted">
        Reach out to us or schedule a demo
      </p>
    </div>
  );
};

export default ContactUsHeader;
