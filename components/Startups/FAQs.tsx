"use client";
import Link from "next/link";
import { useState } from "react";
import "./styles.css";

const FAQContent = [
  {
    question: "What are the eligibility requirements for MongoDB for Startups?",
    answer:
      "We work closely with VCs, accelerators, and incubators. Please ask your VC or accelerator partner to refer you. If your VC or accelerator partner is not part of the MongoDB for Startups program, please ask them to apply.If you are not involved with a VC, accelerator, or incubator, please apply above on this page.",
  },
  {
    question:
      "What are the eligibility requirements for MongoDB for Startups1?",
    answer:
      "We work closely with VCs, accelerators, and incubators. Please ask your VC or accelerator partner to refer you. If your VC or accelerator partner is not part of the MongoDB for Startups program, please ask them to apply.If you are not involved with a VC, accelerator, or incubator, please apply above on this page.",
  },
  {
    question:
      "What are the eligibility requirements for MongoDB for Startups2?",
    answer:
      "We work closely with VCs, accelerators, and incubators. Please ask your VC or accelerator partner to refer you. If your VC or accelerator partner is not part of the MongoDB for Startups program, please ask them to apply.If you are not involved with a VC, accelerator, or incubator, please apply above on this page.",
  },
  {
    question:
      "What are the eligibility requirements for MongoDB for Startups3?",
    answer:
      "We work closely with VCs, accelerators, and incubators. Please ask your VC or accelerator partner to refer you. If your VC or accelerator partner is not part of the MongoDB for Startups program, please ask them to apply.If you are not involved with a VC, accelerator, or incubator, please apply above on this page.",
  },
  {
    question:
      "What are the eligibility requirements for MongoDB for Startups4?",
    answer:
      "We work closely with VCs, accelerators, and incubators. Please ask your VC or accelerator partner to refer you. If your VC or accelerator partner is not part of the MongoDB for Startups program, please ask them to apply.If you are not involved with a VC, accelerator, or incubator, please apply above on this page.",
  },
  {
    question:
      "What are the eligibility requirements for MongoDB for Startups5?",
    answer:
      "We work closely with VCs, accelerators, and incubators. Please ask your VC or accelerator partner to refer you. If your VC or accelerator partner is not part of the MongoDB for Startups program, please ask them to apply.If you are not involved with a VC, accelerator, or incubator, please apply above on this page.",
  },
  {
    question:
      "What are the eligibility requirements for MongoDB for Startups6?",
    answer:
      "We work closely with VCs, accelerators, and incubators. Please ask your VC or accelerator partner to refer you. If your VC or accelerator partner is not part of the MongoDB for Startups program, please ask them to apply.If you are not involved with a VC, accelerator, or incubator, please apply above on this page.",
  },
];

const FAQs = () => {
  const [visibleQuestionIndex, setVisibleQuestionIndex] = useState<
    null | number
  >(null);

  const toggleQuestionVisibility = (index: number) => {
    setVisibleQuestionIndex((prev) => (prev === index ? -1 : index));
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-28 mb-16">
        <h3 className="text-3xl  sm:text-4xl md:text-5xl font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h3>
        <p className="text-neutral-300 tracking-tight md:text-lg mt-6 text-center">
          Don’t see an answer to your question here?
        </p>
        <div className="flex min-w-fit mt-10">
          <Link href={"linkUrl"}>
            <button className="button-dark border-background px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
              Contact US
            </button>
          </Link>
        </div>
      </div>
      {FAQContent.map((content, index) => (
        <div className="group border-b-background" key={content.question}>
          <div
            className="flex cursor-pointer list-none items-center justify-between py-8 text-lg font-medium text-secondary-900 group-open:text-primary-500"
            onClick={() => toggleQuestionVisibility(index)}
          >
            {content.question}
            <div
              style={
                visibleQuestionIndex === null
                  ? undefined
                  : {
                      animation: `${
                        visibleQuestionIndex === index
                          ? "spin-clock"
                          : "spin-anti-clock"
                      } 0.2s linear 1`,
                    }
              }
            >
              {visibleQuestionIndex !== index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              )}
            </div>
          </div>
          {visibleQuestionIndex === index && <div>{content.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
