const storagePricing = [
  {
    cloudName: "AWS",
    region: "North Virginia",
    usd: 0.025,
    inr: 3,
  },
  {
    cloudName: "AWS",
    region: "Mumbai",
    usd: 0.023,
    inr: 3,
  },
];

const storagePricingData = {
  aws: [
    {
      region: "mumbai",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "north-virginia",
      cost: { inr: "₹", usd: "$" },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "new-york",
      cost: { inr: "₹", usd: "$" },
    },
  ],
};

const logsPricingData = {
  aws: [
    {
      region: "mumbai",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "north-virginia",
      cost: { inr: "₹", usd: "$" },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "new-york",
      cost: { inr: "₹", usd: "$" },
    },
  ],
};

const fullTextSearchPricingData = {
  aws: [
    {
      region: "mumbai",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "north-virginia",
      cost: { inr: "₹", usd: "$" },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "new-york",
      cost: { inr: "₹", usd: "$" },
    },
  ],
};
const dataBandwidthPricingData = {
  aws: [
    {
      region: "mumbai",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "north-virginia",
      cost: { inr: "₹", usd: "$" },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "new-york",
      cost: { inr: "₹", usd: "$" },
    },
  ],
};

const databasesPricingData = {
  aws: [
    {
      region: "mumbai",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "north-virginia",
      cost: { inr: "₹", usd: "$" },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { inr: "₹", usd: "$" },
    },
    {
      region: "new-york",
      cost: { inr: "₹", usd: "$" },
    },
  ],
};

const applicationEnvironmentData = {
  aws: [
    {
      region: "mumbai",
      shared: {
        data: [
          {
            tier: "SHARED 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 2",
            cost: {
              inr: "₹ 7.1",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      low: {
        data: [
          {
            tier: "LOW 0",
            cost: {
              inr: "₹ 18.90",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 1",
            cost: {
              inr: "₹ 56.70",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 2",
            cost: {
              inr: "₹ 94.50",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 3",
            cost: {
              inr: "₹ 132.30",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
      power: {
        data: [
          {
            tier: "POWER 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "BOOST 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
    },
    {
      region: "north-virginia",
      shared: {
        data: [
          {
            tier: "SHARED 0",
            cost: {
              inr: "₹ 100",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 1",
            cost: {
              inr: "₹ 170",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 2",
            cost: {
              inr: "₹ 810",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      low: {
        data: [
          {
            tier: "LOW 0",
            cost: {
              inr: "₹ 18.90",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 1",
            cost: {
              inr: "₹ 56.70",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 2",
            cost: {
              inr: "₹ 94.50",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 3",
            cost: {
              inr: "₹ 132.30",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
      power: {
        data: [
          {
            tier: "POWER 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "BOOST 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
    },
  ],
  gcp: [
    {
      region: "hyderabad",
      shared: {
        data: [
          {
            tier: "SHARED 0",
            cost: {
              inr: "₹ 71.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 2",
            cost: {
              inr: "₹ 7.1",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      low: {
        data: [
          {
            tier: "LOW 0",
            cost: {
              inr: "₹ 18.90",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 1",
            cost: {
              inr: "₹ 56.70",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 2",
            cost: {
              inr: "₹ 94.50",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 3",
            cost: {
              inr: "₹ 132.30",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
      power: {
        data: [
          {
            tier: "POWER 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "BOOST 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
    },
    {
      region: "america",
      shared: {
        data: [
          {
            tier: "SHARED 0",
            cost: {
              inr: "₹ 200",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 1",
            cost: {
              inr: "₹ 170",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "SHARED 2",
            cost: {
              inr: "₹ 810",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      low: {
        data: [
          {
            tier: "LOW 0",
            cost: {
              inr: "₹ 18.90",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 1",
            cost: {
              inr: "₹ 56.70",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 2",
            cost: {
              inr: "₹ 94.50",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "LOW 3",
            cost: {
              inr: "₹ 132.30",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
      power: {
        data: [
          {
            tier: "POWER 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "POWER 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "BOOST 0",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 1",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 2",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
          {
            tier: "BOOST 3",
            cost: {
              inr: "₹ 7.09",
              usd: "$ 900",
            },
            features: ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"],
          },
        ],
      },
    },
  ],
};

const dropDownData = {
  aws: {
    region: ["mumbai", "north-virginia"],
    currency: ["inr", "usd"],
  },
  gcp: {
    region: ["hyderabad", "america"],
    currency: ["inr", "usd"],
  },
  azure: {
    region: ["hyderabad", "Latin America"],
    currency: ["inr", "usd", "eur"],
  },
};

export {
  storagePricing,
  applicationEnvironmentData,
  dropDownData,
  storagePricingData,
  logsPricingData,
  fullTextSearchPricingData,
  dataBandwidthPricingData,
  databasesPricingData,
};
