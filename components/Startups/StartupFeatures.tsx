import { ChevronRightIcon, DollarSignIcon,  Lightbulb, Store} from "lucide-react";

const features = [
  {
    id: 1,
    icon: DollarSignIcon,
    title: "Free credits",
    description:
      "Startups can apply for upto $2000 in free credits to get started with Cosmocloud.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Expert technical advice",
    description:
      "Our technical experts help founders grow with dedicated sessions that offer personalised technical recommendations to add scale and solve problems.",
  },
  {
    id: 3,
    icon: Store,
    title: "Go-to-market opportunities",
    description:
      "Engage with Cosmocloud's diverse community and partner network, including Cosmocloud events, hackathons and marketing initiatives to boost your presence in the market.",
  },
];

const Features = () => {
  return (
    <>
    {/* Icon Blocks */}
    <div className="py-16 lg:py-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-2">
        {/* Icon Block */}
        {
          features.map((feature) => (
            <a
              key={feature.id}
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="/"
            >
              <div className="flex justify-center items-center w-12 background-gradient h-12 rounded-lg">
                <feature.icon className="flex-shrink-0 w-6 h-6 text-[#fff]" />
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-1 text-md text-muted-foreground">{feature.description}</p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
          ))
        }
        {/* End Icon Block */}
        {/* Icon Block */}
      </div>
    </div>
    {/* End Icon Blocks */}
  </>
  );
};

export default Features;
