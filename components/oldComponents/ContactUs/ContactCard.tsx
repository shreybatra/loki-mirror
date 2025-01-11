import React from "react";

type ContactCardProps = {
  imageIcon: React.ReactNode;
  info: string;
  data: React.ReactNode;
};

const ContactCard = ({ imageIcon, info, data }: ContactCardProps) => {
  return (
    <div className="contactCard w-full md:w-[324px] border-background">
      {imageIcon}
      <h1 className="block mt-[16px] text-gradient text-[20px] font-semibold md:text-xl w-fit">
        {info}
      </h1>
      <h1 className=" text-[14px] md:text-md">{data}</h1>
    </div>
  );
};

export default ContactCard;
