import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/call-center";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function CallCenterPage() {
  return <SolutionPageTemplate content={content} />;
}
