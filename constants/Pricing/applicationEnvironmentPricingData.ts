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
            tier: "L0",
            displayName: "Low-0",
            cost: {
              INR: 18.90,
              USD: 0.2305,
            },
          },
          {
            tier: "L1",
            displayName: "Low-1",
            cost: {
              INR: 56.70,
              USD: 0.6915,
            },
          },
          {
            tier: "L2",
            displayName: "Low-2",
            cost: {
              INR: 94.50,
              USD: 1.1524,
            },
          },
          {
            tier: "L3",
            displayName: "Low-3",
            cost: {
              INR: 132.30,
              USD: 1.6134,
            },
          },
        ],
      },
      power: {
        data: [
          {
            tier: "P0",
            displayName: "Power-0",
            cost: {
              INR: 37.80,
              USD: 0.4610,
            },
          },
          {
            tier: "P1",
            displayName: "Power-1",
            cost: {
              INR: 113.40,
              USD: 1.3829,
            },
          },
          {
            tier: "P2",
            displayName: "Power-2",
            cost: {
              INR: 189.00,
              USD: 2.3049,
            },
          },
          {
            tier: "P3",
            displayName: "Power-3",
            cost: {
              INR: 264.60,
              USD: 3.2268,
            },
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "B0",
            displayName: "Boost-0",
            cost: {
              INR: 75.60,
              USD: 0.9220,
            },
          },
          {
            tier: "B1",
            displayName: "Boost-1",
            cost: {
              INR: 226.80,
              USD: 2.7659,
            },
          },
          {
            tier: "B2",
            displayName: "Boost-2",
            cost: {
              INR: 378.00,
              USD: 4.6098,
            },
          },
          {
            tier: "B3",
            displayName: "Boost-3",
            cost: {
              INR: 529.20,
              USD: 6.4537,
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
            tier: "L0",
            displayName: "Low-0",
            cost: {
              INR: 18.90,
              USD: 0.2305,
            },
          },
          {
            tier: "L1",
            displayName: "Low-1",
            cost: {
              INR: 56.70,
              USD: 0.6915,
            },
          },
          {
            tier: "L2",
            displayName: "Low-2",
            cost: {
              INR: 94.50,
              USD: 1.1524,
            },
          },
          {
            tier: "L3",
            displayName: "Low-3",
            cost: {
              INR: 132.30,
              USD: 1.6134,
            },
          },
        ],
      },
      power: {
        data: [
          {
            tier: "P0",
            displayName: "Power-0",
            cost: {
              INR: 37.80,
              USD: 0.4610,
            },
          },
          {
            tier: "P1",
            displayName: "Power-1",
            cost: {
              INR: 113.40,
              USD: 1.3829,
            },
          },
          {
            tier: "P2",
            displayName: "Power-2",
            cost: {
              INR: 189.00,
              USD: 2.3049,
            },
          },
          {
            tier: "P3",
            displayName: "Power-3",
            cost: {
              INR: 264.60,
              USD: 3.2268,
            },
          },
        ],
      },
      boost: {
        data: [
          {
            tier: "B0",
            displayName: "Boost-0",
            cost: {
              INR: 75.60,
              USD: 0.9220,
            },
          },
          {
            tier: "B1",
            displayName: "Boost-1",
            cost: {
              INR: 226.80,
              USD: 2.7659,
            },
          },
          {
            tier: "B2",
            displayName: "Boost-2",
            cost: {
              INR: 378.00,
              USD: 4.6098,
            },
          },
          {
            tier: "B3",
            displayName: "Boost-3",
            cost: {
              INR: 529.20,
              USD: 6.4537,
            },
          },
        ],
      },
    }
  ],
  gcp: [],
  azure: [],
};
