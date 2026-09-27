import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/voice-broadcasting";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function VoiceBroadcastingPage() {
  return <SolutionPageTemplate content={content} />;
}
