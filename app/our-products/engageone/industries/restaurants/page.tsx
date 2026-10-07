import { CreditCard, Download, FileText, MessageCircle, Star, UserRound } from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import {
  RestaurantBookingVisual,
  RestaurantChatVisual,
  RestaurantKitchenVisual,
  RestaurantMenuVisual,
  RestaurantOrderVisual,
  RestaurantReportsVisual,
} from "@/components/visuals/engageone/IndustryVisuals";

const BASE = "/our-products/engageone";

const SPLITS = [
  {
    eyebrow: "Menu",
    title: "Show your menu right in the chat",
    description:
      "Customers tap View menu and see your dishes by category, with prices and a veg or non-veg mark next to each one.",
    points: ["Dishes grouped by category", "Prices and veg / non-veg marks", "Order straight from the menu"],
    visual: <RestaurantMenuVisual />,
  },
  {
    eyebrow: "Ordering",
    title: "Take orders by button or plain text",
    description:
      "Customers can tap through categories and dishes, or just type what they want, like \"2 butter chicken and 4 naan\". The bot adds it to the cart.",
    points: [
      "Delivery, takeaway or dine-in",
      "Delivery address asked for in the chat",
      "GST and delivery fee added to the total",
      "Free delivery above an amount you choose",
    ],
    visual: <RestaurantOrderVisual />,
  },
  {
    eyebrow: "Table booking",
    title: "Let guests book a table in a few taps",
    description:
      "The bot asks for the day, time and number of guests. Staff confirm or decline from the dashboard, and the guest gets the answer in the same chat.",
    points: ["Day, time and party size", "Typed requests like \"table for 4 tomorrow at 8 pm\"", "Confirmation sent in the chat"],
    visual: <RestaurantBookingVisual />,
  },
  {
    eyebrow: "Kitchen dashboard",
    title: "Move orders along and keep customers informed",
    description:
      "Your kitchen sees every order in one place. Each status button sends the customer a message, so nobody has to call to ask where their food is.",
    points: [
      "Accepted, Preparing, Out for delivery or Ready, Completed",
      "Every button sends an update to the customer",
      "Mark cash orders as paid",
      "Customers can also check status with Track my order",
    ],
    visual: <RestaurantKitchenVisual />,
  },
  {
    eyebrow: "Reports",
    title: "See what sells and what is still unpaid",
    description:
      "Sales reports show revenue, average order value, GST, unpaid amounts and top dishes. Break sales down by day, order type, channel and payment method.",
    points: ["Revenue and top dishes", "Sales by day, order type and channel", "Export orders as a CSV file"],
    visual: <RestaurantReportsVisual />,
  },
];

const EXTRAS = [
  {
    title: "Payment link",
    description: "Customers pay online through a link in the chat. Payments are integrated with your payment provider. Pay on delivery works too.",
    icon: CreditCard,
  },
  {
    title: "PDF tax invoice",
    description: "Once an order is paid, the customer gets a GST tax invoice as a PDF in the same chat.",
    icon: FileText,
  },
  {
    title: "Talk to staff",
    description: "One tap hands the chat to your team. The bot steps back and stays quiet so staff can take over.",
    icon: UserRound,
  },
  {
    title: "Ratings after staff chats",
    description: "When staff have handled a chat, the customer is asked for a star rating. Ratings show in your CSAT reports.",
    icon: Star,
  },
  {
    title: "Notes and labels",
    description: "Every order and booking adds a private note and a label to the conversation, so staff see the details at a glance.",
    icon: MessageCircle,
  },
  {
    title: "CSV export",
    description: "Download orders with totals, GST, payment status and invoice numbers for your accounts.",
    icon: Download,
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne for restaurants"
        title="Take food orders and table bookings in chat"
        description="Add an ordering bot to your website chat and Facebook Messenger. Customers see the menu, order, pay and book a table without a phone call. Your kitchen keeps them updated with one tap."
        visual={<RestaurantChatVisual />}
        primaryCta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        secondaryCta={{ label: "Contact us", href: "/contact-us" }}
      />

      <Section tone="white">
        <SectionHeader
          title="Everything a guest needs from one menu"
          description="The bot greets every customer with six simple choices: View menu, Order food, Book a table, Location & hours, Track my order and Talk to staff."
        />
      </Section>

      {SPLITS.map((split, i) => (
        <Section key={split.title} tone={i % 2 === 0 ? "muted" : "white"}>
          <MediaSplit visual={split.visual} reverse={i % 2 === 1}>
            <SectionHeader
              eyebrow={split.eyebrow}
              title={split.title}
              description={split.description}
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={split.points} />
          </MediaSplit>
        </Section>
      ))}

      <Section tone="muted">
        <SectionHeader title="Also included" description="The small things that save your staff time every day." />
        <CardGrid>
          {EXTRAS.map(({ title, description, icon: Icon }) => (
            <FeatureCard key={title} title={title} description={description} icon={<Icon aria-hidden="true" />} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title="See the restaurant bot in action"
          description="We will walk you through ordering, payment, invoices and the kitchen dashboard with your own menu in mind."
          cta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        />
      </Section>
    </>
  );
}
