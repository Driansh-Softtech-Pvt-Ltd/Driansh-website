import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import content from "@/content/solutions/multi-tenant-ip-pbx";
import { contentMetadata } from "@/lib/seo";

export const metadata = contentMetadata(content);

export default function MultiTenantIpPbxPage() {
  return <SolutionPageTemplate content={content} />;
}
