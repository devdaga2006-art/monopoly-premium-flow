import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";

/** Boots GA4 once and sends a page_view on every client-side route change. */
export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    // let the route's <Helmet> title land before reporting
    const id = window.setTimeout(() => {
      trackPageView(location.pathname + location.search);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);
}
