
import { CheckCircle, } from 'lucide-react';
import ServicesCards from '@/components/Services-cards';
import { SERVICES_PRODUCT_CARDS1, SERVICES_PRODUCT_CARDS2, SERVICES_PRODUCT_CARDS3, SERVICES_PRODUCT_CARDS4, SERVICES_PRODUCT_FAQ, SERVICES_VOIP_TESTING_FAQ } from '@/constants/services';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ProductEngineeringPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
                {/* Background Image */}
                <Image
                    rel="preload"
                    src="/images/services/product-engineering-service/product-engineering-page-background-image.png"
                    alt="Product Engineering Services"
                    fill
                    className="object-cover object-right opacity-80 "
                    priority
                />

                {/* Text Section */}
                <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Expert Product Engineering Services
                    </h1>

                    <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                        From concept to launch, we design, develop, and scale high-performance software products that drive measurable business outcomes.
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

            {/* What is Product Engineering */}
            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/images/services/product-engineering-service/Neutral-Design-Thinking-Brainstorm.webp"
                            alt="SIP.js Development"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> What is Product Engineering?</h2>
                        <div className="space-y-5 text-gray-700 leading-relaxed">
                            <p>
                                Product engineering is the end-to-end process of designing, developing, testing, deploying, and maintaining software products. It combines technical expertise, user experience design, and business strategy to turn innovative ideas into scalable, market-ready solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Businesses Trust Driansh */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Businesses Trust Driansh for Product Engineering
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            At Driansh, we don't just build software  we engineer scalable, secure, and intelligent products that deliver real business value. With 15+ years of experience in VoIP, AI, FinTech, and Healthcare, we bring a strategic approach to product development, from ideation to growth.
                        </p>
                    </div>

                    <ServicesCards
                        data={SERVICES_PRODUCT_CARDS3} />

                </div>
            </section>

            {/* Our Product Engineering Services */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Product Engineering Services
                        </h2>
                        <p className="text-xl text-gray-600">
                            Top reasons to choose us as your development partner for FreeSWITCH projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES_PRODUCT_CARDS2.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white text-blue-600 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
                            >
                                {service.icon}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.description.map((desc, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="text-blue-600 mr-3 mt-1 flex-" size={20} />
                                            <span className="text-gray-600">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Industries We Serve
                        </h2>
                        <p className="text-xl text-gray-600">
                            Top reasons to choose us as your development partner for FreeSWITCH projects
                        </p>
                    </div>

                    <ServicesCards
                        data={SERVICES_PRODUCT_CARDS4} />
                </div>
            </section>

            {/* Our VoIP Services */}
            <section className="py-20 px-6 bg-linear-to-br  text-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our VoIP Services
                        </h2>
                        <p className="text-xl text-balck">
                            Our commitment is to develop software that aligns with the specific requirements of our clients' business.
                        </p>
                    </div>

                    <ServicesCards
                        data={SERVICES_PRODUCT_CARDS1} />
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                data={SERVICES_VOIP_TESTING_FAQ} />

            {/* CTA Section */}
            <section className="py-20 px-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform Your Ideas Into Reality?
                    </h2>
                    <p className="text-xl mb-10 text-blue-100">
                        Let's discuss how our product engineering services can help your business grow.
                    </p>
                    <Link
                        href="/contact-us"
                        className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}