import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/enterprise-voip";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function EnterpriseVoipPage() {
  return <SolutionPageTemplate content={content} />;
}
