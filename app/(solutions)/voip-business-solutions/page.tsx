import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/voip-business";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function VoipBusinessPage() {
  return <SolutionPageTemplate content={content} />;
}
