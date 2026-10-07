import Image from "next/image";
import { OUR_PRODUCTS } from "@/constants";
import EngageOneInboxVisual from "@/components/visuals/EngageOneInboxVisual";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CtaLink, CTABanner } from "@/components/site";

const PRODUCT_LINKS: Record<string, string> = {
  contactCenter: "/our-products/contactcenter",
  engageOne: "/our-products/engageone",
};

export default function OurProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Driansh Products"
        description="Explore Driansh Contact Center Solution and Driansh EngageOne."
        primaryCta={{ label: "Get Started", href: "/contact-us" }}
      />

      {OUR_PRODUCTS.map((product, index) => (
        <Section key={product.id} id={product.id} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit
            image={product.image || undefined}
            imageAlt={product.title}
            visual={product.id === "engageOne" ? <EngageOneInboxVisual /> : undefined}
            reverse={product.reverse}
          >
            <Image
              src={product.logo}
              alt={product.title}
              width={200}
              height={70}
              className="mb-6 h-auto w-36 sm:w-44"
            />
            <SectionHeader
              title={product.title}
              description={product.description}
              align="left"
              className="mb-8 md:mb-8"
            />
            <CheckList items={product.points} />
            {PRODUCT_LINKS[product.id] && (
              <CtaLink href={PRODUCT_LINKS[product.id]} className="mt-8">
                Learn more
              </CtaLink>
            )}
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm" tone={OUR_PRODUCTS.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Find the right product for your business"
          description="Talk to our team about Driansh Contact Center and Driansh EngageOne."
        />
      </Section>
    </>
  );
}
