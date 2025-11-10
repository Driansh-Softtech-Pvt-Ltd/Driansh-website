import { Bot, Briefcase, Building2, Check, Cloud, Code, Database, DollarSign, Globe, GraduationCap, Home, Layers, Layout, Lightbulb, MessageSquare, Mic, Monitor, Phone, Radio, Rocket, Server, Shield, ShoppingCart, Smartphone, UsersIcon, Zap } from "lucide-react";
import Image from "next/image";

// Common Service Icon Component with gradient background
const ServiceIcon = ({ src, alt }: { src: string; alt: string }) => (
    <div className="w-16 h-16 rounded-full bg-linear-to-r from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm flex items-center justify-center p-2.5">
        <Image src={src} alt={alt} width={44} height={44} className="object-contain" unoptimized style={{ aspectRatio: '1/1' }} />
    </div>
);
export const SERVICES_VOIP_FAQ = [
    {
        question: "Do you provide Volp solutions? Or is VolP development the only service you offer?",
        answer: "We provide both VoIP solutions and VoIP development. We are a leading VoIP custom software development company and we have specialization in all VoIP solutions, technologies, and open source platforms. Our VoIP developers can meet all your needs related to building the best telephony solutions. We can also customize your existing VoIP and telephony solutions"
    },
    {
        question: "Do you provide a white label unified communication solution?",
        answer: "Yes, we have experience in developing simple to smart unified communication solutions. We can develop SaaS (Software as a Service), UCaaS (Unified Communications as a Service), CCaaS (ContactCenter as a Service), and Communications Platform as a Service (CPaaS). Only solutions that we build with custom VoIP development will provide you with 100% white labeling. We also provide white label services for open source VoIP platforms. Our telephony solutions can also be white labeled to meet the custom needs of our clients like you."
    },
    {
        question: "I want to develop a hybrid Softswitch solution with an integrated WebRTC based web phone.Can you help?",
        answer: "Yes, we have experience in developing hybrid solutions with different VoIP development technologies. We can develop a hybrid Softswitch solution using OpenSIPs or FreeSWITCH to give you the best scalability and for the WebRTC web phone, our WebRTC developers with build a tailored solution for you. We can also develop a hybrid Softswitch in Asterisk if you prefer to develop it on that platform. In a nutshell, any custom needs of building a robust, scalable, and secure telephony solution will be satisfied with our best VoIP development company."
    },
    {
        question: "Which option is expennsive, VoIP Devlopment or white labeling a VolP solution?",
        answer: "Both, VoIP development and a white label telephony solution have their own cost, as well as, pros and cons. Depending on your business and future vision, one of the options can be the best fit for you. We can help you define the most profitable option with our free consultation service. Contact us for more details."
    },
    {
        question: "What is cloud VoIP devlopment and why is it valuabel?",
        answer: "Cloud VoIP development builds scalable, cost-effective VoIP platforms hosted in the cloud, helping businesses deploy telephony features quickly without on-premise infrastructure. It also ensures high security, redundant power, and geographically diverse data centers."
    },
    {
        question: "How does cloud VoIP devlopment improve your VoIP services?",
        answer: "Cloud voip development improves VoIP services by offering flexibility, automated maintenance, seamless updates, and easy access across devices and locations."
    }
];


export const SERVICES_KAMAILIO_FAQ = [
    {
        question: "Do you provide Volp solutions? Or is VolP development the only service you offer?",
        answer: "Yes, we have a team of experienced Kamailio developers that you can hire for remote operations. You can hire a Kamailio developer on a full time, part time or project basis. The Kamailio developer for hire model is available for remote work. We also send developers on-premise depending on the business needs. We may discuss more in a free consultation call. Contact us to initiate the discussion."
    },
    {
        question: "Do you provide a white label unified communication solution?",
        answer: "Yes, we help you define the best features for your Kamailio solution based on the latest trends and futuristic software building norms. We provide Kamailio consultation to clients for deployment, architecture design, etc. We also provide support services. In a nutshell, along with Kamailio solution development, we provide different services, including, the recommendation for features, sprints, etc."
    },
    {
        question: "I want to develop a hybrid Softswitch solution with an integrated WebRTC based web phone.Can you help?",
        answer: "The cost of the Kamailio development project depends on the features and scope of work. Depending on the complexity of features, existing solutions environment, etc., the cost can vary. Let’s connect with us to discuss your features and other requirements today."
    },
    {
        question: "Which option is expennsive, VoIP Devlopment or white labeling a VolP solution?",
        answer: "That completely depends on the telephony or SIP server solution that you want to develop. Kamailio as a VoIP development technology supports different features such as robust SIP, SIP routing capabilities, asynchronous processing, transport layer, SCTP multi-homing and multi-streaming, WebSocket support, extensibility APIs, and many more. Depending on the solution you need, we can integrate the functionality of Kamailio development."
    }
];

export const SERVICES_ASTERISK_FAQ = [
    {
        question: "What is Asterisk?",
        answer: "The Asterisk is an open source VoIP development platform that is managed and funded by Digium. The Asterisk is considered one of the pioneer VoIP technologies and it has the power to transform an ordinary computer system into a server for business communication. Asterisk is used as a building block to develop different types of telephony solutions."
    },
    {
        question: "What is Asterisk development?",
        answer: "Asterisk development is the art of using this open source platform to build a real and practically working business telephony or communication solution. Experienced Asterisk developers make the required customization in the code, and add some added pieces of code to compile a platform that furnishes you or businesses like you with all the required features."
    },
    {
        question: "What services do you provide in Asterisk?",
        answer: "We provide Asterisk development, customization, and support services. We can develop any type of Asterisk solution with tailored features depending on your requirements. We also provide deployment, failover recovery, and other services in Asterisk.\n\nSome of the major service offerings of Drianshas an Asterisk development company are:\n• IVR design and development\n• VoIP Softswitch solution development\n• SBC solution development\n• Conferencing system development\n• IP PBX solution development\n• AGI scripting\n• Dialplan programming\n• And more\n\nWe also provide our expert services for Asterisk based open source solutions like FreePBX, VICIDial, etc."
    },
    {
        question: "What are the benefits of using Asterisk?",
        answer: "There are multiple advantages of using Asterisk for your VoIP based communication solution development such as:\n• Zero license cost\n• No vendor dependencies\n• Access to all PBX features\n• Capability to build any type of communication solution"
    },
    {
        question: "Why choose Driansh as your Asterisk development partner?",
        answer: "Driansh has more than a decade long experience as an Asterisk development company. We have developed several Asterisk based solutions and we have also provided customization to businesses for their existing solution. Moreover, we have a team of highly experienced and skilled Asterisk developers. We will not only provide you the expert services, but we will also help you in multiple other ways to increase returns over investment.\n\nWe have developed the #1 open source VoIP platform based on FreeSWITCH that is ruling the industry, which is popularly known as ASTPP. We are closely associated with the FreeSWITCH community and Signalwire which constantly adds up to our experience and expertise."
    }
];

export const SERVICES_KAZOO_FAQ = [

    {
        question: "What is KAZOO?",
        answer: "It is a leading open source platform built by 2600Hz and provides VoIP Softswitch. It has multiple user interface components, modules, APIs, etc. that can be used to build custom VoIP telephony solutions. It empowers businesses to launch their own VoIP software solutions without spending time building them from scratch."
    },
    {
        question: "Do you provide KAZOO API integration?",
        answer: "We provide all types of services in KAZOO, including, but not limited to API integration. We also develop APIs of the custom VoIP software developed using this open source platform to help you build and use comprehensive solutions."
    },
    {
        question: "Why should i use your KAZOO devlopment services?",
        answer: "We have developed multiple projects in KAZOO. Moreover, we also have expertise in using FreeSWITCH and Kamailio. This gives us sharp skills to meet any custom requirements to empower businesses. We are one of the top companies that offer reliable KAZOO development services."
    },
    {
        question: "Will you deliver support after devlopment ?",
        answer: "Yes, we provide support, maintenance, upgrade, and similar post-development and deployment services to benefit global clients with our expertise and experience."
    },
];

export const SERVICES_FUSIONPBX_FAQ = [
    {
        question: "What is FusionPBX?",
        answer: "It is one of the most popular open source FreeSWITCH solutions. It is a multi tenant IP PBX software developed on FreeSWITCH, which is one of the most scalable and robust VoIP development technologies. It can be used as a domain based or single IP PBX system with multi tenancy support."
    },
    {
        question: "Can I use FusionPBX for free?",
        answer: "Yes, you can. FusionPBX is an entirely free solution and it provides an array of features of a business phone system aka PBX solution to its customers. Along with that, it also provides a multi tenant platform to providers that want to run their business by catering to local or global businesses with VoIP based phone systems. However, one can also use a single tenant version of this solution to use a FreeSWITCH based IP PBX system that has amazing features and the robust nature of FreeSWITCH."
    },
    {
        question: "Why should I use your FusionPBX development services?",
        answer: "In simple words, it can help you increase returns over investment and the value of the platform. We have years of experience in major open source platforms, including FusionPBX. Thus, we understand this platform at its best and we can provide services that can best fit your business and its objectives. Even if you have technical expertise, using our services can ensure that you enjoy expert assistance without leaving your focus from your business."
    },
    {
        question: "What do I get with your FusionPBX custom development services?",
        answer: "FusionPBX is an open source PBX platform. Thus, you receive the code of the software. When we develop an added feature with our custom services, we provide a complete feature integrated into your FusionPBX system with your branding. We also hand over the code of that feature to let you enjoy vendor independence. User guide documentation and training to use that feature are also offered to our clients depending on the engagement model."
    }
];

export const SERVICES_WEBRTC_FAQ = [
    {
        question: "Can you build a custom web phone for our business?",
        answer: "Yes, we certainly can. We can build a custom web phone with personalized features or standard communication features for you. We can also integrate this web phone within your call center software, so your agents can use it as one of the integral solutions."
    },
    {
        question: "Why choose WebRTC over traditional SIP dialers?",
        answer: "Mobile SIP dialers and PC dialers are still popular in several businesses, but in multiple cases, WebRTC based communication solutions, especially, web phone development are taking over. The reason is the host of benefits it has to offer. One of the major advantages is the elimination of cost, intricacy, and maintenance need of having separate software or app. WebRTC solution can work as an independent or integral feature of one of the communication solutions. WebRTC based communication solutions also don't need the installation and configuration of any software."
    },
    {
        question: "Are WebRTC solutions secure?",
        answer: "Yes, they are. WebRTC technology is developed and maintained by Google, which is one of the quality standards for the technology. Original WebRTC developers have also configured multiple security means such as SSL, encryption or communication channels, and more. In addition to that, you can use 2-way authentication and other security features with the help of your WebRTC development company."
    },
    {
        question: "Do WebRTC solutions only work in specific browsers?",
        answer: "No, not at all! WebRTC based solutions can be accessed via WebRTC enabled or supported browsers, which is true. But, nowadays, a majority of browsers, including mobile OS supports WebRTC communication solutions. Thus, there is hardly any roadblock to using platforms built using WebRTC development."
    },
    {
        question: "How secure are custom WebRTC solutions?",
        answer: "Custom WebRTC solutions are highly secure. They use end-to-end encryption, secure signaling, and multi-factor authentication to protect communication across your business."
    },
    {
        question: "WebRTC vs SIP: What's the difference?",
        answer: "WebRTC is a browser-based, plugin-free solution ideal for instant access. SIP-based systems often require softphones or VoIP hardware. WebRTC is more flexible, mobile-friendly, and modern."
    },
    {
        question: "What is WebRTC VoIP development?",
        answer: "WebRTC VoIP development helps you in enabling real-time voice and video communication through browsers and apps without the help of plugins. It helps businesses to reduce costs, improve customer experience, and integrate VoIP seamlessly into web platforms."
    },
    {
        question: "What is WebRTC integration for VoIP?",
        answer: "WebRTC integration for VoIP allows secure, high-quality voice and video calls directly from browsers or apps, making communication faster, more reliable, and compatible across devices."
    }
];


export const SERVICES_DEVOPS_FAQ = [
    {
        question: "What is Devops?",
        answer: "It is a perfect combination of tools, best practices, and philosophy that enhances the process of software development, IT operations, code integration, application maintenance, and IT infrastructure management. This methodology introduces a perfect combination of automation, tools, and engineering to continuously develop, integrate, deliver, and deploy new features and keep impressing clients and stockholders."
    },
    {
        question: "In which industries have you provided Devops Devlopment service?",
        answer: "We are one of the leading DevOps development companies and we have been offering different DevOps services, including, but not limited to DevOps development for many years. During these years, we have worked in several industry verticals to break the silos between cross functional software engineering teams. Some of the major industries we have worked on frequently are IT, corporate, Fintech, healthcare, automotive, telecom, and retail."
    },
    {
        question: "How will i measure value over money with your DevOps services?",
        answer: "The beauty of DevOps methodology is that you don’t need to wait to see the results as they are pretty visible from the very initial stage. You will see the collaborative approach reflected in lead time, frequency of deployment, resolving common errors found in automated testing, reduced time to market, and other KPIs to evaluate the real value over money."
    },
    {
        question: "Is it necessary to use DevOps?",
        answer: "Modernizing conventional approaches always lead to better results and competitive advantages. DevOps is the trending methodology that improves software development lifecycle and augmented relevant advantages. You are reading this, which means you have already collected some knowledge about this impressive phenomenon of continuous development, delivery, and monitoring. If not now, in the nearer future, you will need to adopt DevOps to match the pace with your competitors. It is always good to follow the trends and modernize business models to evolve and grow faster."
    },
    {
        question: "Is DevOps services expensive?",
        answer: "Not really, we offer the best DevOps services at the most competitive rates to ensure all sized businesses can leverage the advantage of this beneficial model."
    },
];

