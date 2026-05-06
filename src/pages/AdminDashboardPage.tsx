import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import {
  LogOut,
  Users,
  Eye,
  MousePointerClick,
  Phone,
  MessageCircle,
  Instagram,
  Calendar,
  Smartphone,
  Monitor,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PageView {
  id: string;
  path: string;
  device_type: string | null;
  referrer: string | null;
  session_id: string | null;
  created_at: string;
}
interface Interaction {
  id: string;
  event_type: string;
  source: string | null;
  page_path: string | null;
  device_type: string | null;
  created_at: string;
}
interface Booking {
  id: string;
  name: string;
  phone: string;
  havan_type: string | null;
  preferred_date: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  accent = "text-primary",
}: {
  icon: any;
  label: string;
  value: string | number;
  accent?: string;
}) => (
  <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
      <Icon className={`h-4 w-4 ${accent}`} />
    </div>
    <div className="text-2xl font-bold text-foreground">{value}</div>
  </div>
);

const PAGE_LABELS: Record<string, string> = {
  "/": "Homepage",
  "/havan": "Havan",
  "/havan-types": "Havan",
  "/anushthan": "Anushthan",
  "/booking": "Booking",
  "/havan-booking": "Booking",
  "/blog": "Blog",
  "/contact": "Contact",
};

