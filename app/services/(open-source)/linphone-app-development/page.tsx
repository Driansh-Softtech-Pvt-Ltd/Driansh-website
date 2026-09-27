import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/linphone";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function LinphoneDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
