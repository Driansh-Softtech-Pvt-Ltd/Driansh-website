import { saveLead } from "@/lib/leads";
import { safeEqual } from "@/lib/security";

type ChatwootContact = {
  id?: number | string;
  name?: string;
  email?: string | null;
  phone_number?: string | null;
};

type ChatwootPayload = ChatwootContact & {
  event?: string;
  meta?: { sender?: ChatwootContact };
  additional_attributes?: { referer?: string };
};

function pathOf(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url).pathname.slice(0, 300);
  } catch {
    return undefined;
  }
}

/**
 * Chatwoot (OmniConnect) webhook → lead.
 * Configure in Chatwoot: Settings → Integrations → Webhooks with URL
 *   https://<site>/api/webhooks/chatwoot?token=<CHATWOOT_WEBHOOK_TOKEN>
 * and enable "Conversation created" + "Contact created/updated".
 */
export async function POST(request: Request) {
  const expected = process.env.CHATWOOT_WEBHOOK_TOKEN;
  const token = new URL(request.url).searchParams.get("token") || "";
  if (!expected || !safeEqual(token, expected)) {
    return new Response("Unauthorized", { status: 401 });
  }

  let payload: ChatwootPayload;
  try {
    payload = JSON.parse((await request.text()).slice(0, 100_000));
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const contact: ChatwootContact | undefined = payload.event?.startsWith("contact_")
    ? payload
    : payload.meta?.sender;

  // Anonymous chats aren't useful leads until the visitor shares an email or phone.
  if (!contact?.id || (!contact.email && !contact.phone_number)) {
    return Response.json({ ok: true, skipped: true });
  }

  try {
    await saveLead({
      type: "chat",
      externalId: `chatwoot:${contact.id}`,
      name: contact.name?.slice(0, 100) || undefined,
      email: contact.email?.slice(0, 254) || undefined,
      phone: contact.phone_number?.slice(0, 30) || undefined,
      source: { page: pathOf(payload.additional_attributes?.referer) },
    });
  } catch (error) {
    console.error("Chatwoot webhook save failed:", error);
    return new Response("Error", { status: 500 });
  }

  return Response.json({ ok: true });
}
