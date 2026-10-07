import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  BookOpen,
  Building2,
  Car,
  Clock3,
  Code2,
  Factory,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Home,
  Landmark,
  Megaphone,
  MessageCircle,
  Phone,
  Pill,
  Plane,
  Radio,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Tag,
  Truck,
  Users2,
  Workflow,
  Zap,
} from "lucide-react";

/*
 * Content for the data-driven EngageOne industry pages
 * (/our-products/engageone/industries/[slug]). Restaurants, e-commerce and
 * contact centers have their own hand-built pages and are not listed here.
 */

const BASE = "/our-products/engageone";

export type IndustryChannel = "whatsapp" | "web" | "email" | "phone" | "instagram" | "facebook" | "sms";

type Feature = { title: string; description: string; icon: LucideIcon; href?: string };

/** EngageOne features an industry page can highlight. */
export const FEATURES = {
  ai: { title: "AI Assistant", description: "Answers common questions from your own content, day and night.", icon: Sparkles, href: `${BASE}/ai-assistant` },
  whatsapp: { title: "WhatsApp Business", description: "Chat, approved templates and media on your WhatsApp number.", icon: MessageCircle, href: `${BASE}/integrations/whatsapp` },
  calling: { title: "WhatsApp & phone calls", description: "Answer calls in the browser, logged in the conversation.", icon: Phone, href: `${BASE}/calling` },
  campaigns: { title: "Campaigns", description: "Reminders, offers and updates to the right contacts.", icon: Megaphone, href: `${BASE}/campaigns` },
  helpCenter: { title: "Help center", description: "Articles customers can search, on your own domain.", icon: BookOpen, href: `${BASE}/help-center` },
  automations: { title: "Automations", description: "Assign, label and reply to chats by rules you set.", icon: Workflow, href: `${BASE}/automations` },
  chatbots: { title: "Chatbots", description: "Collect details and answer simple requests with buttons.", icon: Bot, href: `${BASE}/chatbots` },
  teams: { title: "Teams", description: "Route each conversation to the team that owns it.", icon: Users2, href: `${BASE}/manage/teams` },
  labels: { title: "Labels", description: "Tag conversations by topic, priority or stage.", icon: Tag, href: `${BASE}/manage/labels` },
  businessHours: { title: "Business hours", description: "Set opening hours and an away message for each inbox.", icon: Clock3, href: `${BASE}/manage/business-hours` },
  csat: { title: "CSAT ratings", description: "Ask for a rating when a conversation is resolved.", icon: BarChart3, href: `${BASE}/analyse/csat-reports` },
  security: { title: "Security & self-hosting", description: "Roles, audit logs, SSO and an option to host on your servers.", icon: ShieldCheck, href: `${BASE}/security` },
  preChat: { title: "Pre-chat forms", description: "Ask for a name, number or reference before the chat starts.", icon: Shield, href: `${BASE}/pre-chat-forms` },
  segments: { title: "Contact segments", description: "Group contacts by details you track for follow-ups.", icon: Users2, href: `${BASE}/manage/contact-segments` },
  mobile: { title: "Mobile apps", description: "Reply from your phone when you are away from your desk.", icon: Smartphone, href: `${BASE}/mobile-apps` },
  api: { title: "API & webhooks", description: "Connect EngageOne to your own systems and apps.", icon: Code2, href: `${BASE}/integrations/api-channel` },
  canned: { title: "Canned responses", description: "Saved answers your team inserts with a slash.", icon: Zap, href: `${BASE}/productivity/canned-responses` },
} satisfies Record<string, Feature>;

type Split = { eyebrow: string; title: string; description: string; points: string[] };

export type IndustryStory = {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** One line for the industries hub card. */
  summary: string;
  hero: { title: string; description: string };
  challenges: string[];
  /** Shown with the chat, inbox and automation illustrations, in that order. */
  splits: [Split, Split, Split];
  chat: {
    title: string;
    messages: { from: "customer" | "agent" | "bot"; text: string }[];
    chips?: string[];
    tag?: string;
  };
  inbox: { title: string; rows: { name: string; channel: IndustryChannel; preview: string; label: string }[] };
  flow: { title: string; steps: [string, string, string] };
  features: (keyof typeof FEATURES)[];
};

