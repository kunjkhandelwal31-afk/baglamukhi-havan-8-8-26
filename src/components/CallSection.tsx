import { Phone, MessageCircle } from "lucide-react";

const CallSection = () => {
  return (
    <section className="py-16 gradient-golden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
          पंडित जी से सीधे बात करें
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          हवन बुकिंग, पूजा विधि या किसी भी प्रश्न के लिए अभी कॉल करें
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="tel:+918103960297"
            className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            <Phone className="h-6 w-6" />
            📞 +91 81039 60297
          </a>
          <a
            href="https://wa.me/918103960297?text=मुझे हवन बुक करना है"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-6 w-6" />
            WhatsApp करें
          </a>
        </div>

        <p className="text-primary-foreground/70 text-sm">
          ⏰ सुबह 7:00 बजे से रात 9:00 बजे तक उपलब्ध
        </p>
      </div>
    </section>
  );
};

export default CallSection;
