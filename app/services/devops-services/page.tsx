import ServicesCards from '@/components/Services-cards';
import { SERVICES_DEVOPS_CARDS1, SERVICES_DEVOPS_CARDS2, SERVICES_DEVOPS_FAQ, WHY_CHOOSE_DEVOPS } from '@/constants/services';
import FAQ from '@/components/FAQ';
import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function DevOpsServices() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
                {/* Background Image */}
                <Image
                    rel="preload"
                    src="/images/services/devops-service/Devops.webp"
                    alt="DevOPS Services"
                    fill
                    className="object-cover object-right opacity-80 z-0"
                    priority
                />

                {/* Text Section */}
                <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        DevOps Services
                    </h1>

                    <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                        Continuity, automation, agility, governance, and revenue generation, everything is accelerated with a modernized product engineering cycle by DevOps experts of our team. We have specialization
                        in assisting businesses to build resilient and enterprise grade systems with our DevOps development services and other forms of technical assistance. Make the most out of all resources to build the best, most comprehensive, and most sustainable product with zero downtimes or delays in any process with expert DevOps services. Hit the market early and continue harnessing the power of the market with the best DevOps development company, Driansh.
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
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">DevOps Services by the Top DevOps Development Company</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p className='text-center'>
                            Continuity, automation, agility, governance, and revenue generation, everything is accelerated with a
                            modernized product engineering cycle by DevOps experts of our team. We have specialization in assisting
                            businesses to build resilient and enterprise grade systems with our DevOps development services and other
                            forms of technical assistance. Make the most out of all resources to build the best, most comprehensive,
                            and most sustainable product with zero downtimes or delays in any process with expert DevOps services.
                            Hit the market early and continue harnessing the power of the market with the best DevOps development company, Driansh.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                        Benefits of our DevOps Services
                    </h2>
                    <ServicesCards
                        data={SERVICES_DEVOPS_CARDS1} />
                </div>
            </section>

            {/* Our DevOps Services Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto ">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                        Our DevOps Services
                    </h2>
                    <ServicesCards
                        data={SERVICES_DEVOPS_CARDS2} />
                </div>
            </section>

            {/* why u choose us? */}
            <WhyChooseUs
                data={WHY_CHOOSE_DEVOPS} />

            {/* FAQ */}
            <FAQ
                data={SERVICES_DEVOPS_FAQ} />

            {/* CTA Section */}
            <section className="py-16 px-6 bg-linear-to-r from-blue-600 to-indigo-700">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Does your business need a DevOps development partner?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Our DevOps development company helps you build cost-effective, performant, and highly interactive video streaming apps.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Get Start Today
                    </Link>
                </div>
            </section>

        </div>
    );
}