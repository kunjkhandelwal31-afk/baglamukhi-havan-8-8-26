import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const StickyTopBar = () => {
  return (
    <div className="sticky top-0 z-[60] py-1.5 border-b border-yellow-900/30"
         style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm">
        <a
          href="tel:+918103960297"
          className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:opacity-80"
          style={{ color: '#FFD700' }}
        >
          <Phone className="h-3.5 w-3.5" />
          +91 81039 60297
        </a>
        <span style={{ color: 'rgba(255,215,0,0.3)' }}>|</span>
        <a
          href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:opacity-80"
          style={{ color: '#FFD700' }}
        >
          <WhatsAppIcon className="h-6 w-6" />
          WhatsApp करें
        </a>
      </div>
    </div>
  );
};

export default StickyTopBar;
