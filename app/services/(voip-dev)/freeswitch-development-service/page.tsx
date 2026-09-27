import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/freeswitch";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function FreeSwitchDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
