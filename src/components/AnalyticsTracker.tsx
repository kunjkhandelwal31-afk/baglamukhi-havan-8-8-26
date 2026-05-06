import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackEvent } from "@/lib/analytics";

const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const fullPath = pathname + search;
    trackPageView(fullPath);

    if (pathname.includes("booking") || pathname === "/havan-booking") {
      trackEvent("booking_page_view", { page_path: fullPath });
    }
  }, [pathname, search]);

  return null;
};

export default AnalyticsTracker;
