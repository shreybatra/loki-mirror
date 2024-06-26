import { IoChatboxSharp, IoLayers } from "react-icons/io5";

const routes: routesType = [
  {
    path: "/pricing",
    label: "Pricing",
  },
  {
    path: "/startups",
    label: "Startups",
  },
  {
    path: "/build",
    label: "Build",
  },
  {
    path: "/",
    label: "About",
    icon:IoChatboxSharp ,
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
        path: "/careers",
        description: "Join our team",
      },
    ],
  },
  {
    path: "",
    label: "Resources",
    icon: IoLayers,
    children: [
      {
        path: "https://docs.cosmocloud.io",
        label: "Documentation",
        description: "Learn how to use Cosmocloud.",
      },
      {
        path: "https://docs.cosmocloud.io/cosmocloud-documentation/help-and-support",
        label: "Help & Support",
        description: "Get help from the community.",
      },
      {
        path: "https://discord.gg/M8gqTVpRYE",
        label: "Discord Community",
        description: "Join our Discord community.",
      },
    ],
  },
];

export type routeType = {
  path: string;
  label: string;
  children?: routeType[];
  description?: string;
  icon?: any;
};

export type routesType = routeType[];

export default routes;
