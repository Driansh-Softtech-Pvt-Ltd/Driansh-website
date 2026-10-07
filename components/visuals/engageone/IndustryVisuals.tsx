import {
  BarChart3,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Headphones,
  Mail,
  Megaphone,
  MessageCircle,
  Package,
  Phone,
  ShoppingBag,
  Star,
  Timer,
  Truck,
  UserCheck,
  Users2,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AppWindow,
  BarChart,
  Bubble,
  ChatThread,
  Composer,
  FloatingTag,
  FlowSteps,
  ListRows,
  OptionChips,
  StatTiles,
  VisualStage,
} from "./primitives";

/*
 * Illustrations for the EngageOne industry pages. Sample data only.
 * The restaurant visuals mirror the working DRIANSH restaurant demo bot.
 */

const MAIN_MENU = ["View menu", "Order food", "Book a table", "Location & hours", "Track my order", "Talk to staff"];

/** Green (veg) or red (non-veg) food mark. */
function FoodMark({ veg }: { veg: boolean }) {
  return (
    <span
      className={cn(
        "flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border",
        veg ? "border-emerald-600" : "border-rose-600"
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", veg ? "bg-emerald-600" : "bg-rose-600")} />
    </span>
  );
}

/** Line items with a totals block, like the bot's order summary. */
function Receipt({
  lines,
  totals,
}: {
  lines: { label: string; amount: string }[];
  totals: { label: string; amount: string; strong?: boolean }[];
}) {
  return (
    <div className="space-y-1 rounded-xl border border-slate-100 bg-surface p-3 text-xs">
      {lines.map((line) => (
        <div key={line.label} className="flex justify-between gap-3">
          <span className="text-ink">{line.label}</span>
          <span className="text-slate-600">{line.amount}</span>
        </div>
      ))}
      <div className="my-1.5 border-t border-dashed border-slate-200" />
      {totals.map((t) => (
        <div key={t.label} className={cn("flex justify-between gap-3", t.strong ? "font-semibold text-ink" : "text-slate-500")}>
          <span>{t.label}</span>
          <span>{t.amount}</span>
        </div>
      ))}
    </div>
  );
}

/** Restaurant chat: welcome message with the main menu buttons and a typed order. */
export function RestaurantChatVisual() {
  return (
    <VisualStage>
      <AppWindow title="Website chat · Restaurant bot">
        <ChatThread>
          <Bubble>Hi</Bubble>
          <Bubble from="bot">Welcome! What would you like to do today?</Bubble>
          <OptionChips options={MAIN_MENU} />
          <Bubble>2 butter chicken, 4 butter naan and 1 mango lassi</Bubble>
          <Bubble from="bot">Added to your cart. Delivery, takeaway or dine-in?</Bubble>
          <OptionChips options={["Delivery", "Takeaway", "Dine-in"]} />
        </ChatThread>
        <Composer placeholder="Type your order…" />
      </AppWindow>
      <FloatingTag icon={MessageCircle}>Website chat and Messenger</FloatingTag>
    </VisualStage>
  );
}

const MENU_ITEMS = [
  { name: "Paneer Tikka", price: "₹280", veg: true },
  { name: "Butter Chicken", price: "₹360", veg: false },
  { name: "Dal Makhani", price: "₹240", veg: true },
  { name: "Chicken Biryani", price: "₹320", veg: false },
  { name: "Butter Naan", price: "₹50", veg: true },
  { name: "Mango Lassi", price: "₹120", veg: true },
];

/** Menu message with prices and veg / non-veg marks. */
export function RestaurantMenuVisual() {
  return (
    <VisualStage>
      <AppWindow title="Messenger · Menu">
        <ChatThread>
          <Bubble>View menu</Bubble>
          <div className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-violet-100 p-3 text-xs text-violet-900">
            <div className="mb-2 font-semibold">Today&apos;s menu</div>
            <ul className="space-y-1.5">
              {MENU_ITEMS.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <FoodMark veg={item.veg} />
                  <span className="flex-1">{item.name}</span>
                  <span className="font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <OptionChips options={["Order food", "Main menu"]} />
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={UtensilsCrossed}>Veg and non-veg marked</FloatingTag>
    </VisualStage>
  );
}

/** Order summary with GST, a payment link and the PDF invoice. */
export function RestaurantOrderVisual() {
  return (
    <VisualStage>
      <AppWindow title="Website chat · Order summary">
        <ChatThread>
          <Bubble from="bot">Here is your order. Please confirm.</Bubble>
          <div className="max-w-[90%] self-end">
            <Receipt
              lines={[
                { label: "2 × Butter Chicken", amount: "₹720" },
                { label: "4 × Butter Naan", amount: "₹200" },
                { label: "1 × Mango Lassi", amount: "₹120" },
              ]}
              totals={[
                { label: "Subtotal", amount: "₹1,040" },
                { label: "GST 5%", amount: "₹52" },
                { label: "Delivery fee", amount: "Free" },
                { label: "Total", amount: "₹1,092", strong: true },
              ]}
            />
          </div>
          <OptionChips options={["Pay online", "Pay on delivery"]} />
          <Bubble>Pay online</Bubble>
          <Bubble from="bot">
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 shrink-0" /> Payment received. Your tax invoice (PDF) is attached.
            </span>
          </Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={CheckCircle2}>GST and invoice included</FloatingTag>
    </VisualStage>
  );
}

/** Table booking: day, time and guests. */
export function RestaurantBookingVisual() {
  return (
    <VisualStage>
      <AppWindow title="Website chat · Table booking">
        <ChatThread>
          <Bubble>Book a table</Bubble>
          <Bubble from="bot">Which day?</Bubble>
          <OptionChips options={["Today", "Tomorrow", "Saturday"]} />
          <Bubble>Tomorrow</Bubble>
          <Bubble from="bot">What time?</Bubble>
          <OptionChips options={["7:30 PM", "8:00 PM", "8:30 PM"]} />
          <Bubble>8:00 PM, 4 guests</Bubble>
          <Bubble from="bot">Thanks! We will confirm your table for 4 guests tomorrow at 8:00 PM.</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={CalendarCheck}>Booking request sent</FloatingTag>
    </VisualStage>
  );
}

const KITCHEN_ORDERS = [
  { id: "#1042", name: "Aarav", type: "Delivery", status: "New", next: "Accept" },
  { id: "#1041", name: "Meera", type: "Takeaway", status: "Accepted", next: "Preparing" },
  { id: "#1040", name: "Kabir", type: "Delivery", status: "Preparing", next: "Out for delivery" },
  { id: "#1039", name: "Anaya", type: "Dine-in", status: "Ready", next: "Complete" },
];

/** Kitchen dashboard: each status button messages the customer. */
export function RestaurantKitchenVisual() {
  return (
    <VisualStage>
      <AppWindow title="Kitchen dashboard">
        <StatTiles
          items={[
            { label: "Orders today", value: "18" },
            { label: "Sales today", value: "₹14,320" },
            { label: "Unpaid", value: "2" },
            { label: "Table requests", value: "3" },
          ]}
        />
        <ul className="space-y-1.5 px-4 pb-4">
          {KITCHEN_ORDERS.map((o) => (
            <li key={o.id} className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3 py-2 text-xs">
              <span className="w-10 shrink-0 font-semibold text-ink">{o.id}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium text-ink">{o.name}</span>
                <span className="block truncate text-[10px] text-slate-500">
                  {o.type} · {o.status}
                </span>
              </span>
              <span className="shrink-0 rounded-lg bg-brand px-2 py-1 text-[10px] font-semibold text-white">{o.next}</span>
            </li>
          ))}
        </ul>
      </AppWindow>
      <FloatingTag icon={MessageCircle}>Customer updated on every step</FloatingTag>
    </VisualStage>
  );
}

/** Sales report with CSV export and ratings. */
export function RestaurantReportsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Sales report · This week">
        <div className="flex items-center justify-between px-4 pt-4 text-xs">
          <span className="font-semibold text-ink">Revenue by day</span>
          <span className="flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-[10px] font-semibold text-brand">
            <Download className="h-3 w-3" /> Download CSV
          </span>
        </div>
        <StatTiles
          items={[
            { label: "Revenue", value: "₹86,400" },
            { label: "Avg order", value: "₹720" },
            { label: "GST", value: "₹4,114" },
            { label: "Bookings", value: "21" },
          ]}
        />
        <BarChart values={[40, 55, 48, 62, 70, 95, 88]} labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} highlight={5} />
      </AppWindow>
      <FloatingTag icon={Star}>Rating after staff chats</FloatingTag>
    </VisualStage>
  );
}

