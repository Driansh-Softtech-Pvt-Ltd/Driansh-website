import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/web-development";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function WebDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
