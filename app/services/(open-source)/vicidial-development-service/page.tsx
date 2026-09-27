import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/vicidial";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function VICIdialDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
