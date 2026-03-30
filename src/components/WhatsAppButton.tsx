import { MessageCircle, Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+918103960297"
        className="bg-accent hover:bg-accent/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="पंडित जी को कॉल करें"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-[#fff] p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="WhatsApp पर संपर्क करें"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