export const SERVICES_LINPHONE_FAQ = [
    {
        question: "What is Linphone development?",
        answer: "Linphone is an open source VoIP mobile dialer app that can be used on different operating systems like iOS, Android, Windows, Firefox, etc. Linphone app development is the process of developing the missing features, white labeling the open source app, making the required configurations to make this app functional, troubleshooting common errors, and handling other aspects. The ultimate goal of a Linphone app development company is to deliver a fully functional mobile VoIP solution."
    },
    {
        question: "What are the advantages of Linphone app development?",
        answer: "There are several advantages of using expert Linphone app development services such as: reduced time to market; no technical knowledge or experience needed; multi-device and operating system support; remote access; rich and unified communication features; white labeling; revenue generation; strengthened communication; simple yet effective to use; save money over communication; and many more."
    },
    {
        question: "Can I use this app to distribute to my clients?",
        answer: "Yes, you definitely can. It is an open source app and can be used with an unlimited license. The white label Linphone app will have your own custom branding to give you the advantage of a branded mobile SIP dialer app. We also provide Linphone integration services to customers to integrate their VoIP Softswitch, IP PBX solution, or any other VoIP system to provide a combined system. You can run your business using this app or you can distribute it for customer loyalty."
    },
    {
        question: "Will the Linphone app support both Android and Apple users?",
        answer: "That is up to you whether you want to target both audiences or not. Linphone supports different platforms and we can help you with our Linphone app development services to target any of these platform audiences or audiences of all platforms. In a free consultation call, you can also receive the required recommendations based on different factors from our Linphone experts."
    },
    {
        question: "What is white label Linphone app development?",
        answer: "Along with developing and customizing the SIP Softphone app, our Linphone developers will also replace the Linphone branding elements with yours. That means the app will have your logo, brand theme colors, app or company name, and other elements to reflect it as your owned SIP dialer app."
    },
];

export const SERVICES_SIGNALWIRE_FAQ = [
    {
        question: "What is SignalWire?",
        answer: "SignalWire is a company that develops an open source telecom stack. The SignalWire team has developed Software-Defined Telecom via FreeSWITCH and is still maintaining this open source VoIP development platform. It provides different APIs and SDKs along with WebSockets. These SDKs and APIs are compatible with REST APIs as well."  // from Driansh page. :contentReference[oaicite:2]{index=2}
    },
    {
        question: "What is the SignalWire API?",
        answer: "It is a set of APIs provided by SignalWire to integrate WebRTC video, voice, and SMS functionality so that unified communication features can be added without developing them from scratch. These APIs are available across all major cloud platforms, which helps reduce latency and enables SaaS or enterprise-grade communication solutions."  // adapted from Driansh page. :contentReference[oaicite:3]{index=3}
    },
    {
        question: "Which are the major APIs offered by SignalWire?",
        answer: "SignalWire offers multiple APIs to VoIP development companies and developers to add communication features with ease and speed. The list includes: • Messaging API • Fax API • Video conference API • Voice API • Multi-factor authentication API."  // from Driansh page. :contentReference[oaicite:4]{index=4}
    },
    {
        question: "Can we integrate SignalWire APIs into an existing VoIP solution?",
        answer: "Yes, it is possible to integrate SignalWire APIs with any existing VoIP software as they also support REST API architecture. However, feasibility depends on certain factors, and our consultancy service can help you determine whether your platform can successfully integrate the required APIs."  // from Driansh page. :contentReference[oaicite:5]{index=5}
    },
    {
        question: "Can you customize SignalWire APIs?",
        answer: "Yes, we can customize SignalWire APIs because we have rich experience working with both SignalWire APIs and FreeSWITCH. Thus, we can help enable custom features in your business via our customization services."  // from Driansh page. :contentReference[oaicite:6]{index=6}
    }
];

export const SERVICES_SIGNALWIRE_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/SignalWire-Development/icon-01.svg" alt="SignalWire API Integration" />,
        title: "SignalWire API Integration",
        description: "Create an omnichannel experience for your users or simply add a missing functionality in an existing telephony solution with our SignalWire API integration services.",
    },
    {
        icon: <ServiceIcon src="/images/services/SignalWire-Development/icon-02.svg" alt="SignalWire API Consultation" />,
        title: "SignalWire API Consultation",
        description: "Our SignalWire API consulting services cover all aspects of SIP telephony product development and deployment with the right APIs of SignalWire.",
    },
    {
        icon: <ServiceIcon src="/images/services/SignalWire-Development/icon-03.svg" alt="Third-party Integration" />,
        title: "Third-party Integration",
        description: "We assist in building unified communication solutions and reduce time to market with SignalWire and third party API integration services.",
    },
];

export const SERVICES_PRODUCT_FAQ = [
    {
        question: "What is product engineering in software development?",
        answer: "Product engineering in software development involves the full lifecycle of building a product — from idea inception, UX/UI design, architecture & development, testing & deployment, to ongoing support and evolution."
    },
    {
        question: "What do product engineering services include?",
        answer: "Product engineering services typically include requirement analysis, system design, development (front-end, back-end, full-stack), quality assurance, deployment, performance optimisation, maintenance, and sometimes scaling & evolution of the product."
    },
    {
        question: "Why are product engineering services important?",
        answer: "Product engineering services help businesses build robust, scalable and future-ready products. They bring in engineering excellence, reduce time-to-market, improve product quality and allow businesses to focus on core value while experts handle the technical build and evolution."
    },
    {
        question: "Which phases are covered under product engineering lifecycle?",
        answer: "The lifecycle generally covers idea & concept, architecture & prototyping, development & deployment, QA & testing, product launch & maintenance, iterative enhancements and possibly product scaling and re-engineering over time."
    },
    {
        question: "How do you ensure the product engineering quality and reliability?",
        answer: "Quality and reliability are ensured through best practices in architecture design, code standards, automated testing, continuous integration / continuous deployment (CI/CD), performance monitoring, and post-launch support and maintenance."
    }
];

export const SERVICES_VOIP_TESTING_FAQ = [
    {
        question: "What is VoIP testing?",
        answer: "VoIP testing is the process of evaluating how well your network supports Voice over Internet Protocol (VoIP) communication. It measures key parameters like bandwidth, latency, jitter, and packet loss to ensure high-quality, reliable voice calls."
    },
    {
        question: "Which tools can be used for VoIP testing?",
        answer: "Several tools are available to measure and analyze VoIP performance, including PingPlotter, Wireshark, and online VoIP speed tests (Nextiva, RingCentral, Vonage)."
    },
    {
        question: "What role does jitter play in VoIP testing?",
        answer: "'Jitter' refers to the variation in the timing of data packet delivery. High jitter causes choppy, distorted, or delayed audio during calls. Ideally, jitter should be below 30 ms to maintain smooth and clear communication."
    },
    {
        question: "What is an ideal VoIP quality score?",
        answer: "VoIP quality is often measured by Mean Opinion Score (MOS), which ranges from 1 (bad) to 5 (excellent). A MOS of around 3.5 to 4.4 is acceptable to good quality; a MOS above 4.0 indicates a clear, reliable voice experience."
    },
    {
        question: "How do you test VoIP latency?",
        answer: "VoIP latency can be tested using tools like ping, traceroute, or specialized VoIP-testing tools. Ideally, latency should be under 150 ms to ensure responsive, natural dialogues."
    },
    {
        question: "What factors affect VoIP call quality?",
        answer: "Call quality can be affected by bandwidth, latency, jitter, packet loss, network congestion, and router/ISP issues—all of which should be evaluated during VoIP testing."
    }
];

export const SERVICES_WEB_DEVELOPMENT_FAQ = [
    {
        question: "How much does website development cost?",
        answer: "There is no standard answer you can find for this question as there are various elements, your aspirations and demands included in building a website. Even if someone provides you a one-fit all cost for website development, then there can be something dicey and you better look for other web development companies. Website development cost gets defined based on the analysis of your requirement and other aspects. For example, if you also need frontend development along with web development, it would cost higher compared to using a readymade template. Likewise, building a static website is cheaper than dynamic website development. So, let’s connect to discuss your web development needs to define the exact cost. Contact us for more details."
    },
    {
        question: "What web development services do you offer?",
        answer: "We offer a complete web solution to our clients along with independent services. Following is our web development service list, which can be availed as a complete web solution or independent services: – Backend development – Frontend development – Website development – Web app development – Website design – Website maintenance – Content writing – Digital marketing."
    },
    {
        question: "What web development technologies do you work on?",
        answer: "We work on all major web development technologies such as: – WordPress – HTML – Laravel – PHP – CodeIgniter – NodeJS – ExpressJS – ReactJS – Angular – Typescript – JavaScript."
    },
    {
        question: "Will I be able to manage my website once you finish development?",
        answer: "Yes, definitely you can with right technology expertise. If you know how to make customization in your website based on the selected or proposed web development technology, you can make changes. Making changes in content will be anyway easy with intuitive user interface developed by our web development experts. You will also receive a code and credentials to use your website and make the required changes."
    }
];

export const SERVICES_FRONT_END_DEVELOPMENT_FAQ = [
    {
        question: "What is front end development?",
        answer: "Front end web application development involves the process of developing elements for user interfaces and building a responsive web application or website that will interact directly with the end user. A front end web app will consist of all visible parts of a website or web application that users engage with, including elements like fonts, colors, dropdown menus, and sliders. This process involves different front end app development technologies and frameworks, innovative brains, and development expertise. Key aspects of this development process include HTML, CSS, and JavaScript programming, as well as integrating various design elements."
    },
    {
        question: "What is a front end development service?",
        answer: "Front end web development service is the process of designing and deploying a striking user interface to deliver an impressive user experience through a website or web application. The development services aim to develop visually stunning, responsive, and interactive elements that users directly interact with. Front end development services encompass coding and structuring the frontend part of a web app, website, or mobile app. Moreover, these services ensure seamless navigation, optimal performance, user-centric experience, and SEO friendly elements. In short, these services augment the overall aesthetics and functionality of the digital interface to engage more clients."
    },
    {
        question: "What is the role of a front end developer?",
        answer: "Frontend developers serve as a link between designers and back end developers and their core job is to ensure the optimal user experience. Their responsibilities include designing client side components such as buttons, animations, images, layouts, and more. These interfaces are prevalent across websites, web apps, mobile apps, desktop apps, and various other digital platforms."
    },
    {
        question: "Why is front end development important?",
        answer: "In the highly competitive industry, it is essential to build an experience that can result in higher conversion rates and improved user retention. Front end development involves creating and maintaining the client side architecture of a website. Intuitive front end developments optimise digital platforms to attract more traffic, provide a seamless user experience, foster trust, and increase conversions."
    },
    {
        question: "Which is the best technology or framework for front end development?",
        answer: "There is no predefined answer to this question because depending on several factors the best technology or framework is selected. For example, React front end development might be better than Angular front end development for certain projects. The top front end development company selects the best technology out of the available stack after analysing different aspects of the project. At Driansh we use different technologies to build front end solutions such as Angular, Python, React, JavaScript, HTML5, and CSS."
    },
    {
        question: "Why should we use Driansh for front end development?",
        answer: "Proficiency, transparency, and professionalism are in our DNA. Our innovative approach and all-inclusive front-end development solutions make us the top front end development company. We established our domain expertise in different industries by delivering exceptional front end solutions for mobile and web. We are unmatchable in delivering outstanding value for money with our world class front end web development services and competitive rates."
    },
    {
        question: "What is your front end development expertise?",
        answer: "We take pride in our versatile experience and diverse portfolio of front end web application development. We have proficiency in building different types of solutions like: websites, digital products (SaaS, PaaS, UCaaS, and more), web apps, mobile apps, landing pages, cross platform apps, CMS solutions, desktop systems, web portals."
    },
    {
        question: "What is the cost of your front end development services?",
        answer: "There is no certain answer to this question because it depends on the scope of work. Depending on the size, nature, complexity, required infrastructure, and other driving factors, the cost of your development project is defined. We would love to offer a free quote for your front end web development project."
    }
];

export const SERVICES_BACK_END_DEVELOPMENT_FAQ = [
    {
        question: "What is back end development?",
        answer: "Back-end development using Python and NodeJs is the process of developing server side functionalities that empower applications and web solutions or websites. This development process involves the development of software architecture, data structure, and servers that are responsible for storing data and processing them to perform various functions to deliver brilliant performance and smooth functioning."
    },
    {
        question: "What is a back end development service?",
        answer: "The top development companies and/or developers follow the best practices, industry guidelines, cutting edge technologies, and other types of assistance required to develop reliable and fault-tolerant back end solutions for mobile, web, IoT, Blockchain, AI, and several other technology platforms. Majorly, the aim of back end development services is to reduce processing and load time, increase resilience, enhance security, improve load-balancing capabilities, and achieve other business or application specific goals."
    },
    {
        question: "Why is back end development important?",
        answer: "For several applications, it is indispensable to have an outstanding back-end solution. There are several driving factors that make it vital for a business such as: to manage data storage, retrieval, and processing; to ensure efficient data management; to effectively manage servers; to achieve optimal application performance; to seamlessly accommodate elevating data load and users; to achieve faster application loading; to keep sensitive information secured; to protect applications from cyber attackers; and to manage seamless functioning between front-end and back-end."
    },
    {
        question: "What is back end refactoring?",
        answer: "It is the process of revamping the entire back-end part of your application without interfering with the features of the front end. The aim of back end refactoring is to redefine architecture, database, APIs, and other server side components to reduce development efforts, infrastructural elements, and support costs, while simultaneously improving the quality of the code base."
    },
    {
        question: "What is the best language for back-end development?",
        answer: "Different technology stacks are available in the market and there is no one-fit-all language. For instance, back-end development using Python can be better for some sort of solutions and for other NodeJs for back-end development to deliver optimal performance. A highly experienced consultant or tech-lead helps in selecting the right tech-stack by considering different factors. We use NodeJs, Laravel, PHP, .Net, Java, Go, Solidity, Rust, Ruby on Rails, and Python for back-end development."
    },
    {
        question: "Why should I consider Driansh for back end development?",
        answer: "• India’s top 10% of back-end development experts  • Highly diversified experience and expertise  • Time-zone friendly procedures and policies  • Tailored offerings  • Free detailed consulting  • On-time delivery  • Transparent processes  • Competitive rates  • Round the clock support  • Guaranteed value over money."
    }
];



