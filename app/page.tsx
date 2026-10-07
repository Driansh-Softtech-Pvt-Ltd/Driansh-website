import { CTABanner, Section } from '@/components/site';
import HeroSection from '@/components/home/HeroSection';
import ChannelStrip from '@/components/home/ChannelStrip';
import AiAssistantSection from '@/components/home/AiAssistantSection';
import AiOutcomesSection from '@/components/home/AiOutcomesSection';
import OmnichannelSection from '@/components/home/OmnichannelSection';
import CallingSection from '@/components/home/CallingSection';
import HelpCenterSection from '@/components/home/HelpCenterSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import CustomerStoriesSection from '@/components/home/CustomerStoriesSection';
import SecuritySection from '@/components/home/SecuritySection';
import ContactSection from '@/components/home/ContactSection';
import { DEMO_HREF } from '@/components/home/links';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChannelStrip />
      <AiAssistantSection />
      <AiOutcomesSection />
      <OmnichannelSection />
      <CallingSection />
      <HelpCenterSection />
      <IndustriesSection />
      <CustomerStoriesSection />
      <SecuritySection />
      <Section size="sm" tone="white">
        <CTABanner
          title="See EngageOne with your own channels"
          description="Book a short demo and we will show how it fits the way your team works."
          cta={{ label: 'Request a demo', href: DEMO_HREF }}
        />
      </Section>
      <ContactSection />
    </>
  );
}
