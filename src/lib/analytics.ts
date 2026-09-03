const MEASUREMENT_ID = import.meta.env
  .VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

let initialized = false;

export function initAnalytics() {
  if (initialized || !MEASUREMENT_ID || typeof document === "undefined") return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path: string, title?: string) {
  if (!MEASUREMENT_ID) return;
  gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: title ?? document.title,
  });
}

/** Conversion / intent events (quote requests, calls, WhatsApp, enquiry submits). */
export function trackConversion(
  name: "generate_lead" | "contact_whatsapp" | "contact_call" | "quote_request",
  params: Record<string, unknown> = {},
) {
  if (!MEASUREMENT_ID) return;
  gtag("event", name, params);
}
