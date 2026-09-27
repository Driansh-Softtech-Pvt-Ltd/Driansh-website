import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/flutter";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function FlutterDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
