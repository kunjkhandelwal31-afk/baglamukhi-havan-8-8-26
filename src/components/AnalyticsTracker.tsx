import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackEvent } from "@/lib/analytics";

const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();

  // Track route changes
  useEffect(() => {
    const fullPath = pathname + search;
    trackPageView(fullPath);

    if (pathname.includes("booking") || pathname === "/havan-booking") {
      trackEvent("booking_page_view", { page_path: fullPath });
    }
  }, [pathname, search]);

  // Global click delegation: track all call (tel:) and WhatsApp links
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const label = (anchor.getAttribute("aria-label") || anchor.innerText || "").trim().slice(0, 80);

      if (href.startsWith("tel:")) {
        trackEvent("call_click", { link_url: href, link_text: label, page_path: pathname });
      } else if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp://")
      ) {
        trackEvent("whatsapp_click", { link_url: href, link_text: label, page_path: pathname });
      }
    };
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true } as any);
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
