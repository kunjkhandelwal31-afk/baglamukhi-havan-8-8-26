import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import StickyTopBar from "@/components/StickyTopBar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";

const Index = lazy(() => import("./pages/Index"));
const HavanTypes = lazy(() => import("./pages/HavanTypes"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LiveDarshanPage = lazy(() => import("./pages/LiveDarshanPage"));
const HavanDetailPage = lazy(() => import("./pages/HavanDetailPage"));
const AnushthanPage = lazy(() => import("./pages/AnushthanPage"));
const AnushthanDetailPage = lazy(() => import("./pages/AnushthanDetailPage"));
const BaglamukhiHavanPage = lazy(() => import("./pages/BaglamukhiHavanPage"));
const LalMirchHavanPage = lazy(() => import("./pages/LalMirchHavanPage"));
const BaglamukhiAnushthanPage = lazy(() => import("./pages/BaglamukhiAnushthanPage"));
const HavanBookingPage = lazy(() => import("./pages/HavanBookingPage"));
const BlogIndexPage = lazy(() => import("./pages/BlogIndexPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <StickyTopBar />
        <Navbar />
        <Suspense fallback={<main className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/havan" element={<HavanTypes />} />
            <Route path="/havan-types" element={<HavanTypes />} />
            <Route path="/live-darshan" element={<LiveDarshanPage />} />
            <Route path="/havan/:id" element={<HavanDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/anushthan" element={<AnushthanPage />} />
            <Route path="/anushthan/:id" element={<AnushthanDetailPage />} />
            {/* SEO landing pages */}
            <Route path="/baglamukhi-havan" element={<BaglamukhiHavanPage />} />
            <Route path="/lal-mirch-havan" element={<LalMirchHavanPage />} />
            <Route path="/baglamukhi-anushthan" element={<BaglamukhiAnushthanPage />} />
            <Route path="/havan-booking" element={<HavanBookingPage />} />
            {/* Blog */}
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppButton />
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
