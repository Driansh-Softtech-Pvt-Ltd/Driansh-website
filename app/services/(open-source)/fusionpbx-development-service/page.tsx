
import { CheckCircle } from 'lucide-react';
import { SERVICES_FUSIONPBX_CARDS, SERVICES_FUSIONPBX_FAQ, WHY_CHOOSE_FUSIONPBX } from '@/constants/services';
import FAQ from '@/components/FAQ';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function FusionPBXDevelopment() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}          
            <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
                {/* Background Image */}
                <Image
                    rel="preload"
                    src="/images/services/open-source-service/fusionpbx-devlopment-service/9FusionPBX-scaled.webp"
                    alt="FusionPBX Development Services"
                    fill
                    className="object-cover object-right opacity-80 z-0"
                    priority
                />

                {/* Text Section */}
                <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Expert FusionPBX Services
                    </h1>

                    <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                        FusionPBX is a very well known hosted PBX solution with multi tenant support. It is an open source PBX system, which makes it a more preferred choice for many. To harness the benefits of this powerful multi tenant IP PBX software, it is necessary to hold rich experience in FreeSWITCH and FusionPBX, both. Our FusionPBX consultants have been benefiting businesses with their proficiency in this open source VoIP platform. Our consulting service includes on-demand and standard support, recommendations, and other services from FusionPBX experts that can help you maximize your returns.
                    </p>
                    <div className="flex justify-center md:justify-start mt-8 mx-auto md:mx-0">
                        <Link href="/contact-us">
                            <Button 
                             className="bg-white text-black text-base md:text-lg rounded-md px-10 py-5 font-semibold hover:text-blue-600 hover:bg-blue-50 duration-300 hover:-translate-y-1">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* information  */}
            <section className="py-15 px-20 bg-gray-150">
                <div className=" mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">FusionPBX Consulting Services</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p className='text-center'>
                            FusionPBX is a very well known hosted PBX solution with multi tenant support. It is an open source PBX system,
                            which makes it a more preferred choice for many. To harness the benefits of this powerful multi tenant IP PBX
                            software, it is necessary to hold rich experience in FreeSWITCH and FusionPBX, both. Our FusionPBX consultants
                            have been benefiting businesses with their proficiency in this open source VoIP platform. Our consulting service
                            includes on-demand and standard support,recommendations, and other services from FusionPBX experts that can help you maximize your returns.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our FusionPBX Services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            Our FusionPBX Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our commitment is to develop software that aligns with the specific requirements of our clients' business.
                        </p>
                    </div>

                    <ServicesCards
                        data={SERVICES_FUSIONPBX_CARDS} />
                </div>
            </section>

            {/* Cross Platform Development */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-black mb-6">
                                Does your business need a FusionPBX development partner?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our FusionPBX development company helps you build cost-effective, performant, and highly interactive video streaming apps.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-blue-600 mt-1 flex-" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-lg text-black mb-1">Rapid Prototyping</h4>
                                        <p className="text-gray-600">Quick development and deployment of your ideas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-blue-600 mt-1 flex-" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-lg text-black mb-1">Native Feature Availability</h4>
                                        <p className="text-gray-600">Access to all platform-specific capabilities</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-blue-600 mt-1 flex-" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-lg text-black mb-1">Consistent User Experience</h4>
                                        <p className="text-gray-600">Seamless experience across all devices</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                                alt="Cross Platform Development"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FusionPBX Development Company */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-black mb-6 text-center">
                        FusionPBX Development Company
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We are renowned for our skills in all major open source VoIP and telephony platforms, including FusionPBX. We have years of experience in handling custom requirements or customization demands of customers using this powerful, multi tenant PBX software. Our FreeSWITCH developers have a swift hand in handling different demands that can meet short term and long term goals of businesses that they want to meet with this IP PBX system.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We provide white labeling, FusionPBX theme development and integration, custom feature production, customization of existing features, integration of third party APIs, and all other development services to FusionPBX users. Our services cover UI/UX enhancements to performance improvement, bug fixing, VoIP billing system integration, and other expert services offered at an affordable cost to empower businesses using this software.
                        </p>
                    </div>
                </div>
            </section>

            {/* why u choose us? */}
            <WhyChooseUs
                data={WHY_CHOOSE_FUSIONPBX} />

            {/* FAQ */}
            <FAQ data={SERVICES_FUSIONPBX_FAQ} />
        </div>
    );
}