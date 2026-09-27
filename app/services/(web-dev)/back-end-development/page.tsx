import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/back-end";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function BackEndDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
