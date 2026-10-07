import { CTABanner, Section } from '@/components/site';
import HeroSection from '@/components/home/HeroSection';
import ChannelStrip from '@/components/home/ChannelStrip';
import FeatureTabsSection from '@/components/home/FeatureTabsSection';
import AiAssistantSection from '@/components/home/AiAssistantSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import OmnichannelSection from '@/components/home/OmnichannelSection';
import CallingSection from '@/components/home/CallingSection';
import HelpCenterSection from '@/components/home/HelpCenterSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import SecuritySection from '@/components/home/SecuritySection';
import EngineeringSection from '@/components/home/EngineeringSection';
import ContactSection from '@/components/home/ContactSection';
import { DEMO_HREF } from '@/components/home/links';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChannelStrip />
      <FeatureTabsSection />
      <AiAssistantSection />
      <BenefitsSection />
      <OmnichannelSection />
      <CallingSection />
      <HelpCenterSection />
      <IndustriesSection />
      <SecuritySection />
      <Section size="sm" tone="white">
        <CTABanner
          title="See EngageOne with your own channels"
          description="Book a short demo and we will show how it fits the way your team works."
          cta={{ label: 'Request a demo', href: DEMO_HREF }}
        />
      </Section>
      <EngineeringSection />
      <ContactSection />
    </>
  );
}
