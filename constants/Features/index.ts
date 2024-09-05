import ComplexApisFeatureIcon from "@/assets/svg/api_feature.svg";
import ElasticScalabilityFeatureIcon from "@/assets/svg/elastic_stability_feature.svg";
import SubscriptionFeatureIcon from "@/assets/svg/subscription_feature.svg";
import FullTextSearchFeatureIcon from "@/assets/svg/fts_feature.svg";
import PerformanceFeatureIcon from "@/assets/svg/performance_feature.svg";
import SecurityFeatureIcon from "@/assets/svg/security_feature.svg";

export const FeaturesCollection = [
  [
    {
      name: "Complex & customisable APIs",
      description:
        "Build the most complex API use cases, not limited to just CRUD, with 100% customisable APIs.",
      icon: ComplexApisFeatureIcon,
    },
    {
      name: "Inbuilt full text search (FTS)",
      description:
        "Create Full Text Search in just a few clicks, without the need of data pipelines or sync jobs or anything else.",
      icon: FullTextSearchFeatureIcon,
    },
  ],
  [
    {
      name: "100% managed infrastructure",
      description:
        "Fully managed infrastructure, no devops needed, with built-in Instant Deployments at any scale, be it a startup or a large enterprise.",
      icon: SecurityFeatureIcon,
    },
    {
      name: "Elastic scalability",
      description:
        "Scale as per your needs. You can start from 100 daily users, all the way to millions of API calls per minute. Backed by industry-grade Kubernetes clusters.",
      icon: ElasticScalabilityFeatureIcon,
    },
  ],
  [
    {
      name: "Does not burn a hole in your pocket",
      description:
        "No hassles of complicated or super-expensive pricing. Your pay only for what resources you use, and nothing more.",
      icon: SubscriptionFeatureIcon,
    },
    {
      name: "Introducing vector search and AI capabilities",
      description:
        "Build your AI based features for Production, with our Vector Database and Vector Search capabilities. Integrate with any LLM in just a single click.",
      icon: PerformanceFeatureIcon,
    },
  ],
];
