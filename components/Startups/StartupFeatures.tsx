import { FaHandshake } from "react-icons/fa6";
import { GiRobotGrab } from "react-icons/gi";
import { TfiStatsUp } from "react-icons/tfi";

const features = [
  {
    id: 1,
    icon: <FaHandshake className="h-8 w-8 mb-4" />,
    title: "Collaboration",
    description: "Make collaboration seamless with built-in code review tools.",
  },
  {
    id: 2,
    icon: <GiRobotGrab className="h-8 w-8 mb-4" />,
    title: "Automation",
    description: "Automate your workflow with continuous integration.",
  },
  {
    id: 3,
    icon: <TfiStatsUp className="h-8 w-8 mb-4" />,
    title: "Scale",
    description: "Deploy to the cloud with a single click and scale with ease.",
  },
];

const Features = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 my-40 sm:grid-cols-3 gap-6 px-4 md:px-6 ">
        {features.map((feature) => (
          <div
            className="flex flex-col items-start tracking-tight border-background p-4 space-y-2"
            key={feature.id}
          >
            <div className="p-1">{feature.icon}</div>

            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
