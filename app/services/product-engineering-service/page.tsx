import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/product-engineering";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function ProductEngineeringPage() {
  return <ServicePageTemplate content={content} />;
}
