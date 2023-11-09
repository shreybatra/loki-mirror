import ComplexApisFeatureIcon from "@/assets/svg/api_feature.svg";
import ElasticStabilityFeatureIcon from "@/assets/svg/elastic_stability_feature.svg";
import SubscriptionFeatureIcon from "@/assets/svg/subscription_feature.svg";
import FullTextSearchFeatureIcon from "@/assets/svg/fts_feature.svg";
import PerformanceFeatureIcon from "@/assets/svg/performance_feature.svg";
import SecurityFeatureIcon from "@/assets/svg/security_feature.svg";

export const FeaturesCollection = [
  [
    {
      name: "Complex APIs",
      description:
        "Build the most complex API use cases, not limited to just CRUD",
      icon: ComplexApisFeatureIcon,
    },
    {
      name: "Full text Search, Kafka, etc.",
      description:
        "Whether FTS Search, Kafka/Queues, or Caches and CDN, everything is provided on one platform.",
      icon: FullTextSearchFeatureIcon,
    },
  ],
  [
    {
      name: "Elastic Stability",
      description:
        "Scale as per your needs, from 100 users daily to millions of API calls per second.",
      icon: ElasticStabilityFeatureIcon,
    },
    {
      name: "Ultra Performance",
      description:
        "No compromises on the performance of your application, and it also features concurrency and multi-threading.",
      icon: PerformanceFeatureIcon,
    },
  ],
  [
    {
      name: "Pay as you go",
      description:
        "No hassles of complicated pricing. You pay only for the resources you use.",
      icon: SubscriptionFeatureIcon,
    },
    {
      name: "Built in Security",
      description:
        "With no compromise on security, we also provide battle-ready User Pools for authentication.",
      icon: SecurityFeatureIcon,
    },
  ],
];
