import Image from "next/image";
import React from "react";

type ContactCardProps = {
  imageIcon: React.ReactNode;
  info: string;
  data: React.ReactNode;
};

const ContactCard = ({ imageIcon, info, data }: ContactCardProps) => {
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
