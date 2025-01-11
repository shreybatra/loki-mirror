import { SiKubernetes } from "react-icons/si";
import { FaCircleCheck, FaChartArea, FaSackDollar } from "react-icons/fa6";
import { RiFlowChart } from "react-icons/ri";
import { BsCloudsFill } from "react-icons/bs";

const items = [
  {
    heading: "Easiest way to deploy & scale",
    description:
      "Deploy your applications in just few clicks, scale 0 to million users. Load Balancers, Auto Scalers, Networking and Security comes in-built.",
    icon: FaCircleCheck,
  },
  {
    heading: "Managed Kubernetes Clusters",
    description:
      "Get the power of managed Kubernetes, without even knowing how Kubernetes works, at a cost less than raw VMs.",
    icon: SiKubernetes,
  },
  {
    heading: "Built-in CI/CD",
    description:
      "Integrate and build any CI/CD pipeline with Cosmocloud Deploy, using our CLI and actions.",
    icon: RiFlowChart,
  },
  {
    heading: "Realtime Monitoring",
    description:
      "From scalable logs to real-time metrics, Cosmocloud Deploy has everything you need to monitor your applications.",
    icon: FaChartArea,
  },
  {
    heading: "Multi-Cloud",
    description:
      "Chose to deploy in the cloud & region of your choice, be it AWS, GCP or Azure.",
    icon: BsCloudsFill,
  },
  {
    heading: "Costs less than 1 Devops Eng",
    description:
      "Cosmocloud Deploy lets you deploy on your own cloud accounts, so you have full control over your cloud costs.",
    icon: FaSackDollar,
  },
];

export const FeaturesGrid = () => {
  return (
    <div className="w-full md:px-40 px-4 font-medium" id="features">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px]">
          Our core feeatures
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Don&apos;t limit yourself -{" "}
            <span className="text-gradient">deploy, scale and monitor</span>
          </h2>
          <p className="text-muted-foreground text-[14px] md:text-[16px] text-center">
            Our partners are integral to our success. Together, we drive
            innovation and mutual growth
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-24 md:mt-20 mt-10">
        {items.map((item) => {
          return (
            <CardItem
              key={item.heading}
              heading={item.heading}
              description={item.description}
              Icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

const CardItem = ({ heading, description, Icon }: any) => {
  return (
    <div className="h-fit w-full md:space-y-3 space-y-1 text-center md:text-left">
      {Icon && (
        <Icon className="text-3xl md:text-5xl text-secondary md:w-fit w-full" />
      )}
      <div className="text-md md:text-xl">{heading}</div>
      <div className="text-sm md:text-md text-muted-foreground">
        {description}
      </div>
    </div>
  );
};
