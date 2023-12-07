import Image from "next/image";
import React from "react";

const ContactCard = ({ imageIcon, info, data }) => {
  return (
    <div className="contactCard">
      {imageIcon}

      <h1 className="block text-gradient font-semibold mt-2 text-xl w-fit">
        {info}
      </h1>
      <h1 className="text-md">{data}</h1>
    </div>
  );
};

export default ContactCard;
