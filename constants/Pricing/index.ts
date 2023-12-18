interface StoragePricing {
  cloudName: string;
  region: string;
  USD: number;
  INR: number;
}

interface TierCost {
  INR: number;
  USD: number;
}

export interface TierFeatures {
  tier: string;
  displayName: string;
  cost: TierCost;
}

interface PricingData {
  region: string;
  cost: TierCost;
}

const storagePricing: StoragePricing[] = [
  {
    cloudName: "AWS",
    region: "us-east-1",
    USD: 0.025,
    INR: 3,
  },
  {
    cloudName: "AWS",
    region: "ap-south-1",
    USD: 0.023,
    INR: 3,
  },
];

const storagePricingData: Record<string, PricingData[]> = {
  aws: [
    {
      region: "ap-south-1",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "north-virginia",
      cost: { INR: 0, USD: 0 },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "new-york",
      cost: { INR: 0, USD: 0 },
    },
  ],
};

const logsPricingData: Record<string, PricingData[]> = {
  aws: [
    {
      region: "ap-south-1",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "north-virginia",
      cost: { INR: 0, USD: 0 },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "new-york",
      cost: { INR: 0, USD: 0 },
    },
  ],
};

const fullTextSearchPricingData: Record<string, PricingData[]> = {
  aws: [
    {
      region: "ap-south-1",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "north-virginia",
      cost: { INR: 0, USD: 0 },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "new-york",
      cost: { INR: 0, USD: 0 },
    },
  ],
};
const dataBandwidthPricingData: Record<string, PricingData[]> = {
  aws: [
    {
      region: "ap-south-1",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "north-virginia",
      cost: { INR: 0, USD: 0 },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "new-york",
      cost: { INR: 0, USD: 0 },
    },
  ],
};

const databasesPricingData: Record<string, PricingData[]> = {
  aws: [
    {
      region: "ap-south-1",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "north-virginia",
      cost: { INR: 0, USD: 0 },
    },
  ],
  gcp: [
    {
      region: "hyderabd",
      cost: { INR: 0, USD: 0 },
    },
    {
      region: "new-york",
      cost: { INR: 0, USD: 0 },
    },
  ],
};

export const currencyTypes = ["INR", "USD"];

export const cloudTypes = [
  {
    key: "aws",
    displayName: "AWS",
    regions: [
      {
        key: "ap-south-1",
        displayName: "Mumbai",
      },
    ],
  },
];

export {
  storagePricing,
  storagePricingData,
  logsPricingData,
  fullTextSearchPricingData,
  dataBandwidthPricingData,
  databasesPricingData,
};
