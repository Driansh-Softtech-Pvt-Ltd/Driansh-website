import { Shield, Globe, MessageCircle, FolderTree, Heart, Lock } from "lucide-react";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  CardGrid,
  FeatureCard,
  CTABanner,
} from "@/components/site";
import {
  ArticleEditorVisual,
  HelpCenterCardVisual,
  HelpCenterHeroVisual,
  HelpPortalsVisual,
  type HelpCardKind,
} from "@/components/visuals/engageone/WorkspaceVisuals";

const FEATURE_CARDS: { title: string; description: string; icon: typeof Shield; kind: HelpCardKind; comingSoon?: boolean }[] = [
  {
    title: "SSL certificates",
    description: "Get secure documentation with your custom domain.",
    icon: Shield,
    kind: "ssl",
  },
  {
    title: "Locales",
    description: "Make your informative articles accessible to everyone.",
    icon: Globe,
    kind: "locales",
  },
  {
    title: "Live chat widget",
    description: "Attach your help center to live chat widget with a single click.",
    icon: MessageCircle,
    kind: "widget",
  },
  {
    title: "Categories",
    description: "Keep your informative articles well organized and easily accessible.",
    icon: FolderTree,
    kind: "categories",
  },
  {
    title: "Full API support",
    description: "Build innovative custom apps with our advanced, powerful API.",
    icon: Heart,
    kind: "api",
  },
  {
    title: "Private pages",
    description: "Provide restricted, selected access to specific pages.",
    icon: Lock,
    kind: "private",
    comingSoon: true,
  },
];

export default function HelpCenterPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne Help Center"
        title="Delight customers. Empower teams."
        description="Build your personalized help center with our intuitive knowledge base software. Streamline queries, enhance agent efficiency, and elevate customer support."
        visual={<HelpCenterHeroVisual />}
        primaryCta={{ label: "Create a free account", href: "/contact-us" }}
      />

      {/* Manage multiple portals */}
      <Section>
        <MediaSplit visual={<HelpPortalsVisual />}>
          <SectionHeader
            title="Manage multiple portals"
            description="Provide targeted support to different segments of your customer base. Whether you're managing multiple brands, products, or services, you can create a unique portal for each and manage all of them from a centralized dashboard."
            align="left"
            className="mb-0 md:mb-0"
          />
        </MediaSplit>
      </Section>

      {/* Create engaging articles */}
      <Section tone="muted">
        <MediaSplit visual={<ArticleEditorVisual />} reverse>
          <SectionHeader title="Create engaging articles" align="left" className="mb-8 md:mb-8" />
          <CheckList
            items={[
              "Rich content editing",
              "Support for YouTube and Vimeo links",
              "Support for drafts",
              "Metadata management for better SEO",
            ]}
          />
        </MediaSplit>
      </Section>

      {/* Feature cards */}
      <Section>
        <CardGrid>
          {FEATURE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={<Icon aria-hidden="true" />}
                className="relative"
              >
                {card.comingSoon && (
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                    Coming Soon
                  </span>
                )}
                <div className="mt-6 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-surface px-4">
                  <HelpCenterCardVisual kind={card.kind} />
                </div>
              </FeatureCard>
            );
          })}
        </CardGrid>
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="Build your help center with Driansh EngageOne"
          description="Give customers answers faster and free up your agents."
          cta={{ label: "Create a free account", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
