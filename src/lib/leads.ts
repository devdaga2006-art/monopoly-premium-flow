import { supabase } from "@/integrations/supabase/client";

export type LeadSource = "contact_form" | "whatsapp_fab";

export type LeadInput = {
  name: string;
  phone: string;
  company?: string;
  email?: string;
  message?: string;
  source: LeadSource;
};

/**
 * Persists an enquiry so it is never lost, even if the visitor
 * never actually sends the WhatsApp message.
 */
export async function saveLead(input: LeadInput) {
  const clean = (v?: string) => {
    const t = (v ?? "").trim();
    return t.length ? t : null;
  };

  const payload = {
    name: input.name.trim().slice(0, 120),
    phone: input.phone.trim().slice(0, 30),
    company: clean(input.company)?.slice(0, 160) ?? null,
    email: clean(input.email)?.slice(0, 255) ?? null,
    message: clean(input.message)?.slice(0, 4000) ?? null,
    source: input.source,
    page_url: typeof window !== "undefined" ? window.location.href.slice(0, 500) : null,
  };

  const { error } = await supabase.from("leads").insert(payload);
  if (error) {
    console.error("saveLead failed", error);
    return { ok: false as const, error };
  }
  return { ok: true as const };
}
