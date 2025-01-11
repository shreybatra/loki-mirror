import React from "react";
import FAQ from "./FAQ";
import data from "./FAQ/data.json";
const FAQSection = () => {
  return (
    <div className="flex flex-col gap-[24px] w-full">
      <div className="flex flex-col gap-[24px]">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-start text-[12px] md:text-[16px] md:text-center">
          DEVOPS JOURNEY
        </h3>
        <div className="flex flex-row gap-[12px] justify-between items-center md:flex-col">
          <h2 className="font-[700] w-[250px] text-[20px] text-start md:text-[32px] md:w-[100vw] md:text-center">
            Optimize for efficiency and reliability
          </h2>
          <div className="cursor-pointer flex gap-2 items-center text-muted"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[60px] md:gap-[180px] px-6 py-8">
        {data.faqs.map((faq, index) => {
          return <FAQ {...faq} isRight={index % 2 == 0} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FAQSection;
