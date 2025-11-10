import { CheckCircle } from 'lucide-react';
import ServicesCards from '@/components/Services-cards';
import { SERVICES_LINPHONE_CARDS, SERVICES_LINPHONE_FAQ, WHY_CHOOSE_LINPHONE } from '@/constants/services';
import FAQ from '@/components/FAQ';
import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LinphoneDevelopment() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
                {/* Background Image */}
                <Image
                    rel="preload"
                    src="/images/services/open-source-service/linphone-devlopment-service/10Linphone-App.webp"
                    alt="Linphone Development Services"
                    fill
                    className="object-cover object-right opacity-80 z-0"
                    priority
                />

                {/* Text Section */}
                <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Linphone App Development
                    </h1>

                    <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                        Empower your internal business communication and collaboration or launch a new revenue generating stream with custom linphone development services
                    </p>
                    <p className="text-lg text-blue-50 leading-relaxed">
                        Linphone is an open source SIP Softphone. It supports multiple devices and platforms, which makes it a versatile solution to meet the communication needs of businesses. Our specialization in Linphone app development makes us the right partner for companies that are interested in harnessing the existent supremacy of this SIP Softphone. It can be used as a mobile SIP dialer. We have the proficiency in bolstering the strength of mobile development and VoIP development and channelize it into our Linphone app development services to empower our clients.
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

            {/* Our Offerings Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Offerings in Linphone
                        </h2>
                        <p className="text-xl text-gray-600">
                            We have an adroit team that holds expertise in offering the top to bottom services in Linphone.
                        </p>
                    </div>

                    <ServicesCards
                        data={SERVICES_LINPHONE_CARDS} />
                </div>
            </section>

            {/* Business Need Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Does your business need a Linphone App development partner?
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Our Android App development company helps you build cost-effective, performant, and highly interactive video streaming apps.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500  mt-1" />
                                    <p className="text-gray-700">Intuitive layout</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500  mt-1" />
                                    <p className="text-gray-700">Customizable</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500  mt-1" />
                                    <p className="text-gray-700">Scalable and secure</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/images/services/open-source-service/linphone-devlopment-service/linphone1.jpeg"
                                alt="Mobile Dialer"
                                className="rounded-lg shadow-xl w-full max-w-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Linphone App Development Company
                        </h2>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-xl">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We are one of the leading technologies companies that have a dexterous team of VoIP and mobile app developers. Moreover, we have the most innovative and creative UI UX designers onboard to deliver impressive layouts of our systems and mobile apps. We have been working in this industry for ages and this has given us the potency to build the best Linphone app. Our multitalented team with versatility in Linphone app development can deliver a tailored SIP Softphone app using this open source to let you achieve your business goals.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our Linphone app development company is renowned for its strategic approach and methodical course of action. We first gather and understand the requirements of the business, goals to be achieved, and other aspects to benefit the company with Linphone consulting services. Based on the defined criteria, we provide Linphone app development services that consist of designing attractive UI and UX for this unified communication app. Using our Linphone app development services, you can develop a simple mobile VoIP solution for voice calling or you can get a comprehensive SIP Softphone that supports voice, video, chat, file sharing, and other modes of communication.
                        </p>
                    </div>
                </div>
            </section>

            {/* why u choose us? */}
            <WhyChooseUs
                data={WHY_CHOOSE_LINPHONE} />
            {/* FAQ */}
            <FAQ
                data={SERVICES_LINPHONE_FAQ} />
        </div>
    );
}