// CARD data 

export const SERVICES_WEBRTC_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-01.svg" alt="Video Calls & Conferencing" />,
        title: "Video Calls & Conferencing",
        description: "Build a one-to-one video calling and multi-party video conferencing solution for real time video calls."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-02.svg" alt="Audio Calls & Conferencing" />,
        title: "Audio Calls & Conferencing",
        description: "Development of an online audio calling or audio conferencing solution to use the browser to browser calling."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-03.svg" alt="Instant Messaging" />,
        title: "Instant Messaging",
        description: "The on-the-go conversation is made easy with our browser based chat widget development using WebRTC."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-04.svg" alt="Screen Sharing" />,
        title: "Screen Sharing",
        description: "Build a fully functional screen sharing app to run a walkthrough or similar calls for a product or service."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-05.svg" alt="File Sharing" />,
        title: "File Sharing",
        description: "Let you exchange files during a call or chat with clients and prospects using the WebRTC client solution."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-06.svg" alt="Third Party Integration" />,
        title: "Third Party Integration",
        description: "Integrate any third party or open source APIs or solutions to provide a single sign on, comprehensive system."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-07.svg" alt="Secure Communication" />,
        title: "Secure Communication",
        description: "Security is a top priority for any communication platform, and WebRTC development services address this concern with built-in encryption protocols."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-08.svg" alt="Browser Compatibility" />,
        title: "Browser Compatibility",
        description: "WebRTC development services ensure compatibility across major web browsers, eliminating the need for additional plugins or software installations."
    }
];

export const SERVICES_VOIP_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-01.webp" alt="Class 4/5 Softswitch Solution" />,
        title: "Class 4/5 Softswitch Solution",
        description: "We provide development for developing a bespoke and robust class 4/5 Softswitch solution that completes IP telephony infrastructure and serves a larger consumer base.",
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-02.webp" alt="Call Center Solution" />,
        title: "Call Center Solution",
        description: "We help you own a tailored inbound, outbound, or blended contact center solution to boost the performance of customer care, lead nurturing, sales, and similar campaigns.",
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-03.webp" alt="IP PBX Solution" />,
        title: "IP PBX Solution",
        description: "Let us help you develop a reliable platform to enrich business communication with advanced features at cheaper rates with governed access and tenant support.",
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-04.webp" alt="Unified Communication Solution" />,
        title: "Unified Communication Solution",
        description: "We develop a comprehensive communication tool that supports traditional and omnichannel communication within a single platform to map your conversations universally.",
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-05.webp" alt="Live Call Monitoring Solution" />,
        title: "Live Call Monitoring Solution",
        description: "Take control of the Quality of Calls (QoC) and Quality of Service (QoS) with an effective tool that monitors ongoing, ringing, and conference calls in real time.",
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-06.webp" alt="SIP Dialer Solution" />,
        title: "SIP Dialer Solution",
        description: "We have expertise in developing white label and customizable Softphone apps for desktops and smartphones, which bestow the advantage of SIP calling and other features.",
    }
];


export const SERVICES_FREESWITCH_CARDS1 = [
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-01.svg" alt="Custom Development" />,
        title: 'Custom Development',
        description: 'Tailored FreeSWITCH solutions built from scratch to match your exact business requirements and communication needs.',
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-02.svg" alt="Customization" />,
        title: 'Customization',
        description: 'Enhance and modify existing FreeSWITCH platforms with additional features and integrations.',
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-03.svg" alt="Performance Enhancement" />,
        title: 'Performance Enhancement',
        description: 'Optimize your FreeSWITCH system for better call handling, reduced latency, and improved scalability.',
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-04.svg" alt="API Integration" />,
        title: 'API Integration',
        description: 'Seamlessly integrate third-party APIs and services to extend your telephony platform capabilities.',
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-05.svg" alt="Security Implementation" />,
        title: 'Security Implementation',
        description: 'Implement robust security measures including encryption, authentication, and compliance standards.',
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-06.svg" alt="Deployment & Support" />,
        title: 'Deployment & Support',
        description: 'Complete deployment services with ongoing maintenance, monitoring, and technical support.',
    },
];


export const SERVICES_FREESWITCH_CARDS2 = [
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-07.svg" alt="FreeSWITCH Custom Development" />,
        title: "FreeSWITCH Custom Development",
        description: "Our FreeSWITCH developers are skilled in developing simple telephony solutions to highly intricate communication platforms that convert your vision into a working solution.",
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-08.svg" alt="FreeSWITCH Consultancy" />,
        title: "FreeSWITCH Consultancy",
        description: "Our FreeSWITCH consulting services have potential to help you unlock untapped opportunities by unleashing the power of FreeSWITCH and SignalWire in your favor.",
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-09.svg" alt="FreeSWITCH Call Script Development" />,
        title: "FreeSWITCH Call Script Development",
        description: "Let us help you create a custom call flow or build a completely tailored functionality with call script development using the full potential of FreeSWITCH.",
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-10.svg" alt="FreeSWITCH Dialplan Programming" />,
        title: "FreeSWITCH Dialplan Programming",
        description: "Build a complete harmony between your telephony platform and dial plan to manage call routing rules, extension calling, voicemails, time based call routing, and more.",
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-11.svg" alt="FreeSWITCH Support & Maintenance" />,
        title: "FreeSWITCH Support & Maintenance",
        description: "Maintain high performing application of your FreeSWITCH telephony platforms with our on-demand and contract based support and maintenance services.",
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-12.svg" alt="FreeSWITCH High Availability & Cluster Setup" />,
        title: "FreeSWITCH High Availability & Cluster Setup",
        description: "Continue catering to your clients without any stress of system or hardware failure with well-defined and deployed cluster architecture and enjoy 99.95% uptime SLA.",
    }
];



export const SERVICES_ASTERISK_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/Asterisk-Development/icon-01.svg" alt="Asterisk Custom Development" />,
        title: "Asterisk Custom Development",
        description:
            "Let expert Asterisk developers build robust unified communication solutions using attributes of Asterisk.",
    },
    {
        icon: <ServiceIcon src="/images/services/Asterisk-Development/icon-02.svg" alt="Asterisk Consultancy" />,
        title: "Asterisk Consultancy",
        description:
            "Take expert guidance to build, scale up, customize, or enhance your tools developed with the Asterisk platform.",
    },
    {
        icon: <ServiceIcon src="/images/services/Asterisk-Development/icon-03.svg" alt="Asterisk Support & Maintenance" />,
        title: "Asterisk Support & Maintenance",
        description:
            "Asterisk experts will handle the technicalities and bug fixing for your Asterisk platform. We will keep it upgraded and stable.",
    },
    {
        icon: <ServiceIcon src="/images/services/Asterisk-Development/icon-04.svg" alt="AGI Development" />,
        title: "AGI Development",
        description:
            "Get the first party call control to enjoy administered use of the system with our AGI development services.",
    },
    {
        icon: <ServiceIcon src="/images/services/Asterisk-Development/icon-05.svg" alt="Dialplan Development" />,
        title: "Dialplan Development",
        description:
            "Take control of calls and their routing methods algorithmically with an essential dialplan script developed by experts.",
    },
    {
        icon: <ServiceIcon src="/images/services/Asterisk-Development/icon-06.svg" alt="Asterisk High Availability & Cluster Setup" />,
        title: "Asterisk High Availability & Cluster Setup",
        description:
            "Asterisk engineers will set up a cluster architecture to ensure the high availability of your solutions for uninterrupted operations.",
    },
];

export const SERVICES_KAMAILIO_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/Kamailio-Development/icon-01.svg" alt="Kamailio Custom Development" />,
        title: "Kamailio Custom Development",
        description:
            "Build LCR, load balancing, failover, or any type of custom Kamailio solution to effectively handle concurrent calls with our custom development services.",
    },
    {
        icon: <ServiceIcon src="/images/services/Kamailio-Development/icon-02.svg" alt="Kamailio Consultancy" />,
        title: "Kamailio Consultancy",
        description:
            "Learn how you can effortlessly handle thousands of calls or build the best OpenSIPS infrastructure with our reliable OpenSIPs consultation services.",
    },
    {
        icon: <ServiceIcon src="/images/services/Kamailio-Development/icon-03.svg" alt="Kamailio Support & Maintenance" />,
        title: "Kamailio Support & Maintenance",
        description:
            "Enjoy high revenue generation from your Kamailio solution with our technical support for your Kamailio solutions and platforms.",
    },
    {
        icon: <ServiceIcon src="/images/services/Kamailio-Development/icon-04.svg" alt="Kamailio High Availability & Cluster Setup" />,
        title: "Kamailio High Availability & Cluster Setup",
        description:
            "Our experienced Kamailio experts will design and deploy a cluster with an HA setup for your solutions to maximize performance and reliability.",
    },
];

export const SERVICES_OPENSIPS_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/OpenSIPs-Development/icon-01.svg" alt="OpenSIPS Custom Development" />,
        title: "OpenSIPS Custom Development",
        description: "Cater to your audience with excellent telephony services across the globe using a tailored solution built with custom OpenSIPS development services.",
    },
    {
        icon: <ServiceIcon src="/images/services/OpenSIPs-Development/icon-02.svg" alt="OpenSIPS Consultancy" />,
        title: "OpenSIPS Consultancy",
        description: "Use the potential of OpenSIPS to the fullest with expert recommendations given by our OpenSIPS consultants.",
    },
    {
        icon: <ServiceIcon src="/images/services/OpenSIPs-Development/icon-03.svg" alt="OpenSIPS Support & Maintenance" />,
        title: "OpenSIPS Support & Maintenance",
        description: "Enhance the performance of your OpenSIPS solutions and keep the software at its best performing phase with our support and maintenance services.",
    },
    {
        icon: <ServiceIcon src="/images/services/OpenSIPs-Development/icon-04.svg" alt="OpenSIPS High Availability & Cluster Setup" />,
        title: "OpenSIPS High Availability & Cluster Setup",
        description: "Minimize deployment and maintenance cost and maximize SLA with our expertise in setting up high availability OpenSIPS clusters.",
    }
];

export const SERVICES_OPENSIPS_EXPERT_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/OpenSIPs-Development/icon-05.svg" alt="Class 4 Softswitch Solution" />,
        title: "Class 4 Softswitch Solution",
        description: "Handle massive call volume to skyrocket your wholesale VoIP business with a tailored class 4 VoIP Softswitch software.",
    },
    {
        icon: <ServiceIcon src="/images/services/OpenSIPs-Development/icon-06.svg" alt="Load Balancing With Failover" />,
        title: "Load Balancing With Failover",
        description: "Build a reliable solution to efficiently handle failover and load balancing for your VoIP software to deliver uninterruptible services.",
    },
    {
        icon: <ServiceIcon src="/images/services/OpenSIPs-Development/icon-07.svg" alt="Session Border Controller Solution" />,
        title: "Session Border Controller Solution",
        description: "Safeguard your VoIP software, infrastructure and business from major VoIP threats and hack attacks with an SBC solution.",
    }
];

export const SERVICES_FREESWITCH_EXPERT_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-07.svg" alt="Class 4 Softswitch Solution" />,
        title: "Class 4 Softswitch Solution",
        description: "We have built a scalable, robust, and secure wholesale VoIP Softswitch solution to help you grow your wholesale VoIP business."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-08.svg" alt="Class 5 Softswitch Solution" />,
        title: "Class 5 Softswitch Solution",
        description: "A tailored business phone system to help you build a business communication ecosystem and/or run a successful business."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-09.svg" alt="Conferencing Solution" />,
        title: "Conferencing Solution",
        description: "FreeSWITCH conferencing solution development built a robust and flexible system to conduct audio and video conferences seamlessly."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-10.svg" alt="E-Faxing Solution" />,
        title: "E-Faxing Solution",
        description: "A robust platform to digitize your faxing operations and enjoy the benefits of flexible faxing from anywhere, at any time."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-11.svg" alt="Calling Card Solution" />,
        title: "Calling Card Solution",
        description: "A reliable and feature rich VoIP calling card software helps you launch and scale up your calling card business flawlessly."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-12.svg" alt="Multi Tenant PBX Solution" />,
        title: "Multi Tenant PBX Solution",
        description: "Augment business communication and collaboration with enterprise grade quality and wide ranging rich telephony features."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-13.svg" alt="IVR Solution" />,
        title: "IVR Solution",
        description: "Automatically attend all calls and greet your clients to let your clients autonomously take actions to build a brilliant first impression."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-14.svg" alt="Broadcasting Solution" />,
        title: "Broadcasting Solution",
        description: "A feature packed voice, SMS, and email broadcasting platform to keep your clients updated with timely alerts, notifications, updates, and reminders."
    },
    {
        icon: <ServiceIcon src="/images/services/FreeSWITCH-Development/icon-15.svg" alt="Unified Communication Solutions" />,
        title: "Unified Communication Solutions",
        description: "Manage legacy, digital, and modern communication channels to use a comprehensive communication ecosystem for your enterprise."
    }
];

export const SERVICES_KAZOO_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-07.svg" alt="KAZOO Installation" />,
        title: "KAZOO Installation",
        description:
            "Our KAZOO experts will help you turn the first stepping stone by installing this powerful open source VoIP Softswitch on your cloud or in-house server with the right configurations.",

    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-08.svg" alt="KAZOO Customization" />,
        title: "KAZOO Customization",
        description:
            "Bring in the power of unique features to stand out in vicious competition with our customization services or simply enhance the performance or customize an existing module or API.",

    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-09.svg" alt="KAZOO Cluster Setup" />,
        title: "KAZOO Cluster Setup",
        description:
            "We help you keep your KAZOO based VoIP telephony solutions scalable, robust, plus, up and running with cluster setup on the cloud or servers to build a unique business brand.",
    },
];