export const INDUSTRIES: IndustryStory[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    summary: "Appointment requests, reports and patient questions handled by the right desk, with reminders on WhatsApp.",
    hero: {
      title: "Patient conversations, handled with care",
      description:
        "Clinics, hospitals and diagnostic centres get appointment requests, report queries and billing questions on many channels. EngageOne brings them into one inbox and sends each one to the right desk.",
    },
    challenges: [
      "Front desks answer the same timing and fee questions all day",
      "Patients call, message and email about the same appointment",
      "Report and billing queries get lost between departments",
      "Sensitive conversations need tight access control",
    ],
    splits: [
      {
        eyebrow: "Appointments",
        title: "Take appointment requests on chat and WhatsApp",
        description: "A bot collects the doctor, preferred day and patient details, then hands the request to your front desk to confirm.",
        points: ["Buttons for department, doctor and time slot", "Front desk confirms with one reply", "Hours and location answered automatically"],
      },
      {
        eyebrow: "One inbox",
        title: "Every desk sees only its own queue",
        description: "Reports, billing and appointments each get a team. Labels and private notes keep the context with the conversation.",
        points: ["Teams for front desk, lab and billing", "Private notes for internal hand-overs", "Inbox access limited by role"],
      },
      {
        eyebrow: "Automations",
        title: "Route and remind without manual work",
        description: "Rules assign conversations by keyword or channel, and WhatsApp templates send reminders and report-ready messages.",
        points: ["Auto-assign report queries to the lab team", "Appointment reminders with approved templates", "Away message outside clinic hours"],
      },
    ],
    chat: {
      title: "Appointments",
      messages: [
        { from: "customer", text: "Hi, I need an appointment with a skin specialist." },
        { from: "bot", text: "Sure. Which day suits you?" },
        { from: "customer", text: "Thursday evening" },
        { from: "agent", text: "Dr. Mehta is free at 6:30 PM on Thursday. Shall I book it?" },
      ],
      chips: ["Book 6:30 PM", "Other time"],
      tag: "Appointment confirmed",
    },
    inbox: {
      title: "Front desk",
      rows: [
        { name: "Anita", channel: "whatsapp", preview: "Is my blood report ready?", label: "Lab" },
        { name: "Vikram", channel: "web", preview: "Need to reschedule Friday visit", label: "Appointments" },
        { name: "Neha", channel: "email", preview: "Insurance claim documents", label: "Billing" },
        { name: "Rohit", channel: "phone", preview: "Missed call · callback requested", label: "Front desk" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A new message arrives", "It mentions \"report\"", "Assign to the Lab team"] },
    features: ["chatbots", "whatsapp", "teams", "campaigns", "security", "businessHours"],
  },
  {
    slug: "banking-insurance-fintech",
    name: "Banking, insurance & fintech",
    icon: Landmark,
    summary: "Account, claim and payment questions on every channel, with strict roles, audit logs and the option to self-host.",
    hero: {
      title: "Fast answers for money questions, with control built in",
      description:
        "Customers ask about payments, policies, loans and claims at all hours. EngageOne answers the routine ones, routes the rest to the right team, and keeps a record of who did what.",
    },
    challenges: [
      "High volumes of repeat questions about status and charges",
      "Claims and disputes need several teams to work together",
      "Customer data must stay with the people allowed to see it",
      "Every action needs an audit trail",
    ],
    splits: [
      {
        eyebrow: "Self-service",
        title: "Answer status and policy questions instantly",
        description: "The AI Assistant answers from your published FAQs and policy documents, and hands over to an agent when the customer needs one.",
        points: ["Answers from your own approved content", "Hand-off to a person when needed", "Help center articles for common processes"],
      },
      {
        eyebrow: "Teams",
        title: "Claims, cards and loans in separate queues",
        description: "Each product team works its own queue. Private notes let them share context without the customer seeing it.",
        points: ["Teams and inboxes by product", "Custom roles limit who can see what", "SLA targets for first response and resolution"],
      },
      {
        eyebrow: "Control",
        title: "A clear record of every change",
        description: "Audit logs record sign-ins and changes to inboxes, teams and rules. Sign-in can use two-factor and SAML single sign-on.",
        points: ["Audit logs for admin activity", "Two-factor sign-in and SAML SSO", "Option to run on your own servers"],
      },
    ],
    chat: {
      title: "Customer care",
      messages: [
        { from: "customer", text: "My payment failed but money was deducted." },
        { from: "bot", text: "Sorry about that. Failed payments are usually reversed in 3–5 working days. Want me to raise a request?" },
        { from: "customer", text: "Yes please" },
        { from: "agent", text: "Done. I have raised it with our payments team and will update you here." },
      ],
      tag: "Request raised",
    },
    inbox: {
      title: "Payments team",
      rows: [
        { name: "Karan", channel: "web", preview: "Amount debited twice", label: "Dispute" },
        { name: "Sana", channel: "whatsapp", preview: "Policy renewal date?", label: "Policies" },
        { name: "Arjun", channel: "email", preview: "Claim documents attached", label: "Claims" },
        { name: "Meera", channel: "phone", preview: "Card blocked · call logged", label: "Cards" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A conversation is created", "Message contains \"claim\"", "Assign to Claims and add label"] },
    features: ["ai", "security", "teams", "helpCenter", "automations", "csat"],
  },
  {
    slug: "marketplaces",
    name: "Marketplaces & platforms",
    icon: Store,
    summary: "Buyers and sellers in separate inboxes, with bots for common questions and APIs to connect your platform.",
    hero: {
      title: "Support buyers and sellers from one place",
      description:
        "Marketplaces serve two kinds of customers with different questions. EngageOne gives each its own inbox and team, and connects to your platform through the API.",
    },
    challenges: [
      "Buyer and seller questions mixed in one queue",
      "Order details live in your own platform",
      "Seller onboarding questions repeat every week",
      "Peaks during sales overwhelm the team",
    ],
    splits: [
      {
        eyebrow: "Two audiences",
        title: "Separate inboxes for buyers and sellers",
        description: "Use a website chat for buyers and another for your seller panel, each with its own team, greeting and help articles.",
        points: ["One inbox per audience or region", "Different hours and greetings", "Separate help centers if you need them"],
      },
      {
        eyebrow: "Your data",
        title: "See order and account details beside the chat",
        description: "Dashboard apps show your own pages inside EngageOne, and the API lets your platform create conversations and contacts.",
        points: ["Dashboard apps for order lookups", "Client API and webhooks", "Contact attributes synced from your platform"],
      },
      {
        eyebrow: "Scale",
        title: "Handle sale-day peaks",
        description: "The AI Assistant and bots take the routine questions, and agent capacity spreads the rest fairly across your team.",
        points: ["AI answers for shipping and returns", "Auto-assignment with agent capacity", "Canned responses for policies"],
      },
    ],
    chat: {
      title: "Seller support",
      messages: [
        { from: "customer", text: "How do I add a new product to my store?" },
        { from: "bot", text: "Go to Catalogue → Add product. Here is a short guide with photos." },
        { from: "customer", text: "Thanks! When do I get paid for last week?" },
        { from: "agent", text: "Payouts go out every Tuesday. Yours is scheduled for this Tuesday." },
      ],
      chips: ["Payout help", "Talk to seller team"],
    },
    inbox: {
      title: "Sellers",
      rows: [
        { name: "Green Leaf Store", channel: "web", preview: "Listing rejected, why?", label: "Listings" },
        { name: "Asha Crafts", channel: "email", preview: "Payout not received", label: "Payouts" },
        { name: "Urban Shoes", channel: "whatsapp", preview: "Change pickup address", label: "Logistics" },
        { name: "Ravi", channel: "web", preview: "How to run a discount?", label: "Onboarding" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A message is created", "Inbox is Seller chat", "Assign to the Seller team"] },
    features: ["api", "ai", "teams", "helpCenter", "canned", "automations"],
  },
  {
    slug: "saas",
    name: "B2B SaaS",
    icon: Code2,
    summary: "In-app chat, help docs, bug reports to Linear and a clear view of each account's history.",
    hero: {
      title: "Support that keeps software customers moving",
      description:
        "Software customers expect quick, informed answers inside the product. EngageOne gives them in-app chat and a help center, and gives your team full context on every account.",
    },
    challenges: [
      "Questions arrive by email, chat and Slack",
      "Agents lack account details while replying",
      "Bug reports need to reach the product team",
      "Docs exist but customers can't find them",
    ],
    splits: [
      {
        eyebrow: "In-app chat",
        title: "Chat inside your product",
        description: "Add the chat widget to your app and pass the user's details, so agents know who they are talking to from the first message.",
        points: ["Identify signed-in users", "Custom attributes like plan and company", "Help articles inside the widget"],
      },
      {
        eyebrow: "Context",
        title: "Every account's history in one place",
        description: "Conversations, notes and attributes sit on the contact. Linear issues can be created and linked from the chat.",
        points: ["Contact and company details", "Create or link Linear issues", "Slack threads for internal discussion"],
      },
      {
        eyebrow: "Self-service",
        title: "Docs and AI answers for common questions",
        description: "Publish your docs in the help center and let the AI Assistant answer from them. Agents step in for the hard ones.",
        points: ["Help center on your domain", "AI Assistant trained on your docs", "Hand-off to support or success teams"],
      },
    ],
    chat: {
      title: "In-app support",
      messages: [
        { from: "customer", text: "SSO login fails for our new users." },
        { from: "agent", text: "Thanks, I can see your workspace is on the Business plan. Checking the logs now." },
        { from: "agent", text: "Found it — the new domain isn't verified. I have shared the steps." },
        { from: "customer", text: "That fixed it, thanks!" },
      ],
      tag: "Resolved · Linear issue linked",
    },
    inbox: {
      title: "Support",
      rows: [
        { name: "Acme Analytics", channel: "web", preview: "Export to CSV times out", label: "Bug" },
        { name: "Priya", channel: "email", preview: "Upgrade to annual plan", label: "Billing" },
        { name: "Northwind", channel: "web", preview: "Webhook not firing", label: "Integrations" },
        { name: "Dev", channel: "email", preview: "Feature request: dark mode", label: "Feedback" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A conversation is created", "Plan attribute is Enterprise", "Assign to Priority team"] },
    features: ["helpCenter", "ai", "api", "labels", "csat", "automations"],
  },
  {
    slug: "government",
    name: "Public sector",
    icon: Building2,
    summary: "Citizen questions answered on WhatsApp and the web, routed by department, hosted on your own servers.",
    hero: {
      title: "Help citizens reach the right department",
      description:
        "Citizens ask about applications, payments, certificates and complaints. EngageOne answers common questions, routes the rest by department, and can run entirely on your own infrastructure.",
    },
    challenges: [
      "Large volumes of the same questions",
      "Citizens don't know which department to contact",
      "Complaints need tracking until they are closed",
      "Data must stay on government infrastructure",
    ],
    splits: [
      {
        eyebrow: "Self-service",
        title: "Answer common questions any time",
        description: "A help center and the AI Assistant explain documents, fees and timelines in plain words, in the citizen's language.",
        points: ["Help center articles in several languages", "AI answers from official content", "WhatsApp and website chat"],
      },
      {
        eyebrow: "Departments",
        title: "Route each request to the right department",
        description: "A bot asks what the request is about and assigns it to the right team. Labels track complaints until they are resolved.",
        points: ["Bot menus by service", "Teams per department", "Labels and reports for complaint tracking"],
      },
      {
        eyebrow: "Control",
        title: "Run it on your own servers",
        description: "Install EngageOne in your data centre or private cloud, with roles, audit logs and single sign-on.",
        points: ["Self-hosted deployment", "Custom roles and audit logs", "SAML single sign-on"],
      },
    ],
    chat: {
      title: "Citizen services",
      messages: [
        { from: "bot", text: "Welcome. What do you need help with?" },
        { from: "customer", text: "Birth certificate" },
        { from: "bot", text: "You can apply online with these documents. Want to talk to an officer?" },
        { from: "customer", text: "Yes, I have a question about my application" },
      ],
      chips: ["Water bill", "Property tax", "Certificates", "Complaint"],
    },
    inbox: {
      title: "Citizen desk",
      rows: [
        { name: "Ramesh", channel: "whatsapp", preview: "Streetlight not working", label: "Complaint" },
        { name: "Fatima", channel: "web", preview: "Property tax receipt", label: "Revenue" },
        { name: "Joseph", channel: "email", preview: "Status of my application", label: "Certificates" },
        { name: "Kavita", channel: "phone", preview: "Water supply timings", label: "Water" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A citizen picks \"Complaint\"", "Ward is 12", "Assign to Ward 12 team"] },
    features: ["security", "chatbots", "helpCenter", "teams", "whatsapp", "csat"],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    summary: "Admissions, fees and student questions answered quickly, with WhatsApp updates for parents.",
    hero: {
      title: "Answer students and parents without the wait",
      description:
        "Schools, colleges and coaching institutes get admission, fee and timetable questions on every channel. EngageOne sorts them by team and sends updates on WhatsApp.",
    },
    challenges: [
      "Admission season brings a flood of enquiries",
      "Parents and students ask the same questions",
      "Fee and exam queries go to the wrong office",
      "Important updates don't reach parents in time",
    ],
    splits: [
      {
        eyebrow: "Admissions",
        title: "Turn enquiries into applications",
        description: "A bot collects the course, city and contact details. Your admissions team follows up from the same conversation.",
        points: ["Pre-chat forms for enquiry details", "Bots with course menus", "Labels to track each lead's stage"],
      },
      {
        eyebrow: "One inbox",
        title: "Admissions, fees and academics in their own queues",
        description: "Each office gets a team and sees only what it needs. Canned responses keep fee and document answers consistent.",
        points: ["Teams for each office", "Canned responses for fees and documents", "Business hours with an away message"],
      },
      {
        eyebrow: "Updates",
        title: "Reach parents on WhatsApp",
        description: "Send approved WhatsApp templates for fee reminders, results and holidays. Replies come back to your inbox.",
        points: ["Campaigns by class or batch label", "Personalised with the student's name", "Replies handled by the right team"],
      },
    ],
    chat: {
      title: "Admissions",
      messages: [
        { from: "customer", text: "Is admission open for B.Com this year?" },
        { from: "bot", text: "Yes! Applications close on 30 June. Which campus are you interested in?" },
        { from: "customer", text: "Ahmedabad" },
        { from: "agent", text: "Great. I'm from admissions — here is the fee structure and the form link." },
      ],
      chips: ["Courses", "Fees", "Hostel", "Talk to admissions"],
    },
    inbox: {
      title: "Admissions",
      rows: [
        { name: "Aarav", channel: "instagram", preview: "Scholarship for merit students?", label: "Scholarship" },
        { name: "Mrs. Shah", channel: "whatsapp", preview: "Fee receipt for term 2", label: "Fees" },
        { name: "Ishita", channel: "web", preview: "Hostel availability", label: "Hostel" },
        { name: "Rahul", channel: "email", preview: "Documents for admission", label: "Admissions" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A conversation is created", "Message mentions \"fees\"", "Assign to Accounts office"] },
    features: ["campaigns", "chatbots", "preChat", "teams", "canned", "businessHours"],
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & wellness",
    icon: Sparkles,
    summary: "Bookings over Instagram and WhatsApp, service menus with prices, and reminders that cut no-shows.",
    hero: {
      title: "Bookings and questions from every channel, in one place",
      description:
        "Salons, spas, gyms and clinics get booking requests on Instagram, WhatsApp and the website. EngageOne puts them in one inbox and helps you reply fast.",
    },
    challenges: [
      "Booking requests scattered across Instagram and WhatsApp",
      "The same price and timing questions every day",
      "No-shows when clients forget appointments",
      "Staff reply from personal phones",
    ],
    splits: [
      {
        eyebrow: "Bookings",
        title: "Take bookings on the channels clients use",
        description: "Reply to Instagram DMs, WhatsApp and website chat from one inbox. A bot shares the service menu and asks for a preferred time.",
        points: ["Instagram, WhatsApp and website chat", "Service menu with buttons", "Hand-off to staff to confirm"],
      },
      {
        eyebrow: "Team",
        title: "Shared inbox for the whole team",
        description: "Everyone works from the same inbox on the web or mobile app, so clients get answers even when someone is busy.",
        points: ["Mobile apps for staff", "Assign chats to a stylist or branch", "Canned replies for prices and offers"],
      },
      {
        eyebrow: "Reminders",
        title: "Fewer no-shows with WhatsApp reminders",
        description: "Send appointment reminders and seasonal offers with WhatsApp templates, personalised with each client's name.",
        points: ["Approved WhatsApp templates", "Campaigns by label, like \"monthly members\"", "Ratings after each visit"],
      },
    ],
    chat: {
      title: "Bookings",
      messages: [
        { from: "customer", text: "Do you have a slot for a haircut tomorrow?" },
        { from: "bot", text: "Yes! Pick a service and time." },
        { from: "customer", text: "Haircut, 5 PM" },
        { from: "agent", text: "Booked with Pooja at 5 PM. See you tomorrow!" },
      ],
      chips: ["Haircut", "Facial", "Spa", "Prices"],
      tag: "Booking confirmed",
    },
    inbox: {
      title: "Bookings",
      rows: [
        { name: "Simran", channel: "instagram", preview: "Bridal makeup packages?", label: "Bridal" },
        { name: "Tanvi", channel: "whatsapp", preview: "Move my spa to Sunday", label: "Reschedule" },
        { name: "Kabir", channel: "web", preview: "Gym membership price", label: "Membership" },
        { name: "Riya", channel: "facebook", preview: "Do you do hair colour?", label: "Services" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A conversation is resolved", "Label is \"visited\"", "Send a rating request"] },
    features: ["whatsapp", "chatbots", "campaigns", "mobile", "canned", "csat"],
  },
  {
    slug: "local-businesses",
    name: "Local businesses",
    icon: Store,
    summary: "One simple inbox for WhatsApp, Instagram, Facebook and website chat, on desktop and mobile.",
    hero: {
      title: "Every customer message in one simple inbox",
      description:
        "Shops, service providers and small teams get messages everywhere. EngageOne puts WhatsApp, Instagram, Facebook and website chat in one place you can check from your phone.",
    },
    challenges: [
      "Messages spread across many apps",
      "Missed enquiries when the owner is busy",
      "Same questions about timings and location",
      "No easy way to send offers to regular customers",
    ],
    splits: [
      {
        eyebrow: "One inbox",
        title: "Stop switching between apps",
        description: "Connect WhatsApp, Instagram, Facebook and a website chat in minutes, and reply to all of them from one screen.",
        points: ["All channels in one list", "Mobile apps for iOS and Android", "Notifications for new messages"],
      },
      {
        eyebrow: "Quick replies",
        title: "Answer common questions in seconds",
        description: "Save answers for timings, location and prices, and let a simple bot handle them when you are closed.",
        points: ["Canned responses", "Away message outside business hours", "Bot buttons for common questions"],
      },
      {
        eyebrow: "Repeat customers",
        title: "Bring customers back",
        description: "Label your regular customers and send them offers and festival greetings on WhatsApp.",
        points: ["Labels for customer groups", "WhatsApp campaigns", "Ratings to see how you're doing"],
      },
    ],
    chat: {
      title: "Store chat",
      messages: [
        { from: "customer", text: "Are you open on Sunday?" },
        { from: "bot", text: "Yes, 10 AM to 2 PM on Sundays." },
        { from: "customer", text: "Do you deliver to Satellite area?" },
        { from: "agent", text: "Yes, free delivery above ₹500 there." },
      ],
      chips: ["Timings", "Location", "Delivery", "Talk to us"],
    },
    inbox: {
      title: "All messages",
      rows: [
        { name: "Mehul", channel: "whatsapp", preview: "Is the blue kurta in stock?", label: "Stock" },
        { name: "Divya", channel: "instagram", preview: "Price of this item?", label: "Price" },
        { name: "Sameer", channel: "facebook", preview: "Can I pay by UPI?", label: "Payment" },
        { name: "Lata", channel: "web", preview: "Need it by Friday", label: "Delivery" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A message arrives", "Outside business hours", "Send the away message"] },
    features: ["whatsapp", "mobile", "canned", "businessHours", "campaigns", "chatbots"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    summary: "Test drives, service bookings and spare-part queries across showrooms and service centres.",
    hero: {
      title: "From test drive to service reminder",
      description:
        "Dealers and service centres handle sales enquiries, test drives, service bookings and parts questions. EngageOne routes each to the right showroom or workshop.",
    },
    challenges: [
      "Sales leads arrive on many channels and go cold",
      "Service bookings need the right branch",
      "Customers chase status updates by phone",
      "Reminders for service due dates are manual",
    ],
    splits: [
      {
        eyebrow: "Sales",
        title: "Book test drives from a chat",
        description: "A bot asks for the model, city and preferred time, then hands the lead to the nearest showroom team.",
        points: ["Bots with model and branch menus", "Leads assigned by branch", "Labels for each lead's stage"],
      },
      {
        eyebrow: "Service",
        title: "Service bookings and updates in one thread",
        description: "Customers book a service and get updates in the same conversation, so they don't need to call.",
        points: ["Teams for each workshop", "Private notes for the service advisor", "Calls logged in the conversation"],
      },
      {
        eyebrow: "Reminders",
        title: "Remind customers when service is due",
        description: "Send WhatsApp reminders and offers to customers by label, like \"service due this month\".",
        points: ["WhatsApp template campaigns", "Personalised with the customer's name", "Replies routed to the workshop"],
      },
    ],
    chat: {
      title: "Showroom",
      messages: [
        { from: "customer", text: "I want a test drive of the new SUV." },
        { from: "bot", text: "Happy to help! Which city?" },
        { from: "customer", text: "Gandhinagar, Saturday morning" },
        { from: "agent", text: "Booked for Saturday 11 AM at our Gandhinagar showroom." },
      ],
      chips: ["Test drive", "Book service", "Spare parts", "Offers"],
      tag: "Test drive booked",
    },
    inbox: {
      title: "Service centre",
      rows: [
        { name: "Hardik", channel: "whatsapp", preview: "When will my car be ready?", label: "In service" },
        { name: "Nisha", channel: "web", preview: "Book a free service", label: "Booking" },
        { name: "Imran", channel: "phone", preview: "Call · insurance claim", label: "Insurance" },
        { name: "Pallavi", channel: "email", preview: "Quote for brake pads", label: "Parts" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A lead picks \"Test drive\"", "City is Ahmedabad", "Assign to Ahmedabad showroom"] },
    features: ["chatbots", "teams", "campaigns", "calling", "whatsapp", "labels"],
  },
  {
    slug: "pharmacies",
    name: "Pharmacies",
    icon: Pill,
    summary: "Prescription uploads, medicine availability and refill reminders over WhatsApp and website chat.",
    hero: {
      title: "Orders and refills without the phone queue",
      description:
        "Pharmacies get prescription photos, stock questions and delivery requests all day. EngageOne puts them in one inbox your pharmacists can work through quickly.",
    },
    challenges: [
      "Prescription photos arrive on personal WhatsApp numbers",
      "Stock and price questions take up counter time",
      "Refill reminders are missed",
      "Several branches share one phone line",
    ],
    splits: [
      {
        eyebrow: "Orders",
        title: "Take prescription orders on WhatsApp",
        description: "Customers send a photo of their prescription. Your team checks it and confirms the order in the same chat.",
        points: ["Images and documents in chat", "Branch teams for pickup or delivery", "Private notes for pharmacist checks"],
      },
      {
        eyebrow: "Branches",
        title: "Route each request to the nearest branch",
        description: "A bot asks for the area and sends the chat to the right branch team.",
        points: ["Bot menus by area", "Teams for each branch", "Business hours per inbox"],
      },
      {
        eyebrow: "Refills",
        title: "Refill reminders on WhatsApp",
        description: "Label customers with regular medicines and send them a refill reminder with an approved template.",
        points: ["Campaigns by label", "Personalised with the customer's name", "Replies come back to the branch"],
      },
    ],
    chat: {
      title: "Orders",
      messages: [
        { from: "customer", text: "Can you deliver these medicines? [prescription photo]" },
        { from: "agent", text: "Got it. All three are in stock. Total ₹640, delivery in 2 hours." },
        { from: "customer", text: "Please send" },
        { from: "agent", text: "Order placed. Our delivery partner will call you." },
      ],
      tag: "Order placed",
    },
    inbox: {
      title: "Orders",
      rows: [
        { name: "Suresh", channel: "whatsapp", preview: "Prescription photo", label: "New order" },
        { name: "Geeta", channel: "web", preview: "Is this syrup available?", label: "Stock" },
        { name: "Manoj", channel: "whatsapp", preview: "Monthly BP medicines", label: "Refill" },
        { name: "Aisha", channel: "phone", preview: "Call · delivery status", label: "Delivery" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A new image is received", "Inbox is WhatsApp", "Label \"New order\" and assign"] },
    features: ["whatsapp", "teams", "campaigns", "chatbots", "businessHours", "mobile"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    summary: "Dealer, distributor and service enquiries routed to sales, support and spare-parts teams.",
    hero: {
      title: "Keep dealers, distributors and customers moving",
      description:
        "Manufacturers handle dealer orders, quotes, warranty claims and service visits. EngageOne gives each team its own queue and full history of every account.",
    },
    challenges: [
      "Dealer queries get lost in shared email inboxes",
      "Warranty and service requests need several teams",
      "Quotes and order status are chased by phone",
      "No record of what was promised to whom",
    ],
    splits: [
      {
        eyebrow: "Dealers",
        title: "One place for dealer and distributor conversations",
        description: "Email, WhatsApp and portal chat land in one inbox, labelled by region and product line.",
        points: ["Email and WhatsApp together", "Labels for region and product", "Contact notes with account details"],
      },
      {
        eyebrow: "Service",
        title: "Warranty claims and service visits on track",
        description: "Teams for service, spares and quality pick up their part of a conversation and leave notes for each other.",
        points: ["Teams for service and spares", "Private notes and @mentions", "SLA targets for response time"],
      },
      {
        eyebrow: "Systems",
        title: "Connect your ERP and order systems",
        description: "Webhooks and the API pass conversation events to your systems, and dashboard apps show order details beside the chat.",
        points: ["Webhooks for new conversations", "Dashboard apps for order lookups", "API to create contacts"],
      },
    ],
    chat: {
      title: "Dealer support",
      messages: [
        { from: "customer", text: "Need a quote for 200 units of model X-40." },
        { from: "agent", text: "Sure. Delivery to your Pune warehouse?" },
        { from: "customer", text: "Yes, by month end" },
        { from: "agent", text: "Quote attached. Dispatch possible by the 25th." },
      ],
      tag: "Quote sent",
    },
    inbox: {
      title: "Dealers",
      rows: [
        { name: "Shree Traders", channel: "email", preview: "Quote for 200 units", label: "Quote" },
        { name: "Patel Agencies", channel: "whatsapp", preview: "Warranty claim · motor", label: "Warranty" },
        { name: "Sunrise Pumps", channel: "phone", preview: "Call · service visit", label: "Service" },
        { name: "Delta Supply", channel: "email", preview: "Spare part availability", label: "Spares" },
      ],
    },
    flow: { title: "Automation rule", steps: ["An email arrives", "Subject contains \"warranty\"", "Assign to Service team"] },
    features: ["teams", "labels", "api", "automations", "calling", "security"],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingCart,
    summary: "Store and online shoppers served in one inbox, with offers, order updates and loyalty campaigns.",
    hero: {
      title: "Serve shoppers in store and online",
      description:
        "Retail chains get stock, order and offer questions from shoppers on many channels. EngageOne connects every store and channel to one inbox.",
    },
    challenges: [
      "Stock questions for many stores and products",
      "Offers and loyalty messages need a reliable channel",
      "Returns and exchanges need follow-up",
      "Peak seasons overload the team",
    ],
    splits: [
      {
        eyebrow: "Stores",
        title: "Route shoppers to the right store",
        description: "A bot asks for the city or store, then sends the chat to that store's team.",
        points: ["Bot menus by store", "Teams for each store", "Shared inbox for head office"],
      },
      {
        eyebrow: "Campaigns",
        title: "Offers and loyalty updates on WhatsApp",
        description: "Send sale announcements, loyalty points and new arrivals with WhatsApp templates, personalised by name.",
        points: ["Campaigns by label", "Image header templates", "Replies handled by stores"],
      },
      {
        eyebrow: "Scale",
        title: "Stay on top of sale-season peaks",
        description: "The AI Assistant answers return policy and store timing questions, while agents focus on orders.",
        points: ["AI answers from your policies", "Agent capacity limits", "Reports on busy hours"],
      },
    ],
    chat: {
      title: "Store help",
      messages: [
        { from: "customer", text: "Is the black jacket in size L at your Vadodara store?" },
        { from: "agent", text: "Yes, 2 in stock. Shall I keep one for you till evening?" },
        { from: "customer", text: "Yes please" },
        { from: "agent", text: "Done! Show this chat at the billing counter." },
      ],
      tag: "Item reserved",
    },
    inbox: {
      title: "Stores",
      rows: [
        { name: "Jay", channel: "whatsapp", preview: "Exchange a shirt", label: "Exchange" },
        { name: "Komal", channel: "instagram", preview: "Sale starts when?", label: "Offers" },
        { name: "Nirav", channel: "web", preview: "Gift card balance", label: "Loyalty" },
        { name: "Pooja", channel: "facebook", preview: "Store timings Sunday", label: "Store" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A shopper picks a store", "Store is Surat", "Assign to Surat store team"] },
    features: ["campaigns", "ai", "chatbots", "teams", "whatsapp", "csat"],
  },
  {
    slug: "travel-hospitality",
    name: "Travel & hospitality",
    icon: Plane,
    summary: "Bookings, changes and guest requests handled across time zones, with confirmations on WhatsApp.",
    hero: {
      title: "Help guests before, during and after the trip",
      description:
        "Hotels, travel agents and tour operators get booking, change and guest-service requests at all hours. EngageOne keeps every request in one inbox and on time.",
    },
    challenges: [
      "Guests write at all hours and in many languages",
      "Booking changes need quick answers",
      "Front desk and reservations share one phone",
      "Feedback arrives too late to act on",
    ],
    splits: [
      {
        eyebrow: "Reservations",
        title: "Bookings and changes in one conversation",
        description: "Guests ask, book and change plans in the same chat. Reservations and front desk each work their own queue.",
        points: ["Teams for reservations and front desk", "Private notes for special requests", "Calls logged with the chat"],
      },
      {
        eyebrow: "Around the clock",
        title: "Answer guests any time, in their language",
        description: "The AI Assistant answers check-in times, amenities and policies, and messages can be translated for your team.",
        points: ["AI answers from your guest info", "Google Translate for messages", "Away message outside desk hours"],
      },
      {
        eyebrow: "Guest experience",
        title: "Collect feedback while guests are still with you",
        description: "Ask for a rating when a request is resolved, and follow up on low scores before check-out.",
        points: ["CSAT ratings", "Reports by team", "Campaigns for repeat guests"],
      },
    ],
    chat: {
      title: "Reservations",
      messages: [
        { from: "customer", text: "Can I check in early tomorrow? Flight lands at 8 AM." },
        { from: "agent", text: "We can offer check-in from 10 AM at no charge." },
        { from: "customer", text: "Perfect, and an airport pickup?" },
        { from: "agent", text: "Booked. The driver will wait at Gate 3 with your name." },
      ],
      tag: "Pickup booked",
    },
    inbox: {
      title: "Guest services",
      rows: [
        { name: "Mr. Lee", channel: "email", preview: "Change dates to 12–15", label: "Booking change" },
        { name: "Anjali", channel: "whatsapp", preview: "Extra pillow, room 304", label: "Housekeeping" },
        { name: "Sophie", channel: "web", preview: "Is breakfast included?", label: "Pre-arrival" },
        { name: "Tarun", channel: "phone", preview: "Call · tour package", label: "Tours" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A conversation is resolved", "Label is \"checked out\"", "Send a rating request"] },
    features: ["ai", "whatsapp", "calling", "teams", "csat", "businessHours"],
  },
  {
    slug: "real-estate",
    name: "Real estate",
    icon: Home,
    summary: "Property enquiries from ads and portals captured, qualified and followed up from one inbox.",
    hero: {
      title: "Reply to every property enquiry quickly",
      description:
        "Developers, brokers and property managers get enquiries from ads, portals, WhatsApp and the website. EngageOne captures each lead and helps your team follow up.",
    },
    challenges: [
      "Leads from ads and portals reply late",
      "The same questions about price and location",
      "Site visits need coordination",
      "Leads go cold without follow-up",
    ],
    splits: [
      {
        eyebrow: "Lead capture",
        title: "Qualify leads in the first chat",
        description: "A bot asks for budget, location and configuration before handing the lead to a sales executive.",
        points: ["Bot questions with buttons", "Pre-chat forms on the website", "Leads assigned by project"],
      },
      {
        eyebrow: "Site visits",
        title: "Book and confirm site visits",
        description: "Sales executives share brochures, floor plans and location pins, and confirm visits in the same chat.",
        points: ["Images and PDFs in chat", "Calls logged in the conversation", "Labels for each lead's stage"],
      },
      {
        eyebrow: "Follow-up",
        title: "Keep leads warm",
        description: "Send project updates and offers to interested leads with WhatsApp campaigns.",
        points: ["Campaigns by label", "Contact segments by budget", "Reports on response times"],
      },
    ],
    chat: {
      title: "Sales",
      messages: [
        { from: "customer", text: "Interested in 2BHK at your Gift City project." },
        { from: "bot", text: "Great choice! What's your budget?" },
        { from: "customer", text: "60–70 lakh" },
        { from: "agent", text: "Here's the floor plan. Would Saturday work for a site visit?" },
      ],
      chips: ["2 BHK", "3 BHK", "Site visit", "Brochure"],
      tag: "Site visit booked",
    },
    inbox: {
      title: "Leads",
      rows: [
        { name: "Chirag", channel: "facebook", preview: "Price of 3BHK?", label: "New lead" },
        { name: "Sneha", channel: "whatsapp", preview: "Site visit Sunday 11 AM", label: "Site visit" },
        { name: "Ankit", channel: "web", preview: "Home loan options", label: "Finance" },
        { name: "Bhavna", channel: "email", preview: "Possession date?", label: "Booked" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A lead is created", "Project is Gift City", "Assign to Gift City sales team"] },
    features: ["chatbots", "preChat", "campaigns", "calling", "segments", "labels"],
  },
  {
    slug: "logistics",
    name: "Logistics & delivery",
    icon: Truck,
    summary: "Tracking, delivery changes and driver issues handled at volume, with updates over WhatsApp.",
    hero: {
      title: "Answer \"where is my parcel?\" before it's asked twice",
      description:
        "Courier, freight and delivery companies handle tracking, address changes and claims at high volume. EngageOne automates the routine and routes the rest.",
    },
    challenges: [
      "Huge volumes of tracking questions",
      "Address and time changes need quick action",
      "Claims for damaged goods need several teams",
      "Business customers expect a dedicated contact",
    ],
    splits: [
      {
        eyebrow: "Tracking",
        title: "Let a bot answer tracking questions",
        description: "Connect your tracking system through the API or an agent bot, so customers get status updates instantly.",
        points: ["Agent bots with your tracking data", "Buttons for common actions", "Hand-off to an agent for issues"],
      },
      {
        eyebrow: "Exceptions",
        title: "Route address changes and claims fast",
        description: "Rules send address changes to operations and claims to the claims team, with SLA targets for each.",
        points: ["Automation rules by keyword", "Teams for operations and claims", "SLA targets for response time"],
      },
      {
        eyebrow: "Updates",
        title: "Proactive WhatsApp updates",
        description: "Send delivery updates and feedback requests with WhatsApp templates. Replies come back to your inbox.",
        points: ["WhatsApp template messages", "Webhooks to your systems", "CSAT after delivery issues"],
      },
    ],
    chat: {
      title: "Tracking",
      messages: [
        { from: "customer", text: "Where is my parcel? AWB 50318274" },
        { from: "bot", text: "It's out for delivery and will reach you by 6 PM today." },
        { from: "customer", text: "Can you deliver tomorrow instead?" },
        { from: "agent", text: "Done — rescheduled for tomorrow, 10 AM to 1 PM." },
      ],
      chips: ["Track parcel", "Change address", "Raise a claim"],
      tag: "Delivery rescheduled",
    },
    inbox: {
      title: "Operations",
      rows: [
        { name: "Vivek", channel: "whatsapp", preview: "Change delivery address", label: "Address change" },
        { name: "Shreya", channel: "web", preview: "Parcel damaged", label: "Claim" },
        { name: "BluePeak Ltd", channel: "email", preview: "Bulk pickup tomorrow", label: "Business" },
        { name: "Gaurav", channel: "phone", preview: "Call · driver not reachable", label: "Escalation" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A message is created", "Contains \"damaged\"", "Assign to Claims team"] },
    features: ["api", "chatbots", "automations", "whatsapp", "teams", "csat"],
  },
  {
    slug: "telecom-isp",
    name: "Telecom & ISPs",
    icon: Radio,
    summary: "Outage, billing and plan questions at scale, with bots, calling and SLA-driven queues.",
    hero: {
      title: "Support subscribers at scale",
      description:
        "Telecom operators and internet providers handle outages, bills, plan changes and new connections. EngageOne combines chat, WhatsApp and calls with bots that take the routine load.",
    },
    challenges: [
      "Outages bring sudden spikes in contacts",
      "Billing and plan questions repeat",
      "Technicians and support need to share updates",
      "Long phone queues frustrate subscribers",
    ],
    splits: [
      {
        eyebrow: "Self-service",
        title: "Bots for bills, plans and outages",
        description: "Customers check their bill, change plans or see outage updates from bot menus on WhatsApp and the website.",
        points: ["Agent bots connected to your systems", "Outage notices in the greeting", "Hand-off to support when needed"],
      },
      {
        eyebrow: "Queues",
        title: "SLA-driven queues for faults and new connections",
        description: "Faults, billing and sales each get a team, with SLA targets and agent capacity to balance the load.",
        points: ["Teams and auto-assignment", "SLA targets for faults", "Agent capacity limits"],
      },
      {
        eyebrow: "Calls & chat",
        title: "Move from long call queues to chat",
        description: "Customers who call can also chat on WhatsApp, and every call is logged next to the chat history.",
        points: ["WhatsApp and phone calling", "Call logs in the conversation", "Reports across channels"],
      },
    ],
    chat: {
      title: "Support",
      messages: [
        { from: "customer", text: "Internet is down since morning." },
        { from: "bot", text: "There's a fiber cut in your area. Expected fix by 4 PM." },
        { from: "customer", text: "I work from home, need it urgently" },
        { from: "agent", text: "I've flagged your line for priority restore and will update you here." },
      ],
      chips: ["Pay bill", "Change plan", "Report a fault", "New connection"],
    },
    inbox: {
      title: "Fault desk",
      rows: [
        { name: "Nikhil", channel: "whatsapp", preview: "No internet since 9 AM", label: "Outage" },
        { name: "Swati", channel: "web", preview: "Bill is higher this month", label: "Billing" },
        { name: "Deepak", channel: "phone", preview: "Call · router replacement", label: "Technician" },
        { name: "Heena", channel: "sms", preview: "Upgrade to 300 Mbps", label: "Sales" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A message is created", "Contains \"no internet\"", "Assign to Fault desk, priority high"] },
    features: ["chatbots", "calling", "automations", "teams", "api", "csat"],
  },
  {
    slug: "nonprofits",
    name: "Non-profits & NGOs",
    icon: HeartHandshake,
    summary: "Donor, volunteer and beneficiary conversations in one inbox, with WhatsApp updates for supporters.",
    hero: {
      title: "Stay close to donors, volunteers and the people you serve",
      description:
        "Non-profits talk to donors, volunteers and beneficiaries with small teams. EngageOne keeps every conversation in one inbox and makes updates easy to send.",
    },
    challenges: [
      "Small teams handle many kinds of requests",
      "Donor receipts and questions take time",
      "Volunteers need timely updates",
      "Beneficiaries reach out on WhatsApp",
    ],
    splits: [
      {
        eyebrow: "One inbox",
        title: "Donors, volunteers and beneficiaries together",
        description: "Separate inboxes or labels for each group, all in one place your team can manage from the web or phone.",
        points: ["Labels for each group", "Mobile apps for field teams", "WhatsApp and website chat"],
      },
      {
        eyebrow: "Quick answers",
        title: "Answer donor questions quickly",
        description: "Save replies for receipts, tax certificates and bank details, and publish FAQs in a help center.",
        points: ["Canned responses", "Help center articles", "AI Assistant for common questions"],
      },
      {
        eyebrow: "Updates",
        title: "Share updates with supporters",
        description: "Send event invites, campaign updates and thank-you messages with WhatsApp templates.",
        points: ["Campaigns by label", "Personalised with each supporter's name", "Replies come back to your inbox"],
      },
    ],
    chat: {
      title: "Supporters",
      messages: [
        { from: "customer", text: "I donated last week. Can I get my 80G receipt?" },
        { from: "agent", text: "Thank you for your support! Your receipt is attached." },
        { from: "customer", text: "Also, can I volunteer this Sunday?" },
        { from: "agent", text: "We'd love that. I've added you to Sunday's food drive." },
      ],
      tag: "Volunteer added",
    },
    inbox: {
      title: "All conversations",
      rows: [
        { name: "Mrs. Iyer", channel: "email", preview: "Donation receipt", label: "Donor" },
        { name: "Aman", channel: "whatsapp", preview: "Volunteering this weekend", label: "Volunteer" },
        { name: "Sunita", channel: "whatsapp", preview: "Help with school fees", label: "Beneficiary" },
        { name: "Rotary Club", channel: "web", preview: "Partnership for camp", label: "Partner" },
      ],
    },
    flow: { title: "Automation rule", steps: ["A message is created", "Contains \"receipt\"", "Label Donor and assign to Finance"] },
    features: ["whatsapp", "campaigns", "canned", "helpCenter", "mobile", "labels"],
  },
];

