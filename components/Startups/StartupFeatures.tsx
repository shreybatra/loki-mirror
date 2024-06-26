import { FaHandshake } from "react-icons/fa6";
import { GiRobotGrab } from "react-icons/gi";
import { TfiStatsUp } from "react-icons/tfi";

const features = [
  {
    id: 1,
    icon: FaHandshake,
    title: "Collaboration",
    description:
      "Make collaboration seamless with built-in code review tools. Keep your team in sync with pull requests and merge checks",
  },
  {
    id: 2,
    icon: GiRobotGrab,
    title: "Automation",
    description:
      "Automate your workflow with continuous integration. Set up deployment pipelines to build, test, and deploy your code right from GitHub.",
  },
  {
    id: 3,
    icon: TfiStatsUp,
    title: "Scale",
    description:
      "Deploy to the cloud with a single click and scale with ease. GitHub Actions makes it easy to automate all your software workflows.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-12 md:py-18">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {features.map((feature) => (
            <div className="flex flex-col space-y-4" key={feature.id}>
              <feature.icon className="h-10 w-10" />
              <div className="space-y-4">
                <h3 className="text-[22px] md:text-[26px] font-bold">{feature.title}</h3>
                <p className="text-[18px] md:text-[20px] text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