export const SERVICES_FUSIONPBX_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/FusionPBX-Development/icon-01.svg" alt="FusionPBX Installation" />,
        title: "FusionPBX Installation",
        description:
            "We provide tailored FusionPBX setup and installation services recommended based on your business model and objectives to provide a reliable system and business foundation.",
    },
    {
        icon: <ServiceIcon src="/images/services/FusionPBX-Development/icon-02.svg" alt="FusionPBX Customization" />,
        title: "FusionPBX Customization",
        description:
            "Add omitted features of a multi tenant IP PBX system to bridge a gap or build never seen before functionality to gain a competitive edge with our custom development services.",
    },
    {
        icon: <ServiceIcon src="/images/services/FusionPBX-Development/icon-03.svg" alt="FusionPBX Training" />,
        title: "FusionPBX Training",
        description:
            "Get training from FreeSWITCH and FusionPBX specialists and get certified. We also offer FusionPBX training and certification to a group or team of a company or an institute to master FusionPBX.",
    },
    {
        icon: <ServiceIcon src="/images/services/FusionPBX-Development/icon-04.svg" alt="FusionPBX Cluster Setup" />,
        title: "FusionPBX Cluster Setup",
        description:
            "Run a hosted PBX business without any disruption and deliver exceptional and delightful services to your clients with a scalable and reliable cluster setup configured by our experts.",
    },
    {
        icon: <ServiceIcon src="/images/services/FusionPBX-Development/icon-05.svg" alt="FusionPBX API Integration" />,
        title: "FusionPBX API Integration",
        description:
            "Take advantage of adding major features of other solutions or business apps like CRM, payment gateway, PBX, etc. integrated into your FusionPBX with our third party API integration services.",
    },
    {
        icon: <ServiceIcon src="/images/services/FusionPBX-Development/icon-06.svg" alt="On-demand FusionPBX Services" />,
        title: "On-demand FusionPBX Services",
        description:
            "We have a team of FusionPBX engineers that can satisfy any custom need of a business or individual by offering reliable, on-demand FusionPBX services.",
    },
];

export const SERVICES_LINPHONE_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/Linphone-Development/icon-01.svg" alt="Consulting" />,
        title: "Consulting",
        description:
            "Get expert consultation from Linphone app developers to enjoy the full spectrum benefits of this powerful open source mobile VoIP dialer app.",
    },
    {
        icon: <ServiceIcon src="/images/services/Linphone-Development/icon-02.svg" alt="Customization" />,
        title: "Customization",
        description:
            "Customize an existing feature or get a new feature developed, we have Linphone experts onboard to meet any demand for Linphone customization.",
    },
    {
        icon: <ServiceIcon src="/images/services/Linphone-Development/icon-03.svg" alt="Integrations" />,
        title: "Integrations",
        description:
            "Take the amalgamated advantage of your VoIP infrastructure with our integration services. PBX, VoIP Softswitch, or any other APIs, we are here to integrate with Linphone.",
    },
    {
        icon: <ServiceIcon src="/images/services/Linphone-Development/icon-04.svg" alt="White labeling" />,
        title: "White labeling",
        description:
            "Leverage the advantage of your own branding elements implemented intuitively into this mobile VoIP solution by experts. A complete white label app to better position your brand.",
    },
    {
        icon: <ServiceIcon src="/images/services/Linphone-Development/icon-05.svg" alt="Troubleshooting" />,
        title: "Troubleshooting",
        description:
            "Let our proficiency as a Linphone app development company help you troubleshoot the errors and bugs you are facing at any stage of Linphone development.",
    },
    {
        icon: <ServiceIcon src="/images/services/Linphone-Development/icon-06.svg" alt="Push Notifications" />,
        title: "Push Notifications",
        description:
            "Keep your app users informed and engaged with the custom push notification feature. Send simple text or rich push notifications with our Linphone development services.",
    },
];

// Android Development Data
export const SERVICES_ANDROID_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/Android-Development/icon-01.svg" alt="Custom Android App Development" />,
        title: "Custom Android App Development",
        description: "Our Android app developers develop tailored mobile apps with custom features and characteristics that can help you become one of the chartbusters in the Play Store."
    },
    {
        icon: <ServiceIcon src="/images/services/Android-Development/icon-02.svg" alt="App UI designing" />,
        title: "App UI designing",
        description: "We master the game of delivering excellent customer experience using a captivating user interface for mobile layouts and apps with fresh and vibrant layouts."
    },
    {
        icon: <ServiceIcon src="/images/services/Android-Development/icon-03.svg" alt="Android App Upgrade and Maintenance" />,
        title: "Android App Upgrade and Maintenance",
        description: "Our skilled Android app developers provide end to end upgrade and maintenance services for any Android application to benefit your users with a stable and advanced app."
    },
    {
        icon: <ServiceIcon src="/images/services/Android-Development/icon-04.svg" alt="Android App Porting" />,
        title: "Android App Porting",
        description: "Our best Android mobile app development company in India can port your Android application to any other existing application built on any platform for better returns."
    },
    {
        icon: <ServiceIcon src="/images/services/Android-Development/icon-05.svg" alt="Android web based app" />,
        title: "Android web based app",
        description: "From budding business apps to enterprise apps for web users, our experienced team of Android developers is here with its apt Android web app development service."
    },
    {
        icon: <ServiceIcon src="/images/services/Android-Development/icon-06.svg" alt="Android Wearable Development" />,
        title: "Android Wearable Development",
        description: "Our Android wearable app development services cover building multifunctional wearable device apps to capture the wearable market with high ROI."
    }
];

export const SERVICES_ANDROID_FAQ = [
    {
        question: "Which frameworks do you use for Android app development?",
        answer: "The frameworks and tools for Android mobile app development are selected based on the nature of the project and its features. We have a team of experienced Android developers that have expertise in different Android app development platforms and frameworks like:\n\n• React Native\n• Flutter\n• JQuery Mobile Android Framework\n• Native Android Framework\n• Native Script Android Framework\n• Ionic\n• Xamarin\n• PhoneGap\n• Appcelerator Titanium\n• TheAppsBuilder\n• Sencha Touch for Android\n• Corona SDK framework of Android\n\nWe use Kotlin and Java for building native Android mobile apps."
    },
    {
        question: "Which Android mobile app development technologies do you use?",
        answer: "We use Kotlin and Java for building native Android mobile apps."
    },
    {
        question: "Do you only provide development or do you also help in listing an app in the Google Play Store?",
        answer: "We are flexible with both approaches and you can choose one depending on what you prefer. We can provide development and then hand over the app to list on the Play Store. Alternatively, we can also develop the app and handle the Google Play Store listing of the app. If you need, we can help you with app store optimization as well as we have a team of experienced digital marketing experts, too."
    },
    {
        question: "Can you only develop an Android mobile app?",
        answer: "No, we provide all types of Android app development services, which include:\n\n• Android mobile app development\n• Android web app development\n• Hybrid app development\n• Mobile web app development\n• Android smart TV app development\n• Android wearable app development"
    }
];

// iOS Development Data
export const SERVICES_IOS_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/iOS-Development/icon-01.svg" alt="Custom iOS App Development" />,
        title: "Custom iOS App Development",
        description: "Our iOS app developers develop tailored mobile apps with custom features and characteristics that can help you become one of the chartbusters in the App Store."
    },
    {
        icon: <ServiceIcon src="/images/services/iOS-Development/icon-02.svg" alt="App UI designing" />,
        title: "App UI designing",
        description: "We master the game of delivering excellent customer experience using a captivating user interface for mobile layouts and apps with fresh and vibrant layouts."
    },
    {
        icon: <ServiceIcon src="/images/services/iOS-Development/icon-03.svg" alt="iOS App Upgrade and Maintenance" />,
        title: "iOS App Upgrade and Maintenance",
        description: "Our skilled iOS app developers provide end to end upgrade and maintenance services for any iOS application to benefit your users with a stable and advanced app."
    },
    {
        icon: <ServiceIcon src="/images/services/iOS-Development/icon-04.svg" alt="iOS App Porting" />,
        title: "iOS App Porting",
        description: "Our best iOS mobile app development company in India can port your iOS application to any other existing application built on any platform for better returns."
    },
    {
        icon: <ServiceIcon src="/images/services/iOS-Development/icon-05.svg" alt="iOS web based app" />,
        title: "iOS web based app",
        description: "From budding business apps to enterprise apps for web users, our experienced team of iOS developers is here with its apt iOS web app development service."
    },
    {
        icon: <ServiceIcon src="/images/services/iOS-Development/icon-06.svg" alt="Apple Watch Development" />,
        title: "Apple Watch Development",
        description: "Our Apple Watch app development services cover building multifunctional wearable device apps to capture the wearable market with high ROI."
    }
];

export const SERVICES_IOS_FAQ = [
    {
        question: "Which frameworks do you use for iOS app development?",
        answer: "The frameworks and tools for iOS mobile app development are selected based on the nature of the project and its features. We have a team of experienced iOS developers that have expertise in different iOS app development platforms and frameworks like:\n\n• React Native\n• Flutter\n• Native iOS Framework (Swift)\n• Native iOS Framework (Objective-C)\n• Xamarin\n• Ionic\n• Cordova\n\nWe use Swift and Objective-C for building native iOS mobile apps."
    },
    {
        question: "Which iOS mobile app development technologies do you use?",
        answer: "We use Swift and Objective-C for building native iOS mobile apps."
    },
    {
        question: "Do you only provide development or do you also help in listing an app in the App Store?",
        answer: "We are flexible with both approaches and you can choose one depending on what you prefer. We can provide development and then hand over the app to list on the App Store. Alternatively, we can also develop the app and handle the App Store listing of the app. If you need, we can help you with app store optimization as well as we have a team of experienced digital marketing experts, too."
    },
    {
        question: "Can you only develop an iOS mobile app?",
        answer: "No, we provide all types of iOS app development services, which include:\n\n• iOS mobile app development\n• iOS web app development\n• Hybrid app development\n• Mobile web app development\n• Apple Watch app development\n• iPad app development"
    }
];

export const SERVICES_FLUTTER_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/Flutter-App-Development/icon-01.svg" alt="Custom Flutter App Development" />,
        title: "Custom Flutter App Development",
        description: "We can help you build the best apps using Flutter to dominate the mobile app market with our custom Flutter app programming services in India and worldwide."
    },
    {
        icon: <ServiceIcon src="/images/services/Flutter-App-Development/icon-02.svg" alt="UI/UX Designing" />,
        title: "UI/UX Designing",
        description: "Our Flutter app development agency India proudly owns the best team that designs hundreds of interactive and captivating UI/UX designs for engaging customer experience."
    },
    {
        icon: <ServiceIcon src="/images/services/Flutter-App-Development/icon-03.svg" alt="MVP Development" />,
        title: "MVP Development",
        description: "Our Flutter MVP development services will build a sustainable minimal viable product (MVP) that accelerates returns and let you test the product viability."
    },
    {
        icon: <ServiceIcon src="/images/services/Flutter-App-Development/icon-04.svg" alt="App Upgrade and Maintenance" />,
        title: "App Upgrade and Maintenance",
        description: "Our team of experienced Flutter app developers will take care of all technical aspects related to upgrading your existing app to the latest version of Flutter to maintain it."
    },
    {
        icon: <ServiceIcon src="/images/services/Flutter-App-Development/icon-05.svg" alt="Flutter App Consulting" />,
        title: "Flutter App Consulting",
        description: "Our years of experience in Flutter app development have given us a strong insight to help our clients with expert Flutter app consulting services to be more profitable."
    },
    {
        icon: <ServiceIcon src="/images/services/Flutter-App-Development/icon-06.svg" alt="API Development and Integration" />,
        title: "API Development and Integration",
        description: "Our Flutter app programming experts can help you build the most comprehensive and seamless experience with excellent Flutter API development and integration."
    }
];

export const SERVICES_FLUTTER_FAQ = [
    {
        question: "Is Flutter development used for the backend or frontend?",
        answer: "Unlike Android app development, which uses different languages or platforms for frontend and backend development, Flutter uses a single language for both, backend and frontend development. This language is Dart. With this framework, developers also do not need to get references as Flutter development includes the use of widgets. These widgets are similar to LEGO blocks, which get used together to create an object. These widgets can be used with a modern reactive framework to design the frontend. The same widgets get used to build the backend."
    },
    {
        question: "Does Flutter mobile app development reduce overall cost?",
        answer: "The answer depends on the complexity of your mobile app.\n\nIf you are interested in cross platform app development to build a simple app or a minimum viable product (MVP), then the Dart programming language of Flutter will help in building this app in less time than native mobile app development. Moreover, it will also cost you less.\n\nIf you want to develop a complicated app with multiple functionalities, then also it will be cheaper than native mobile app development with Flutter.\n\nIf you want to build a large app, in which you will insert native code at some widgets, it will not shorten your mobile app development cycle and it is likely to cost you the same as a native iOS and Android app development."
    },
    {
        question: "Can I add the same features in the Flutter based app as in native apps?",
        answer: "Yes, you can have the same features in the Flutter app as in a native app if you choose the right Flutter app development company that holds this skill. Some features can be developed only using native code, but the good news is this code can be inserted into Flutter to add those native features."
    },
    {
        question: "Is Flutter development right for a startup?",
        answer: "For any company that wants to develop a cross platform app and does not need too many native features, Flutter is a good choice. In another case, native app development is a better choice.\n\nIn the case of a startup, the ideas of the apps are pretty straightforward and in many cases, the businesses need an MVP to raise funds or test the target market. In this case, Flutter mobile app development can reap the expected results."
    }
];

