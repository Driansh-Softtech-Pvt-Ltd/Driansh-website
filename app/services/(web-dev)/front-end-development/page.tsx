import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/front-end";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function FrontEndDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
