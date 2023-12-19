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
              INR: 0.67,
              USD: 0.0028,
            },
          },
          {
            tier: "S1",
            displayName: "Shared-1",
            cost: {
              INR: 7,
              USD: 0.0854,
            },
          },
          {
            tier: "S2",
            displayName: "Shared-2",
            cost: {
              INR: 12,
              USD: 0.1463,
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
              INR: 19,
              USD: 0.2317,
            },
          },
          {
            tier: "L1",
            displayName: "Low-1",
            cost: {
              INR: 57,
              USD: 0.6951,
            },
          },
          {
            tier: "L2",
            displayName: "Low-2",
            cost: {
              INR: 95,
              USD: 1.1585,
            },
          },
          {
            tier: "L3",
            displayName: "Low-3",
            cost: {
              INR: 133,
              USD: 1.622,
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
              INR: 39,
              USD: 0.4756,
            },
          },
          {
            tier: "P1",
            displayName: "Power-1",
            cost: {
              INR: 115,
              USD: 1.4024,
            },
          },
          {
            tier: "P2",
            displayName: "Power-2",
            cost: {
              INR: 189,
              USD: 2.3049,
            },
          },
          {
            tier: "P3",
            displayName: "Power-3",
            cost: {
              INR: 265,
              USD: 3.2317,
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
              INR: 75,
              USD: 0.9146,
            },
          },
          {
            tier: "B1",
            displayName: "Boost-1",
            cost: {
              INR: 227,
              USD: 2.7683,
            },
          },
          {
            tier: "B2",
            displayName: "Boost-2",
            cost: {
              INR: 379,
              USD: 4.622,
            },
          },
          {
            tier: "B3",
            displayName: "Boost-3",
            cost: {
              INR: 529,
              USD: 6.4512,
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
              INR: 0.67,
              USD: 0.0028,
            },
          },
          {
            tier: "S1",
            displayName: "Shared-1",
            cost: {
              INR: 7,
              USD: 0.0854,
            },
          },
          {
            tier: "S2",
            displayName: "Shared-2",
            cost: {
              INR: 12,
              USD: 0.1463,
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
              INR: 19,
              USD: 0.2317,
            },
          },
          {
            tier: "L1",
            displayName: "Low-1",
            cost: {
              INR: 57,
              USD: 0.6951,
            },
          },
          {
            tier: "L2",
            displayName: "Low-2",
            cost: {
              INR: 95,
              USD: 1.1585,
            },
          },
          {
            tier: "L3",
            displayName: "Low-3",
            cost: {
              INR: 133,
              USD: 1.622,
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
              INR: 39,
              USD: 0.4756,
            },
          },
          {
            tier: "P1",
            displayName: "Power-1",
            cost: {
              INR: 115,
              USD: 1.4024,
            },
          },
          {
            tier: "P2",
            displayName: "Power-2",
            cost: {
              INR: 189,
              USD: 2.3049,
            },
          },
          {
            tier: "P3",
            displayName: "Power-3",
            cost: {
              INR: 265,
              USD: 3.2317,
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
              INR: 75,
              USD: 0.9146,
            },
          },
          {
            tier: "B1",
            displayName: "Boost-1",
            cost: {
              INR: 227,
              USD: 2.7683,
            },
          },
          {
            tier: "B2",
            displayName: "Boost-2",
            cost: {
              INR: 379,
              USD: 4.622,
            },
          },
          {
            tier: "B3",
            displayName: "Boost-3",
            cost: {
              INR: 529,
              USD: 6.4512,
            },
          },
        ],
      },
    },
  ],
  gcp: [],
  azure: [],
};
