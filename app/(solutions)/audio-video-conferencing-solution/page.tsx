import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/audio-video-conferencing";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function AudioVideoConferencingPage() {
  return <SolutionPageTemplate content={content} />;
}
