import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const items = [
  {
    title: "CPU Usage",
    description: "Charged per CPU-hour",
    hourlyPrice: 0.016,
    units: "CPU-hour",
    content: "$11.52/month (1CPU, 720 hours)",
  },
  {
    title: "RAM Usage",
    description: "Charged per GB-hour",
    hourlyPrice: 0.0016,
    units: "GB-hour",
    content: "$1.152/month (1GB, 720 hours)",
  },
  {
    title: "Data Transfer",
    description: "Charged per GB transferred out",
    hourlyPrice: 0.11,
    units: "GB",
    content: "$11/month (100GB, 720 hours)",
  },
];

export const ComputePricing = () => {
  return (
    <div className="w-full md:px-40 px-8">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px]">
          Compute Usage
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Get the power of Kubernetes at{" "}
            <span className="text-gradient">costs of less than</span> raw VMs.
          </h2>
          <p className="text-muted-foreground text-[14px] md:text-[16px] text-center">
            It is upto{" "}
            <span className="text-gradient font-bold">20% cheaper</span> than
            raw EC2 machines on AWS
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {items.map((item, index) => {
          return (
            <Card className="border-[1.5px] border-secondary" key={index}>
              <CardHeader>
                <CardTitle className="text-gradient">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <span className="text-2xl font-bold">
                    ${item.hourlyPrice}{" "}
                  </span>
                  <span className="text-muted-foreground">/ {item.units}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    ({item.content})
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="text-center text-muted mt-4 text-sm">
        You would be charged $16.128 for 1 instance having 1 CPU and 4 GB RAM
        running for a month of 30 days (720 hours)
      </div>
    </div>
  );
};
