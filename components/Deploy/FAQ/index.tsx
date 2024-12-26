import first from "@/assets/svg/deploy/1.svg";
import second from "@/assets/svg/deploy/2.svg";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
interface IFeature {
  heading: string;
  data: Idata[];
  image: string;
  isRight: boolean;
}

interface Idata {
  title: string;
  options: string[];
}
const FAQ = ({ heading, data, image, isRight }: IFeature) => {
  return (
    <div
      className={`w-full flex flex-col ${
        isRight ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between gap-8`}
    >
      <div className={`flex flex-col justify-center items-center gap-6`}>
        <div className="flex items-center gap-2">
          <div
            className="h-6 w-6 bg-[#D281BC] rounded-full flex items-center justify-center"
            style={{
              boxShadow: " 0px 4px 16px 1px #BF1EAE",
            }}
          ></div>
          <h1 className="text-2xl">{heading}</h1>
        </div>
        <Accordion
          type="single"
          defaultValue="item-0"
          className="w-full md:w-[580px] flex flex-col gap-6"
        >
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              style={{
                borderLeft: "4px solid #BF1EAE",

                backdropFilter: "blur(40px)",
                borderBottom: "none",
              }}
              className="feature-description   min-h-16 p-2 lg:w-[580px]"
            >
              <AccordionTrigger className="flex justify-between p-2 text-white">
                <h1 className="text-xl">{item.title}</h1>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 p-6 pt-2">
                {item.options.map((option, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                    <p className="text-[#CBCBCB]">{option}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Image
        className="h-[300px] -mb-12 w-[300px] bg-center md:h-[500px] md:w-[500px]"
        src={image === "first" ? first : second}
        alt="image"
      />
    </div>
  );
};

export default FAQ;