export const SERVICES_MOBILE_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/Mobile-App-Development/icon-01.webp" alt="Android App Development" />,
        title: "Android App Development",
        description: "Our renowned Android mobile app development experts can build highly robust and reliable Android apps that can function successfully on any Android platform."
    },
    {
        icon: <ServiceIcon src="/images/services/Mobile-App-Development/icon-02.webp" alt="iOS App Development" />,
        title: "iOS App Development",
        description: "We are the top iOS app development companies in India that cater to global businesses with excellent Apple apps that dominate the stores with top listings."
    },
    {
        icon: <ServiceIcon src="/images/services/Mobile-App-Development/icon-03.webp" alt="React Native App Development" />,
        title: "React Native App Development",
        description: "Our expert React Native app development service has proven its worth in delivering an experience as a native app to both Apple and Android users at a low investment."
    },
    {
        icon: <ServiceIcon src="/images/services/Mobile-App-Development/icon-04.webp" alt="Flutter App Development" />,
        title: "Flutter App Development",
        description: "Our Flutter app development services help you increase ROI using a high performing, single code base to cater to customers across all popular platforms and devices."
    },
    {
        icon: <ServiceIcon src="/images/services/Mobile-App-Development/icon-05.webp" alt="Cross Platform App Development" />,
        title: "Cross Platform App Development",
        description: "We can help you save time and investment in mobile app development yet enjoy high ROI with our expert cross platform mobile application development services."
    },
    {
        icon: <ServiceIcon src="/images/services/Mobile-App-Development/icon-06.webp" alt="Progressive Web App Development" />,
        title: "Progressive Web App Development",
        description: "Deliver an immersive experience to your customers with our progressive web app development services without investing in core mobile app development."
    }
];

export const SERVICES_MOBILE_FAQ = [
    {
        question: "I have a website. Can you convert it into a mobile app?",
        answer: "Yes, we can definitely develop a fully functional mobile app based on the concept of your mobile app to make the life of your consumers easier. We can also integrate your mobile app and website to synchronize data between both platforms to help you save manual resources that otherwise get invested in managing data."
    },
    {
        question: "Can you provide mobile phone app development for a complex navigation concept?",
        answer: "We are popular as the top mobile app development company for more than 12 years. We have a completely diversified portfolio and we have built the best mobile apps for simple, unique, and complicated concepts. Our expert mobile app developers have specialization in developing complex features and using integrated libraries. Building a navigation app with complicated logic will not be anything difficult for our mobile app development ninjas."
    },
    {
        question: "Do you need me to provide visual images (Wireframes) for mobile app development?",
        answer: "If you have wireframes or visual representations of your mobile app screens and logic ready, you can provide us. If you do not have access to the resources or skills to design wireframes, do not take any stress. Just explain your idea to our team and our mobile app development experts and mobile app designers will design the wireframes for your review and develop the expected app for you."
    },
    {
        question: "Do you support native or cross platform app development?",
        answer: "Both native and cross platform mobile applications have their own benefits and drawbacks depending on your idea, app size, budget, target market, time to market, and other factors. We provide a free consultation to our prospective clients to choose the right approach and technologies for the best mobile app development. We have a team of native and cross platform app developers that can help you build your dream app. You can contact us to discuss your idea and get a free mobile app development consultation."
    }
];

export const SERVICES_REACT_NATIVE_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/React-Native-Development/icon-01.svg" alt="Custom React Native App Development" />,
        title: "Custom React Native App Development",
        description: "We are experts in developing and delivering cross platform apps with dynamic features using React Native using the best elements of the React Native framework."
    },
    {
        icon: <ServiceIcon src="/images/services/React-Native-Development/icon-02.svg" alt="UI/UX designing" />,
        title: "UI/UX designing",
        description: "Our designs for mobile applications match the latest trends and real time expectations of end users to meet business brand identity with design elements."
    },
    {
        icon: <ServiceIcon src="/images/services/React-Native-Development/icon-03.svg" alt="MVP Development" />,
        title: "MVP Development",
        description: "We can help you launch your MVP to seize the market and start enhancing the following iterations with better versions to meet your clients' expectations."
    },
    {
        icon: <ServiceIcon src="/images/services/React-Native-Development/icon-04.svg" alt="App Upgrade and Maintenance" />,
        title: "App Upgrade and Maintenance",
        description: "We provide the best React Native app maintenance services with regular upgrades to ensure your clients use the most latest version and enjoy high performance."
    },
    {
        icon: <ServiceIcon src="/images/services/React-Native-Development/icon-05.svg" alt="Legacy App Migration to React Native" />,
        title: "Legacy App Migration to React Native",
        description: "Modernize your existing legacy app to the React Native app with our React Native app migration services. Deliver better UI and UX yet save on React Native development."
    },
    {
        icon: <ServiceIcon src="/images/services/React-Native-Development/icon-06.svg" alt="Third Party Integrations" />,
        title: "Third Party Integrations",
        description: "We have benefited several companies with our excellent third party and React Native integration services for the mobile apps to reuse code and resources."
    }
];

export const SERVICES_REACT_NATIVE_FAQ = [
    {
        question: "What is the difference between React and React Native?",
        answer: "React is used for web development and React Native is used for mobile app development.\n\nReact is used to improve the user interface of websites and web apps to improve customer experience. React is just a library that is used by developers for frontend development.\n\nReact Native is popular for cross platform mobile app development that can help in reducing development costs with a single codebase. React Native is a complete mobile application development platform."
    },
    {
        question: "Can you migrate my existing application to React Native?",
        answer: "Yes, it is possible to migrate your existing iOS or Android apps to React Native with our expert React Native development services. Complex to simple apps can be migrated to React Native, but the reusability of code depends on multiple aspects. Our React Native development experts will try to reuse possible code snippets and modules. But, if existing libraries or code cannot be imported or reused, then it will be a completely fresh React Native mobile app development instead of migration to this platform. Our team will be happy to assess your existing app and give free consultation on migration. For more details, contact us."
    },
    {
        question: "Will my web app developed in React Native also work as a mobile app?",
        answer: "No, that is not possible because the code developed for the web is exclusive to serve the consumers using web browsers. However, the web apps developed by the best React Native developers will be responsive and can be accessed from mobile browsers. Likewise, mobile apps developed by React Native cannot be used as web apps. There is the possibility of code reusability between both web apps and mobile apps, but you cannot use the same codebase of web and mobile apps."
    },
    {
        question: "Which major brands use React Native?",
        answer: "There are many big brands that have used React Native development to build their platforms or apps such as:\n\n– Facebook\n– Facebook ad manager\n– Instagram\n– Walmart\n– Airbnb\n– Tesla\n– Skype\n– Uber Eats\n\nIt is necessary to know that developing an app using this cross platform app development platform is available at competitive rates and offered by the top React Native development company even if it is used by the top brands."
    }
];

export const SERVICES_VICI_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/VICIdial-Development/icon-01.svg" alt="VICIdial Installation" />,
        title: "VICIdial Installation",
        description: "Let our VICIdial experts handle the job of configuring and setting up a scalable version of VICIdial to furnish you with a robust and reliable solution."
    },
    {
        icon: <ServiceIcon src="/images/services/VICIdial-Development/icon-02.svg" alt="VICIdial Customization" />,
        title: "VICIdial Customization",
        description: "VICIdial development to build tailored features to VICIdial theme customization, performance enhancement and more are offered to benefit you."
    },
    {
        icon: <ServiceIcon src="/images/services/VICIdial-Development/icon-03.svg" alt="VICIdial Training" />,
        title: "VICIdial Training",
        description: "Learn the nitty gritty of VICIdial from veteran experts offering in-depth training on this open source call center software to enhance your team's technical knowledge."
    },
    {
        icon: <ServiceIcon src="/images/services/VICIdial-Development/icon-04.svg" alt="VICIdial Cluster Setup" />,
        title: "VICIdial Cluster Setup",
        description: "Run uninterruptible campaigns by deploying a cluster setup of this software for call centers that provides 99.95% of SLA uptime and excellent failover and recovery."
    },
    {
        icon: <ServiceIcon src="/images/services/VICIdial-Development/icon-05.svg" alt="VICIdial CRM Integration" />,
        title: "VICIdial CRM Integration",
        description: "We provide integration of any open source and third party CRM solutions under our VICIdial CRM integration service offering to provide single sign on facility."
    },
    {
        icon: <ServiceIcon src="/images/services/VICIdial-Development/icon-06.svg" alt="VICIdial Custom Theme" />,
        title: "VICIdial Custom Theme",
        description: "Our VICIdial theme customization and custom skin design and development services will enhance the look and feel of the software with white label support."
    }
];

export const SERVICES_SIPJS_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/SipJS-Development/icon-01.svg" alt="SIP.Js Custom Development" />,
        title: "SIP.Js Custom Development",
        description: "Tailor your telephony solutions with custom features that augment the communication experience of the participants with our custom SIP.js development services."
    },
    {
        icon: <ServiceIcon src="/images/services/SipJS-Development/icon-02.svg" alt="SIP.Js Integration" />,
        title: "SIP.Js Integration",
        description: "SIP.js experts will help you choose the right libraries and integrate them into your existing VoIP products and solutions to let you use the blended power of SIP and WebRTC."
    },
    {
        icon: <ServiceIcon src="/images/services/SipJS-Development/icon-03.svg" alt="SIP.Js Consulting" />,
        title: "SIP.Js Consulting",
        description: "Our SIP.js consultants provide consulting services to help you push the limits of your existing manpower and resources and use SIP.js libraries at their full potential."
    }
];

export const SERVICES_SIPJS_EXPERT_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-10.svg" alt="Web Softphone" />,
        title: "Web Softphone",
        description: "Production‑grade in‑browser phone with registration, hold/transfer, DTMF, call history."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-11.svg" alt="WebRTC Video Calling" />,
        title: "WebRTC Video Calling",
        description: "1:1 and group video with media controls, device selection, network resilience and stats."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Development/icon-12.svg" alt="Call Center Agent UI" />,
        title: "Call Center Agent UI",
        description: "Queue/agent states, wrap‑up codes, whisper/barge, and supervisor views using SIP.js."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-09.svg" alt="SIP over WebSocket Edge" />,
        title: "SIP over WebSocket Edge",
        description: "Hardened WSS edge with TLS, CORS, ICE/STUN/TURN strategy, NAT traversal best practices."
    },
    {
        icon: <ServiceIcon src="/images/services/WebRTC-Development/icon-10.svg" alt="Click‑to‑Call Widgets" />,
        title: "Click‑to‑Call Widgets",
        description: "Embeddable widgets for websites and CRMs enabling instant browser‑to‑SIP calling."
    }
];

export const SERVICES_DEVOPS_CARDS1 = [
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-01.webp" alt="End-to-End DevOps Services" />,
        title: "End-to-End DevOps Services",
        description: "From simple transition consulting to getting DevOps development, configuring automation, deploying one-click rollbacks, managing disaster recovery, and more; we are your all-in-one support for any DevOps needs."
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-02.webp" alt="Experienced DevOps Resources" />,
        title: "Experienced DevOps Resources",
        description: "We have a pool of talented and highly versatile DevOps engineers that have worked with unique requirements and numerous projects to empower our global customers. We use our experience to benefit our clients to maximize ROI."
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-03.webp" alt="Reliable Software Development" />,
        title: "Reliable Software Development",
        description: "With our expertise in DevOps processes, tools, and standards, we can help you define a more predictable software engineering roadmap. Always hit the market on or before time with more predictable and reliable processes."
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-04.webp" alt="Collaborative Approach" />,
        title: "Collaborative Approach",
        description: "Increase collaboration by syncing your Dev (Development) and Ops (Operations) teams and/ or processes with our best DevOps services. We create a collaborative environment to build better technical architecture and products."
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-05.webp" alt="Fastest Time To Market" />,
        title: "Fastest Time To Market",
        description: "We assure you the fastest time to market by harnessing the real sense of CI/CD/ CD with our DevOps services. You can reduce your development, testing, and launch time 10x times with our exceptional DevOps services."
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-06.webp" alt="Higher ROI" />,
        title: "Higher ROI",
        description: "Our Lean-Agile approach blended with DevOps best practices will help you reduce operational and development peculiarities and expenses. By hitting the market early, you can increase your revenue stream and gain a competitive edge."

    },
];

export const SERVICES_DEVOPS_CARDS2 = [
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-07.webp" alt="DevOps Consulting" />,
        title: "DevOps Consulting",
        description:
            "Whether you are transiting from a conventional model of software engineering to DevOps or you want help in harnessing the real power of DevOps, our team of DevOps consultants will be available at your disposal. Our DevOps consultants will work in collaboration with your team to define the right strategy for continuous development and continuous delivery to reduce time to market. Our DevOps consulting services also include recommendations for the selection of the right DevOps tools, technology stacks, and more to leverage the advantage of DevOps development.",
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-08.webp" alt="CI/ CD/ CD" />,
        title: "CI/ CD/ CD",
        description:
            "Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment (CD) are three vital elements that make DevOps methodology so popular and effective. We help you leverage the advantage of these characteristics of DevOps with our DevOps development and consultancy services. We will aid you in streamlining your release cycle with the best practices of CI/CD/CD to maintain the right code repositories and reduce release time. Our company is renowned as the top DevOps development company for its versatile experience in this industry.",
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-09.webp" alt="DevOps Automation" />,
        title: "DevOps Automation",
        description:
            "The real essence of DevOps development services is in automation introduced by this software development methodology. Our team of DevOps developers holds a strong command over the best practices of generating and governing automation in the software development cycle by using the best practices. We can help you introduce automation in continuous integration and continuous delivery along with testing to maximize the advantages of using this phenomenon. We ensure high efficiency in automating development, integration, deployment, and delivery processes.",
    },
    {
        icon: <ServiceIcon src="/images/services/DevOps-Services/icon-10.webp" alt="IT Managed Services" />,
        title: "IT Managed Services",
        description:
            "We stay on top of the technologies and market changes to assist our clients in omni-direction. As the best DevOps development company, IT managed services are one of the major offerings we have to keep you stress free from all technical peculiarities. We will handle your IT infrastructure, database migration jobs, remote server or cloud space management, technical support tickets, and other technical aspects to empower your business with a one-stop solution.",
    },
];

