const routes: routesType = [
  {
    path: "/pricing",
    label: "Pricing",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "",
    label: "Resources",
    children: [
      {
        path: "https://docs.cosmocloud.io",
        label: "Documentation",
      },
      // { path: "#", label: "Events" },
      {
        path: "https://docs.cosmocloud.io/cosmocloud-documentation/help-and-support",
        label: "Help & Support",
      },
      { path: "https://discord.gg/M8gqTVpRYE", label: "Discord Community" },
    ],
  },

  // {
  //   path: "/pricing",
  //   label: "Pricing",
  // },

  // {
  //   "path":"/features",
  //   "label":"Features"
  // },
  // {
  //   "path":"/solutions",
  //   "label":"Solutions"
  // },
  // {
  //   "path":"/resources",
  //   "label":"Resources"
  // },
];

export type routeType = {
  path: string;
  label: string;
  children?: routeType[];
};

export type routesType = routeType[];

export default routes;
