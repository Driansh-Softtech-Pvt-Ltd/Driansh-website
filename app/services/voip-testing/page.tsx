import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/voip-testing";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function VoIPTestingPage() {
  return <ServicePageTemplate content={content} />;
}
