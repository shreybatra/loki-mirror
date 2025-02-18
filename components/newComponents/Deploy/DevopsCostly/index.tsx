import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import smallScale from "assets/svg/deploy/1.svg";
import largeScale from "assets/svg/deploy/2.svg";
import Image from "next/image";

const items = [
  {
    image: smallScale,
    heading: "Startups and small scale companies",
    points: [
      {
        heading: "Manual setup - VM, Networking, Storage",
        content:
          "Your backend engineers need to setup everything manually on your cloud - from VMs to Load Balancers, to networking groups and DNS connectivity.",
      },
      {
        heading: "Backend engineers spend 30% time in managing cloud",
        content:
          "Most of the work is done by your backend engineers, who spend 30% time (30% of their salary) in setting up, debugging and maintaining your cloud infra.",
      },
      {
        heading: "Need to SSH to debug anything",
        content:
          "Whenever your application goes down, or you need to check logs, you need to SSH into the machines and then debug / get the applications running again.",
      },
      {
        heading: "Hard to maintain automatic uptime",
        content:
          "With everything manual, there is less reliability and uptime guarantee is something goes down or your app crashes.",
      },
    ],
  },
  {
    image: largeScale,
    heading: "Enterprises and large scale companies",
    points: [
      {
        heading: "Managed Kubernetes like AWS EKS, Azure AKS, GKE, etc",
        content:
          "When you use managed Kubernetes, you need to pay for additional resources and services, which can be costly.",
      },
      {
        heading: "Need dedicated devops team to handle complexities",
        content:
          "While kubernetes solves some problems for scale, it brings in a lot of complexities and need a dedicated devops team to handle the same - from setting up to monitoring to automatic upgrades.",
      },
      {
        heading: "Very high upskilling curve",
        content:
          "Your backend engineers need to upskill to manage Kubernetes, or you need to hire dedicated devops team for the same.",
      },
      {
        heading: "Complex setup / costly solution for logging & monitoring",
        content:
          "Setting up logging and monitoring is a costly affair, and needs additional services and resources, or you would be dependent on third party services.",
      },
    ],
  },
];

export const DevopsCostly = () => {
  return (
    <div className="w-full md:px-40 px-4">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px]">
          Why is DevOps so costly?
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            How much <span className="text-gradient">cost / time</span> do you
            spend managing your cloud?
          </h2>
          <p className="text-muted-foreground text-[14px] md:text-[16px] text-center">
            Our partners are integral to our success. Together, we drive
            innovation and mutual growth
          </p>
        </div>
      </div>
      <div className="md:w-[80%] mx-auto">
        <div className="grid md:grid-cols-5 gap-4 md:gap-20 items-center justify-center mt-10">
          <div className="md:col-span-2 px-12 md:px-0">
            <Image src={items[0].image} alt="" />
          </div>
          <div className="w-full md:col-span-3 space-y-4">
            <div className="text-lg md:text-2xl font-semibold text-gradient md:text-left text-center">
              {items[0].heading}
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue={items[0].points[0].heading}
            >
              {items[0].points.map((point, index) => {
                return (
                  <AccordionItem value={point.heading} key={index}>
                    <AccordionTrigger>{point.heading}</AccordionTrigger>
                    <AccordionContent>{point.content}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-20 items-center justify-center mt-10 text-justify">
          <div className="w-full md:col-span-3 space-y-4">
            <div className="md:text-2xl text-lg font-semibold text-gradient text-center md:text-right">
              {items[1].heading}
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue={items[1].points[0].heading}
            >
              {items[1].points.map((point, index) => {
                return (
                  <AccordionItem value={point.heading} key={index}>
                    <AccordionTrigger>{point.heading}</AccordionTrigger>
                    <AccordionContent>{point.content}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div className="md:col-span-2 order-first md:order-last px-12 md:px-0">
            <Image src={items[1].image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
