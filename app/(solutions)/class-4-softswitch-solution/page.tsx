import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/class-4-softswitch";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function Class4SoftswitchPage() {
  return <SolutionPageTemplate content={content} />;
}
