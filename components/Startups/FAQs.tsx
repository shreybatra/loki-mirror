import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQContent: any[] = [];

const FAQs = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col gap-4 items-center mb-16 md:gap-[12px]">
        <h3 className="text-primary-pink uppercase tracking-[2px] text-[12px] md:text-[16px] font-medium">
          Have any Queries?
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-neutral-300 tracking-tight mt-4 md:text-base text-center">
          Don’t see an answer to your question here?
        </p>
        <div className="flex min-w-fit">
          <Link href={"linkUrl"}>
            <button className="button-dark border-background mt-2 px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
              Contact US
            </button>
          </Link>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full md:w-[80%]">
        {FAQContent.map((content, index) => (
          <AccordionItem key={content.question} value={`item-${index}`}>
            <AccordionTrigger className="text-lg">
              {content.question}
            </AccordionTrigger>
            <AccordionContent className="text-md">
              {content.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
