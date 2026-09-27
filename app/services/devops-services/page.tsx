import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/devops";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function DevOpsServicesPage() {
  return <ServicePageTemplate content={content} />;
}
