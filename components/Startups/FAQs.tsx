import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQContent: any[] = [
  {
    question: "What is Cosmocloud?",
    answer:
      "Cosmocloud is a cloud-based platform that enables developers to build, deploy, and scale applications. It provides a wide range of services that can be used to build and run applications in the cloud.",
  },
  {
    question: "Who are eligible for Cosmocloud for Startups?",
    answer:
      "Early stage startups from Preseed to Series B, which are either Product based or Service based (marketing agencies, consultants are not eligible), who have not previously recieved credits from Cosmocloud, have a Live functioning website and an official LinkedIn Company page.",
  },
  {
    question: "How to apply for Cosmocloud for Startups?",
    answer:
      "We work closesly with VCs, Accelerators, and Incubators. You can ask your partner VC or Accellerator to refer you. If they are not a part of our program please apply on the link aboove. If you are not involced with a VC, incubator or accellerator, please apply above on this page.",
  },
  {
    question: "Can I apply if I am already using Cosmocloud?",
    answer:
      "Absolutely. You do not have to be new to Cosmocloud to be eligible for our program. We accept both new and existing Cosmocloud users.",
  },
  {
    question: "What if I've applied but have not heard back?",
    answer:
      "If you haven't heard back from us after 7 business days please contact us in link above",
  },
  {
    question: "How will I recieve my promo code?",
    answer:
      "Once you are accepted into the program, you will receive a unique promo code in your welcome email.",
  },
];

const FAQs = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <div className="flex flex-col gap-1 items-center mb-8 md:gap-[12px]">
        <h3 className="text-primary-pink uppercase tracking-[2px] text-[12px] md:text-[16px] font-medium">
          Have any Queries?
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-muted-foreground tracking-tight mt-1 mb-3 text-sm md:text-base text-center">
          Don’t see an answer to your question here?
        </p>
        <div className="flex min-w-fit">
          <Link href={"linkUrl"}>
            <button className="button-dark border-background mt-2 px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="container w-full md:w-[80%]"
      >
        {FAQContent.map((content, index) => (
          <AccordionItem key={content.question} value={`item-${index}`}>
            <AccordionTrigger className="text-md text-start lg:text-lg xl:text-xl hover:no-underline ">
              {content.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm lg:text-md xl:text-lg text-muted-foreground">
              {content.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