export const SERVICES_PRODUCT_CARDS1 = [
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-01.svg" alt="Multi Tenant PBX" />,
        title: "Multi Tenant PBX",
        description:
            "Tailor your telephony solutions with custom features that augment the communication experience of the participants with our custom SIP.js development services.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-02.svg" alt="Call Center" />,
        title: "Call Center",
        description:
            "SIP.js experts will help you choose the right libraries and integrate them into your existing VoIP products and solutions to let you use the blended power of SIP and WebRTC.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-03.svg" alt="Class 4 Softswitch" />,
        title: "Class 4 Softswitch",
        description:
            "Our SIP.js consultants provide consulting services to help you push the limits of your existing manpower and resources and use SIP.js libraries at their full potential.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-04.svg" alt="Class 5 Softswitch" />,
        title: "Class 5 Softswitch",
        description:
            "Tailor your telephony solutions with custom features that augment the communication experience of the participants with our custom SIP.js development services.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-05.svg" alt="UCaaS Platform" />,
        title: "UCaaS Platform",
        description:
            "SIP.js experts will help you choose the right libraries and integrate them into your existing VoIP products and solutions to let you use the blended power of SIP and WebRTC.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-06.svg" alt="Mobile Softphone" />,
        title: "Mobile Softphone",
        description:
            "Our SIP.js consultants provide consulting services to help you push the limits of your existing manpower and resources and use SIP.js libraries at their full potential.",
    },
];

export const SERVICES_PRODUCT_CARDS2 = [
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-07.svg" alt="Product Ideation & Prototyping" />,
        title: "Product Ideation & Prototyping",
        description: [
            "Market analysis",
            "Concept validation",
            "MVP planning and wireframing",
        ],
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-08.svg" alt="Custom Software & App Development" />,
        title: "Custom Software & App Development",
        description: [
            "Web, mobile, and desktop applications",
            "VoIP & communication platforms",
            "API & microservices development",
        ],
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-09.svg" alt="UI/UX Design Services" />,
        title: "UI/UX Design Services",
        description: [
            "Wireframes & visual design",
            "Interaction design",
            "Usability testing",
        ],
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-10.svg" alt="QA & Testing" />,
        title: "QA & Testing",
        description: [
            "Manual & automated testing",
            "Performance & security testing",
        ],
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-11.svg" alt="DevOps & Cloud Deployment" />,
        title: "DevOps & Cloud Deployment",
        description: [
            "CI/CD implementation",
            "Cloud-native infrastructure",
            "Monitoring & scaling",
        ],
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-12.svg" alt="Product Re-engineering & Modernization" />,
        title: "Product Re-engineering & Modernization",
        description: [
            "Legacy tech transformation",
            "UI/UX upgrades",
            "Architecture optimization",
        ],
    },
];

export const SERVICES_PRODUCT_CARDS3 = [
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-13.svg" alt="Domain-Focused Expertise" />,
        title: "Domain-Focused Expertise",
        description:
            "Proven success in VoIP, FinTech, AI, and Healthcare software product development.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-14.svg" alt="End-to-End Product Lifecycle" />,
        title: "End-to-End Product Lifecycle",
        description:
            "From idea to MVP, deployment, and post-launch support — we handle it all.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-15.svg" alt="Cross-Functional Teams" />,
        title: "Cross-Functional Teams",
        description:
            "Dedicated engineers, designers, testers, and DevOps — all under one roof.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-16.svg" alt="Global Delivery Capability" />,
        title: "Global Delivery Capability",
        description:
            "Clients across 20+ countries. Flexible engagement models to suit every business.",
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-17.svg" alt="Security-First Approach" />,
        title: "Security-First Approach",
        description:
            "Best practices for compliance, scalability, and data protection baked into every layer.",
    }
];


export const SERVICES_PRODUCT_CARDS4 = [
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-18.svg" alt="Healthcare" />,
        title: 'Healthcare',
        description: 'Innovative solutions for medical practices, hospitals, and telemedicine platforms with HIPAA compliance.'
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-19.svg" alt="Insurance" />,
        title: 'Insurance',
        description: 'Digital transformation tools for policy management, claims processing, and customer engagement.'
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-20.svg" alt="Education" />,
        title: 'Education',
        description: 'E-learning platforms, student management systems, and interactive educational tools.'
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-13.svg" alt="E-commerce" />,
        title: 'E-commerce',
        description: 'Scalable online stores, payment gateways, and inventory management solutions.'
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-14.svg" alt="Telecommunications" />,
        title: 'Telecommunications',
        description: 'VoIP systems, unified communications, and network infrastructure solutions.'
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-15.svg" alt="Finance" />,
        title: 'Finance',
        description: 'Secure banking apps, payment processing, and financial analytics platforms.'
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-16.svg" alt="Real Estate" />,
        title: 'Real Estate',
        description: 'Property management systems, CRM solutions, and virtual tour platforms.'
    },
    {
        icon: <ServiceIcon src="/images/services/Product-Engineering/icon-17.svg" alt="BPO" />,
        title: 'BPO',
        description: 'Call center software, workforce management, and customer service automation.'
    }
];

export const SERVICES_VOIPTESTING_CARD = [
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-01.svg" alt="Multi Tenant PBX" />,
        title: "Multi Tenant PBX",
        description: "Tailor your telephony solutions with custom features that augment the communication experience of the participants with our custom SIP.js development services."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-02.svg" alt="Call Center" />,
        title: "Call Center",
        description: "SIP.js experts will help you choose the right libraries and integrate them into your existing VoIP products and solutions to let you use the blended power of SIP and WebRTC."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-03.svg" alt="Class 4 Softswitch" />,
        title: "Class 4 Softswitch",
        description: "Our SIP.js consultants provide consulting services to help you push the limits of your existing manpower and resources and use SIP.js libraries at their full potential."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-04.svg" alt="Class 5 Softswitch" />,
        title: "Class 5 Softswitch",
        description: "Tailor your telephony solutions with custom features that augment the communication experience of the participants with our custom SIP.js development services."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-05.svg" alt="UCaaS Platform" />,
        title: "UCaaS Platform",
        description: "SIP.js experts will help you choose the right libraries and integrate them into your existing VoIP products and solutions to let you use the blended power of SIP and WebRTC."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-06.svg" alt="Mobile Softphone" />,
        title: "Mobile Softphone",
        description: "Our SIP.js consultants provide consulting services to help you push the limits of your existing manpower and resources and use SIP.js libraries at their full potential."
    }
];

export const SERVICES_VOIPTESTING_CARD1 = [
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-25.svg" alt="Proven VoIP Expertise" />,
        title: "Proven VoIP Expertise",
        description: "With 15+ years in VoIP development and testing, our team understands the intricacies of SIP, RTP, WebRTC, and complex VoIP protocols across platforms like FreeSWITCH, Asterisk, OpenSIPS, Kamailio, and more."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-26.svg" alt="End-to-End Testing Coverage" />,
        title: "End-to-End Testing Coverage",
        description: "From SIP signaling and media stream analysis to NAT traversal, failover testing, and QoS monitoring, we cover every layer of your VoIP environment—ensuring complete readiness for production."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-27.svg" alt="Real-World Simulation" />,
        title: "Real-World Simulation",
        description: "We simulate real-world scenarios—packet loss, jitter, codec negotiation, security breaches, load stress, and device/browser compatibility—to validate performance under all conditions."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-28.svg" alt="Custom Test Frameworks" />,
        title: "Custom Test Frameworks",
        description: "Our team builds tailored test cases and automation frameworks using tools like SIPp, Wireshark, JMeter, and custom scripts, aligned to your infrastructure and goals."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-29.svg" alt="Faster Time to Market" />,
        title: "Faster Time to Market",
        description: "By detecting issues early and reducing back-and-forth QA cycles, our testing services help you launch faster with confidence and deliver crystal-clear calling experiences to your users."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-30.svg" alt="Transparent Reporting" />,
        title: "Transparent Reporting",
        description: "We deliver detailed, actionable reports with insights on bugs, performance metrics, and compliance gaps—so you can optimize and scale your VoIP systems efficiently."
    }
];

export const SERVICES_VOIPTESTING_CARD2 = [
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-19.svg" alt="VoIP & UCaaS Providers" />,
        title: "VoIP & UCaaS Providers",
        description: "Ensure your multi-tenant VoIP or UCaaS platform delivers HD voice and scales under load without jitter, packet loss, or signaling issues."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-20.svg" alt="Call & Contact Centers" />,
        title: "Call & Contact Centers",
        description: "Maximize agent efficiency and customer satisfaction with consistent voice clarity, minimal call drops, and optimized routing."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-21.svg" alt="Telecom Product Vendors" />,
        title: "Telecom Product Vendors",
        description: "Test and fine-tune your telecom solutions - softphones, PBX, SIP gateways, or SBCs under various environments and edge cases."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-22.svg" alt="Healthcare, Insurance, & BPOs" />,
        title: "Healthcare, Insurance, & BPOs",
        description: "Maintain regulatory-grade voice reliability for critical conversations and ensure high uptime for remote agents or patient interactions."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-23.svg" alt="IT & MSPs Managing Voice Platforms" />,
        title: "IT & MSPs Managing Voice Platforms",
        description: "Gain deep visibility into voice performance, proactively detect issues, and reduce support escalations across client systems."
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-24.svg" alt="Remote & Hybrid Teams" />,
        title: "Remote & Hybrid Teams",
        description: "Guarantee seamless communication for distributed teams using browser-based VoIP/WebRTC tools regardless of their network conditions."
    }
];

export const SERVICES_BACKEND_CARDS = [
    {
        icon: <Check className="w-5 h-5" />,
        title: "Best Technology Stack",
        description: "Using Python, NodeJS and cutting-edge technologies for optimal performance"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Passion & Proficiency",
        description: "Building best server-side applications that exceed expectations"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Scalable Solutions",
        description: "High performing applications with optimized server-side functionality"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Domain Expertise",
        description: "Established expertise in complex server-side codes and libraries"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Outstanding Value",
        description: "Exceptional value for money with competitive rates"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Reliable Support",
        description: "Round the clock technical support and maintenance services"
    }
];


export const SERVICES_WEB_DEVELOPMENT_CARDS = [
    {
        icon: <Database className="w-8 h-8" />,
        title: "Database Architecture",
        description: "Optimized database solutions for seamless data management and retrieval"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Secure APIs",
        description: "Building robust and secure API endpoints for reliable communication"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Performance Optimization",
        description: "Server-side optimization for lightning-fast response times"
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Microservices",
        description: "Scalable microservices architecture for modern applications"
    }
];

export const SERVICES_WEB_DEVELOPMENT_CARDS1 = [
    {
        icon: <Check className="w-5 h-5" />,
        title: "3+ Years Experience",
        description: "Over a decade of expertise in web development across industries"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Expert Team",
        description: "Handpicked frontend and backend developers with proven track record"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Agile Methodology",
        description: "Flexible development approach for faster delivery"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Faster Time to Market",
        description: "Streamlined processes to launch your product quickly"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Transparent Approach",
        description: "Client-centric development with full transparency"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Proven Results",
        description: "Successfully delivered projects across multiple sectors"
    }
];

export const SERVICES_VOIP_TESTING_CARDS = [
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-07.svg" alt="Jitter" />,
        title: "Jitter",
        description: "Fix distorted audio caused by uneven packet delivery"
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-08.svg" alt="Latency" />,
        title: "Latency",
        description: "Minimize delays in transmission"
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-09.svg" alt="Packet Loss" />,
        title: "Packet Loss",
        description: "Eliminate audio gaps and voice cutouts"
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-10.svg" alt="MOS Score" />,
        title: "MOS Score",
        description: "Quantify user-perceived call clarity"
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-11.svg" alt="One-way Audio / Echo" />,
        title: "One-way Audio / Echo",
        description: "Detect routing or codec mismatches"
    },
    {
        icon: <ServiceIcon src="/images/services/VoIP-Services/icon-12.svg" alt="VoIP Bandwidth Testing" />,
        title: "VoIP Bandwidth Testing",
        description: "Validate capacity under load"
    }
];

export const SERVICES_FRONT_END_DEVELOPMENT_CARDS = [
    {
        icon: <Check className="w-5 h-5" />,
        title: "Proficiency in Technologies",
        description: "Expertise in bleeding-edge technologies and modern frameworks"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Transparent Approach",
        description: "Professional and transparent communication throughout the project"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Innovative Solutions",
        description: "Creative front-end solutions that drive results"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Domain Expertise",
        description: "Established expertise across multiple industries"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "Outstanding Value",
        description: "Exceptional value for money with competitive rates"
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "World-Class Services",
        description: "Premium development services with proven results"
    }
];


// Why you choose

export const WHY_CHOOSE_KAZOO = [
    {
        title: "Expert Kazoo Delivery",
        description: "Skilled in Kazoo’s Erlang-based architecture, APIs, and distributed stack, ensuring smooth delivery and reduced go-to-market time.",
        points: [
            "Deep Kazoo platform expertise",
            "Optimized deployment workflows",
            "Fast feature implementation"
        ]
    },
    {
        title: "End-to-End Kazoo Services",
        description: "From installation and cluster setup to module development, API integration, and UI customization — all under one roof.",
        points: [
            "Cluster setup & optimization",
            "API & module development",
            "Custom features & integrations"
        ]
    },
    {
        title: "Client-Focused Approach",
        description: "Dedicated telecom-focused team providing transparent communication, agile execution, and reliable support throughout.",
        points: [
            "Dedicated project manager",
            "Agile & transparent process",
            "Long-term support & scaling"
        ]
    }
];

export const WHY_CHOOSE_ASTERISK = [
    {
        title: "Hassel-Free Client Connect",
        description: "We assure swift and stress-free connection to discuss, brainstorm, take an important decision, or have any sort of productive conversation to keep execution flawless.",
        points: [
            "Accessible communication channels",
            "Transparent approach",
            "Everything is documented"
        ]
    },
    {
        title: "Less Time-To-Market",
        description: "Decades of experience and proven track record empower us to reduce the development cycle, which can let you hit the market faster and gain a competitive advantage.",
        points: [
            "Dedication to excellence",
            "High performance",
            "User expectation alignment"
        ]
    },
    {
        title: "Round-The-Clock Support",
        description: "Connect to our technical support team, Asterisk consulting team, or any other professional to drive Asterisk solution development projects and match client expectations.",
        points: [
            "Timely response",
            "Seamless communication",
            "On-demand support availability"
        ]
    }
];

