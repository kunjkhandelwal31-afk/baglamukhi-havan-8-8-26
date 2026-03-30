import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import HavanTypes from "./pages/HavanTypes";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import LiveDarshanPage from "./pages/LiveDarshanPage";
import VipDarshanPage from "./pages/VipDarshanPage";
import HavanDetailPage from "./pages/HavanDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/havan-types" element={<HavanTypes />} />
          <Route path="/live-darshan" element={<LiveDarshanPage />} />
          <Route path="/vip-darshan" element={<VipDarshanPage />} />
          <Route path="/havan/:id" element={<HavanDetailPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
