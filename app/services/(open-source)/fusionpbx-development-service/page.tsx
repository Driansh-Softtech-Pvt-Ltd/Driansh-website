import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/fusionpbx";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function FusionPBXDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
