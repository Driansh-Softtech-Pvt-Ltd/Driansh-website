import { Server, Shield, Layers, BarChart3, Clock, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { SERVICES_KAMAILIO_CARDS, SERVICES_KAMAILIO_FAQ, WHY_CHOOSE_KAMAILIO } from '@/constants/services';
import ServicesCards from '@/components/Services-cards';
import Link from 'next/link';
import WhyChooseUs from '@/components/WhyChooseUs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const KamailioDevelopmentPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}       
            <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
                {/* Background Image */}
                <Image
                    rel="preload"
                    src="/images/services/voip-devlopment-service/kamailio-devlopment-service/Kamailio-01-scaled.webp"
                    alt="kamailio Development Services"
                    fill
                    className="object-cover object-right opacity-80 z-0"
                    priority
                />

                {/* Text Section */}
                <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Kamailio Development Services
                    </h1>
                 
                    <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                        VoIP has been one of the most reliable platforms to carry out professional and personal communication and that also at cheaper rates. This encourages many businesses, VoIP open source development companies, and individuals to bridge communication gaps without making holes in their pockets using a reliable and robust VoIP based communication solution. We help our customers in the process of building the most scalable, secure, and feature rich VoIP solutions and hail the success of your ventures.
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
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Kamailio: Tried and tested SIP server solution to run budding internet telephony business</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p className='text-center'>
                            VoIP has been one of the most reliable platforms to carry out professional and personal communication
                            and that also at cheaper rates. This encourages many businesses, VoIP open source development companies, and
                            individuals to bridge communication gaps without making holes in their pockets using a reliable and robust
                            VoIP based communication solution. We help our customers in the process of building the most scalable, secure,
                            and feature rich VoIP solutions and hail the success of your ventures.services can benefit you and leverage the power of this pioneer VoIP development technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center ">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Expertise in VoIP Platforms
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our commitment is to develop software that aligns with the specific requirements of our clients' business.
                        </p>
                    </div>
                    <ServicesCards
                        data={SERVICES_KAMAILIO_CARDS}
                    />
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 px-6 bg-linear-to-r from-blue-600 to-indigo-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Does your business need a Kamailio development partner?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Our Kamailio development company helps you build cost-effective, performant, and highly interactive video streaming apps.
                    </p>
                    <Link href="/contact-us"
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                        Contact Us Today <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Expert Solutions Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Expert Solutions in Kamailio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive Kamailio solutions designed to power your telecommunications infrastructure
                        </p>
                    </div>

                    {/* Solution 1 - Load Balancing */}
                    <div className="mb-12bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-12 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                                    <BarChart3 className="w-4 h-4" />
                                    High Performance
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    Load Balancing with Failover
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Distribute incoming traffic intelligently across multiple servers to ensure optimal performance and prevent system overload. Our advanced load balancing solutions guarantee seamless failover capabilities.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Automatic Failover</p>
                                            <p className="text-gray-600">Instant traffic redirection during server failures</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Scalable Architecture</p>
                                            <p className="text-gray-600">Handle thousands of concurrent calls efficiently</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Real-time Monitoring</p>
                                            <p className="text-gray-600">Track server health and performance metrics</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-linear-to-br from-blue-600 to-indigo-700 p-12 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                                    <BarChart3 className="w-64 h-64 text-white relative z-10" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution 2 - Session Border Controller */}
                    <div className="mb-12bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="bg-linear-to-br from-purple-600 to-pink-600 p-12 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                                    <Shield className="w-64 h-64 text-white relative z-10" />
                                </div>
                            </div>
                            <div className="p-12 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                                    <Shield className="w-4 h-4" />
                                    Security First
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    Session Border Controller Solution
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Safeguard your VoIP software, infrastructure and business from major VoIP threats and hack attacks with our enterprise-grade SBC solution.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-purple-600 rounded-full p-1 mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Advanced Security</p>
                                            <p className="text-gray-600">Protection against DoS, fraud, and malicious attacks</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-purple-600 rounded-full p-1 mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Protocol Translation</p>
                                            <p className="text-gray-600">Seamless communication between different networks</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-purple-600 rounded-full p-1 mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Quality Assurance</p>
                                            <p className="text-gray-600">Ensure high-quality voice and video transmission</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Solution 3 - Class 5 SoftSwitch */}
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-12 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                                    <Server className="w-4 h-4" />
                                    Enterprise Grade
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Class 5 SoftSwitch Solutions
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Deploy carrier-grade softswitch infrastructure with comprehensive features for complete telecommunications management.
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-500 rounded-lg p-3">
                                                <BarChart3 className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg mb-2">Insightful Dashboards</h4>
                                                <p className="text-gray-300">Comprehensive analytics and reporting tools</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-500 rounded-lg p-3">
                                                <Clock className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg mb-2">Real-time Billing</h4>
                                                <p className="text-gray-300">Accurate billing with live call rating</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-500 rounded-lg p-3">
                                                <Layers className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg mb-2">Manifold Features</h4>
                                                <p className="text-gray-300">Complete suite of telecom features and tools</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-linear-to-br from-green-600 to-emerald-700 p-12 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                                    <Server className="w-64 h-64 text-white relative z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Company Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Kamailio Development Company
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Kamailio is a well known SIP server solution that has empowered several internet telephony service providers across the globe to deliver reliable telephony services to thousands of customers in parallel. We, Driansh Technologies, are renowned as a leading Kamailio development company to deliver outstanding Kamailio development services to global telephony service providers and businesses.
                        </p>
                        <p>
                            Our skilled team of Kamailio developers can provide custom telephony product development by leveraging the full spectrum of features available in this powerful SIP server solution. From building futuristic, enterprise grade solutions to developing carrier grade software, we are adroit to build any Kamailio based solution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                <Layers className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Strategic Approach
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Distinctive Kamailio development services are tactically defined to manage diverse driving factors that collectively contribute to your success.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Visionary mindset
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Opportunity identification
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Proactive support
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Customer Satisfaction
                            </h3>
                            <p className="text-gray-600 mb-6">
                                With our client-first approach, we always ensure that our clients receive the best in the industry services, tailored solutions, and on-time deliverables.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Easy access to experts
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Well-defined processes
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Competitive rates
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Technology and Technique
                            </h3>
                            <p className="text-gray-600 mb-6">
                                We take pride in our approach of perfectly blending the right technology with the smart techniques that can yield the most thriving business and sustainable solutions.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Technical expertise
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Tailored solutions
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex- mt-0.5" />
                                    Adaptability and flexibility
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* why u choose us? */}
            <WhyChooseUs
                data={WHY_CHOOSE_KAMAILIO} />

            {/* Faq */}
            <FAQ
                data={SERVICES_KAMAILIO_FAQ} />

            {/* Final CTA Section */}
            <section className="py-16 px-6 bg-linear-to-r from-indigo-600 to-blue-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Does your business need a Kamailio development partner?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Our WebRTC development company helps you build cost-effective, performant, and highly interactive video streaming apps.
                    </p>
                    <Link href="/contact-us"
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                        Get In Touch <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default KamailioDevelopmentPage;