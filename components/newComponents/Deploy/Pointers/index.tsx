import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";
import { FaCheck } from "react-icons/fa6";

const items = [
  "Day-0 Enterprise-Ready",
  "Managed Kubernetes",
  "Built-in CI/CD",
  "Realtime Monitoring",
  "Multi-Cloud",
  "Auto-Scaling",
];

export const Pointers = () => {
  return (
    <div className="md:w-[60%] px-8">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex flex-col md:w-2/3 w-full md:justify-center gap-4 md:order-first order-last">
          {items.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <ListItem text={item} />
              </div>
            );
          })}
        </div>
        <div className="space-y-3 w-full text-center md:text-left">
          <div className="text-2xl md:text-4xl text-gradient font-bold w-fit">
            Get enterprise ready with Cosmocloud Deploy
          </div>
          <div className="text-muted-foreground md:text-lg text-sm">
            Applications running on Cosmocloud Deploy are battletested across
            huge scale, both horizontally and vertically. Limit yourself only
            with the cloud limit, nothing else.
          </div>
          <SchedulingModal
            btnText="Get started"
            cName="button-gradient px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ text }: any) => {
  return (
    <div className="flex gap-4 items-center">
      <FaCheck className="md:text-3xl text-xl text-secondary" />
      <div className="text-lg md:text-2xl">{text}</div>
    </div>
  );
};
