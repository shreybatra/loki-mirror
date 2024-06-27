import { BarChart4, Boxes, ChevronRightIcon, Workflow } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Boxes,
    title: "Collaboration",
    description:
      "Make collaboration seamless with built-in code review tools. Keep your team in sync with pull requests and merge checks",
  },
  {
    id: 2,
    icon: Workflow,
    title: "Automation",
    description:
      "Automate your workflow with continuous integration. Set up deployment pipelines to build, test, and deploy your code right from GitHub.",
  },
  {
    id: 3,
    icon: BarChart4,
    title: "Scale",
    description:
      "Deploy to the cloud with a single click and scale with ease. GitHub Actions makes it easy to automate all your software workflows.",
  },
];

const Features = () => {
  return (
    <>
    {/* Icon Blocks */}
    <div className="py-16 lg:py-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-2">
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
