import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/android";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function AndroidDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
