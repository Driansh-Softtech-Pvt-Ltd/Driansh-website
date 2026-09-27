import Image from "next/image";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner } from "@/components/site";

const BRAND = {
  title: "A live chat that fits your brand",
  description:
    "Driansh OmniConnect live chat widgets can be customized based on your brand, language, and customer journey. Configure everything from greeting messages to behavior on different pages.",
  points: [
    "Multilingual support with configurable widget text.",
    "Continue conversations over email when visitors go offline.",
    "Support emojis, file uploads, and rich message content.",
    "Customize widget colors, position, and branding.",
    "Typing indicators to improve the user experience.",
    "Distraction-free popup window for focused messaging.",
  ],
};

// Both widget screenshots are tall portrait images, so they sit side by side
// instead of going through MediaSplit / the hero image slot.
const WIDGET_SHOTS = [
  { src: "/images/website-live-chat/chat-interface.png", alt: "Website live chat interface", width: 494, height: 833 },
  { src: "/images/website-live-chat/chat.png", alt: "Live chat conversation screenshot", width: 501, height: 832 },
];

const MULTI_BRAND = {
  eyebrow: "Multi-brand inboxes",
  title: "Manage all your brands in one account",
  description:
    "Create more than one inbox for your brand and define different access levels for support teams. Route chats from multiple websites or products into a single OmniConnect workspace while keeping visibility, permissions, and reporting separate.",
  image: "/images/website-live-chat/multiple-inbox.png",
  imageAlt: "Multiple inboxes for different brands",
};

export default function WebsiteLiveChatPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Simple live chat software for businesses"
        description="Improve your customer experience using a live chat on your website. Engage visitors the moment they land on your site and convert conversations into lasting relationships."
        primaryCta={{ label: "Request a demo", href: "/contact-us" }}
        secondaryCta={{ label: "Try live chat", href: "/contact-us" }}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <SectionHeader
              title={BRAND.title}
              description={BRAND.description}
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={BRAND.points} />
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-4 sm:gap-6 lg:order-1">
            {WIDGET_SHOTS.map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="h-auto w-full rounded-2xl border border-slate-200 bg-white object-contain shadow-xl"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <MediaSplit image={MULTI_BRAND.image} imageAlt={MULTI_BRAND.imageAlt} reverse framed>
          <SectionHeader
            eyebrow={MULTI_BRAND.eyebrow}
            title={MULTI_BRAND.title}
            description={MULTI_BRAND.description}
            align="left"
            className="mb-0 md:mb-0"
          />
        </MediaSplit>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Start talking to your website visitors"
          description="See Driansh OmniConnect live chat in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
