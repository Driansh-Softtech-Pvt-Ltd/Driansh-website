import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import content from "@/content/services/react-native";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function ReactNativeDevelopmentPage() {
  return <ServicePageTemplate content={content} />;
}
