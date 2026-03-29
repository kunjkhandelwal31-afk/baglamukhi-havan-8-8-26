import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=नमस्कार%2C%20मुझे%20हवन%20बुक%20करना%20है"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-[#fff] p-4 rounded-full shadow-lg hover:shadow-xl transition-all animate-bounce"
      aria-label="WhatsApp पर संपर्क करें"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
