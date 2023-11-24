import Image, { StaticImageData } from "next/image";

import React from "react";

interface AboutCardProps {
  question: string;
  answer: string;
  image: StaticImageData;
  position?: "left" | "right";
}
export const AboutCard = ({
  question,
  answer,
  image,
  position = "left",
}: AboutCardProps) => {
  return (
    <div
      className={`flex flex-col gap-[16px] md:gap-[27px] ${
        position === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } md:justify-between relative`}
    >
      <div className={`flex flex-col gap-[8px] md:w-[324px] `}>
        <h1
          data-position={position}
          className={`relative md:static about-question text-primary-pink uppercase tracking-[5px] before:left-[-30px] text-[12px] md:text-[14px] lg:text-[18px] ${
            position === "left" && "md:before:left-auto md:before:right-[50%]"
          } ${
            position === "right" && "md:before:right-auto md:before:left-[47.3%]"
          }`}
        >
          {question.split(" ").map((str, index) => {
            if (index == 0) {
              return (
                <span className="font-[600]" key={str}>
                  {str}{" "}
                </span>
              );
            }

            return str + " ";
          })}
        </h1>
        <p className="text-description text-[12px] lg:text-[14px] font-[400]">{answer}</p>
      </div>
      <div className="border-image p-[6px] rounded-[8px] w-[275px] md:w-[310px] max-w-full">
        <Image className="rounded-[8px] w-full" src={image} alt={question} />
      </div>
    </div>
  );
};