export const WHY_CHOOSE_KAMAILIO = [
    {
        title: "Timely Delivery",
        description: "We follow the best practices and standardization to ensure on-time delivery of your custom VoIP development projects, which ensures reduced time to market.",
        points: [
            "Excellent management",
            "Skilled team",
            "Best performance"
        ]
    },
    {
        title: "End-To-End Solutions",
        description: "We provide a full cycle service to ensure that all types of demands and needs related to VoIP solutions are fulfilled at our VoIP solution development company.",
        points: [
            "Software development",
            "Module development",
            "Customization & integration"
        ]
    },
    {
        title: "100% Client Satisfaction",
        description: "Skilled developers and empathetic business team ensure swift transitions throughout the project lifecycle to ensure you receive hassle-free experience and deliverables.",
        points: [
            "Client first approach",
            "Dedicated account manager",
            "Open discussions"
        ]
    }
];

export const WHY_CHOOSE_VOIP = [
    {
        title: "Timely Delivery",
        description: "We follow the best practices and standardization to ensure on-time delivery of your custom VoIP development projects, which ensures reduced time to market.",
        points: [
            "Excellent management",
            "Skilled team",
            "Best performance"
        ]
    },
    {
        title: "End-To-End Solutions",
        description: "We provide a full cycle service to ensure that all types of demands and needs related to VoIP solutions are fulfilled at our VoIP solution development company.",
        points: [
            "Software development",
            "Module development",
            "Customization & integration"
        ]
    },
    {
        title: "100% Client Satisfaction",
        description: "Skilled developers and empathetic business team ensure swift transitions throughout the project lifecycle to ensure you receive hassle-free experience and deliverables.",
        points: [
            "Client first approach",
            "Dedicated account manager",
            "Open discussions"
        ]
    }
];

export const WHY_CHOOSE_WEBRTC = [
    {
        title: "Expert Professionals",
        description: "A team of highly experienced and proficient WebRTC developers provide all sorts of services; ranging from WebRTC app development to WebRTC mobile app development.",
        points: ["Streamlined onboarding", "Dedicated team", "Expertise in SIP.js and WebRTC"]
    },
    {
        title: "Peerless Quality",
        description: "We are regarded as the best WebRTC development company because of our commitment to perfection and meticulous attention to detail for development projects.",
        points: ["Surpass quality standards", "Excellent scalability", "Unparalleled support"]
    },
    {
        title: "Exemplary Performance",
        description: "Our WebRTC development services match client expectations with the use of right development methods, skilled developers, and utmost professionalism.",
        points: ["Excellence and dedication", "Proven track record", "Commitment and dedication"]
    },
    {
        title: "Innovation & Customization",
        description: "We craft tailored WebRTC solutions using the latest tools and frameworks, ensuring each project aligns perfectly with your unique business requirements.",
        points: ["Bespoke development", "Cutting-edge frameworks", "Future-ready solutions"]
    },
    {
        title: "Security & Compliance",
        description: "All WebRTC projects are built with robust security measures and global compliance standards to ensure data privacy and integrity.",
        points: ["End-to-end encryption", "Regulatory compliance", "Secure coding practices"]
    },
    {
        title: "Cost Efficiency & Transparency",
        description: "Our flexible engagement models and honest communication ensure you receive top-tier WebRTC solutions with clear, predictable costs.",
        points: ["Flexible pricing plans", "Transparent processes", "Maximum ROI"]
    }
];

export const WHY_CHOOSE_FUSIONPBX = [
    {
        title: "Competitive Rate",
        description:
            "FusionPBX development services to FusionPBX CRM integration, custom module development and all other services are available at a highly affordable rate.",
        points: [
            "Best in the industry services",
            "Proficient developers",
            "Affordable hourly rates"
        ]
    },
    {
        title: "Timely Delivery",
        description:
            "We assist you to launch the competitive features before your competitors and meet your client’s demands instantly to stay ahead of the curve.",
        points: [
            "Idea contribution",
            "Best development practices",
            "Dedicated experts"
        ]
    },
    {
        title: "Smart Coding",
        description:
            "Our FusionPBX development services are renowned for our proficiency in keeping code clean and secure to build a consolidated PBX system.",
        points: [
            "Agile approach",
            "Global coding standards",
            "Domain expertise"
        ]
    }
];

export const WHY_CHOOSE_LINPHONE = [
    {
        title: "Sky-High Rewards",
        description:
            "Our Linphone app development services will ensure delivering brilliant value and high returns to help you leverage the full potential in the marketplace.",
        points: [
            "Remarkable deliverables",
            "Unlock opportunities",
            "Boost ROI"
        ]
    },
    {
        title: "Consolidated Strategy",
        description:
            "We use our years of experience as a Linphone app development company to provide valuable insights and recommendations to define the right strategies.",
        points: [
            "Competitive advantage",
            "Efficient marketing campaigns",
            "Outstanding brand building"
        ]
    },
    {
        title: "Client-Centric Approach",
        description:
            "We ensure a delightful experience for our clients with a collaborative approach, domain expertise, and client focused services at competitive rates.",
        points: [
            "Personalized offerings",
            "Seamless communication",
            "Affordable rates"
        ]
    }
];

export const WHY_CHOOSE_SIGNALWIRE = [
    {
        title: "On-point Project Management",
        description:
            "Our dexterous team will help you use the right SignalWire APIs that can maximize the QoS and QoC for your telephony products and drive your business towards success.",
        points: [
            "Performance optimization",
            "Dedicated experts",
            "Transparent approach"
        ]
    },
    {
        title: "Updates and Reporting Procedure",
        description:
            "Our rigorous approach to keeping our clients well informed to make the right decisions and drive their business as per their preference is driven with regular updates and reports.",
        points: [
            "Actionable insight",
            "Technical support",
            "Proactive communication"
        ]
    },
    {
        title: "Super Flexi Collaboration Models",
        description:
            "Our engaging, customizable, and flexible engagement models ensure unmatched performance and adaptability to match your unique needs and preferences.",
        points: [
            "Hire experienced developers",
            "Fixed cost services",
            "On-demand support"
        ]
    }
];

export const WHY_CHOOSE_DEVOPS = [
    {
        title: "Services from Experts",
        description:
            "Seasoned DevOps specialists will incorporate the right blend of tools and teams that work harmoniously to deliver reliable DevOps services for your company.",
        points: [
            "Augmented collaboration",
            "Seamless operations",
            "Reduced time to market"
        ]
    },
    {
        title: "Transparent Approach",
        description:
            "Hail persistent development and operational synchronization with our DevOps solutions and services delivered in a highly transparent manner.",
        points: [
            "Follow best practices",
            "Keeping you informed",
            "Better decision making"
        ]
    },
    {
        title: "Round-the-clock Support",
        description:
            "Stay assured that your development and operational resources are performing optimally with our on-demand and 24/7 customer support.",
        points: [
            "Efficient operations and development",
            "Real time monitoring",
            "Maximize productivity"
        ]
    }
];


export const WHY_CHOOSE_WEB_DEVLOPMENT = [
    {
        title: "Competitive Pricing Model",
        description:
            "Depending on your project type, its complexities, and other factors, we propose the best engagement and pricing models that can maximise your ROI.",
        points: [
            "High quality",
            "Smart approach",
            "Pocket friendly services"
        ]
    },
    {
        title: "Code Standards",
        description:
            "We follow global coding standards incorporated with smart and rigorous web application development processes for seamless and scalable web solution deliverables.",
        points: [
            "Clean coding",
            "Maximise resource utilisation",
            "Scalable and robust solutions"
        ]
    },
    {
        title: "Dedicated Team",
        description:
            "A dedicated team of designers, developers, QA experts, and an account success manager will coordinate with you to successfully map aims and achievable goals.",
        points: [
            "Transparency",
            "On-demand calls",
            "Self-motivated teams"
        ]
    }
];

export const WHY_CHOOSE_FRONTEND = [
    {
        title: "Flexible Engagement Models",
        description:
            "We offer multiple models of engagement to match your business structure—whether you’re a startup, enterprise, or agency—to optimise cost and delivery.",
        points: [
            "Hire dedicated developers",
            "Fixed-price delivery",
            "Time-and-material options"
        ]
    },
    {
        title: "Cutting-edge Technologies",
        description:
            "Our front-end development team leverages the latest frameworks, libraries and tools to build performant and responsive user interfaces that scale effortlessly.",
        points: [
            "React, Vue, Angular expertise",
            "Responsive & mobile-first design",
            "Performance-optimised code"
        ]
    },
    {
        title: "Domain & UX Expertise",
        description:
            "From user research to interaction design, we craft front-ends that are not only technically sound but also deliver intuitive, engaging experiences aligned to your business goals.",
        points: [
            "User-centred design",
            "Business-driven UI/UX",
            "Conversion-focused development"
        ]
    }
];

export const WHY_CHOOSE_BACKEND = [
    {
        title: "Develop High-level Architecture",
        description:
            "Our back-end development services include creating scalable, maintainable, enterprise-grade architectures to power your applications.",
        points: [
            "Microservices & API-first design",
            "Cloud-native infrastructure",
            "High performance & reliability"
        ]
    },
    {
        title: "Precise Outlining of Processes",
        description:
            "We plan, model and streamline your back-end systems with best practices to ensure seamless integration, consistent performance and quicker time to market.",
        points: [
            "Clear system maps",
            "Automated workflows",
            "Reduced operational overhead"
        ]
    },
    {
        title: "Focus on Data-driven Outcomes",
        description:
            "Our focus remains on optimizing data flow, security, analytics and insights so your back-end infrastructure supports business-critical decisions.",
        points: [
            "Enhanced analytics",
            "Secure data handling",
            "Scalable data architecture"
        ]
    }
];

export const WHY_CHOOSE_ANDROID = [
    {
        title: "Transparency and Integrity",
        description: "We focus on building collaborative approaches with our best development processes and ethical business practices that can help us build a long term relationship with clients.",
        points: ["Accountability", "Positive attitude", "Trustworthiness"]
    },
    {
        title: "Dedicated Team",
        description: "We have a brilliant team for cross platform mobile app development with react native or Flutter to meet your business expectations that gives a captivating market entry and success.",
        points: ["Multi Talented developers", "Flexible engagement models", "Exemplary Performance"]
    },
    {
        title: "Affordable Pricing",
        description: "Maximize value over money with cross platform mobile app development services that are personalized to match your demands and expectations of features and budget.",
        points: ["Augmented resource utilization", "Transparent pricing structure", "High quality solutions"]
    }
];

export const WHY_CHOOSE_REACT_NATIVE = [
    {
        title: "Strategic Approach",
        description: "We incorporate unmatched tech expertise, seamless project management, and reliable collaboration tools that will provide you with a strategic advantage.",
        points: ["Enhanced development cycle", "Rigorous quality assurance", "Rapid go-to-market"]
    },
    {
        title: "Seamless Communication",
        description: "We invest in using effective communication tools, standard processes, and a transparent approach to meet client expectations and keep them updated.",
        points: ["Regular update meetings", "Progress reports", "Actionable insights"]
    },
    {
        title: "Agile Development",
        description: "Reliable requirements analysis to rigorous development and quality assurance processes incorporated into Agile methodology for development.",
        points: ["Competitive advantage", "Benchmarking", "Tangible advantages"]
    }
];

export const WHY_CHOOSE_VICI = [
    {
        title: "Extremely Consistent Delivery",
        description: "Our expertise and commitment make us capable of delivering on-time services and brilliant performance for all types of requirements to augment VICIdial solution.",
        points: []
    },
    {
        title: "On-Demand Upscaling",
        description: "Unlock untapped opportunities by upscaling functional sturdiness of your VICIdial solution. We are here to make upscale processes swift and seamless for your business.",
        points: []
    },
    {
        title: "Quick Onboarding",
        description: "Our time-tested expertise in customizing VICIdial software helps us create a highly streamlined process for client onboarding that is fast and efficient.",
        points: []
    }
];

export const WHY_CHOOSE_SIPJS = [
    {
        title: "Deep SIP/WebRTC Expertise",
        description: "Hands‑on with SIP.js, RTP/SDP, SRTP/DTLS, ICE, TURN, and browser media APIs across vendors.",
        points: []
    },
    {
        title: "Security & Compliance",
        description: "TLS/WSS hardening, media encryption, consent UI, recording policies, and audit trails.",
        points: []
    },
    {
        title: "Performance at Scale",
        description: "Optimized reconnection, jitter/congestion handling, and metrics for large agent fleets.",
        points: []
    },
    {
        title: "Reliable Delivery",
        description: "Milestone‑driven execution with transparent progress, demos, and clear acceptance tests.",
        points: []
    },
    {
        title: "Flexible Engagement",
        description: "Fixed scope, dedicated teams, or augmentation—aligned to your roadmap and timelines.",
        points: []
    },
    {
        title: "End‑to‑End Ownership",
        description: "From UX to signaling to ops, we cover the whole stack for durable outcomes.",
        points: []
    }
];

export const WHY_CHOOSE_SIPJS_THREE = [
    {
        title: "Fearless Experts",
        description: "Our SIP.js developers are armed with the right technology gears and a bold mindset that takes calculated risks to drive competitive advantages for our clients.",
        points: []
    },
    {
        title: "Satisfied Clientele",
        description: "Proven expertise in blending SIP with modern web technologies to build a range of telephony products that delight our clients with clear vision mapping and timely delivery.",
        points: []
    },
    {
        title: "Sky‑High Rewards",
        description: "Clients benefit from our SIP.js specialization with reduced time‑to‑market, better brand positioning, and excellent returns on investment.",
        points: []
    }
];

export const WHY_CHOOSE_FLUTTER = [
    {
        title: "Customer Satisfaction",
        description: "Reliable cross platform development process and our expertise in Flutter will bring on the highest client content for your apps and engage wider audiences.",
        points: ["Capture new markets", "Data driven decisions", "Better marketing outcomes"]
    },
    {
        title: "Technology and Technique",
        description: "We amalgamate the proficiency of our Flutter developers with the right tools and APIs to assure smooth development and fast performance for your apps.",
        points: ["Armed force of developers", "Brilliant collaboration", "Excellent value over money"]
    },
    {
        title: "Seamless Communication",
        description: "Implementation of the right communication tools and standards ensures you get timely updates of ongoing project progress and resolve all your questions on time.",
        points: ["Traditional and digital communication tools", "Dedicated account manager", "Complete transparency"]
    }
];

