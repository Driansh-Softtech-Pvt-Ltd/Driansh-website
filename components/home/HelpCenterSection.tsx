import { FolderTree, Globe, MessageCircle, ShieldCheck } from "lucide-react";
import { CardGrid, CtaLink, FeatureCard, Section, SectionHeader } from "@/components/site";
import { HelpCenterCardVisual, type HelpCardKind } from "@/components/visuals/engageone/WorkspaceVisuals";
import { ENGAGEONE_BASE } from "./links";

const CARDS: { title: string; description: string; icon: typeof Globe; kind: HelpCardKind }[] = [
  {
    title: "On your own domain",
    description: "Host the help center at your own address with a secure certificate.",
    icon: ShieldCheck,
    kind: "ssl",
  },
  {
    title: "In your customers' languages",
    description: "Write each article once per language and let readers switch.",
    icon: Globe,
    kind: "locales",
  },
  {
    title: "Inside the chat widget",
    description: "Visitors can search articles before they start a chat.",
    icon: MessageCircle,
    kind: "widget",
  },
  {
    title: "Neatly organised",
    description: "Group articles into categories so answers are easy to browse.",
    icon: FolderTree,
    kind: "categories",
  },
];

export default function HelpCenterSection() {
  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Help center"
        title="Let customers help themselves"
        description="Build a knowledge base your customers can search on their own, and that the AI Assistant can learn from."
      />
      <CardGrid columns={4}>
        {CARDS.map(({ title, description, icon: Icon, kind }) => (
          <FeatureCard key={kind} title={title} description={description} icon={<Icon aria-hidden="true" />}>
            <div className="mt-6 rounded-xl bg-surface p-4">
              <HelpCenterCardVisual kind={kind} />
            </div>
          </FeatureCard>
        ))}
      </CardGrid>
      <div className="mt-10 flex justify-center">
        <CtaLink href={`${ENGAGEONE_BASE}/help-center`} variant="outline">
          Explore the help center
        </CtaLink>
      </div>
    </Section>
  );
}
