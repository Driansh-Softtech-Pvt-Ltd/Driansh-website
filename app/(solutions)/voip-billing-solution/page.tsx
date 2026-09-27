import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/voip-billing";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function VoipBillingPage() {
  return <SolutionPageTemplate content={content} />;
}