const matchPageGroup = (path: string): string | null => {
  if (path === "/") return "Homepage";
  if (path.startsWith("/havan")) return "Havan";
  if (path.startsWith("/anushthan")) return "Anushthan";
  if (path.startsWith("/booking") || path.startsWith("/havan-booking")) return "Booking";
  if (path.startsWith("/blog")) return "Blog";
  if (path.startsWith("/contact")) return "Contact";
  return null;
};

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading, signOut } = useAdminAuth();
  const [loading, setLoading] = useState(true);
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [events, setEvents] = useState<Interaction[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [livePresent, setLivePresent] = useState(0);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin-login", { replace: true });
    }
  }, [authLoading, user, isAdmin, navigate]);

  useEffect(() => {
    document.title = "Admin Dashboard";
    let m = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!m) {
      m = document.createElement("meta");
      m.name = "robots";
      document.head.appendChild(m);
    }
    const prev = m.content;
    m.content = "noindex, nofollow";
    return () => { if (m) m.content = prev || "index, follow"; };
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    const [pv, ev, bk] = await Promise.all([
      supabase.from("page_views").select("*").order("created_at", { ascending: false }).limit(1000),
      supabase.from("interaction_events").select("*").order("created_at", { ascending: false }).limit(1000),
      supabase.from("bookings").select("*").order("created_at", { ascending: false }).limit(500),
    ]);
    if (pv.data) setPageViews(pv.data as PageView[]);
    if (ev.data) setEvents(ev.data as Interaction[]);
    if (bk.data) setBookings(bk.data as Booking[]);

    // Live = unique sessions in last 5 minutes
    const fiveAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { data: live } = await supabase
      .from("page_views")
      .select("session_id")
      .gte("created_at", fiveAgo);
    setLivePresent(new Set((live || []).map((r: any) => r.session_id).filter(Boolean)).size);
    setLoading(false);
  };

  useEffect(() => {
    if (user && isAdmin) {
      fetchAll();
      const t = setInterval(fetchAll, 30000);
      return () => clearInterval(t);
    }
  }, [user, isAdmin]);

  const stats = useMemo(() => {
    const now = Date.now();
    const day = 86400000;
    const totalVisitors = new Set(pageViews.map((p) => p.session_id).filter(Boolean)).size;
    const dailyVisitors = new Set(
      pageViews.filter((p) => now - new Date(p.created_at).getTime() < day).map((p) => p.session_id)
    ).size;
    const weeklyVisitors = new Set(
      pageViews.filter((p) => now - new Date(p.created_at).getTime() < 7 * day).map((p) => p.session_id)
    ).size;
    return {
      totalViews: pageViews.length,
      totalVisitors,
      dailyVisitors,
      weeklyVisitors,
    };
  }, [pageViews]);

  const pageBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of pageViews) {
      const key = matchPageGroup(pv.path) || "Other";
      map[key] = (map[key] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [pageViews]);

  const deviceBreakdown = useMemo(() => {
    const map: Record<string, number> = { mobile: 0, desktop: 0, tablet: 0 };
    for (const pv of pageViews) {
      const d = pv.device_type || "desktop";
      map[d] = (map[d] || 0) + 1;
    }
    return map;
  }, [pageViews]);

  const referrerBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of pageViews) {
      let src = "Direct";
      if (pv.referrer) {
        try {
          const h = new URL(pv.referrer).hostname.replace("www.", "");
          src = h || "Direct";
        } catch {
          src = "Direct";
        }
      }
      map[src] = (map[src] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [pageViews]);

  const eventCounts = useMemo(() => {
    const c = { whatsapp_click: 0, call_click: 0, booking_submitted: 0, instagram_click: 0 };
    for (const e of events) if (e.event_type in c) (c as any)[e.event_type]++;
    return c;
  }, [events]);

  const updateBooking = async (id: string, status: "accepted" | "rejected") => {
    const { error } = await supabase.from("bookings").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Failed", description: error.message, variant: "destructive" });
      return;
    }
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    toast({ title: `Booking ${status}` });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin-login", { replace: true });
  };

  if (authLoading || (loading && pageViews.length === 0)) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </main>
    );
  }

  const maxPageCount = Math.max(1, ...pageBreakdown.map(([, n]) => n));

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Admin Analytics</h1>
            <p className="text-sm text-muted-foreground">Live data from Lovable Cloud</p>
          </div>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 text-sm font-medium"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>

        {/* Visitor stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
          <StatCard icon={Eye} label="Total Views" value={stats.totalViews} />
          <StatCard icon={Users} label="Unique Visitors" value={stats.totalVisitors} />
          <StatCard icon={Users} label="Daily" value={stats.dailyVisitors} />
          <StatCard icon={Users} label="Weekly" value={stats.weeklyVisitors} />
          <StatCard icon={Eye} label="Live (5m)" value={livePresent} accent="text-green-500" />
        </section>

        {/* Page breakdown */}
        <section className="grid lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="font-semibold text-foreground mb-4">Page Visits</h2>
            <div className="space-y-3">
              {pageBreakdown.map(([page, count]) => (
                <div key={page}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-foreground">{page}</span>
                    <span className="text-muted-foreground">{count}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(count / maxPageCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              {pageBreakdown.length === 0 && (
                <p className="text-sm text-muted-foreground">No data yet.</p>
              )}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h2 className="font-semibold text-foreground mb-4">Device & Traffic</h2>
            <div className="grid grid-cols-3 gap-3 mb-5">
              <StatCard icon={Smartphone} label="Mobile" value={deviceBreakdown.mobile || 0} />
              <StatCard icon={Monitor} label="Desktop" value={deviceBreakdown.desktop || 0} />
              <StatCard icon={Smartphone} label="Tablet" value={deviceBreakdown.tablet || 0} />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-2">Top traffic sources</h3>
            <ul className="space-y-1.5 text-sm">
              {referrerBreakdown.map(([src, n]) => (
                <li key={src} className="flex justify-between">
                  <span className="text-foreground">{src}</span>
                  <span className="text-muted-foreground">{n}</span>
                </li>
              ))}
              {referrerBreakdown.length === 0 && (
                <li className="text-muted-foreground">No data yet.</li>
              )}
            </ul>
          </div>
        </section>

        {/* Interactions */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <StatCard icon={MessageCircle} label="WhatsApp Clicks" value={eventCounts.whatsapp_click} accent="text-green-500" />
          <StatCard icon={Phone} label="Call Clicks" value={eventCounts.call_click} accent="text-blue-500" />
          <StatCard icon={MousePointerClick} label="Booking Clicks" value={eventCounts.booking_submitted} accent="text-orange-500" />
          <StatCard icon={Instagram} label="Instagram Clicks" value={eventCounts.instagram_click} accent="text-pink-500" />
        </section>

        {/* Bookings */}
        <section className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Bookings ({bookings.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground border-b border-border">
                  <th className="py-2 pr-3">Date</th>
                  <th className="py-2 pr-3">Name</th>
                  <th className="py-2 pr-3">Phone</th>
                  <th className="py-2 pr-3">Havan</th>
                  <th className="py-2 pr-3">Preferred</th>
                  <th className="py-2 pr-3">Status</th>
                  <th className="py-2 pr-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-border/60">
                    <td className="py-2 pr-3 whitespace-nowrap text-muted-foreground">
                      {new Date(b.created_at).toLocaleString()}
                    </td>
                    <td className="py-2 pr-3 text-foreground font-medium">{b.name}</td>
                    <td className="py-2 pr-3">
                      <a href={`tel:${b.phone}`} className="text-primary hover:underline">
                        {b.phone}
                      </a>
                    </td>
                    <td className="py-2 pr-3 text-foreground">{b.havan_type || "-"}</td>
                    <td className="py-2 pr-3 text-muted-foreground">{b.preferred_date || "-"}</td>
                    <td className="py-2 pr-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          b.status === "accepted"
                            ? "bg-green-500/15 text-green-600"
                            : b.status === "rejected"
                            ? "bg-red-500/15 text-red-600"
                            : "bg-yellow-500/15 text-yellow-600"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="py-2 pr-3">
                      {b.status === "pending" ? (
                        <div className="flex gap-1">
                          <button
                            onClick={() => updateBooking(b.id, "accepted")}
                            className="p-1.5 rounded bg-green-500/15 text-green-600 hover:bg-green-500/25"
                            aria-label="Accept"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => updateBooking(b.id, "rejected")}
                            className="p-1.5 rounded bg-red-500/15 text-red-600 hover:bg-red-500/25"
                            aria-label="Reject"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
                {bookings.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-6 text-center text-muted-foreground">
                      No bookings yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminDashboardPage;
