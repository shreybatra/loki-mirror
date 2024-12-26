import React from "react";
import questionMark from "@/assets/svg/question-mark.svg";
import Image from "next/image";
const AutoDevops = () => {
  return (
    <div className="flex justify-center   gap-6 w-full">
      <div
        className={`flex flex-col justify-between p-6 feature-description w-full  h-[195px]  lg:h-[304px] min-h-fit `}
      >
        <div className="flex flex-col gap-6">
          <span className="text-primary text-sm">WHY AUTO-DEPLOY</span>
          <Image src={questionMark} alt="question mark" />
        </div>
        <span className="text-[#696969] text-2xl">
          Questions you need to ask
        </span>
      </div>
      <div className="flex flex-col justify-between h-[195px]  lg:h-[304px] min-h-fit  w-full">
        <div className={` flex flex-col p-6 feature-description min-h-[112px]`}>
          <span className="text-primary text-2xl">?</span>
          <span className="text-2xl">
            <span>Why is DevOps so</span>{" "}
            <span className="font-bold">costly</span> ?
          </span>
        </div>
        <div className={` flex flex-col p-6 feature-description min-h-[112px]`}>
          <span className="text-primary text-2xl">?</span>
          <span className="text-2xl">
            <span>How much </span>{" "}
            <span className="font-bold">cost / time</span> do you spend managing
            your cloud?
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutoDevops;
