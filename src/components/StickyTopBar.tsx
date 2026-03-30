import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const StickyTopBar = () => {
  return (
    <div className="sticky top-0 z-[60] bg-foreground text-background py-1.5">
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm">
        <a
          href="tel:+918103960297"
          className="inline-flex items-center gap-1.5 font-semibold hover:text-primary transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          +91 81039 60297
        </a>
        <span className="text-background/30">|</span>
        <a
          href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold hover:text-primary transition-colors"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          WhatsApp करें
        </a>
      </div>
    </div>
  );
};

export default StickyTopBar;
