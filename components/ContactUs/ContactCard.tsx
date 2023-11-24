import Image from "next/image";
import React from "react";

const ContactCard = ({ image, info, data }) => {
  return (
    <div className="contactCard">
      <Image src={image} alt="alt" />
      <p className="text-muted">{info}</p>
      <h3>{data}</h3>
    </div>
  );
};

export default ContactCard;
