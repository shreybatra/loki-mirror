import ComplexApisFeatureIcon from "@/assets/svg/api_feature.svg";
import ElasticStabilityFeatureIcon from "@/assets/svg/elastic_stability_feature.svg";
import SubscriptionFeatureIcon from "@/assets/svg/subscription_feature.svg";
import FullTextSearchFeatureIcon from "@/assets/svg/fts_feature.svg";
import PerformanceFeatureIcon from "@/assets/svg/performance_feature.svg";
import SecurityFeatureIcon from "@/assets/svg/security_feature.svg";

export const FeaturesCollection = [
  [
    {
      name: "Complex & Customisable APIs",
      description:
        "Build the most complex API use cases, not limited to just CRUD with 100% customisable APIs.",
      icon: ComplexApisFeatureIcon,
    },
    {
      name: "Full text search, kafka, etc.",
      description:
        "Whether FTS Search, Kafka/Queues, or Caches and CDN, everything is provided on one platform.",
      icon: FullTextSearchFeatureIcon,
    },
  ],
  [
    {
      name: "100% managed infrastructure",
      description:
        "Fully managed infrastructure, no DevOps, with built-in instant deployments at any scale.",
      icon: SecurityFeatureIcon,
    },
    {
      name: "Elastic scalabity",
      description:
        "Scale as per your needs, from 100 users daily to millions of API calls per second.",
      icon: ElasticStabilityFeatureIcon,
    },
  ],
  [
    {
      name: "Pay as per usage",
      description:
        "No hassles of complicated pricing. You pay only for the resources your scale requires.",
      icon: SubscriptionFeatureIcon,
    },
    {
      name: "Ultra Performance",
      description:
        "No compromises on the performance of your application, and it also features concurrency and multi-threading.",
      icon: PerformanceFeatureIcon,
    },
  ],
];
