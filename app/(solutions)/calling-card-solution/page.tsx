import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/calling-card";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function CallingCardPage() {
  return <SolutionPageTemplate content={content} />;
}
