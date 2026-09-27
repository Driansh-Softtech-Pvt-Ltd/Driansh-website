import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/unified-communications";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function UnifiedCommunicationsPage() {
  return <SolutionPageTemplate content={content} />;
}
