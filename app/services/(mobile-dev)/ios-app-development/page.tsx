import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/ios";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function IOSDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
