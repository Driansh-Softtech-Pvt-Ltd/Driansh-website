import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const navItems = [
  {
    name: "SERVICES",
    path: "/services",
    dropdown: [
      {
        title: "VOIP DEVELOPMENT",
        path: "/services/voip-development-service",
        items: [
          { label: "FreeSWITCH Development", path: "/services/freeswitch-development-service" },
          { label: "WebRTC Development", path: "/services/webrtc-development-service" },
          { label: "Asterisk Development", path: "/services/asterisk-development-service" },
          { label: "OpenSIPs Development", path: "/services/opensips-development-service" },
          { label: "Kamailio Development", path: "/services/kamailio-development-service" },
        ],
      },
      // {
      //   title: "OPEN SOURCE",
      //   path: "#",
      //   items: [
      //     { label: "Sip.js Development", path: "/services/sip-js-development-service" },
      //     { label: "VICIdial Development", path: "/services/vicidial-development-service" },
      //     { label: "FusionPBX Development", path: "/services/fusionpbx-development-service" },
      //     { label: "Linphone Development", path: "/services/linphone-app-development" },
      //   ],
      // },
      // {
      //   title: "PLATFORM",
      //   path: "#",        
      //   items: [{ label: "SignalWire Development", path: "/services/signalwire" }],
      // },
      // {
      //   title: "DEVOPS SERVICES",
      //   path: "/services/devops-services",
      //   items: [],
      // },
      // {
      //   title: "PRODUCT ENGINEERING",
      //   path: "/services/product-engineering-service",
      //   items: [],
      // },
      // {
      //   title: "VOIP TESTING",
      //   path: "/services/voip-testing",
      //   items: [],
      // },
      // {
      //   title: "MOBILE APP DEVELOPMENT",
      //   path: "/services/mobile-app-development",
      //   items: [
      //     { label: "Android Development", path: "/services/android-app-development" },
      //     { label: "iOS Development", path: "/services/ios-app-development" },
      //     { label: "React Native Development", path: "/services/react-native-app-development" },
      //     { label: "Flutter App Development", path: "/services/flutter-app-development" },
      //   ],
      // },
      // {
      //   title: "WEB DEVELOPMENT",
      //   path: "/services/web-development",
      //   items: [
      //     { label: "Front End Development", path: "/services/front-end-development" },
      //     { label: "Back End Development", path: "/services/back-end-development" },
      //   ],
      // },
    ],
  },
  {
    name: "SOLUTIONS",
    path: "/solutions",
    dropdown: [
      {
        title: "TAILORCRAFT SOLUTIONS",
        items: [
          { label: "Multi Tenant IP PBX Solution", path: "/multi-tenant-ip-pbx-solution" },
          { label: "Call Center Solution", path: "/call-center-solution" },
          { label: "Voice Broadcasting Solution", path: "/voice-broadcasting-solution" },
          // { label: "Audio & Video Conferencing Solution", path: "/audio-video-conferencing-solution" },
          { label: "Unified Communication Solution", path: "/unified-communications-solution" },
          // { label: "Class 5 Softswitch Solution", path: "/class-5-softswitch-solution" },
          // { label: "Class 4 Softswitch Solution", path: "/class-4-softswitch-solution" },
          // { label: "VoIP Billing Solution", path: "/voip-billing-solution" },
          // { label: "Calling Card Solution", path: "/calling-card-solution" },
          // { label: "Enterprise VoIP Solution", path: "/enterprise-voip-solutions" },
          // { label: "VoIP Business Solutions", path: "/voip-business-solutions" },
          // { label: "Faxing Solution", path: "/faxing-solution" },
          // { label: "Live Call Monitoring Solution", path: "/live-call-monitoring-solution" },
        ],
      },
    ],
  },
  {
    name: "OUR PRODUCTS",
    dropdown: [
      {
        title: "OUR PRODUCTS",
        items: [
          {
            label: "Driansh Contact Center Solution",
            path: "/our-products/contactcenter",
          },
          {
            label: "Driansh EngageOne",
            path: "/our-products/engageone",
          },
        ],
      },
      {
        title: "ENGAGEONE",
        path: "/our-products/engageone",
        items: [
          { label: "AI Assistant", path: "/our-products/engageone/ai-assistant" },
          { label: "WhatsApp & Phone Calling", path: "/our-products/engageone/calling" },
          { label: "Campaigns & Templates", path: "/our-products/engageone/campaigns" },
          { label: "Integrations", path: "/our-products/engageone/integrations" },
          { label: "Industries", path: "/our-products/engageone/industries" },
          { label: "Security", path: "/our-products/engageone/security" },
          { label: "Pricing", path: "/our-products/engageone/pricing" },
          { label: "Request a Demo", path: "/our-products/engageone/request-demo" },
        ],
      },
    ],
  },
  { name: "ABOUT", path: "/about-us" },
];

