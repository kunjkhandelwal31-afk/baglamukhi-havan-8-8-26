import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-center gap-3">
      <a
        href="tel:+918103960297"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        aria-label="पंडित जी को कॉल करें"
        style={{ background: '#FFD700', color: '#1a1a1a' }}
      >
        <Phone className="h-7 w-7" />
      </a>
      <a
        href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all overflow-hidden"
        aria-label="WhatsApp पर संपर्क करें"
      >
        <WhatsAppIcon className="h-14 w-14" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
