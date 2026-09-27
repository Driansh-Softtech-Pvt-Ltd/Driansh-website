import Image from "next/image";
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

const FEATURE_CARDS = [
  {
    title: "SSL certificates",
    description: "Get secure documentation with your custom domain.",
    icon: Shield,
    image: "/images/help-center/certificates-card.svg",
  },
  {
    title: "Locales",
    description: "Make your informative articles accessible to everyone.",
    icon: Globe,
    image: "/images/help-center/locales-card.svg",
  },
  {
    title: "Live chat widget",
    description: "Attach your help center to live chat widget with a single click.",
    icon: MessageCircle,
    image: "/images/help-center/widget-card.svg",
  },
  {
    title: "Categories",
    description: "Keep your informative articles well organized and easily accessible.",
    icon: FolderTree,
    image: "/images/help-center/categories-card.svg",
  },
  {
    title: "Full API support",
    description: "Build innovative custom apps with our advanced, powerful API.",
    icon: Heart,
    image: "/images/help-center/support-card.svg",
  },
  {
    title: "Private pages",
    description: "Provide restricted, selected access to specific pages.",
    icon: Lock,
    image: "/images/help-center/private-card.svg",
    comingSoon: true,
  },
];

export default function HelpCenterPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect Help Center"
        title="Delight customers. Empower teams."
        description="Build your personalized help center with our intuitive knowledge base software. Streamline queries, enhance agent efficiency, and elevate customer support."
        image="/images/help-center/help-center-hero.webp"
        imageAlt="Help center workflow - search, editor, and article view"
        primaryCta={{ label: "Create a free account", href: "/contact-us" }}
      />

      {/* Manage multiple portals */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <SectionHeader
              title="Manage multiple portals"
              description="Provide targeted support to different segments of your customer base. Whether you're managing multiple brands, products, or services, you can create a unique portal for each and manage all of them from a centralized dashboard."
              align="left"
              className="mb-0 md:mb-0"
            />
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-square lg:order-1">
            <Image
              src="/images/help-center/handbook-portal.svg"
              alt="Handbook portal"
              width={256}
              height={180}
              className="absolute left-0 top-0 z-10 h-auto w-[62%] drop-shadow-lg transition-transform duration-300 hover:-translate-y-2"
            />
            <Image
              src="/images/help-center/userguide-portal.svg"
              alt="User Guide portal"
              width={256}
              height={180}
              className="absolute left-[12%] top-[26%] z-20 h-auto w-[62%] drop-shadow-lg transition-transform duration-300 hover:-translate-y-2"
            />
            <Image
              src="/images/help-center/portal-handbook.svg"
              alt="Portals management dashboard"
              width={288}
              height={200}
              className="absolute bottom-0 right-0 z-30 h-auto w-[70%] drop-shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Create engaging articles */}
      <Section tone="muted">
        <MediaSplit
          image="/images/help-center/help-center-article.webp"
          imageAlt="Article editor interface"
          reverse
        >
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
                <div className="mt-6 flex h-40 items-center justify-center overflow-hidden px-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={250}
                    height={160}
                    className="h-auto max-h-full w-full object-contain"
                  />
                </div>
              </FeatureCard>
            );
          })}
        </CardGrid>
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="Build your help center with Driansh OmniConnect"
          description="Give customers answers faster and free up your agents."
          cta={{ label: "Create a free account", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
