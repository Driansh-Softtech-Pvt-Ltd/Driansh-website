import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/opensips";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function OpenSipsDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
