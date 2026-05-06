// Google Analytics 4 + Lovable Cloud tracking
import { supabase } from "@/integrations/supabase/client";

export const GA_MEASUREMENT_ID = "G-KWFEQ20SER";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  if (typeof window === "undefined") return "desktop";
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
};

const getSessionId = (): string => {
  if (typeof window === "undefined") return "ssr";
  try {
    let sid = sessionStorage.getItem("mb_sid");
    if (!sid) {
      sid = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem("mb_sid", sid);
    }
    return sid;
  } catch {
    return "anon";
  }
};

const safeInsert = (table: "page_views" | "interaction_events", row: Record<string, any>) => {
  // IMPORTANT: supabase builders are lazy thenables — we MUST call .then()
  // for the request to actually fire. `void supabase.from().insert()` does nothing.
  try {
    supabase
      .from(table)
      .insert(row)
      .then(({ error }) => {
        if (error) console.warn(`[analytics] ${table} insert failed`, error.message);
      });
  } catch (err) {
    console.warn(`[analytics] ${table} insert threw`, err);
  }
};

export const trackPageView = (path: string, title?: string) => {
  if (typeof window === "undefined") return;
  const device_type = getDeviceType();
  const session_id = getSessionId();
  const page_title = title || document.title;

  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title,
      device_type,
    });
  }

  safeInsert("page_views", {
    path,
    page_title,
    device_type,
    referrer: document.referrer || null,
    session_id,
    user_agent: navigator.userAgent.slice(0, 500),
  });
};

export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  const device_type = getDeviceType();
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, { device_type, ...params });
  }
  safeInsert("interaction_events", {
    event_type: eventName,
    source: params.source ?? null,
    page_path:
      params.page_path ?? (typeof window !== "undefined" ? window.location.pathname : null),
    device_type,
    session_id: getSessionId(),
    metadata: params,
  });
};