export const WHY_CHOOSE_MOBILE = [
    {
        title: "Affordable Collaboration",
        description: "We foster client relations with a seamless engagement process that incorporates favorable suggestions, pocket friendly services, and fluid communication.",
        points: ["High quality products", "Cost effective services", "Collaborative approach"]
    },
    {
        title: "Goal Oriented Workflow",
        description: "Our mobile app development services will always align with your plan and flow to ensure your applications can flawlessly meet your business goals.",
        points: ["Standardization", "Flexible development", "Ongoing review"]
    },
    {
        title: "Real-time Communication",
        description: "Drive your native and cross platform mobile app development projects with seamless communication with a dedicated team via your preferred channel.",
        points: ["Multiple communication channels", "Complete transparency", "Regular meetings and updates"]
    }
];

// constant data from pages 

export const SERVICES_WEB_DEVELOPMENT_SERVICES = [
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Frontend Development",
        description: "We craft sleek, compelling, and operational websites and applications that deliver seamless user experience with React, Angular, and other cutting-edge technologies.",
        features: ["React Development", "Angular Solutions", "Responsive Design", "Single Page Applications"]
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: "Backend Development",
        description: "Building flawless, high performing, and scalable applications with optimized server side functionality using Python, NodeJS, and other bleeding-edge technologies.",
        features: ["Python Backend", "NodeJS Solutions", "API Development", "Database Design"]
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Full Stack Development",
        description: "End-to-end web solutions combining intuitive frontends with robust backend systems for complete digital experiences.",
        features: ["Complete Solutions", "Agile Methodology", "Scalable Architecture", "Seamless Integration"]
    },
    {
        icon: <Cloud className="w-6 h-6" />,
        title: "Web Application Development",
        description: "Custom web applications tailored to your business needs with focus on performance, security, and user experience.",
        features: ["Custom Solutions", "High Performance", "Security Focused", "User-Centric Design"]
    }
];

export const SERVICES_FRONT_END_SERVICES = [
    {
        icon: <Monitor className="w-6 h-6" />,
        title: "Custom Web Interfaces",
        description: "Sleek, compelling, and operational websites that deliver seamless user experience with advanced technologies and frameworks.",
        features: ["React Development", "Angular Solutions", "Responsive Design", "Single Page Applications"]
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Mobile App Interfaces",
        description: "Eye-catching and intuitive mobile app front-ends that engage users and deliver exceptional user experience.",
        features: ["Native UI Design", "Cross-Platform", "Interactive Elements", "Touch Optimized"]
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Single Page Applications",
        description: "Fast, responsive single-page applications built with React, Angular, and modern JavaScript frameworks.",
        features: ["Fast Loading", "Smooth Navigation", "Dynamic Content", "Optimized Performance"]
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "UI Component Libraries",
        description: "Reusable, modular component systems that ensure consistency and accelerate development timelines.",
        features: ["Design Systems", "Reusable Components", "Style Guides", "Documentation"]
    }
];

export const SERVICES_FRONT_END_TECHNOLOGIS = [
    { name: "React", logo: "⚛️", color: "from-cyan-500 to-blue-600" },
    { name: "Angular", logo: "🅰️", color: "from-red-500 to-red-700" },
    { name: "Vue.js", logo: "🖖", color: "from-green-500 to-emerald-600" },
    { name: "Next.js", logo: "▲", color: "from-gray-700 to-black" },
    { name: "TypeScript", logo: "TS", color: "from-blue-600 to-blue-800" },
    { name: "JavaScript", logo: "JS", color: "from-yellow-400 to-yellow-600" },
    { name: "HTML5", logo: "5", color: "from-orange-500 to-red-600" },
    { name: "CSS3", logo: "3", color: "from-blue-500 to-indigo-600" },
    { name: "Tailwind CSS", logo: "💨", color: "from-sky-400 to-cyan-600" },
    { name: "SASS/SCSS", logo: "💅", color: "from-pink-500 to-pink-700" },
    { name: "Redux", logo: "🔄", color: "from-purple-600 to-purple-800" },
    { name: "GraphQL", logo: "◈", color: "from-pink-600 to-purple-600" }
];
export const SERVICES_BACK_END_SERVICES = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Web Application Backend",
        description: "Robust server-side solutions that power web applications with high performance, security, and seamless database interactions.",
        features: ["RESTful APIs", "GraphQL Integration", "Real-time Processing", "Microservices Architecture"]
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "ERP/CRM Solutions",
        description: "Enterprise-grade backend systems for complex business operations with seamless data management and workflow automation.",
        features: ["Business Logic", "Data Integration", "Workflow Automation", "Scalable Architecture"]
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Custom Backend Solutions",
        description: "Tailored server-side applications designed to meet specific business requirements and operational workflows.",
        features: ["Custom APIs", "Third-party Integration", "Legacy System Modernization", "Cloud Migration"]
    },
    {
        icon: <Monitor className="w-6 h-6" />,
        title: "Mobile App Backend",
        description: "High-performance backend infrastructure for mobile applications ensuring smooth functionality and data synchronization.",
        features: ["Push Notifications", "User Authentication", "Data Synchronization", "Offline Support"]
    }
];
export const SERVICES_BACK_END_TECHNOLOGIS = [
    { name: "Python", logo: "🐍", color: "from-blue-500 to-blue-700" },
    { name: "Node.js", logo: "", color: "from-green-500 to-green-700" },
    { name: "Laravel", logo: "🔺", color: "from-red-500 to-red-700" },
    { name: "PHP", logo: "🐘", color: "from-purple-500 to-purple-700" },
    { name: ".NET", logo: ".N", color: "from-blue-600 to-indigo-700" },
    { name: "Java", logo: "☕", color: "from-orange-500 to-red-600" },
    { name: "Go", logo: "🔵", color: "from-cyan-500 to-blue-600" },
    { name: "Ruby", logo: "💎", color: "from-red-600 to-pink-700" },
    { name: "MongoDB", logo: "🍃", color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", logo: "🐘", color: "from-blue-600 to-blue-800" },
    { name: "MySQL", logo: "🐬", color: "from-blue-500 to-cyan-600" },
    { name: "Redis", logo: "⚡", color: "from-red-500 to-orange-600" }
];

export const SERVICES_BACK_END_PROCCESSTEP = [
    {
        number: "01",
        title: "Build a Collaborative Approach",
        description: "After examining your expectations and needs with rounds of detailed discussions, our team will create a meticulous plan along with a proposed engagement model that can maximize your returns. The quick and hassle-free onboarding will get your project started effortlessly."
    },
    {
        number: "02",
        title: "Design, Development, and Integration",
        description: "Our backend developers will perform the core job of designing high level architecture, database schema, cloud infrastructure, and more; followed by logic implementation and required integrations to build a comprehensive, robust, secure, and scalable backend solution."
    },
    {
        number: "03",
        title: "Connect to Frontend and Technical Support",
        description: "On completion of back end development, we connect it with front-end solutions to build a comprehensive platform that caters to clients. Furthermore, we provide the required technical support and maintenance services on an ongoing basis."
    }
];
export const SERVICES_VOIP_TESTING_PROTOCOLTEST = [
    {
        title: "IP Signaling (INVITE, REGISTER, BYE, etc.)",
        description: "It will test the overall call flows and SIP behaviour."
    },
    {
        title: "RTP/Media Handling",
        description: "Will analyze and validate the codec negotiation, media path, QoS"
    },
    {
        title: "WebRTC Testing",
        description: "It based on browser-based calls using SIP.js, WebRTC libraries."
    },
    {
        title: "NAT Traversal & Firewall Handling",
        description: "It will detect all call drops due to network constraints."
    },
    {
        title: "Interoperability Tests",
        description: "Asterisk ↔ FreeSWITCH ↔ OpenSIPS ↔ SIP.js"
    },
    {
        title: "Failover Scenarios",
        description: "Simulate service crashes, check recovery"
    }
];

export const SERVICES_VOIP_TESTING_SERVICES_PROCESSSTEPS = [
    {
        number: "01",
        title: "Requirements Analysis",
        description: "We understand your VoIP infrastructure, identify critical use cases, and define testing goals."
    },
    {
        number: "02",
        title: "Test Planning & Design",
        description: "We create custom test cases covering call flows, load scenarios, security, and compliance requirements."
    },
    {
        number: "03",
        title: "Environment Setup",
        description: "We configure test labs with real-world network conditions, devices, and VoIP platforms."
    },
    {
        number: "04",
        title: "Test Execution",
        description: "We run automated and manual tests using tools like SIPp, Wireshark, and frameworks."
    },
    {
        number: "05",
        title: "Bug Reporting & Analysis",
        description: "We document issues with severity levels, reproduction steps, and root cause analysis.             "
    },
    {
        number: "06",
        title: "Optimization & Retest",
        description: "We verify fixes, optimize performance, and ensure all quality benchmarks are met."
    }
];

export const SERVICES_VOIP_TESTING_SERVICES_TRUSTPOINTS = [
    "A highly skilled team of VoIP testers, QA professionals, and telecom engineers with hands-on platform experience.",
    "Our solutions have been successfully tested and deployed across global networks with varied latency and compliance needs.",
    "We've worked with telecom operators, enterprises, healthcare, BPOs, and UCaaS providers delivering satisfaction at scale.",
    "From startups to Tier-1 providers, we've tested complex VoIP and WebRTC systems under real-world stress and security scenarios."
];

export const SERVICES_VOIP_TESTING_SERVICES_INDUSTRIES = [
    { icon: <Shield className="w-8 h-8" />, name: "Healthcare" },
    { icon: <Building2 className="w-8 h-8" />, name: "Insurance" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "Education" },
    { icon: <ShoppingCart className="w-8 h-8" />, name: "E-commerce" },
    { icon: <Radio className="w-8 h-8" />, name: "Telecommunications" },
    { icon: <DollarSign className="w-8 h-8" />, name: "Finance" },
    { icon: <Home className="w-8 h-8" />, name: "Real Estate" },
    { icon: <Briefcase className="w-8 h-8" />, name: "BPO" }
];

export const SERVICES_ASTERISK_SERVICES = [
    {
        title: "VoIP Softswitch",
        description: "Meet your own business collaboration needs or generate revenues by offering retail VoIP services to SOHO."
    },
    {
        title: "Calling Card Solution",
        description: "Launch and scale up your calling card business with reliable and feature rich VoIP calling card software."
    },
    {
        title: "VoIP PBX Solution",
        description: "Build a single tenant or multi tenant PBX solution to enhance your business communication or generate revenues."
    },
    {
        title: "IVR Solution",
        description: "Auto attend and greet your clients and let them self serve themselves with an interactive voice response system."
    },
    {
        title: "Call Center",
        description: "Run inbound, outbound, and blended campaigns to cut costs and increase revenue with the best development software."
    }
]

export const SERVICES_IOS_WHATOURCLIENTSAY = [
    {
        quote: "We were looking for a reliable IP PBX solution as our conventional system had a lot of limitations. I'm happy with the solution and service provided by Driansh. They gave us scalable IP PBX software and also integrated our CRM system and automated billing solution. This system increased productivity and ROI significantly.",
        author: "Naman Tahir",
        role: "Vice President, 8com inc"
    },
    {
        quote: "Amazing group of guys to work with. After the quality of work I saw in the first project completed, we have decided to move all our development over to Driansh. All work was completed on time and as expected. Would not think twice to recommend these guys.",
        author: "Jaco Jacobs",
        role: "Platformity"
    },
    {
        quote: "Hi, I just wanted to send you guys a quick message on how great its been working with you guys on our voip development needs, in the last 3-4 years, you have been very responsive and always care about delivering the work as much as we do. Im very impressed with the high level of talent that you guys have and am grateful that I could find such dependable voip professionals that always do what they say they will. take care -Albert",
        author: "Albert Montgomery",
        role: "CleverMoto"
    }
];

export const SERVICES_VICIDIAL_AI = [
  {
    icon: Phone,
    text: "Automate Repetitive Tasks Like Call Routing And Basic Queries"
  },
  {
    icon: Rocket,
    text: "Improve Response Times With 24/7 Intelligent Support"
  },
  {
    icon: UsersIcon,
    text: "Increase Agent Efficiency With Smart Assistance And Suggestions"
  },
  {
    icon: Bot,
    text: "Reduce Operational Costs While Boosting Customer Satisfaction"
  },
];

export const SERVICES_WEBRTC_TESTIMONIALS = [
    {
      text: "We were looking for a reliable IP PBX solution as our conventional system had a lot of limitations. I'm happy with the solution and service provided by Driansh. They gave us scalable IP PBX software and also integrated our CRM system and automated billing solution. This system increased productivity and ROI significantly.",
      author: "Vice President",
      company: "8com inc"
    },
    {
      text: "Amazing group of guys to work with. After the quality of work I saw in the first project completed, we have decided to move all our development over to Driansh. All work was completed on time and as expected. Would not think twice to recommend these guys.",
      author: "Platformity",
      company: ""
    },
    {
      text: "Hi, I just wanted to send you guys a quick message on how great its been working with you guys on our voip development needs, in the last 3-4 years, you have been very responsive and always care about delivering the work as much as we do. Im very impressed with the high level of talent that you guys have and am grateful that I could find such dependable voip professionals that always do what they say they will.",
      author: "CleverMoto",
      company: ""
    }
  ];

  export const SERVICES_WEBRTC_BENEFITS = [
      "Connection across devices, OS, and platforms",
      "Enjoy crystal clear voice and HD video quality",
      "Use at no licensing cost as it is open source and available for free",
      "Supports video calls, messaging, content sharing, and data exchange",
      "Own the code of the software that you invest to build",
      "Benefit from higher scalability, security, and stability",
      "No vendor dependency",
      "Use with or without login system"
    ];
  
  
  