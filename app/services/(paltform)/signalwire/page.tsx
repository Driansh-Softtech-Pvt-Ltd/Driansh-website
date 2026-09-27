import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/signalwire";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function SignalWirePage() {
  return <ServicePageTemplate content={content} />;
}
