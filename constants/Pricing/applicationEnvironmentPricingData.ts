import { TierFeatures } from ".";

interface ApplicationEnvironment {
  region: string;
  shared: { data: TierFeatures[] };
  low: { data: TierFeatures[] };
  power: { data: TierFeatures[] };
  boost: { data: TierFeatures[] };
}
export const applicationEnvironmentData: Record<
  string,
  ApplicationEnvironment[]
> = {
  aws: [
    {
      region: "ap-south-1",
      shared: {
        data: [
          {
            tier: "S0",
            displayName: "Shared-0",
            cost: {
              INR: 2.36,
              USD: 0.0288,
            },
          },
          {
            tier: "S1",
            displayName: "Shared-1",
            cost: {
              INR: 7.09,
              USD: 0.0864,
            },
          },
          {
            tier: "S2",
            displayName: "Shared-2",
            cost: {
              INR: 11.81,
              USD: 0.1441,
            },
          },
        ],
      },
      low: {
        data: [
          {
            tier: "LOW 0",
            displayName: "LOW 0",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "LOW 1",
            displayName: "LOW 1",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "LOW 2",
            displayName: "LOW 2",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "LOW 3",
            displayName: "LOW 3",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
        ],
      },
      power: {
        data: [
          {
            tier: "POWER 0",
            displayName: "POWER 0",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "POWER 1",
            displayName: "POWER 1",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "POWER 2",
            displayName: "POWER 2",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "POWER 3",
            displayName: "POWER 3",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "BOOST 0",
            displayName: "BOOST 0",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "BOOST 1",
            displayName: "BOOST 1",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "BOOST 2",
            displayName: "BOOST 2",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "BOOST 3",
            displayName: "BOOST 3",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
        ],
      },
    },
    {
      region: "us-east-1",
      shared: {
        data: [
          {
            tier: "SHARED 0",
            displayName: "SHARED 0",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "SHARED 1",
            displayName: "SHARED 1",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "SHARED 2",
            displayName: "SHARED 2",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
        ],
      },
      low: {
        data: [
          {
            tier: "LOW 0",
            displayName: "LOW 0",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "LOW 1",
            displayName: "LOW 1",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "LOW 2",
            displayName: "LOW 2",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "LOW 3",
            displayName: "LOW 3",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
        ],
      },
      power: {
        data: [
          {
            tier: "POWER 0",
            displayName: "POWER 0",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "POWER 1",
            displayName: "POWER 1",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "POWER 2",
            displayName: "POWER 2",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "POWER 3",
            displayName: "POWER 3",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "BOOST 0",
            displayName: "BOOST 0",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "BOOST 1",
            displayName: "BOOST 1",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "BOOST 2",
            displayName: "BOOST 2",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
          {
            tier: "BOOST 3",
            displayName: "BOOST 3",
            cost: {
              INR: 0,
              USD: 0,
            },
          },
        ],
      },
    },
  ],
  gcp: [],
  azure: [],
};
