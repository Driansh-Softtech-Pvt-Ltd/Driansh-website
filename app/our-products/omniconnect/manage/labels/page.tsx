import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Create and customize your labels",
    description:
      "You only need to create your labels once in your Driansh OmniConnect account. Name your labels, give them a description, and choose a colour for distinction. That is all you need to do to activate labels and get more organized. And yes, you can edit them whenever you want.",
    image: "/images/manage/label/adding-label.png",
    imageAlt: "Creating a new label",
  },
  {
    title: "Instantly label your incoming conversations",
    description:
      "Once you have added your labels to your account, you will be able to see them on your chat sidebar. You can simply select them to label certain conversations the way you want to.",
    image: "/images/manage/label/labelling-conversations-from-sidebar.png",
    imageAlt: "Labelling conversations from the sidebar",
  },
  {
    title: "Get an overview of your labels",
    description:
      "From your dashboard, you can view and download your Labels Report. Just select a certain label to get insights on the metrics associated with it—conversations, messages, First Response Time, Resolution Time and more.",
    image: "/images/manage/label/label 3.png",
    imageAlt: "Labels report overview",
  },
];

export default function LabelsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Easily organize your conversations with labels"
        description="Be better organized about conversations by labelling them for future reference."
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit image={feature.image} imageAlt={feature.imageAlt} reverse={index % 2 === 1} framed>
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
          description="See Driansh OmniConnect labels in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
