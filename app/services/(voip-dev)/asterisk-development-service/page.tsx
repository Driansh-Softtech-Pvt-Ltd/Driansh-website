import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/asterisk";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function AsteriskDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
