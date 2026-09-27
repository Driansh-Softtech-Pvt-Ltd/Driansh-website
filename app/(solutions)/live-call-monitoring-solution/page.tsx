import {
  LIVE_CALL_MONITORING_FEATURES,
  LIVE_CALL_MONITORING_BENIFITS,
  LIVE_CALL_MONITORING_FAQ,
} from "@/constants/solutions";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { PageHero, Section, SectionHeader, MediaSplit } from "@/components/site";

export default function LiveCallMonitoringPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Live Call Monitoring Solution"
        description="Amplify the productivity of your agents or ensure high quality of service and superior quality of calls with a real time call monitoring solution with value added features."
        backgroundImage="/images/solutions/live-call-monitoring/image-01.jpg"
      />

      <Section>
        <SectionHeader
          title="Revolutionize the business model with improved productivity and eminence bestowed with a live call monitoring solution and added features."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              Customer experience has become the focal interest of all businesses.
              Several VoIP communication tools are invented to meet the growing
              and shifting customer demands. Still, it is necessary to measure
              whether customers are receiving the expected quality of service as
              per the set bar or not. Automation in reviewing processes and
              quality of service is already available still, it is necessary to
              get the best tool to sanction the power to supervisors to work
              productively and efficiently. The live call monitoring solution lets
              supervisors monitor conversations and intercept or take control
              whenever they find it required. This gives immense control over
              processes and how customers are treated to enhance customer
              engagement and loyalty models.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/live-call-monitoring/image-02.png"
          imageAlt="Live Call Monitoring"
        >
          <SectionHeader
            title="Live Call Monitoring Solution Provider Company"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              We have more than just a real time call monitoring and call
              control solution. It can help in streamlining the quality
              assurance policies in call centers and similar industry verticals
              with extensive features. The supervisors and quality assurance
              team gets access to live dashboards that show real time statistics
              of ringing, ongoing, and conference calls in the business.
              Supervisors can also listen to ongoing calls without or with the
              acknowledgment of agents. In fact, the quality assurance manager
              can jump into the call and take control of the call to lead it in
              the right direction. Whether it is handling a multifaceted support
              request or a warm lead, there is always control in the hands of
              supervisors to lead a customer in a favorable situation.
            </p>
            <p>
              It is also an amazing real time agent training tool that can
              enhance the productivity and performance of agents. Supervisors
              can also ensure the calls are getting terminated with the right
              codecs. This system can be integrated with any other VoIP or
              telephony solution such as IP PBX, call center software, VoIP
              Softswitch, voice logger solution, call accounting system, and
              other solutions. This live call monitoring software can also be
              used as an individual solution to monitor the calls of
              supervisors. We further provide customization and custom
              development of a live call monitoring system depending on the
              business needs.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <SolutionFeatures
        data={LIVE_CALL_MONITORING_FEATURES}
        title="Key Features"
        description="Improve the performance right away with an extensive range of features available in a real time call monitoring and call control solution."
      />

      <SolutionsBenifits
        data={LIVE_CALL_MONITORING_BENIFITS}
        title="Key Benefits"
        description="From a small business to a large scaled customer care center can benefit from this powerful, technology driven real time call monitoring system."
      />

      <FAQ
        data={LIVE_CALL_MONITORING_FAQ}
        sub_title="Get answers in real time to commonly asked questions related to a feature rich live call monitoring system."
      />
    </>
  );
}