/** E-commerce: a delivery question with the customer's store orders beside the chat. */
export function EcommerceInboxVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversation">
        <div className="grid grid-cols-[1fr_9.5rem] sm:grid-cols-[1fr_11rem]">
          <ChatThread>
            <Bubble>Hi, where is my order? It was due yesterday.</Bubble>
            <Bubble from="agent">Sorry for the wait. It left our warehouse this morning and should reach you today.</Bubble>
            <Bubble>Great, thank you!</Bubble>
          </ChatThread>
          <div className="border-l border-slate-100 bg-surface p-3">
            <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
              <ShoppingBag className="h-3.5 w-3.5" /> Store orders
            </div>
            <ul className="space-y-1.5 text-[11px]">
              {[
                { id: "#5521", status: "Shipped", total: "₹2,499" },
                { id: "#5378", status: "Delivered", total: "₹899" },
              ].map((o) => (
                <li key={o.id} className="rounded-lg border border-slate-100 bg-white px-2 py-1.5">
                  <div className="flex justify-between font-semibold text-ink">
                    <span>{o.id}</span>
                    <span>{o.total}</span>
                  </div>
                  <div className="text-[10px] text-slate-500">{o.status}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Composer />
      </AppWindow>
      <FloatingTag icon={Package}>Orders shown beside the chat</FloatingTag>
    </VisualStage>
  );
}

/** E-commerce: WhatsApp template campaign for an offer. */
export function EcommerceCampaignVisual() {
  return (
    <VisualStage>
      <AppWindow title="Campaigns · WhatsApp">
        <ListRows
          rows={[
            { title: "Festive sale offer", meta: "Template · Segment: repeat buyers", badge: "Scheduled", icon: Megaphone, active: true },
            { title: "Back in stock", meta: "Template · Segment: waitlist", badge: "Sent", icon: Megaphone },
            { title: "Order shipped", meta: "Template · Order updates", badge: "Active", icon: Truck },
          ]}
        />
        <ChatThread className="pt-0">
          <Bubble from="agent">Hi there! Our festive sale starts tomorrow. Reply to this message to ask us anything.</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Megaphone}>Approved WhatsApp templates</FloatingTag>
    </VisualStage>
  );
}

