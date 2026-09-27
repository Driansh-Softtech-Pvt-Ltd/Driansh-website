import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/voip-development";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function VoipDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
