import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { LabelCreateVisual, LabelSidebarVisual } from "@/components/visuals/engageone/ManageVisuals";
import { LabelOverviewVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Create and customize your labels",
    description:
      "You only need to create your labels once in your Driansh EngageOne account. Name your labels, give them a description, and choose a colour for distinction. That is all you need to do to activate labels and get more organized. And yes, you can edit them whenever you want.",
    visual: <LabelCreateVisual />,
  },
  {
    title: "Instantly label your incoming conversations",
    description:
      "Once you have added your labels to your account, you will be able to see them on your chat sidebar. You can simply select them to label certain conversations the way you want to.",
    visual: <LabelSidebarVisual />,
  },
  {
    title: "Get an overview of your labels",
    description:
      "From your dashboard, you can view and download your Labels Report. Just select a certain label to get insights on the metrics associated with it—conversations, messages, First Response Time, Resolution Time and more.",
    visual: <LabelOverviewVisual />,
  },
];

export default function LabelsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Easily organize your conversations with labels"
        description="Be better organized about conversations by labelling them for future reference."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={feature.visual} reverse={index % 2 === 1}>
            <SectionHeader
              title={feature.title}
              description={feature.description}
              align="left"
              className="mb-0 md:mb-0"
            />
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm">
        <CTABanner
          title="Bring order to every conversation"
          description="See Driansh EngageOne labels in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
