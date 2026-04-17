import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const StickyTopBar = () => {
  return (
    <div className="sticky top-0 z-[60] py-1.5 border-b border-yellow-900/30"
         style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm">
        <a
          href={PHONE_TEL_HREF}
          className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:opacity-80"
          style={{ color: '#FFD700' }}
        >
          <Phone className="h-3.5 w-3.5" />
          {PHONE_NUMBER_DISPLAY}
        </a>
        <span style={{ color: 'rgba(255,215,0,0.3)' }}>|</span>
        <a
          href={WHATSAPP_URL}
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
