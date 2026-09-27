import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/webrtc";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function WebRtcDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
