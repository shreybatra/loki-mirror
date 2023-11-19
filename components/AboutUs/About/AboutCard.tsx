"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface AboutCardProps {
  question: string;
  answer: string;
  image: StaticImageData;
}
export const AboutCard = ({ question, answer, image }: AboutCardProps) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="relative about-question text-primary-pink uppercase tracking-[5px]">
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
      <div className="flex flex-col gap-[8px]">
        <p className="text-description text-[12px] font-[400]">{answer}</p>
        <div className="border-image p-[6px] rounded-[8px]">
        <Image className="rounded-[8px] w-full" src={image} alt={question} />
        </div>
      </div>
    </div>
  );
};
