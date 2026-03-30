import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface ContactStripProps {
  className?: string;
  compact?: boolean;
}

const ContactStrip = ({ className = "", compact = false }: ContactStripProps) => {
  if (compact) {
    return (
      <div className={`flex items-center justify-center gap-4 flex-wrap ${className}`}>
        <a
          href="tel:+918103960297"
          className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline text-sm"
        >
          <Phone className="h-4 w-4" />
          +91 81039 60297
        </a>
        <a
          href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline text-sm"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp करें
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${className}`}>
      <a
        href="tel:+918103960297"
        className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent/20 transition-colors"
      >
        <Phone className="h-4 w-4 text-accent" />
        📞 +91 81039 60297
      </a>
      <a
        href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent/20 transition-colors"
      >
        <WhatsAppIcon className="h-4 w-4 text-accent" />
        WhatsApp करें
      </a>
    </div>
  );
};

export default ContactStrip;
