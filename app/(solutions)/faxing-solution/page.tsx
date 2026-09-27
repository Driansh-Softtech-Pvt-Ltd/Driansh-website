import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/faxing";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function FaxingPage() {
  return <SolutionPageTemplate content={content} />;
}
