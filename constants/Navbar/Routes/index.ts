import { IoChatboxSharp, IoLayers } from "react-icons/io5";
import ResourceBanner from "@/assets/jpg/Website banner- Resources.jpg";
import AboutBanner from "@/assets/jpg/Website banner- About.jpg";

const routes: routesType = [
  {
    path: "/build/pricing",
    label: "Pricing",
  },
  {
    path: "",
    label: "Resources",
    banner: ResourceBanner,
    icon: IoLayers,
    children: [
      {
        path: "https://docs.cosmocloud.io",
        label: "Documentation",
        description: "Learn how to use Cosmocloud.",
        target: true,
      },
      {
        path: "https://docs.cosmocloud.io/help-and-support",
        label: "Help & Support",
        description: "Get help from the community.",
        target: true,
      },
      {
        path: "https://discord.gg/M8gqTVpRYE",
        label: "Discord Community",
        description: "Join our Discord community.",
        target: true,
      },
      {
        path: "https://tutorials.cosmocloud.io",
        label: "Tutorials",
        description: "Tutorials on how to use Cosmocloud.",
        target: true,
      },
      {
        path: "https://www.linkedin.com/newsletters/7196754231448555520/",
        label: "Newsletter",
        description: "Get the latest updates on Cosmocloud.",
        target: true,
      },
    ],
  },
  {
    path: "/",
    label: "About",
    icon: IoChatboxSharp,
    banner: AboutBanner,
    children: [
      {
        label: "About the company",
        path: "/about",
        description: "Learn more about the company",
      },
      {
        label: "Contact us",
        path: "/contact",
        description: "Contact us for more information",
      },
      {
        label: "Careers",
        path: "https://careers.cosmocloud.io",
        description: "Join our team",
        target: true,
      },
    ],
  },
];

export type routeType = {
  path: string;
  label: string;
  children?: routeType[];
  banner?: any;
  description?: string;
  icon?: any;
  target?: boolean;
};

export type routesType = routeType[];

export default routes;
