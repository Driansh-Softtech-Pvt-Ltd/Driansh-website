import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/live-call-monitoring";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function LiveCallMonitoringPage() {
  return <SolutionPageTemplate content={content} />;
}
