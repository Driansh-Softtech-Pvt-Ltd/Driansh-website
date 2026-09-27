import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/kamailio";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function KamailioDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