export const HOME_PAGE_SERVICES = [
  {
    title: "VoIP Development",
    desc: "With extensive expertise in open-source telephony development, we offer innovative VoIP software development tailored to suit your telecom business needs. We modernize your network with customized solutions that are highly advanced and cost-effective.",
    image: "/images/voip-development.svg",
    href: "/services/voip-development-service",
  },
  {
    title: "DevOps",
    desc: "With the power of cloud computing and advanced engineering operations, including automation, networking, virtualization, monitoring server health, and data security, we help enhance your business operations. Our agile & customized solutions are valuable assets for greater efficiency and smooth scalability of your business.",
    image: "/images/devops.svg",
    href: "/services/devops-services",
  },
  {
    title: "Web Design and Development",
    desc: "We curate interactive, scalable, and robust real-time communications solutions using advanced tech stacks and frameworks. This takes your business to the next level with a responsive and user-friendly website designed to set your brand ahead of the competition.",
    image: "/images/web-development.svg",
    href: "/services/web-development",
  },
  {
    title: "Mobile Application Development",
    desc: "We design customized, highly scalable, robust mobile applications to match your business requirements. Expand your digital reach and simplify communication with end-to-end mobile app development services.",
    image: "/images/mobile-development.svg",
    href: "/services/mobile-app-development",
  },
  {
    title: "Driansh EngageOne",
    desc: "One shared inbox for WhatsApp, website chat, email, Messenger, Instagram, Telegram and SMS. EngageOne adds an AI assistant, WhatsApp and phone calling, campaigns, a help center and reports, so your team answers every customer from one place.",
    image: "",
    href: "/our-products/engageone",
    isProduct: true,
  },
];

export const HOME_PAGE_WHY_CHOOSE_US = [
  {
    title: 'Customized Solutions',
    desc: 'From the initial stages of the concept ideation and discovery phase to development, testing, and delivery, we curate customized real-time communications solutions for all your business requirements.',
    icon: '/images/home-icon-01.png',
  },
  {
    title: 'Complete Privacy and Security',
    desc: 'We deliver regulation-compliant real-time communications solutions while prioritizing your security and privacy.',
    icon: '/images/home-icon-02.png',
  },
  {
    title: '100% Quality Assured',
    desc: 'We deliver agile, bug-free, highly scalable, and secure real-time communications solutions.',
    icon: '/images/home-icon-03.png',
  },
  {
    title: 'Customer Satisfaction',
    desc: 'We follow an agile software development approach to build high-quality custom software solutions for your greatest satisfaction.',
    icon: '/images/home-icon-04.png',
  },
  {
    title: 'Flexible Engagement',
    desc: 'We provide sprint-wise engagement models to meet all your business requirements.',
    icon: '/images/home-icon-05.png',
  },
  {
    title: '24×7 Support Services',
    desc: 'We provide 24/7 support service to assist you anytime.',
    icon: '/images/home-icon-06.png',
  },
];

export const OUR_PRODUCTS = [
  {
    id: "contactCenter",
    logo: "/images/logo.png",
    image: "/images/our-products-2.webp",
    title: "Driansh Contact Center Solution",
    description:
      "Driansh Contact Center platform empowers businesses to deliver seamless, personalized, and efficient customer interactions across voice, email, chat, and social media. With built-in automation, AI-powered insights, and CRM integration, it enables smarter communication, higher agent productivity, and superior customer satisfaction.",
    points: [
      "Unified communication across multiple digital channels",
      "Real-time analytics and performance dashboards",
      "Smart automation for faster response and resolution",
    ],
    // buttonText: "Visit Contact Center",
    reverse: false,
  },
  {
    id: "engageOne",
    logo: "/logo.png",
    // Rendered with <EngageOneInboxVisual /> (original illustration) instead of a screenshot.
    image: "",
    title: "Driansh EngageOne",
    description:
      "Driansh EngageOne brings every customer conversation into one shared inbox: WhatsApp, website chat, email, Messenger, Instagram, Telegram and SMS. An AI assistant answers common questions, and your team picks up the rest with full context.",
    points: [
      "One inbox for every messaging channel, plus WhatsApp and phone calling",
      "AI assistant, automations and campaigns to save your team time",
      "Help center, reports and customer ratings in the same product",
    ],
    reverse: true,
  },
];

export const FOOTER_LINKS = {
  services: [
    { name: "VoIP Development", href: "/services/voip-development-service" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "Asterisk Development", href: "/services/asterisk-development-service" },
  ],
  solution: [
    { name: "Multi Tenant IP PBX Solution", href: "/multi-tenant-ip-pbx-solution" },
    { name: "Call Center Solution", href: "/call-center-solution" },
    { name: "Voice Broadcasting Solution", href: "//voice-broadcasting-solution" },
    { name: "Unified Communications", href: "/unified-communications-solution" }
  ],

  products: [
    { name: "Driansh Contact Center Solution", href: "/our-products/contactcenter" },
    { name: "Driansh EngageOne", href: "/our-products/engageone" },
    { name: "EngageOne Pricing", href: "/our-products/engageone/pricing" },
    { name: "Request an EngageOne Demo", href: "/our-products/engageone/request-demo" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    // { name: "Our Team", href: "/team" },
    // { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact-us" },
  ],
  // resources: [
  //   // { name: "Blog", href: "/blog" },
  //   { name: "Case Studies", href: "/case-studies" },
  //   { name: "Documentation", href: "/docs" },
  //   { name: "Support", href: "/support" },
  // ],
};

export const FOOTER_SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];