/** E-commerce: AI Assistant answers a returns question from the help center. */
export function EcommerceAssistantVisual() {
  return (
    <VisualStage>
      <AppWindow title="Website chat · AI Assistant">
        <ChatThread>
          <Bubble>Can I return shoes if they don&apos;t fit?</Bubble>
          <Bubble from="bot">
            Yes. You can return unused items within the return window shown in our returns policy. Would you like the steps?
          </Bubble>
          <Bubble from="system">Answer based on help center: Returns and refunds</Bubble>
          <OptionChips options={["Show return steps", "Talk to a person"]} />
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Bot}>EngageOne AI Assistant</FloatingTag>
    </VisualStage>
  );
}

/** Contact center: queues across channels with SLA timers. */
export function ContactCenterQueueVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Queues">
        <ListRows
          rows={[
            { title: "Billing question", meta: "WhatsApp · Billing team", badge: "FRT 4m left", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600", active: true },
            { title: "Password reset", meta: "Email · Support team", badge: "Due in 1h", icon: Mail, tint: "bg-sky-100 text-sky-600" },
            { title: "Delivery issue", meta: "Website chat · Support team", badge: "Assigned", icon: MessageCircle },
            { title: "Missed call", meta: "Phone · Sales team", badge: "Callback", icon: Phone, tint: "bg-violet-100 text-violet-600" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Timer}>SLA timers on every conversation</FloatingTag>
    </VisualStage>
  );
}

/** Contact center: routing with teams, capacity and business hours. */
export function ContactCenterRoutingVisual() {
  return (
    <VisualStage>
      <AppWindow title="Assignment · Support team">
        <FlowSteps
          steps={[
            { label: "New", detail: "Chat arrives on WhatsApp", icon: MessageCircle },
            { label: "Team", detail: "Routed to Support", icon: Users2 },
            { label: "Assign", detail: "Agent with free capacity", icon: UserCheck },
          ]}
        />
        <ListRows
          className="pt-0"
          rows={[
            { title: "Agent A", meta: "4 of 6 chats", badge: "Online", icon: Headphones },
            { title: "Agent B", meta: "6 of 6 chats", badge: "Full", icon: Headphones },
            { title: "Business hours", meta: "Mon to Sat, 9:00 AM to 7:00 PM", icon: Clock3 },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={UserCheck}>Auto-assigned</FloatingTag>
    </VisualStage>
  );
}

/** Contact center: a WhatsApp or phone call inside the conversation. */
export function ContactCenterCallVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Incoming call">
        <div className="flex flex-col items-center gap-3 p-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Phone className="h-6 w-6" />
          </span>
          <div>
            <div className="text-sm font-semibold text-ink">Customer calling</div>
            <div className="text-[11px] text-slate-500">WhatsApp call · Support inbox</div>
          </div>
          <div className="flex gap-2">
            <span className="rounded-lg bg-emerald-500 px-3 py-1.5 text-[11px] font-semibold text-white">Accept</span>
            <span className="rounded-lg bg-rose-500 px-3 py-1.5 text-[11px] font-semibold text-white">Decline</span>
          </div>
        </div>
        <ChatThread className="border-t border-slate-100">
          <Bubble from="system">Call history is saved in the conversation</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Phone}>Calls and chats in one place</FloatingTag>
    </VisualStage>
  );
}

/** Contact center: reports and CSAT. */
export function ContactCenterReportsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Reports · Overview">
        <StatTiles
          items={[
            { label: "Conversations", value: "1,248" },
            { label: "First response", value: "3m" },
            { label: "Resolution", value: "42m" },
            { label: "CSAT", value: "4.6 / 5" },
          ]}
        />
        <BarChart values={[50, 64, 58, 72, 80, 46, 30]} labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} highlight={4} />
      </AppWindow>
      <FloatingTag icon={BarChart3}>By agent, team, inbox and label</FloatingTag>
    </VisualStage>
  );
}
