import { FAXING_FEATURES, FAXING_FAQ } from "@/constants/solutions";
import FAQ from "@/components/FAQ";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  CTABanner,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function FaxingPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Faxing Solution"
        description="Streamline document and fax distribution processes and digitize the faxing journey with the best fax over internet protocol (FoIP) solution."
        backgroundImage="/images/solutions/faxing-solution/image-01.jpg"
      />

      <Section>
        <SectionHeader
          title="Alleviate the errors and hassle related to traditional faxing and enhance the whole process to make it flawless, cost effective, and convenient with the fax server solution."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              Faxing and scanned document distribution is still the basic
              operation in many industry verticals. The best part is technology
              has paved its way to this segment to digitize the whole process.
              There is no need to deal with bulky, and sometimes, faulty fax
              machines and stationery. The FoIP solutions can make the whole
              process so seamless that even a newbie can enjoy the process. All
              the features of traditional faxing, plus, virtual faxing are made
              available at the mouse click by our best in the industry FoIP
              solution. Moreover, some features enhance the whole business faxing
              mechanism with never seen before features to make the whole process
              more effective and efficient.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/faxing-solution/image-02.png"
          imageAlt="FoIP solution provider"
        >
          <SectionHeader title="FoIP Solution Provider Company" align="left" className="mb-6 md:mb-6" />
          <div className="text-lead space-y-4">
            <p>
              Leveraging the bleeding edge technology and smartness of VoIP to
              send faxes is not something new, but still, businesses are waiting
              for the right time to make this switch. The time and opportunity
              is here to be smarter with virtual fax over IP solutions. Our FoIP
              solution has already empowered various small to large scaled
              businesses with a feature rich FoIP solution and yours can be the
              next. Now, there is no need to stay in long queues to get access
              to the fax machine to send or receive a fax message. Simply sit at
              your desk or enjoy the comfort of your couch and send your fax.
              Also, get a receipt or failure notification to know the status of
              your fax to take the next vital step. All this is possible with
              the best FoIP software developed by our VoIP experts.
            </p>
            <p>
              Our company is a top rated FoIP solution development company that
              builds scalable, secure, and robust fax server solutions. We build
              the most advanced and futuristic virtual fax server software.
              Furthermore, we can customize the features, configurations, and
              other components of this VoIP software to personalize the system
              to meet your custom business needs. With our simple to use fax
              server solution, faxing will be as easy and convenient as
              emailing. Moreover, it will help you reduce expenses over faxes to
              make better utilization of funds for business growth and
              development.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <Section>
        <SectionHeader
          title="Major Faxing Modes"
          description="Virtual faxing is invented to let businesses take maximum advantage of digitization and faxing as a whole solution. Thus, our virtual faxing solution supports three different modes of eFaxing:"
        />
        <MediaSplit
          image="/images/solutions/faxing-solution/image-03.png"
          imageAlt="Faxing modes"
          reverse
        >
          <p className="text-lead mb-6">
            Introduce e-faxing for your staff or customers with the Faxing
            Solution. The FoIP (Fax over Internet Protocol) solution lets you
            take benefit of a comprehensive eFaxing system, also known as Fax
            Server Solution. It supports three different modes of virtual
            faxing:
          </p>
          <CheckList items={["Email to fax", "Fax to email", "Web to fax"]} />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Key Features"
          description="Leverage the power of your infrastructure and faxing with the futuristic features of our FoIP solution:"
        />
        <CardGrid columns={2}>
          {FAXING_FEATURES.left.map((feature, index) => (
            <FeatureCard key={index} title={feature.label}>
              <CheckList items={feature.points} className="mt-4 [&_li]:text-base" />
            </FeatureCard>
          ))}
        </CardGrid>
        <CheckList items={FAXING_FEATURES.right} columns={2} className="mt-10" />
      </Section>

      <Section size="sm">
        <CTABanner
          title="Ready to move your faxing to the cloud?"
          description="Talk to our VoIP experts about a FoIP solution customized for your business."
        />
      </Section>

      <FAQ
        data={FAXING_FAQ}
        sub_title="All commonly asked questions in regard to FoIP solutions are answered by our experienced VoIP team for you."
      />
    </>
  );
}
