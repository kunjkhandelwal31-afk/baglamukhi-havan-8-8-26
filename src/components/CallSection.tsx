import { Phone, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CallSection = () => {
  return (
    <section className="py-16" style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
          पंडित जी से सीधे बात करें
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-white/80">
          हवन बुकिंग, पूजा विधि या किसी भी प्रश्न के लिए अभी कॉल करें
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="tel:+918103960297"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            style={{ background: '#FF8C00', color: '#FFD700' }}
          >
            <Phone className="h-6 w-6" />
            +91 81039 60297
          </a>
          <a
            href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            <WhatsAppIcon className="h-6 w-6" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform text-white"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            <Instagram className="h-6 w-6" />
            Instagram
          </a>
        </div>

        <p className="text-white/60 text-sm">
          ⏰ सुबह 7:00 बजे से रात 9:00 बजे तक उपलब्ध
        </p>
      </div>
    </section>
  );
};

export default CallSection;
