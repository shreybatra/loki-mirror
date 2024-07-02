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
  }
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

      <Accordion type="single" collapsible className="container w-full md:w-[80%]">
        {FAQContent.map((content, index) => (
          <AccordionItem key={content.question} value={`item-${index}`}>
            <AccordionTrigger className="text-md lg:text-lg xl:text-xl hover:no-underline ">
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
