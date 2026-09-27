import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/mobile-app";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function MobileAppDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
