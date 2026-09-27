import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/sip-js";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function SipJsDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
