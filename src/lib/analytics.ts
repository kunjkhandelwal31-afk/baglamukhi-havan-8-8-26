// Google Analytics 4 helper
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

export const trackPageView = (path: string, title?: string) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: title || document.title,
    device_type: getDeviceType(),
  });
};

export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, {
    device_type: getDeviceType(),
    ...params,
  });
};
