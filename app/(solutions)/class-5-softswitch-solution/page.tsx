import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/class-5-softswitch";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function Class5SoftswitchPage() {
  return <SolutionPageTemplate content={content} />;
}
